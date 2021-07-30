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

const MensFashion=({addToCart})=>{
    const[page,setPage]=useState(Page_home);
    const navigateTo=(nextpage)=>{
        setPage(nextpage);
      }
      const [data]=useState([
        {
            id:1,
            image:'./images/Allen Solly Mens-589.jfif',
            name:"Allen Solly",
            price:"589",
            quantity:1
        },
        {
          id:1,
            image:'./images/BlueBlazer-1548.jfif',
            name:"BlueBlazer",
            price:"1548",
            quantity:1
    
        },
        {
          id:2,
          image:'./images/suit.jpg',
          name:"suit",
            price:"23000",
            quantity:1
    
        },
        {
          id:2,
          image:'./images/outfit.jpg',
          name:"kidsOutFit",
            price:"9000",
            quantity:1
    
        },
        
        {
          id:1,
          image:'./images/Buy-casual-Shirt.jfif',
          name:"casual-Shirt",
            price:"1000",
            quantity:1
    
        },
        
        
        {
          id:1,
          image:'./images/Eyebogler t-shirt-368.jfif',
          name:"Eyebogler",
            price:"368",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/Fit-T-shirt-260.jfif',
          name:"Fit-T-shirt",
            price:"260",
            quantity:1
    
        },{
          id:1,
          image:'./images/formal-shoes-5000.jfif',
          name:"formal-shoes",
            price:"599",
            quantity:1
    
        },{
          id:1,
          image:'./images/formalshirt-1200.jfif',
          name:"formalshirt",
            price:"1200",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/RegulrFitCasual-1337.jfif',
          name:"RegulrFitCasual",
            price:"1350",
            quantity:1
    
        },{
          id:1,
          image:'./images/shoes-1200.jfif',
          name:"Shoes",
            price:"400",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/solid-side-button-599.jfif',
          name:"Side-button",
            price:"599",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/symactive-500.jfif',
          name:"Symactive",
            price:"500",
            quantity:1
    
        },
        {
          id:1,
          image:'./images/suit.jpg',
          name:"Suit",
            price:"1500",
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
export default MensFashion;