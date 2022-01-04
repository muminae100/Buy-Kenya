import React, { useState, useEffect } from 'react';
import Order from './Order';
import Header from './Header';
import '../css/Orders.css';
import { useStateValue } from '../StateProvider';
// import {query, collection, onSnapshot, orderBy} from 'firebase/firestore'

function Orders() {
    const [{user}] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){

            setOrders([])
        // const orderedOrders = query(ref, orderBy('created', 'desc'))
        // onSnapshot(orderedOrders, snapshot => {
        //     setOrders(snapshot.docs.map(doc => ({
        //     id: doc.id,
        //     data: doc.data()
        //     })))
        // })

        }else{
            setOrders([])
        }

       
    }, [user])

    return (
        <>
        <Header />
        <div className="orders">
            <h1>Your orders</h1>
            <div className="orders__order">
                {/* {orders?.map(order =>{
                    <Order order={order} />
                })} */}
            </div>
        </div>
        </>
    )
}

export default Orders
