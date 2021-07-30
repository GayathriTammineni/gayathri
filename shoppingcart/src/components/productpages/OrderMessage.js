import { useState } from "react";
import '../home.css';
import './payment.css';
import PaymentMessage from "./PaymentMessage";

const Page_home='home';
const Page_cart ='cart';
const Page_kidsfashion='kidsfashion';
const Page_mensfashion='mensfashion';
const Page_womenssfashion='womensfashion';
const Page_electronics='electronics';
const Page_furnitures='furnitures';
const Page_beautyitems='beautyitems';
const page_ordermessage='ordermessage';
const page_paymentmessage='paymentmessage';

const OrderMessage=()=>{
    const[page,setPage]=useState(page_ordermessage);

    const navigateTo=(nextpage)=>{
        setPage(nextpage);
        
      }
return(
    <div>
     <div className="container">
     <div className="form">
     <h1>Payment</h1>
     <label for="name">HolderName:</label><br/>
     <input className="box1"  type="text" name="name" id="name" placeholder="enter name"></input><br/>

     <label for="email">Email</label><br/>
     <input className="box1" type="email" name="email" id="email" placeholder="enter email"></input><br/>

     <label for="number">Card Number</label><br/>
     <input className="box1" type="number" name="number" id="number" placeholder="1234 1234 1234"></input><br/>
     
     <label for="month">ExpiryMonth/Year</label><br/>
    <div className="div1">
    <input className="box2" type="month" name="month" id="month" placeholder="MM"></input>
    </div>
    <div className="div1">
     <input className="box2" type="cvv" name="cvv" id="cvv" placeholder="CVV"></input><br/>
     </div><br/>
    </div>
     </div>
     <br></br>
     <button className="btn" type="button" onClick={()=>navigateTo(page_paymentmessage)}>ProceedToSubmit</button>
      {page==page_paymentmessage && <PaymentMessage></PaymentMessage>}
    </div>
   
);
}
export default OrderMessage;
/*

*/
/*
<div className="first-row"> 
            <div className="owner"> 
              <h3>HolderName</h3>
              <div className="input-field"> 
                <input type="text"></input>
              </div>
             </div>
             <div className="owner"> 
             <h3>CVV</h3>
             <div className="input-field"> 
               <input type="text"></input>
             </div>
            </div>
           </div>
     <div>
     <div className="owner"> 
     <h3>cardnumber</h3>
     <div className="second-row"> 
       <input type="text"></input>
     </div>
    </div>
     </div>
*/