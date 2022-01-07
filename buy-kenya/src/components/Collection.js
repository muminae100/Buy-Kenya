import React from 'react';
import '../css/Collection.css';
import Footer from './Footer';
import Header from './Header';
import Product from './Product';
import Data from '../data.json';
import { useParams } from 'react-router-dom';

function Collection() {
    let {name} = useParams();

    let collectionItems = Data.filter(item =>{
        return item.collection === name;
    });
    let categoryItems = Data.filter(item =>{
        return item.category === name;
    });
    let brandItems = Data.filter(item =>{
        return item.brand === name;
    });


    return (
        <>
        <Header />
        <div className="collection">
            <div className="collection__left">
                <div style={{"marginBottom":"10px","borderBottom":"1px solid lightgray","padding":"10px"}}>
                <h2 style={{"textTransform":"uppercase"}}>{name}</h2>
                </div>
                
            </div>
            <div style={{"padding":"25px"}}>
                <h4 style={{"width":"100%","padding":"10px"}}>All</h4>
            <div style={{"width":"100%","padding":"10px","borderBottom":"1px solid lightgray","borderTop":"1px solid lightgray"}}>
                <p>{collectionItems?.length || categoryItems?.length || brandItems?.length } product(s) found</p>
            </div>
            <div className="collection__right">
                        {collectionItems?.map((item, index) =>(
                            <Product 
                            id={item.id}
                            title={item.title}
                            price={item.price} 
                            image1={item.image1}
                            rating={item.rating} 
                            image2={item.image2}
                            />
                        ))}
                        {categoryItems?.map((item, index) =>(
                            <Product 
                            id={item.id}
                            title={item.title}
                            price={item.price} 
                            image1={item.image1}
                            rating={item.rating} 
                            image2={item.image2}
                            />
                        ))}
                        {brandItems?.map((item, index) =>(
                            <Product 
                            id={item.id}
                            title={item.title}
                            price={item.price} 
                            image1={item.image1}
                            rating={item.rating} 
                            image2={item.image2}
                            />
                        ))}
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Collection
