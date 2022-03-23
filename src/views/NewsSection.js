import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import img1 from "../assets/news/1.jpg";
import img2 from "../assets/news/2.jpg";
import img3 from "../assets/news/3.jpg";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
function NewsSection() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Box sx={{ maxWidth: 600 }}>
          <Typography variant="h4" gutterBottom>
            We help more than 1500 <span>companies from all sectors</span>
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={4}>
            <Grid md={4} sm={12} item>
              <img
                style={{ maxWidth: "100%", borderRadius: 10 }}
                src={img2}
                alt="something"
              />
              <Typography variant="h6" sx={{ marginBottom: 1, marginTop: 1 }}>
                Business strategy
              </Typography>
              <Typography variant="p" display="block" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ textTransform: "capitalize" }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid md={4} sm={12} item>
              <img
                style={{ maxWidth: "100%", borderRadius: 10 }}
                src={img2}
                alt="something"
              />{" "}
              <Typography variant="h6" sx={{ marginBottom: 1, marginTop: 1 }}>
                Business strategy
              </Typography>
              <Typography variant="body-1" display="block" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ textTransform: "capitalize" }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid md={4} sm={12} item>
              <img
                style={{ maxWidth: "100%", borderRadius: 10 }}
                src={img2}
                alt="something"
              />{" "}
              <Typography variant="h6" sx={{ marginBottom: 1, marginTop: 1 }}>
                Business strategy
              </Typography>
              <Typography variant="p" display="block" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ textTransform: "capitalize" }}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={4} sx={{ marginTop: 2 }}>
            <Grid item md={6} xs={12}>
              <Typography fontWeight="bold" fontSize="25px">
                We are building software solution that solves your business
                challenges
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="body-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et, mattis
                purus. Vivamus commodo suscipit tellus et pellentesque.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={4} sx={{ marginTop: 2 }}>
            <Grid item md={4} xs={12}>
              <AcUnitIcon />
              <Typography variant="h6" gutterBottom="4">
                Invoice
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,
              </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
              <AccountBalanceIcon />
              <Typography variant="h6" gutterBottom="4">
                Invoice
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,
              </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
              <AssuredWorkloadIcon />
              <Typography variant="h6" gutterBottom="4">
                Invoice
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default NewsSection;
