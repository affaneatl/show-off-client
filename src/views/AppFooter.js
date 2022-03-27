import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AppFooter() {
  return (
    <Box sx={{height: 300, width: "100%" ,bgcolor: "primary.main", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Typography variant="h3" color="white">Footer Section</Typography>
    </Box>

  );
}
