import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import {
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Typography from "../components/Typography";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import EatlEvent from "./EatlEvent";
import news1 from "../assets/news/1.jpg";
import news2 from "../assets/news/2.jpg";
import news3 from "../assets/news/3.jpg";

const news = [
  {
    title: "Eatl Event Title Goes here",
    detail: "Here is the little details about the recent event from eatl.We are making things better",
    img: { news1 },
  },
  {
    title: "News title",
    detail: "si fhuhfue feigig negiha eg iauheigu aeugh iaeg",
    img: { news2 },
  },
  {
    title: "News title",
    detail: "si fhuhfue feigig negiha eg iauheigu aeugh iaeg",
    img: { news3 },
  },
];

export default function News() {
  return (
    <Container sx={{ mt: 10, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2" mb={4} color="secondary.main">
        Latest <span className="span">News</span>
      </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        
        <SwiperSlide>
          <SlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const SlideCard = ({img,title, detail}) => {
  return(
    <Box mb={4} sx={{ bgcolor: "primary.light" }}>
    <Card variant="outlined" sx={{ boxShadow: 0 }}>
      <CardMedia component="img" alt="green iguana" height="140" src={news3} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="left">
          {news[0].title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
        {news[0].detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          sx={{ textTransform: "capitalize", mb: 2, ml: 1, borderRadius: 0, boxShadow: 0 }}
        >
          See Details
        </Button>
      </CardActions>
    </Card>
  </Box>
  )
};
