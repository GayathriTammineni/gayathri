import { useState } from 'react';
import React from 'react';
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CardMedia } from "@material-ui/core";
import './headerimages.css';
import '../home.css';


const Page_home='home';
const Page_cart ='cart';
const Page_kidsfashion='kidsfashion';
const Page_mensfashion='mensfashion';
const Page_womenssfashion='womensfashion';
const Page_electronics='electronics';
const Page_furnitures='furnitures';
const Page_beautyitems='beautyitems';

const WomensFashion=({addToCart})=>{
    const[page,setPage]=useState(Page_home);
    const navigateTo=(nextpage)=>{
        setPage(nextpage);
      }
      const [data]=useState([
        {
            id:1,
            image:'./images/crally.jfif',
            name:"crally",
            price:"1000",
            quantity:1
        },
        {
          id:1,
            image:'./images/designersoftsilk.jfif',
            name:"Designersoftsilk",
            price:"1500",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/dress-999.jfif',
          name:"Dress",
            price:"999",
            quantity:1
    
        },
        {
          id:2,
          image:'./images/fashiondress-1999.jfif',
          name:"Fashiondress",
            price:"2300",
            quantity:1
    
        },
        {
          id:2,
          image:'./images/softsilk.jfif',
          name:"Softsilk",
            price:"900",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/alluring.jpg',
          name:"Alluring",
            price:"1000",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/crally.jfif',
          name:" Crally",
            price:"2000",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/lotusfashion.webp',
          name:"Lotus",
            price:"500",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/ethanticwear-2000.jfif',
          name:"ethanticwear",
            price:"2000",
            quantity:1
    
        },
      
        {
          id:4,
          image:'./images/softsilk.jfif',
          name:"Softsilk",
            price:"3000",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/tourquoise.jfif',
          name:"Tourquoise",
            price:"5000",
            quantity:1
    
        }
    
      
      ]);
     
    
      const getAllCards =dataEle =>{
       
        return(
         
    
          <Grid item xs={12} sm={2}>
        <Card className="card-container">
        <CardMedia style={{ height:"170px"}} image={dataEle.image }  />
        <CardContent>
          <Typography variant="body2" component="p">
            {dataEle.name}
          </Typography>
        </CardContent>
        <Typography variant="body2" component="p">
       $ {dataEle.price}
      </Typography>
        <CardActions>
          <Button size="small" color="primary" fullWidth={true} variant="contained" onClick={()=>addToCart(dataEle)}>AddToCart</Button>
        </CardActions>
      </Card>
      </Grid>
      );
    } 
    
    return (
     
    <div>
    
        <Grid container spacing={2}>
        {data.map(dataEle =>getAllCards(dataEle))}
        </Grid>
      </div>
    );
    
}
export default WomensFashion;