import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ButtonAppBar = () => {

  return (
    <AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Software & Design Consultancy
      </Typography>
      {/* <DropDown Menu="SOFTWARE CONSULTING" MenuItem={["SOFTWARE APPLICATION DEVELOPMENT","MOBILE APPLICATION DEVELOPMENT"]}/> */}
      <nav>
     
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          SOFTWARE CONSULTING
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          DESIGNING CONSULTING
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
         STUDIO SERVICES
        </Link>
      
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          DIGITAL MARKETING
        </Link>
      </nav>
     
    </Toolbar>
  </AppBar>);
};
export default ButtonAppBar;