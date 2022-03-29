import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import Typography from "../components/Typography";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/system";
const services = [
  {
    name: "Web Applications",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055666.png",
  },
  {
    name: "Location Based Services",
    icon: "https://cdn-icons.flaticon.com/png/128/819/premium/819814.png?token=exp=1648545503~hmac=c3060e9774122322384e15f25ca1a5e5",
  },
  {
    name: "IT consulting Services",
    icon: "https://cdn-icons.flaticon.com/png/128/3242/premium/3242257.png?token=exp=1648545369~hmac=ae89b07195a47eb30102764be2a8d7e4",
  },
  {
    name: "Graphic Design",
    icon: "https://cdn-icons-png.flaticon.com/128/2779/2779775.png",
  },
  {
    name: "Mobile Applications",
    icon: "https://cdn-icons-png.flaticon.com/128/3437/3437364.png",
  },
  {
    name: "SMS gateway",
    icon: "https://cdn-icons.flaticon.com/png/128/1323/premium/1323721.png?token=exp=1648546032~hmac=ab55878d6a1edd660288ce07f3aa1a29",
  },
  {
    name: "Call Center Setup",
    icon: "https://cdn-icons-png.flaticon.com/128/4789/4789117.png",
  },
  {
    name: "Dynamic Website",
    icon: "https://cdn-icons.flaticon.com/png/128/954/premium/954574.png?token=exp=1648546166~hmac=c5a2c0c177daa6da45e4de12cc11c8b8",
  },
];
function Services() {
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ mb: 4 }}
      >
        Services <span className="span">We Provide</span>
      </Typography>
      <Typography
        fontWeight="bold"
        fontSize="20px"
        color="primary"
        gutterBottom
        align="center"
      >
        We are building software solution that solves your business challenges
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {services.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </Grid>
    </Container>
  );
}

const ServiceCard = ({ service }) => {
  return (
    <Grid item md={3} xs={12}>
      <Box
        sx={{
          opacity: 4,
          bgcolor: "primary.light",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 4,
          transition: 1,
          border:1,
          color: "secondary.light",
          "&:hover": {
            cursor: "pointer",
            bgcolor: "secondary.light",
            color: "secondary.light",
            transition: "smooth",
            boxShadow: 4,
          },
        }}
      >
        <img style={{ width: "50px", height: "auto" }} src={service.icon} />
        <Typography
          color="primary.main"
          align="center"
          variant="body-1"
          gutterBottom
          mt={2}
        >
          {service.name}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Services;
