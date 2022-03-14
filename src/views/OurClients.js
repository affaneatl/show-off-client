import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 1,
};

function OurClients() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://via.placeholder.com/150"
                alt="suitcase"
                sx={{ height: 100 }}
              />
              <Typography variant="p" sx={{ my: 5 }}>
                Ministry of Family and social walfare
              </Typography>
             
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://via.placeholder.com/150"
                alt="graph"
                sx={{ height: 100 }}
              />
              <Typography variant="p" sx={{ my: 5 }}>
                National board of Revneue
              </Typography>
             
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://via.placeholder.com/150"
                alt="clock"
                sx={{ height: 100 }}
              />
              <Typography variant="p" sx={{ my: 5 }}>
                BGC trust medical College
              </Typography>
             
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://via.placeholder.com/150"
                alt="clock"
                sx={{ height: 100 }}
              />
              <Typography variant="p" sx={{ my: 5 }}>
                Exclusive rates
              </Typography>
             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OurClients;
