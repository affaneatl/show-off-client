import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "../components/Typography";
import { Container, Grid, Link, Stack } from "@mui/material";
import logo from "../assets/eatl_logo_bg.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function AppFooter() {
  return (
    <Box className="foooter-bg">
      <Container sx={{ paddingBottom: 4 }}>
        <Grid container spacing={4}>
          <Grid item md={4} sm={6}>
            <Stack>
              <img src={logo} style={{ width: "180px" }} />
              <Typography color='white' sx={{ marginTop: "10px" }}>
               Ethics Advance Technology Limited (EATL)
              </Typography>
              <Stack direction="row" spacing={2} sx={{ marginTop: "10px" }}>
              <a
              className="topnavlink"
              href="https://www.facebook.com/Ethics-Advance-Technology-Ltd-431994670167861/"
              target="_blank"
            >
              <FacebookIcon
                fontSize="small"
                sx={{
                  color: "success.light",
                  "&:hover": {
                    cursor: "pointer",
                    color: "success.main",
                  },
                }}
              />
            </a>
            <a
              className="topnavlink"
              href="https://www.LinkedIn.com/company/ethics-advance-technology-limited./"
              target="_blank"
            >
              <LinkedInIcon
                fontSize="small"
                sx={{
                  color: "success.light",
                  "&:hover": {
                    cursor: "pointer",
                    color: "success.main",
                  },
                }}
              />
            </a>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={5} sm={6}>
            <Stack>
              <Typography color="success.main" variant="body1" fontSize="18px" fontWeight="bold" marginBottom="20px">
                Address
              </Typography>
              <Typography color='white' variant="body1">
                Corporate Office: Rupayan Shopping Square, Level-5, Plot-2,
                Block-G, Sayem Sobhan Anvir Road, Bashundhara R/A, Dhaka-1229,
                Bangladesh.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={3} sm={6}>
            <Stack>
              <Typography color="success.main" variant="body1" fontSize="18px"  fontWeight="bold" marginBottom="20px">
                Important Links
              </Typography>
              <Link sx={{color: "success.light"}}  href="http://edutubebd.com" target="_blank">Edutube</Link>
              <Link sx={{color: "success.light"}}  href="http://edutubebd.com" target="_blank">EATL innovation Hub</Link>
              <Link sx={{color: "success.light"}}  href="http://edutubebd.com" target="_blank">Career</Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box>
      <Typography p={1} bgcolor="white" variant="body1" display="block" align="center" gutterBottom> &copy; {new Date().getFullYear()}, Ethics Advance Technology ltd | All rights reserved</Typography>
      </Box>
    </Box>
  );
}
