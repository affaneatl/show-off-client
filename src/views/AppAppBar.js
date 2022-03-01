import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import logo from '../assets/eatl_logo.png'
const rightLink = {
  fontSize: 16,
  color: 'common.black',
  fontWeight: '500',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Link
            variant="p"
            underline="none"
            color="inherit"
            href="/"
            sx = {{flex: 2}}
          >
            <img src={logo} style={{height: "50px"}}/>
          </Link>
          <Box sx={{ flex: 3, display: 'flex', justifyContent: 'space-around' }}>
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
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              Contact
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
