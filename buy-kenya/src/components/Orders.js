import React, { useState, useEffect } from 'react'
import Header from './Header'
import '../css/Orders'
import { db } from './Firebase'
import { useStateValue } from '../StateProvider'

function Orders() {
    const [{user}] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
        //deprecated
        db.collections('users').doc(user?.uid).collections('orders').orderBy('created', 'desc').onSnapshot(snapshot =>{
            setOrders(snapshot.docs.map(doc =>{
                id: doc.id;
                data: doc.data()
            }))
        })

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
                {orders?.map(order =>{
                    <Order order={order} />
                })}
            </div>
        </div>
        </>
    )
}

export default Orders
