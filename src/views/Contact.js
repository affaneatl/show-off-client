import React from "react";
import { Button, Container, Grid, Stack } from "@mui/material";
import Typography from "../components/Typography";
import TextField from "../components/TextField";

function Contact() {
  return (
    <Container>
        <Typography
            variant="h4"
            marked="center"
            align="center"
            component="h2"
            mb={4}
          >
            Contact <span className="span">Us</span>
          </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <Grid item xs={12} md={6}>
        
          <div className="google-map-code">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.853328729751!2d90.4274046147697!3d23.82381408455325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79e609ca88b%3A0xfb4ce8cee33a3173!2sEthics%20Advance%20Technology%20Limited!5e0!3m2!1sen!2sbd!4v1648550161706!5m2!1sen!2sbd" width="100%" height="400" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontSize="30px" color="primary.main" variant="h3" gutterBottom>Send us a message</Typography>
          <Typography variant="body1" display="block" gutterBottom>We will contact you as soon as possible.</Typography>
          <TextField
            id="filled-required"
            label="Your Name"
            variant="filled"
            fullWidth
          />
          <TextField
            id="filled-required"
            label="Your Email"
            variant="filled"
            fullWidth
          />

          <TextField
            id="filled-required"
            label="Your Message"
            variant="filled"
            fullWidth
          />
          <Button variant="contained" fullWidth sx={{ marginTop: 5, borderRadius:0, elevation:0 }}>Send</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
