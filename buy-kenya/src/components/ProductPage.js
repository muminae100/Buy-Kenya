import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/ProductPage.css';
import Carousel from 'react-elastic-carousel';
import { useStateValue } from "../StateProvider";
import { useParams } from 'react-router-dom';
import Data from '../data.json';


function ProductPage() {
    const [{ basket, wishlistbasket }, dispatch] = useStateValue();
    const [isClicked, setIsClicked] = useState(false);
    const [addWish, setWishBtn] = useState(false);
    let {id} = useParams();

    
    var product = Data.filter(item =>{
        return item.id == id;
    });

    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: product[0].id,
                title: product[0].title,
                image1: product[0].image1,
                image2: product[0].image2,
                price: product[0].price,
                rating: product[0].rating,
            },
        });
        setIsClicked(true);
    };

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: product[0].id,
            },
        });
        setIsClicked(false) ;
    
    };

    const addToWishList = () =>{
        dispatch({
            type: 'ADD_TO_WISHLIST',
            item: {
                id: product[0].id,
                title: product[0].title,
                image1: product[0].image1,
                image2: product[0].image2,
                price: product[0].price,
                rating: product[0].rating,
            },
        });
        setWishBtn(!addWish);
    };
    const removeFromWishList = () =>{
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            item: {
                id: product[0].id,
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
                        <img src={product[0].image1} alt="" />
                    </div>
                    <div>
                        <img src={product[0].image2} alt="" />
                    </div>
                    <div>
                        <img src={product[0].image3} alt="" />
                    </div>
                    <div>
                        <img src={product[0].image4} alt="" />
                    </div>
                </Carousel>
            </div>
            <div className="pp__right">
                <div>
                    <h2>
                    {product[0].title}
                    </h2>
                </div>
                <div className="pp__rating">
                {/* {Array(rating).fill().map((_, i) =>(
                    <span><i style={{"color":"orange"}} className="fas fa-star"></i></span>
                )) } */}
                </div>
                <div>
                <p>
                    {product[0].description}
                </p>
                </div>
                <div className="pp__price">
                    <h3>$ {product[0].price}</h3>
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
                    <button style={{"border":"none","padding":"5px","backgroundColor":"white"}} onClick={removeFromWishList} >
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
