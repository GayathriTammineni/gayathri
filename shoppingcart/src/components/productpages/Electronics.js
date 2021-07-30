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


const Electronics=({addToCart})=>{
    const[page,setPage]=useState(Page_home);
    const navigateTo=(nextpage)=>{
        setPage(nextpage);
      }
      const [data]=useState([
        {
          id:3,
          image:'./images/applembl.jfif',
          name:"apple",
            price:"27000",
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
    
        },{
          id:3,
          image:'./images/camera.jfif',
          name:"camera",
            price:"1000",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/baterry-1200.jfif',
          name:"Battery",
            price:"999",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/headphones-599.jfif',
          name:"Headphones",
            price:"599",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/laps.jfif',
          name:"Lap",
            price:"40000",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/monitor.jfif',
          name:"Monitor",
            price:"10000",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/oneplus.jfif',
          name:"oneplus",
            price:"1200",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/remote-670.jfif',
          name:"remote",
            price:"670",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/watch.jfif',
          name:"Watch",
            price:"1670",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/digitalwatch-1799.jfif',
          name:"Digitalwatch",
            price:"1799",
            quantity:1
    
        },
        
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
export default Electronics;