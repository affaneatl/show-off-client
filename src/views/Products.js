import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "../components/Typography";
import Card from "@mui/material/Card";
import product1 from "../assets/products/1.jpg";
import product2 from "../assets/products/2.jpg";
import product3 from "../assets/products/3.jpg";
import product4 from "../assets/products/4.jpg";
import product5 from "../assets/products/5.jpg";
import product6 from "../assets/products/6.jpg";
import product7 from "../assets/products/7.jpg";
import product8 from "../assets/products/8.jpg";

const products = [
  { name: "Edutube", img: product1 },
  { name: "DIA", img: product2 },
  { name: "E-learning", img: product3 },
  { name: "HNF", img: product4 },
  { name: "Technical Edu", img: product5 },
  { name: "Tax Bd", img: product6 },
  { name: "National University", img: product7 },
  { name: "SESIP", img: product8 },
];

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
        Our <span className="span">Products</span>
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
      xs={6}
      md={3}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        sx={{
          boxShadow: 6,
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <div class="image">
          <img class="image__img" src={product.img} alt="Bricks" />
          <div class="image__overlay image__overlay--blur">
            <div class="image__title">{product.name}</div>
          </div>
        </div>
      </Card>
    </Grid>
  );
};
export default Products;
