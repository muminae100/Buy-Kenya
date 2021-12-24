import React from 'react'
import moment from "moment";
import CartItem from './CartItem';
import '../css/Order.css'
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
    //run npm install moment

    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Dd YYYY, h:mma')}</p>
            <p>{Order?.id}</p>
            {order.data.basket?.map(item =>(
                <CartItem 
                id = {item.id}
                title={item.title}
                image={item.image}
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
    )
}

export default Order
