import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "../components/Typography";

const products = ["EduTube", "Banbeis", "Dgme", "BMNN"];

function Products() {
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Products
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
    <Grid
      item
      xs={12}
      md={3}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card>
        <h2>{product}</h2>
      </Card>
    </Grid>
  );
};
export default Products;
