import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "../components/Typography";
import Card from "@mui/material/Card";
import product1 from '../assets/products/1.jpg'
import product2 from '../assets/products/2.jpg'
import product3 from '../assets/products/3.jpg'
import product4 from '../assets/products/4.jpg'
import product5 from '../assets/products/5.jpg'
import product6 from '../assets/products/6.jpg'
import product7 from '../assets/products/7.jpg'
import product8 from '../assets/products/8.jpg'

const products = [product1, product2, product3, product4, product5, product6,product7, product8];

function Products() {
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ mb: 4 }}
      >
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
    </Container>
  );
}

const ProductCard = ({ product }) => {
  return (
    <Grid
      item
      xs={12}
      md={3}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        sx={{
          width: "100%",
          height: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 4,
          bgcolor: "white",
        }}
      >
        <img src={product} style={{ height: ""}}/>
      </Card>
    </Grid>
  );
};
export default Products;
