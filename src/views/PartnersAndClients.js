import { Container, Grid } from "@mui/material";
import React from "react";
import Typography from "../components/Typography";
function PartnersAndClients() {
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ mb: 4 }}
        color="secondary.main"
      >
        Partners <span className="span">and Clients</span>
      </Typography>
      <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          
        </Grid>
        <Grid item md={6} xs={12}></Grid>
      </Grid>
    </Container>
  );
}

export default PartnersAndClients;
