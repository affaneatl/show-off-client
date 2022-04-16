import { Card, Container, Grid } from "@mui/material";
import React from "react";
import Typography from "../components/Typography";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const partners = [
  {
    title: "Ministry of Health",
    link: "http://www.mohfw.gov.bd/",
  },
  {
    title: "BGC trust college",
    link: "https://www.bgctub-edu.net/php_files/standard/user_home/user_home.php?home=yes&tm=main",
  },
  {
    title: "National board of Revenue",
    link: "https://nbr.gov.bd/",
  },
  {
    title: "Dhaka WASA",
    link: "http://www.dwasa.org.bd/",
  },
  {
    title: "Desco",
    link: "https://www.desco.org.bd/bangla/",
  },
  {
    title: "SEQAEP",
    link: "http://www.moedu.gov.bd/site/page/85e59742-134c-4888-bd08-bf286f038fdd/%E0%A6%B8%E0%A7%87%E0%A6%95%E0%A6%BE%E0%A7%9F%E0%A7%87%E0%A6%AA",
  },
];

function PartnersAndClients() {
  return (
    <Container
      sx={{ mt: 8, mb: 8 }}
      data-aos="zoom-out"
      data-aos-duration="1500"
    >
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ mb: 4 }}
      >
        Partners and Clients
      </Typography>
      <Typography variant="body1" align="center">
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </Typography>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
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
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <Card
              data-aos="flip-left"
              data-aos-duration="1500"
              variant="outlined"
              sx={{
                height: 100,
                width: "100%",
                marginBottom: 4,
                marginTop: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                bgcolor: "secondary.main",
                padding: "10px",
                borderRadius: "0",
                "&:hover": {
                  cursor: "pointer",
                  bgcolor: "primary.main",
                  boxShadow: 3,
                },
              }}
            >
              <Typography
                component="a"
                href={partner.link}
                target="_blank"
                p={2}
                sx={{
                  fontWeight: "regular",
                  color: "white",
                  "&:hover": {
                    color: "white",
                    border: "2px solid white",
                  },
                }}
              >
                {partner.title}
              </Typography>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default PartnersAndClients;
