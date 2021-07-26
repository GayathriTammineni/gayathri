 import  "./cart.css";
import { useState } from "react";

import Products from './Products';
import { Button } from "@material-ui/core";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  
  },
  
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const Cart=({cart,clearCart,removeFromCart,addToCart})=>{
  const classes = useStyles();

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
   <th>PRODUCT</th>
   <th>PRICE</th>
   <th>QUANTITY</th>
   <th>TotalAmount</th>
   </tr>
   {cart.length === 0 && <div>Cart is empty</div>}
   {cart.map((row) => (
    <tr>
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
   <td>{row.quantity*row.price} </td>
   </tr>
   ))}
   </table>
  <div class="total-price">
   <table >
   <tr>
   <td>SubTotal:</td>
   <td>${gettotalAmount()}</td>
   </tr>
   </table>
   </div>
   </div>
   </div>
   </div>
  
);

}

export default Cart;

/*
     { cart.length>0&&(<Button  onClick={clearCart}>clearCart</Button>)}    

*/
/*

   
*/