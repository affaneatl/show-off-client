import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "../components/Typography";
import Card from "@mui/material/Card";
import product1 from "../assets/projects/1.jpg";
import product2 from "../assets/projects/2.jpg";
import product3 from "../assets/projects/3.jpg";
import product4 from "../assets/projects/4.jpg";
import product5 from "../assets/projects/5.jpg";
import product6 from "../assets/projects/6.jpg";
import product7 from "../assets/projects/7.jpg";
import product8 from "../assets/projects/8.jpg";

const products = [
  { name: "E-learning", img: product3 },
  { name: "HNF", img: product4 },
  { name: "Technical Edu", img: product5 },
  { name: "Tax Bd", img: product6 },
];

function Projects() {
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        color="secondary.main"
        sx={{ mb: 4 }}
      >
        Latest <span className="span">Projects</span>
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" mb={6}>
        We are building software solution that solves your business
        challenges.We are building software solution that solves your business
        challenges.We are building software solution that solves your business
        challenges.We are building software solution that solves your business
        challenges.We are building software solution that solves your business
        challenges.We are building software solution that solves your business
        challenges.We are building software solution that solves your business
        challenges.We are building software solution that solves your business
        challenges.We are building software solution that solves your business
        challenges.We are building software solution that solves your business
      </Typography>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </Grid>
    </Container>
  );
}

const ProductCard = ({ product }) => {
  return (
    <Grid item xs={6} md={3}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <img src={product.img} style={{ width: "100%" }} />
        <Typography
          p={1}
          bgcolor="secondary.main"
          width="100%"
          align="center"
          color="white"
        >
          {product.name}
        </Typography>
      </Card>
    </Grid>
  );
};
export default Projects;
