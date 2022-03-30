import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Container, Stack } from "@mui/material";

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
      <Stack
        direction="row"
        spacing={6}
        justifyContent="center"
        alignItems="center"
        sx={{ height: 35, bgcolor: "secondary.main" }}
      >
        <a className="topnavlink" href="https://www.edutubebd.com/" target="_blank">
          Edutube
        </a>
        <a className="topnavlink" href="#" target="_blank">
          Innovation Hub
        </a>
        <a className="topnavlink" href="#" target="_blank">
          Webmail
        </a>
      </Stack>
      <ResponsiveAppBar />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
