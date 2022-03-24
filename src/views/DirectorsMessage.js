import { Container, Grid } from "@mui/material";
import React from "react";
import Typography from "../components/Typography";
import Box from "@mui/material/Box";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
function Services() {
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ mb: 4 }}
      >
        Message from the Managing Director
      </Typography>
      <Box>
        <Typography variant="subtitle1" align="center" sx={{
            m:10,
            mt:4,
            color: "primary"
        }}>
          For any company, the drive for sustainability begins with desired
          performance and results, adhering to commitments and technological
          innovation. The last several years Ethics Advanced Technology
          Ltd.(EATL) has been working on these aspects and focusing on customer
          satisfaction.
        </Typography>
      </Box>
    </Container>
  );
}

export default Services;
