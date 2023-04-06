import React, { useEffect, useState } from 'react';
import fakeData from '../../Data/fakeData.json';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Body.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Body = () => {
    const [data, setData] = useState([]);
    const [time, setTime]= useState([]);
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        setData(fakeData);
    },[])
    
    const handelTimeClick=(addedTime)=>{
        let newTime= [...time, addedTime];
        setTime(newTime);
    }
    const handelTitleClick=(cartData)=>{
        console.log(cartData);
        console.log(cart);
        if(cart.some((element)=>element.id===cartData.id)){
            toast('This item alrady in cart');
            return;
        }
        
        let newCart= [...cart, cartData];
        setCart(newCart);
    }

    return (
        <div className='body-container'>
            <div className="blog-area">
            {
                data.map(data=><Card data={data} handelTimeClick={handelTimeClick} handelTitleClick={handelTitleClick} key={data.id} ></Card>)
            }
            </div>
            <div className="cart-area">
                <Cart time={time} cart={cart}></Cart>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Body;