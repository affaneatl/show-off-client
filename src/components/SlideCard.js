import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SlideCard() {
  return (
    <Box boxShadow={5} mb={4} sx={{bgcolor: "primary.light"}}>
      <Card sx={{ maxWidth: 350, boxShadow: 0 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="data:image/png;base64,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"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="left">
          Business strategy{" "}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          sx={{ textTransform: "capitalize" ,mb:2, ml:1}}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Box>
  );
}
