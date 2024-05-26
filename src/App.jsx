import { useEffect, useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import CheckResponse from './CheckResponse';

function App() {
  const [orderData,setorderData] = useState([]);
  useEffect(()=>{
    getdata();
   
  },[])
  async function getdata(){
    const data = await axios.get('https://my-meesho-frontend.vercel.app/Meesho/ShowOrder');
    setorderData(data.data);
    console.log(data.data)
  }

  return (
   <>
    {orderData.map((elem,ind)=>{
      return (
        <>
          <div className="Order">
            <div className="orderItem">Order-{ind+1}</div>
             <CheckResponse MobileNO = {elem.MobileNO} Responses = {elem.Responses} index = {ind}/>
            
           <div className="MobileNo">MobileNo:{elem.MobileNO}</div>
           <hr />
           
           <div className="products">
            <div className="productdata">
              <div className="productitem"></div>
              <div className="productitem">ProductImage</div>
              <div className="productitem">ProductName</div>
              <div className="productitem">Price</div>
              <div className="productitem">Qty</div>
            </div>
            {elem.Products.map((elem)=>{
              return (
                <div className="productdata">
                  <div className="productitem"><input className='checkbox' type="checkbox"/></div>
                  <div className="productitem"><img className='ProductImage' src={elem.Url} alt="ProductImage" /></div>
                  <div className="productitem">{elem.ProductName}</div>
                  <div className="productitem">{elem.Price}</div>
                  <div className="productitem">{elem.Qty}</div>
                </div>
              )
            })}
           </div>
          </div>
          </>
      )
    })}
   </>
  )
}

export default App
