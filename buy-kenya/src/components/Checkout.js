import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../css/Checkout.css'
import { useStateValue } from "../StateProvider"
import { Link, useNavigate } from "react-router-dom"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from '../reducer'
import CurrencyFormat from 'react-currency-format'
import axios from '../axios'
import { db } from './Firebase'
import {doc, setDoc} from 'firebase/firestore'


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] =useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('The secret is', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,  {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
        .then(({ paymentIntent }) => {

            const ref = doc(db, 'users', user?.uid, 'orders', paymentIntent.id)
            setDoc(ref, {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
            })


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', { replace: true })
        })
    }
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <>
        <Header />

        <div className="checkout">
        <div className="checkout__row">

          <div className="col-75">
            <div className="checkout__container">

              <form onSubmit={handleSubmit}>
                <div className="checkout__row">
                  <div className="col-50">
                    <h2>Billing Address</h2>
                    <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                    <input className="checkout__input" type="text" id="fname" name="firstname" placeholder="John M. Doe" required/>
                    <label for="email"><i className="fa fa-envelope"></i> Email</label>
                    <input className="checkout__input" type="text" id="email" name="email" placeholder="john@example.com" required/>
                    <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                    <input className="checkout__input" type="text" id="adr" name="address" placeholder="542 W. 15th Street" required/>
                    <label for="city"><i className="fa fa-institution"></i> City</label>
                    <input className="checkout__input" type="text" id="city" name="city" placeholder="New York" required/>

                    <div className="checkout__row">
                      <div className="col-50">
                        <label for="state">State</label>
                        <input className="checkout__input" type="text" id="state" name="state" placeholder="NY" required/>
                      </div>
                      <div className="col-50">
                        <label for="zip">Zip</label>
                        <input className="checkout__input" type="text" id="zip" name="zip" placeholder="10001" required/>
                      </div>
                    </div>
                    <label>
                  <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                  </label>
                  <label>
                    <input type="checkbox" checked="checked" name="sameadr" /> 	Save this information for next time
                  </label>

                  </div>

                  <div className="col-50">
                  <div className="checkout__container">
                  <h2>Review items 
                    <span className="checkout__price" style={{"color":"black"}}><i className="fa fa-shopping-cart"></i> 
                    <b>{basket?.length}</b>
                    </span>
                  </h2>
                  <div className="no__items">
                            {basket?.length === 0 &&(
                                <>
                                <div><i className="fa fa-shopping-cart"></i></div>
                                <p style={{"fontSize":"25px"}}>No items to review!</p>
                                <p style={{"padding":"10px 0"}}><Link to="/">Start shopping</Link></p>
                                </>
                            )}
                    </div>
                  {basket?.length >=1 &&(
                    <>
                    <p style={{"padding":"10px"}}><Link to="/cart">Go back to cart</Link></p>
                      <div className="checkout__t" style={{"display":"flex","alignItems":"center","justifyContent":"space-between","padding":"10px"}}>
                        <h4>Product</h4>
                        <h4>Title</h4>
                        <h4>Price</h4>
                      </div>
                      <div>
                      {basket.map(item => (
                      // <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between"}}>
                      //     <img style={{"width":"150px","height":"150px"}} src={item.image1} alt="" />
                      //     <h3>${item.price}</h3>
                      // </div>           
                      <div className="item">
                        <div className="image">
                          <img src={item.image1} alt="" />
                        </div>
                    
                        <div className="description">
                          {item.title}
                        </div>
                    
                        {/* <div className="quantity">
                          <button className="plus-btn" type="button" name="button">
                          <i class="fas fa-plus"></i>
                          </button>
                          <input type="text" name="name" value="1" />
                          <button className="minus-btn" type="button" name="button">
                          <i class="fas fa-minus"></i>
                          </button>
                        </div> */}
                    
                        <div className="total-price">$ {item.price}</div>
                      </div>
                      ))}
                      </div>
                      </>
                  )}
                
                </div>
                  <h2>Payment</h2>
                    {/* <label for="fname">Accepted Cards</label>
                    <div className="checkout__iconContainer">
                      <i className="fa fa-cc-visa" style={{"color":"navy"}}></i>
                      <i className="fa fa-cc-amex" style={{"color":"blue"}}></i>
                      <i className="fa fa-cc-mastercard" style={{"color":"red"}}></i>
                      <i className="fa fa-cc-discover" style={{"color":"orange"}}></i>
                    </div>
                        <CardElement onChange={handleChange} />

                        <div className="payment__priceContainer">
                        <CurrencyFormat
                        renderText={(value) =>(
                            <div className="subtotal__total">
                                <p>Total</p>
                                <p><strong>{`${value}`}</strong></p>
                            </div>
                        ) }
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        />
                        <button style={{"backgroundColor":"#fd6506","padding":"10px","border":"none","color":"white","borderRadius":"5px"}} 
                        disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>

                        {error && <div>{error}</div>}
                        </div> */}
                        
                  </div>
                  
                </div>
              </form>


            </div>
          </div>

        </div>
        </div>



  <Footer />
  </>
  )
}

export default Checkout
