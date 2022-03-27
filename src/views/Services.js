import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { Box } from "@mui/system";

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
        fontSize="25px"
        color="secondary"
        gutterBottom
        align="center"
      >
        We are building software solution that solves your business challenges
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </Grid>
    </Container>
  );
}

const Service = () => {
  return (
    <Grid
      item
      md={3}
      xs={12}
    >
      <Box sx={{bgcolor: 'secondary.main'  ,display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexDirection: 'column',padding: 4,transition: 1,  "&:hover": {
            cursor: "pointer",
            bgcolor: "green",
            color: "secondary.main",
            transition: "smooth",
            boxShadow:1,
         opacity: 10,
          },}}>
        <DeveloperModeIcon sx={{color: "white"}} />
        <Typography color="white" variant="h6" gutterBottom mt={2}>
          Web Development
        </Typography>
      </Box>
    </Grid>
  );
};

export default Services;
