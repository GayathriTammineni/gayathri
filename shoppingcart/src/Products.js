import './product.css';
import { useState } from "react";
import { Slide } from 'react-slideshow-image';

import React from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import ShareIcon from "@material-ui/icons/Share";
import { CardMedia } from "@material-ui/core";



 const Products=({addToCart})=>{

  const [data]=useState([
    {
        id:1,
        image:'./images/image1.jpg',
        name:"kidsware",
        price:"1000",
        quantity:1
    },
    {
      id:2,
        image:'./images/image2.jpg',
        name:"frocks",
        price:"1500",
        quantity:1

    },
    {
      id:3,
      image:'./images/image3.jpg',
      name:"mens",
        price:"10000",
        quantity:1

    },
    {
      id:4,
      image:'./images/suit.jpg',
      name:"suit",
        price:"23000",
        quantity:1

    },
    {
      id:5,
      image:'./images/outfit.jpg',
      name:"kidsOutFit",
        price:"9000",
        quantity:1

    },
    {
      id:6,
      image:'./images/kids.jpg',
      name:"kids",
        price:"1000",
        quantity:1

    }
  
  ]);
  const slideImages = [
    'images/website-template.jpg',
    'images/website-template.jpg',
    'images/website-template.jpg'
  ];

  const getAllCards =dataEle =>{
   
    console.log(dataEle);
    return(
     

      <Grid item xs={12} sm={2}>
    <Card>
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
  /*<div>
 <h3>Products</h3>
  <ul className="product-list">
    {data.map(product => (product =>getAllCards(product)))}
  </ul>
</div>*/
<div>
<div className="slide-container">
<Slide>
  <div className="each-slide">
  <div>   
  images/website-template.jpg
  </div>
    </div>
</Slide>
</div>
    <Grid container spacing={2}>
    {data.map(dataEle =>getAllCards(dataEle))}
    </Grid>
  </div>
);

 }
 export default Products;