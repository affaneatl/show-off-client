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
  { name: "Edutube", img: product1, detail: "Teach what you love" },
  { name: "ERP pharma", img: product2,detail: "Teach what you love" },
  { name: "HIMS", img: product3,detail: "Teach what you love" },
  { name: "HRMS", img: product4,detail: "Teach what you love" },
];

function Products() {
  return (
    <Container sx={{ mt: 8, mb: 4 }} data-aos="fade-down" data-aos-delay="5000">
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ mb: 4 }}
        color="secondary.main"
      >
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
}

const ProductCard = ({ product }) => {
  return (
    <Grid item xs={6} md={3} data-aos="flip-left" data-aos-duration="1500">
      <Card
        variant="outlined"
        sx={{
          borderRadius: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        {/* <img src={product.img} style={{ width: "95%" }} /> */}
        <div className="container">
          <div className="image">
            <img style={{width: "100%", height: "auto"}} src={product.img} alt="Avatar" />
            
          </div>

          <div className="overlay">
            <div className="text">
              <h4 style={{fontSize: "18px", margin:"0"}}>{product.name}</h4>
              <p style={{fontSize: "14px", margin: "5px"}}>{product.detail}</p>
            </div>
          </div>
        </div>
      </Card>
    </Grid>
  );
};
export default Products;
