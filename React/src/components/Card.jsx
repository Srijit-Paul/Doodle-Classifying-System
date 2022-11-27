import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
  return (
    <div style={{margin:"20px"}}>

    
    <Card sx={{ minWidth: 275 }} style={{backgroundColor:"#343779"}}>
      <CardContent>
        <Typography 
        variant="h5" 
        component="div"
        style={{textAlign:"center", fontWeight:"bold", fontSize:"2em", color:"white"}}
        >
          {props.module}
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.module}
          style={{objectFit:"cover",borderRadius:"10px"}}
        />
      </CardContent>
      <CardActions>
        <Button style={{color:"white",backgroundColor:"#1a1d21",width:"50%",textAlign:"center",borderRadius:"10px"}} value={props.module+"-Practice"} size="small" onClick={props.onClick}>Practice</Button>
        <Button style={{color:"white",backgroundColor:"#1a1d21",width:"50%",textAlign:"center",borderRadius:"10px"}} value={props.module+"-Test"} size="small" onClick={props.onClick}>Test</Button>
      </CardActions>
    </Card>
    </div>
  );
}
