import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Container } from "@mui/material";
import Typography from "../components/Typography";
import SlideCard from "../components/SlideCard";
export default function App() {
  return (
    <Container>
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ mb: 4 }}
      >
        Latest News
      </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
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
