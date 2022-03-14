import * as React from "react";
import { Box, Grid, Container } from "@mui/material";
import Typography from "../components/Typography";
import Carousel from "../components/Carousel";

export default function AboutSection() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ mb: 4 }}
      >
        About
      </Typography>
      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6} xs={12}>
            <Box>
              <Typography variant="body-1">
                <span style={{ color: "blue", fontWeight: "bold" }}>
                  Ethics Advance Technology Limited (EATL)
                </span>{" "}
                is a private company and a leading enterprise with innovative
                ICT services and solutions provider in Bangladesh established in
                November 1999. EATL has developed partnership and collaborations
                with Bangladesh based companies, private sector organizations,
                NGOs, donors, Government and also some of the world's renowned
                IT expertise organization.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Carousel />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
