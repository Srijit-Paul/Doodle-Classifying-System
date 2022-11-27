import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.module}
        </Typography>
        <Typography variant="body2">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button value={props.module+"-Practice"} size="small" onClick={props.onClick}>Practice</Button>
        <Button value={props.module+"-Test"} size="small" onClick={props.onClick}>Test</Button>
      </CardActions>
    </Card>
  );
}
