import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box , Container} from '@mui/material'
import backgroundImage from '../assets/backgroundImage.png'
export default function Header()
{
   
    return (
        <Carousel 
        indicators={true}
        animation="fade"
        slide={1000}>
            {
                [1,2,3].map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Container sx={{marginTop: 2}}>
            <img alt={props.item.title} src={backgroundImage} style={{width: '100%', height: '300px'}}/>
        </Container>
    )
}