import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Products from './Products';
import Cart from './Cart';

import Container from '@material-ui/core/Container';
import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Page_products = 'products';
const Page_cart ='cart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  const[cart,setCart]=useState([]);
  const[page,setPage]=useState(Page_products);
  

const addToCart=(products)=>{
  //setCart([...cart,{ ...products}]);

  let newCart=[...cart];
  let itemInCart=newCart.find((item)=>products.id===item.id);
  if(itemInCart){
    itemInCart.quantity++;
  }else{
    itemInCart={...products,quantity:1,};
    newCart.push(itemInCart);
  }
  setCart(newCart);
  
}
 const removeFromCart=(productToRemove)=>{
   //setCart(cart.filter(product=> product !== productToRemove));

   const exist = cart.find((x) => x.id === productToRemove.id);
    if (exist.quantity === 1) {
      setCart(cart.filter((x) => x.id !== productToRemove.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === productToRemove.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
 }

 const clearCart=()=>{
   setCart([]);
 }

const navigateTo=(nextpage)=>{
  setPage(nextpage);
}


  return (

    <div className="App">
    <AppBar position="static"  backgroundColor="black">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        Shopping Cart
      </Typography>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={cart.length} color="secondary">
         <AddShoppingCartIcon onClick={()=>navigateTo(Page_cart)} />
        </Badge>
      </IconButton>
      
      {page===Page_cart && <Button color="inherit" onClick={()=>navigateTo(Page_products)}> <ArrowBackIcon/>Home</Button>}

    </Toolbar>
   </AppBar>
   <ul>
   <li><a class="active" href="#home">Home</a></li>
   <li><a href="#news">kidsOutFit</a></li>
   <li><a href="#contact">Mens</a></li>
   <li><a href="#about">Womens</a></li>
 </ul> 
<div>
<br></br>
</div>    
   <Grid item container>
   <Grid item xs={false} sm={2}  />
   <Grid item xs={12} sm={8} style={{ backgroundColor: '#e0e0e0'}}>
   {page===Page_products && <Products  addToCart={addToCart} />}
            </Grid>         
      </Grid>  
      {page===Page_cart && <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} addToCart={addToCart}/>}
   </div>
  );
}

export default App;
/*
        <Grid item xs={false} sm={2}  />

<Grid item xs={12} sm={8} style={{ backgroundColor: '#e0e0e0'}}>
            </Grid>
 */