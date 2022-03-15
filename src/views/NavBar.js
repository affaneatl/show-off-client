import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import logo from "../assets/eatl_logo.png";
import Link from "@mui/material/Link";

const rightLink = {
  fontSize: 16,
  color: "common.black",
  fontWeight: "500",
  ml: 3,
};

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function NavBar(props) {
  return (
    <>
      <AppBar position="fixed" elevation="none">
        <Container>
          <Toolbar disableGutters={true}>
            <Link
              variant="p"
              underline="none"
              color="inherit"
              href="/"
              sx={{ flex: 2 }}
            >
              <img src={logo} style={{ height: "40px" }} />
            </Link>
            <Box
              sx={{ flex: 3, display: "flex", justifyContent: "space-between" }}
            >
              <Link
                color="inherit"
                variant="p"
                underline="none"
                href="/"
                sx={rightLink}
              >
                Home
              </Link>
              <Link
                color="inherit"
                variant="p"
                underline="none"
                href="/"
                sx={rightLink}
              >
                Products
              </Link>
              <Link
                color="inherit"
                variant="p"
                underline="none"
                href="/"
                sx={rightLink}
              >
                Projects
              </Link>
              <Link
                color="inherit"
                variant="p"
                underline="none"
                href="/"
                sx={rightLink}
              >
                Clients
              </Link>
              <Link
                color="inherit"
                variant="p"
                underline="none"
                href="/"
                sx={rightLink}
              >
                About
              </Link>
              <Link
                color="inherit"
                variant="p"
                underline="none"
                href="/"
                sx={rightLink}
              >
                Blog
              </Link>
              <Link
                variant="p"
                underline="none"
                href="/work-categories"
                sx={{ ...rightLink, color: "secondary.main" }}
              >
                Contact
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
