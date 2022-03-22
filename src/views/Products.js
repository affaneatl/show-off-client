import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "../components/Typography";
import Card from "@mui/material/Card";

const products = ["EduTube", "Banbeis", "Dgme", "BMNN", "ABCD"];

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
        Products
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
          bgcolor: "secondary.main",
        }}
      >
        <Typography variant="h6">{product}</Typography>
      </Card>
    </Grid>
  );
};
export default Products;
