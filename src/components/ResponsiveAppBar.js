import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/eatl_logo.png";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const pages = [
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Prducts",
    route: "/1",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Latest Update",
    route: "/news",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar
        position="sticky"
        color="primary"
        elevation={0}
        sx={{ bgcolor: "white" }}
        // className="customAppbar"
      >
        <Container>
          <Toolbar disableGutters id="back-to-top-anchor">
            <Link
              href="/"
              sx={{
                mr: 2,
                flexGrow: 4,
                display: { xs: "none", md: "flex" },
                textDecoration: "none",
              }}
            >
              <img src={logo} style={{ height: "50px" }} />
            </Link>
            <Box
              sx={{
                flexGrow: 2,
                justifyContent: "space-between",
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page, index) => (
                <Link
                  key={index}
                  href={page.route}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    color: "secondary.main",
                    textDecoration: "none",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#d81b60",
                    },
                  }}
                >
                  {page.name}
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Link
              href="/"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img src={logo} style={{ height: "40px" }} />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};
export default ResponsiveAppBar;
