import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 'auto',
  },
  
}));

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <Box style={{ display:'block', position:'relative', backgroundColor:'#CDD3CE', height:200 }}>
        <CardMedia
          component="img"
            style={{ position:'absolute', top:0, bottom:0, left:0, right:0, margin:'auto', width:120 }}
            alt="ShopItNow"
            image={props.image}
            title={props.title}
        />
      </Box>
      <CardContent item xs zeroMinWidth>
        <Typography variant="body2" color="textSecondary" component="p" style={{lineHeight:'1.5', height:'3em', overflow:'hidden', fontWeight:'bolder', cursor:'pointer' }}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          ${props.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to cart">
          <AddShoppingCartSharpIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
