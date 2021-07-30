import { useState } from "react";

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

const KidsFashion =({addToCart})=>{
    const[page,setPage]=useState(Page_home);

    const navigateTo=(nextpage)=>{
        setPage(nextpage);
      }

    const [data]=useState([
        {
            id:1,
            image:'./images/image1.jpg',
            name:"kidsware",
            price:"1000",
            quantity:1
        },
        {
          id:1,
            image:'./images/image2.jpg',
            name:"frocks",
            price:"1500",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/image3.jpg',
          name:"mens",
            price:"10000",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/babygirl-1100.jfif',
          name:"babygirl",
            price:"1100",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/clothingset-1000.jfif',
          name:"clothingset",
            price:"1000",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/dress-999.jfif',
          name:"dress",
            price:"700",
            quantity:1
    
        },
        
        {
          id:1,
          image:'./images/girlsshirt-499.jfif',
          name:"girlsshirt",
            price:"499",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/grilsfrock-899.jfif',
          name:"girlsfrock",
            price:"899",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/kidsclothingset-1500.jfif',
          name:"kidsclothingset",
            price:"1500",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/kidsnightdress-1499.jfif',
          name:"kidsnightdress",
            price:"1499",
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
          id:1,
          image:'./images/girlsshirt-499.jfif',
          name:"girlsshirt",
            price:"499",
            quantity:1
    
        }
        ])
        
       
       
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
export default KidsFashion;