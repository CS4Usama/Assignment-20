import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      width: '100%',
    },
  },

  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  buttonStyle: {
    // margin: 0,
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
    },
}

}));


export default function CategoryBar() {

  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button className={classes.buttonStyle} color="inherit">All</Button>
      </MenuItem>
      <MenuItem>
        <Button className={classes.buttonStyle} color="inherit">Electronics</Button>
      </MenuItem>
      <MenuItem>
        <Button className={classes.buttonStyle} color="inherit">Jewelery</Button>
      </MenuItem>
      <MenuItem>
        <Button className={classes.buttonStyle} color="inherit">Men's Clothing</Button>
      </MenuItem>
      <MenuItem>
        <Button className={classes.buttonStyle} color="inherit">Women's Clothing</Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          <div className={classes.sectionDesktop}>
            <Button className={classes.buttonStyle} color="inherit">All</Button>
            <Button className={classes.buttonStyle} color="inherit">Electronics</Button>
            <Button className={classes.buttonStyle} color="inherit">Jewelery</Button>
            <Button className={classes.buttonStyle} color="inherit">Men's Clothing</Button>
            <Button className={classes.buttonStyle} color="inherit">Women's Clothing</Button>
          </div>
          
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
              <Typography variant="h6" className={classes.title}> Categories </Typography>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}