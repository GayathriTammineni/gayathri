import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import ShareIcon from "@material-ui/icons/Share";
import { CardMedia } from "@material-ui/core";


const ProductCards =(props,{addToCart})=>{

const {image,name,price} = props;
    console.log(props);


    return (
        <Card>
          <CardMedia style={{ height: "50px"  }} image={image}  />
          <CardContent>
            <Typography variant="body2" component="p">
              {name}
            </Typography>
          </CardContent>
          <Typography variant="body2" component="p">
         $ {price}
        </Typography>
          <CardActions>
            <Button size="small"  onClick={()=>addToCart(props)}>AddToCart</Button>
          </CardActions>
        </Card>
      );

}
export default ProductCards;