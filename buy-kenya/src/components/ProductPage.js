import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/ProductPage.css';
import Carousel from 'react-elastic-carousel';
import { useStateValue } from "../StateProvider";
import { useParams } from 'react-router-dom';


function ProductPage() {
    const [{ basket, wishlistbasket }, dispatch] = useStateValue();
    const [isClicked, setIsClicked] = useState(false);
    const [addWish, setWishBtn] = useState(false);
    let {id, title, image1,image2, price, colors, rating} = useParams();

    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image1: image1,
                image2: image2,
                price: price,
                rating: rating,
            },
        });
        setIsClicked(true);
    };

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
            },
        });
        setIsClicked(false) ;
    
    };

    const addToWishList = () =>{
        dispatch({
            type: 'ADD_TO_WISHLIST',
            item: {
                id: id,
                title: title,
                image1: image1,
                image2: image2,
                price: price,
                rating: rating,
            },
        });
        setWishBtn(!addWish);
    };
    const removeFromWishList = () =>{
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            item: {
                id: id,
            },
        });
        setWishBtn(!addWish);
    
    };
    return (
        <>
        <Header />
        <div className="pp">
        <div className="pp__upperContainer">
            <div className="pp__left">
                <Carousel itemToShow={1}>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                    <div>
                        <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/283205/1.jpg?6666" alt="" />
                    </div>
                </Carousel>
            </div>
            <div className="pp__right">
                <div>
                    <h2>
                        {title}
                    </h2>
                </div>
                <div className="pp__rating">
                {Array(rating).fill().map((_, i) =>(
                    <span><i style={{"color":"orange"}} className="fas fa-star"></i></span>
                )) }
                </div>
                <div>
                <p>
                    Hisense U40 Lite smartphone is great value for money and has all the basic features including an 5MP rear 
                    and 2MP selfie camera.  It has 1 GB of RAM, 8 GB of Internal memory and a 2000mAh battery. 
                    Order for this Hisense U40 Lite Smartphone online from Jumia Kenya and have it delivered to your doorstep.
                </p>
                </div>
                <div className="pp__price">
                    <h3>$ {price}</h3>
                </div>
                <div className="pp__btn">
                {isClicked?(
                <button onClick={removeFromBasket}>
                    Remove
                </button>)
                :(
                    <button onClick={addToBasket}>
                        Add to cart
                    </button>
                )}
                </div>
                <div>
                {addWish?(
                    <button style={{"border":"none","padding":"5px","backgroundColor":"white"}} onClick={removeFromWishList}>
                    <i style={{"fontSize":"24px","color":"red"}} className="fa fa-heart"></i>
                    </button>
                ): (
                    <button style={{"border":"none","padding":"5px","backgroundColor":"white"}} onClick={addToWishList}>
                        <i style={{"fontSize":"24px","color":"gray"}} className="far fa-heart"></i>
                    </button>
                )}
                <span style={{"padding":"5px"}}>
                    <i style={{"fontSize":"24px","color":"gray"}} className="fas fa-share-alt"></i>
                </span>
                </div>
            </div>
        </div>
       
        </div>

        <Footer />
        </>
    )
}

export default ProductPage
