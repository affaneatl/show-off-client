import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'
import backgroundImage from '../assets/backgroundImage.png'
export default function Example(props)
{
    const images = [
        {
          url: "https://res.cloudinary.com/dhijllt3x/image/upload/v1646199901/file-upload/Untitled-1_jidhve.png",
          title: ' OBD, Voice Call Broadcasting',
          width: '25%',
        },
        {
          url: "https://res.cloudinary.com/dhijllt3x/image/upload/v1646199901/file-upload/Untitled-1_jidhve.png",
          title: ' SMS Gateway – Bulk SMS',
          width: '25%',
        },
        {
          url: "https://res.cloudinary.com/dhijllt3x/image/upload/v1646199901/file-upload/Untitled-1_jidhve.png",
          title: ' Customized Web Application',
          width: '25%',
        },
        {
          url: "https://res.cloudinary.com/dhijllt3x/image/upload/v1646199901/file-upload/Untitled-1_jidhve.png",
          title: ' Service based Mobile Apps',
          width: '25%',
        }
      ];

    return (
        <Carousel 
        indicators={false}
        animation="fade"
        slide={1000}>
            {
                images.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Box>
            <img alt={props.item.title} src={backgroundImage} style={{width: '100%', height: '300px'}}/>
        </Box>
    )
}