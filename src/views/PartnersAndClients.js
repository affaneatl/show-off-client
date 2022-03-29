import { Container, Grid } from "@mui/material";
import React from "react";
import Typography from "../components/Typography";
import Carousel from "../components/Carousel";
function PartnersAndClients() {
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ mb: 4 }}
      >
        Partners <span className="span">and Clients</span>
      </Typography>
      <Carousel/>
    </Container>
  );
}

export default PartnersAndClients;
