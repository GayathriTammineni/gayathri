import { useState } from 'react';
import React from 'react';
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CardMedia } from "@material-ui/core";
import '../home.css';
import './headerimages.css';

const Page_home='home';
const Page_cart ='cart';
const Page_kidsfashion='kidsfashion';
const Page_mensfashion='mensfashion';
const Page_womenssfashion='womensfashion';
const Page_electronics='electronics';
const Page_furnitures='furnitures';
const Page_beautyitems='beautyitems';


const   Beautyitems=({addToCart})=>{
    const[page,setPage]=useState(Page_home);
    const navigateTo=(nextpage)=>{
        setPage(nextpage);
      }
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
          image:'./images/lipsticks.jfif',
          name:"lipsticks",
            price:"999",
            quantity:1
    
        },
        {
          id:2,
          image:'./images/makeup.jfif',
          name:"makeupProduct",
            price:"2300",
            quantity:1
    
        },
        {
          id:2,
          image:'./images/makeupfoundation.jfif',
          name:"makeupfoundation",
            price:"900",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/menshaircare.jfif',
          name:"menshaircare",
            price:"1000",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/mensskincare.jfif',
          name:"skincare",
            price:"2000",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/olaycream.jfif',
          name:"olaycream",
            price:"500",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/powder.jfif',
          name:"powder",
            price:"200",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/skinkraft.jfif',
          name:"Skinkraft",
            price:"999",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/straightening.jfif',
          name:"Straightening",
            price:"2680",
            quantity:1
    
        },
        {
          id:4,
          image:'./images/cosmeticbag.jfif',
          name:"Cosmeticbag",
            price:"500",
            quantity:1
    
        },
      
        
    
      
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
export default Beautyitems;