import './home.css';
import { useState } from "react";

import React from 'react';
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CardMedia } from "@material-ui/core";
import './productpages/headerimages.css';

const Page_home='home';
const Page_cart ='cart';
const Page_kidsfashion='kidsfashion';
const Page_mensfashion='mensfashion';
const Page_womenssfashion='womensfashion';
const Page_electronics='electronics';
const Page_furnitures='furnitures';
const Page_beautyitems='beautyitems';


 const Home=({addToCart})=>{

  const [data]=useState([
    {
      id:1,
      image:'./images/brushes.jfif',
      name:"Brushes",
      price:"999",
      quantity:1
  },
  {
    id:1,
      image:'./images/hairspray.jfif',
      name:"hairspray",
      price:"190",
      quantity:1

  },
    {
      id:1,
      image:'./images/image3.jpg',
      name:"mens",
        price:"1000",
        quantity:1

    },
    {
      id:2,
      image:'./images/suit.jpg',
      name:"suit",
        price:"2300",
        quantity:1

    },
    {
      id:3,
      image:'./images/drawer.jfif',
      name:"drawer",
        price:"2000",
        quantity:1

    },
    {
      id:1,
      image:'./images/kidsset-999.jfif',
      name:"kidsset",
        price:"999",
        quantity:1

    },
    {
      id:3,
      image:'./images/glossseater.jfif',
      name:"GlassSeater",
        price:"11000",
        quantity:1

    },
    {
      id:3,
      image:'./images/non-slipsofa.jfif',
      name:"Slipsofa",
        price:"12000",
        quantity:1

    },{
      id:3,
      image:'./images/camera.jfif',
      name:"camera",
        price:"2000",
        quantity:1

    },{
      id:3,
      image:'./images/oneplus.jfif',
      name:"oneplus",
        price:"11000",
        quantity:1

    },
    {
      id:3,
      image:'./images/monitor.jfif',
      name:"monitor",
        price:"12000",
        quantity:1

    },{
      id:3,
      image:'./images/lap.jfif',
      name:"laptop",
        price:"40000",
        quantity:1
    },
    {
      id:4,
      image:'./images/alluring.jpg',
      name:"Alluring",
        price:"899",
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
      image:'./images/outfit.jpg',
      name:"Outfit",
        price:"1000",
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
 export default Home;
 