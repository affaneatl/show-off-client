import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, Button } from '@mui/material'

export default function Example(props)
{
    const images = [
        {
          url: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f",
          title: ' OBD, Voice Call Broadcasting',
          width: '25%',
        },
        {
          url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
          title: ' SMS Gateway – Bulk SMS',
          width: '25%',
        },
        {
          url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
          title: ' Customized Web Application',
          width: '25%',
        },
        {
          url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
          title: ' Service based Mobile Apps',
          width: '25%',
        },
        {
          url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
          title: ' IT Consultancy',
          width: '25%',
        },
        {
          url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
          title: ' Dynamic Web Site',
          width: '25%',
        },
        {
          url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
          title: ' IT Training',
          width: '25%',
        },
        {
          url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
          title: ' LBS (Location Based Services)',
          width: '25%',
        }
      ];

    return (
        <Carousel>
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
            <img src={props.item.url}/>
        </Box>
    )
}