import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "../components/Typography";
import Card from "@mui/material/Card";
import product1 from "../assets/products/1.jpg";
import product2 from "../assets/products/2.png";
import product3 from "../assets/products/3.png";
import product4 from "../assets/products/4.png";
import product5 from "../assets/products/5.png";
import product6 from "../assets/products/6.png";
import product7 from "../assets/products/7.jpg";
import product8 from "../assets/products/8.png";

const products = [
  { name: "Edutube", img: product1 },
  { name: "DIA", img: product2 },
  { name: "E-learning", img: product3 },
  { name: "HNF", img: product4 },
  { name: "Technical Edu", img: product5 },
  { name: "Tax Bd", img: product6 }]

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
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
    </Container>
  );
}

const ProductCard = ({ product }) => {
  return (
    <Grid item xs={6} md={2}>
      <Card
       variant="outlined"
        sx={{
          borderRadius:0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <img src={product.img} style={{width: "95%"}}/>
      </Card>
    </Grid>
  );
};
export default Products;
