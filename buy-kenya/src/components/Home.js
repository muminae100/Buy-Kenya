import React from 'react'
import Product from './Product'
import '../css/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__section">

                <div className="collections__container">
                    <div className="collections__item">
                        <i className="fas fa-dumbbell"></i>
                        <span>Sports</span>
                    </div>
                    <div className="collections__item">
                        <i className="fas fa-dumbbell"></i>
                        <span>Sports</span>
                    </div>
                    <div className="collections__item">
                        <i className="fas fa-dumbbell"></i>
                        <span>Sports</span>
                    </div>
                    <div className="collections__item">
                        <i className="fas fa-dumbbell"></i>
                        <span>Sports</span>
                    </div>
                </div>

                <div className="carousel">
                   <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/s1_8b968f52-493e-4178-953b-dfb1597857fb.jpg?v=1638362212"
                    alt="" />
                </div>

                <div className="offers__container">
                    <div className="offer__item">
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b1.png?v=1620209222" alt="" />
                    </div>
                    <div className="offer__item">
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b2.png?v=1620209240" alt="" />
                    </div>
                    <div className="offer__item">
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b3.png?v=1620209254" alt="" />
                    </div>
                    <div className="offer__item">
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b4.png?v=1620209266" alt="" />
                    </div>
                </div>

                </div>

                <div className="home__sectionTwo">
                    <div className="home__sectionTwoTitle">
                        <h2>HOT DEALS</h2>
                    </div>

                    <div className="home__row">
                        <Product />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
