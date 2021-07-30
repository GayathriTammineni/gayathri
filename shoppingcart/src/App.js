import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Cart from './components/Cart';

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

import  './components/productpages/headerimages.css';
import './components/productpages/displaybox.css';
import KidsFashion from './components/productpages/KidsFashion';
import Home from './components/Home';
import MensFashion from './components/productpages/MensFashion';
import WomensFashion from './components/productpages/WomensFashion';
import Electronics from './components/productpages/Electronics';
import Furniture from './components/productpages/Furniture';
import Beautyitems from './components/productpages/BeautyItems';

const Page_home='home';
const Page_cart ='cart';
const Page_kidsfashion='kidsfashion';
const Page_mensfashion='mensfashion';
const Page_womenssfashion='womensfashion';
const Page_electronics='electronics';
const Page_furnitures='furnitures';
const Page_beautyitems='beautyitems';
const page_ordermessage='ordermessage';



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
  logo: {
    maxWidth: 50,
  },
}));

function App() {
  const classes = useStyles();

  const[cart,setCart]=useState([]);
  const[page,setPage]=useState(Page_home);
  

const addToCart=(products)=>{
  //setCart([...cart,{ ...products}]);

  let newCart=[...cart];
  let itemInCart=newCart.find((item)=>products.name===item.name);
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

   const exist = cart.find((x) => x.name === productToRemove.name);
    if (exist.quantity === 1) {
      setCart(cart.filter((x) => x.name !== productToRemove.name));
    } else {
      setCart(
        cart.map((x) =>
          x.name=== productToRemove.name ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
 }

 const clearCart=(productToRemove)=>{
    setCart(cart.filter(product=> product !== productToRemove));

  // setCart([]);
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
      <Toolbar>
        <img src={"./images/shop-logo.webp"} alt="logo" className={classes.logo} />
      </Toolbar>
    
      <Typography variant="h6" className={classes.title}>
        Shopping Cart
      </Typography>

      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={cart.length} color="secondary">
         <AddShoppingCartIcon onClick={()=>navigateTo(Page_cart)} />
        </Badge>
      </IconButton>
      
      {page===Page_cart && <Button color="secondary" variant= "contained" onClick={()=>navigateTo(Page_home)}> <ArrowBackIcon/>Home</Button>}

    </Toolbar>
   </AppBar>
   <ul>
   <li> <a class="active" href="home" onClick={()=>navigateTo(Page_home)}>Home</a></li>
   <li><a  class="active" href="#kidsfashion" onClick={()=>navigateTo(Page_kidsfashion)} >kid'sFashion</a></li>
   <li><a class="active" href="#mens" onClick={()=>navigateTo(Page_mensfashion)}>Men'sFashion</a></li>
   <li><a  class="active" href="#womens" onClick={()=>navigateTo(Page_womenssfashion)}>Women'sFashion</a></li>
   <li><a class="active" href="#elc" onClick={()=>navigateTo(Page_electronics)}>Electronics</a></li>
   <li><a class="active" href="#fur" onClick={()=>navigateTo(Page_furnitures)}> Furniture</a></li>
   <li><a class="active" href="#beauty" onClick={()=>navigateTo(Page_beautyitems)}>Beauty&LuxaryBeauty</a></li>
   </ul> 
   
   {page ===Page_home &&
   <div className={['main-image']}>
 <img src={'./images/bigsale.jfif'} alt='A table full of delicious food!' />
 <section className={['summary']}>
<h1>Online Shooping</h1>
<p>
Choose your favorite product.
</p>
</section>
</div>}
{page ===Page_mensfashion &&
  <div className={['main-image']}>
<img src={'./images/banner-men3.jpg'} alt='A table full of delicious food!' />
</div>}

{page ===Page_womenssfashion &&
  <div className={['main-image']}>
<img src={'./images/banner-women4.jpg'} alt='A table full of delicious food!' />
</div>}

{page ===Page_kidsfashion &&
  <div className={['main-image']}>
<img src={'./images/banner-kids4.jpg'} alt='A table full of delicious food!' />
</div>}

{page ===Page_beautyitems &&
  <div className={['main-image']}>
<img src={'./images/deals_banner-beauty.jpg'} alt='A table full of delicious food!' />
</div>}

{page ===Page_electronics &&
  <div className={['main-image']}>
<img src={'./images/banner-electro.jpg'} alt='A table full of delicious food!' />
</div>}

{page ===Page_furnitures &&
  <div className={['main-image']}>
<img src={'./images/DIYBanner-furniture.gif'} alt='A table full of delicious food!' />
</div>}

   <Grid item container>
   <Grid item xs={false} sm={2}  />
   <Grid item xs={12} sm={8} style={{ backgroundColor: '#e0e0e0'}}>
    {page===Page_home && <Home addToCart={addToCart} />}
    {page===Page_kidsfashion && <KidsFashion addToCart={addToCart} />}
    {page===Page_mensfashion && <MensFashion addToCart={addToCart} />}
    {page===Page_womenssfashion && <WomensFashion addToCart={addToCart} />}
    {page===Page_electronics && <Electronics addToCart={addToCart} />}
    {page===Page_furnitures && <Furniture addToCart={addToCart} />}
    {page=== Page_beautyitems && <Beautyitems addToCart={addToCart} />}

       </Grid>         
      </Grid>  
      {page===Page_cart && <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} addToCart={addToCart}/>}
      </div>
  );
}

export default App;
/*
<div className={['main-image']}>
 <img src={'./images/bigsale.jfif'} alt='A table full of delicious food!' />
 <section className={['summary']}>
<h1>Online Shooping</h1>
<p>
Choose your favorite product.
</p>
</section>
</div>*/
