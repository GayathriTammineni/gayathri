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

const   Furniture=({addToCart})=>{
    const[page,setPage]=useState(Page_home);
    const navigateTo=(nextpage)=>{
        setPage(nextpage);
      }
      const [data]=useState([
        {
          id:3,
          image:'./images/diwan.jfif',
          name:"Diwan",
            price:"27000",
            quantity:1
    
        },{
          id:3,
          image:'./images/drawer.jfif',
          name:"drawer",
            price:"2000",
            quantity:1
    
        },{
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
          image:'./images/sofa.jfif',
          name:"Sofa",
            price:"4000",
            quantity:1
    
        },{
          id:3,
          image:'./images/spacewoodwinner.jfif',
          name:"Spacewoodwinner",
            price:"10000",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/tableset.jfif',
          name:"Tableset",
            price:"999",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/wakefit.jfif',
          name:"Wakefit",
            price:"15999",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/woodbed.jfif',
          name:"woodbed",
            price:"8000",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/ushape.jfif',
          name:"UshapeSofa",
            price:"8990",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/bluedenin.jfif',
          name:"Bluedenin",
            price:"8000",
            quantity:1
    
        },
        {
          id:3,
          image:'./images/lshapesofa.jfif',
          name:"LshapeSofa",
            price:"7789",
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
export default Furniture;