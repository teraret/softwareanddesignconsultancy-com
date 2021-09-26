import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Image from 'next/image'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DropDown from './DropDown';
//import teraret from '../public/teraretwhite.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {/* <Image src={teraret} alt="Bessppl" width={108} height={16} /> */}
          </Typography>
      <DropDown Menu="SOFTWARE CONSULTING" MenuItem={["SOFTWARE APPLICATION DEVELOPMENT","MOBILE APPLICATION DEVELOPMENT"]}/>
      <DropDown Menu="DESIGNING" MenuItem={["WEB DESIGNING","GRAPHIC DESIGNING"]}/>
      <DropDown Menu="DIGITAL MARKETING" MenuItem={["FACEBOOK MARKETING","YOUTUBE MARKETING","LINKEDIN MARKETING"]}/>
      <DropDown Menu="CONTACT" MenuItem={["CAREER","SUPPORT"]}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}