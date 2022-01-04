import React from 'react'
import moment from "moment";
import Product from './Product';
import Header from './Header';
import Footer from './Footer';
import '../css/Order.css'
import CurrencyFormat from 'react-currency-format';

function Order({order}) {

    return (
        <>
        <Header />
        <div className="order">
            <h2>Order</h2>
            <p>{order.data.created}</p>
            <p>{Order?.id}</p>
            {order.data.basket?.map(item =>(
                <Product 
                id = {item.id}
                title={item.title}
                image1={item.image1}
                image2={item.image2}
                price={item.price}
                rating={item.rating}
                hideButton
                />
            ))}
                       <CurrencyFormat
                        renderText={(value) =>(
                            <div>
                                <h3>Order Total</h3>
                                <p><strong>{`${value}`}</strong></p>
                            </div>
                        ) }
                        decimalScale={2}
                        value={order.data.amount / 100}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        />        


        </div>
        <Footer />
        </>
    )
}

export default Order
