import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "../components/Typography";
import { Container, Grid, Stack } from "@mui/material";
import logo from "../assets/eatl_logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function AppFooter() {
  return (
    <Box className="foooter-bg">
      <Container sx={{ paddingBottom: 4 }}>
        <Grid container spacing={4}>
          <Grid item md={4} sm={6}>
            <Stack>
              <img src={logo} style={{ width: "180px" }} />
              <Typography sx={{ marginTop: "10px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
              <a
              className="topnavlink"
              href="https://www.facebook.com/Ethics-Advance-Technology-Ltd-431994670167861/"
              target="_blank"
            >
              <FacebookIcon
                fontSize="small"
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    cursor: "pointer",
                    color: "secondary.main",
                  },
                }}
              />
            </a>
            <a
              className="topnavlink"
              href="https://www.youtube.com/c/Edutubebd/"
              target="_blank"
            >
              <YouTubeIcon
                fontSize="small"
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    cursor: "pointer",
                    color: "secondary.main",
                  },
                }}
              />
            </a>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={5} sm={6}>
            <Stack>
              <Typography color="primary.main" variant="body1" fontSize="18px" fontWeight="bold" marginBottom="20px">
                Address
              </Typography>
              <Typography variant="body1">
                Corporate Office: Rupayan Shopping Square, Level-5, Plot-2,
                Block-G, Sayem Sobhan Anvir Road, Bashundhara R/A, Dhaka-1229,
                Bangladesh.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={3} sm={6}>
            <Stack>
              <Typography color="primary.main" variant="body1" fontSize="18px"  fontWeight="bold" marginBottom="20px">
                Important Links
              </Typography>
              <a className="footer-link" href="http://edutubebd.com" target="_blank">Edutube</a>
              <a className="footer-link" href="http://edutubebd.com" target="_blank">EATL innovation Hub</a>
              <a className="footer-link" href="http://edutubebd.com" target="_blank">Career</a>
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
