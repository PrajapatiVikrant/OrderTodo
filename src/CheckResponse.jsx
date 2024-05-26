import axios from "axios";
import React from "react";
import { useEffect } from "react";
function CheckResponse(props){
    useEffect(()=>{
        setTimeout(() => {
            checkres1();
            checkres2();
            checkres3();
            checkres4();
        }, 2000);
      
       
            
    })
    function checkres1(){
        
            if(props.Responses.Seen === true){
                document.getElementById(`response_seen${props.index}`).click()
               }
           
    }
    function checkres2(){
         if(props.Responses.Confirmation === true){
            document.getElementById(`response_confirm${props.index}`).click()
           }
    }
    function checkres3(){
         if(props.Responses.Ready === true){
            document.getElementById(`response_ready${props.index}`).click();
           }
    }
    function checkres4(){
         if(props.Responses.OutForDelivery === true){
            document.getElementById(`response_outFordelivery${props.index}`).click()
           }
    }
   async function Sendresponse(type){
    console.log(type)
        await axios.put(`https://meesho-backend-psi.vercel.app/Meesho/updateOrderResponse/${props.MobileNO}/${type}`);

    }

       return (
        <div className="Responses">
        <div className="responsitem"><div>Seen</div><input className='checkbox' type="checkbox" name="" id={`response_seen${props.index}`} onClick = {()=>Sendresponse('Seen')}/></div>
        <div className="responsitem"><div>Confirmation</div><input className='checkbox' type="checkbox" name="" id={`response_confirm${props.index}`} onClick = {()=>Sendresponse('Confirmation')} /></div>
        <div className="responsitem"><div>Ready</div><input className='checkbox' type="checkbox" name="" id={`response_ready${props.index}`} onClick = {()=>Sendresponse('Ready')} /></div>
        <div className="responsitem"><div>OutForDelivery</div><input className='checkbox' type="checkbox" name="" id={`response_outFordelivery${props.index}`} onClick = {()=>Sendresponse('OutForDelivery')} /></div>
        <div className="responsitem"><div>Complete</div><input className='checkbox' type="checkbox" name="" id={`response_complete${props.index}`} onClick = {()=>Sendresponse('Complete')} /></div>
       
      </div>
       )
}
export default CheckResponse
