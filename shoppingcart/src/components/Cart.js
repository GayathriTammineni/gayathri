 import  "./cart.css";
import { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from "@material-ui/core";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import OrderMessage from "./productpages/OrderMessage";

const Page_home='home';
const Page_cart ='cart';
const Page_kidsfashion='kidsfashion';
const Page_mensfashion='mensfashion';
const Page_womenssfashion='womensfashion';
const Page_electronics='electronics';
const Page_furnitures='furnitures';
const Page_beautyitems='beautyitems';
const page_ordermessage='ordermessage';




const Cart=({cart,clearCart,removeFromCart,addToCart})=>{
  //const classes = useStyles();
  const[page,setPage]=useState(Page_home);

  const navigateTo=(nextpage)=>{
      setPage(nextpage);
      
    }

const gettotalAmount = ()=>{
  return cart.reduce((sum,{quantity,price})=> sum+ quantity*parseInt(price),0);

}


return(
    <div>
     <h1>Cart</h1>
     <div>
     <div class="small-container cart-page">
   <table>
   <tr>
   <th></th>
   <th></th>
   <th>PRODUCTName</th>
   <th>PRICE</th>
   <th>QUANTITY</th>
   <th>TotalQuantitY</th>
   <th>TotalAmount</th>
   </tr>
   {cart.length === 0 && <div>Cart is empty</div>}
   {cart.map((row) => (
    <tr>
    
    <td className=""><DeleteIcon color="secondary" onClick={() => clearCart(row)}></DeleteIcon></td>
    
   <td>
   <div class="cat-info">
    <img src={row.image}></img>
   </div>
   </td>
   <td> {row.name}</td>
   <td>{row.price} </td>
   <td > <button  onClick={() => removeFromCart(row)}>
   -
 </button>{row.quantity}
 <button onClick={() => addToCart(row)}>
   +
 </button></td>
  <td>{row.quantity}</td>
   <td>{row.quantity*row.price} </td>
   </tr>
   ))}
   </table>

  <div className="total-price">
  <table>
  <tr>
  <td>SubTotal={gettotalAmount()}</td>
  </tr>
  </table>
   </div>
   <Button color="secondary" variant= "contained" onClick={()=>navigateTo(page_ordermessage)}>ProceedToPayment</Button> 
   {page===page_ordermessage && <OrderMessage></OrderMessage>}
   </div>
   </div>

   </div>
);

}

export default Cart;

/*
 <Button color="secondary" variant= "contained" onClick={()=>navigateTo(page_ordermessage)}>ProceedToSubmit</Button> 
   {page===page_ordermessage && <OrderMessage></OrderMessage>}
     { cart.length>0&&(<Button  onClick={clearCart}>clearCart</Button>)}    

*/