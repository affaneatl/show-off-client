import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../assets/backgroundImage.png";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";
export default function Header() {
  const banners = [banner1, banner2, banner3];
  return (
    <Carousel indicators={true} animation="fade" slide={1000}>
      {banners.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
      <img
        alt={props.item.title}
        src={props.item}
        style={{ width: "100%", height: "300px" }}
      />
      <Typography color="white" sx={{position: "absolute"}} variant="h3">Hello banner</Typography>
    </Box>
  );
}
