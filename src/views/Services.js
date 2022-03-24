import { Container, Grid } from "@mui/material";
import React from "react";
import Typography from "../components/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
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
        Our Services
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        <Grid item md={6} xs={12}>
          <Typography fontWeight="bold" fontSize="25px" color="secondary" gutterBottom>
            We are building software solution that solves your business
            challenges
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="body-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        <Grid item md={4} xs={12}>
          <AcUnitIcon />
          <Typography variant="h6" gutterBottom>
            Invoice
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,
          </Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          <AccountBalanceIcon />
          <Typography variant="h6" gutterBottom>
            Invoice
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,
          </Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          <AssuredWorkloadIcon />
          <Typography variant="h6" gutterBottom>
            Invoice
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services;
