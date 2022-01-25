import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from '@mui/material';

function CardItem( props ) {
  
    return (
        <Card sx={{ maxWidth: 340, backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <CardMedia
                sx={ {overflow: 'hidden'} }
                component="img"
                alt="user pic"
                height="280"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'gray' }} >
                    {props.nickname}
                </Typography>
                <Typography variant="h6"  sx={{ color: 'gray' }}>
                    {props.firstName} {props.lastName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="inherit" size="small" sx={{ color: 'gray' }}>Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default CardItem;
