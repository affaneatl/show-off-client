import { Container, Grid } from "@mui/material";
import React from "react";
import Typography from "../components/Typography";
import Box from "@mui/material/Box";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import md from "../assets/md.jpg";
function Services() {
  return (
    <Box
      sx={{ mt: 8, mb: 4, p: 6, }}
      className="custombg"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Avatar alt="Remy Sharp" src={md} sx={{ width: 100, height: 100 }} />
        <Typography color="secondary.main" mt={2} variant="h6">
          Mubin Khan
        </Typography>
        <Typography color="error.main" mb={4}>
          Managing Director, Ethics Advance Technology Ltd
        </Typography>
        <Divider />
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "primary",
            ml: 10,
            mr: 10,
          }}
        >
          For any company, the drive for sustainability begins with desired
          performance and results, adhering to commitments and technological
          innovation. The last several years Ethics Advanced Technology
          Ltd.(EATL) has been working on these aspects and focusing on customer
          satisfaction.
        </Typography>
      </Box>
    </Box>
  );
}

export default Services;
