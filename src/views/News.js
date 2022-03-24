import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Container, Box } from "@mui/material";
import Typography from "../components/Typography";
import SlideCard from "../components/SlideCard";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import EatlEvent from "./EatlEvent";
export default function News() {
  return (
    <Container>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Latest News
      </Typography>
     <EatlEvent/>
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
            slidesPerView: 3,
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
