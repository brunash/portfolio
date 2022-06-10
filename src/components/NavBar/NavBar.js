import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const navigationLinks = [
  { name: 'About', href:'/' },
  { name: 'Projects', href:'/projects' },
  { name: 'Contact', href:'/contact' },
];


const NavBar = () => {

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx = {{flexGrow: 1}} >
      
      <AppBar  
      position = "static"
      color="default"
      >
        <Toolbar>
          
         <Typography 
         Typography variant = "h6"
         component = "div" 
         sx = {{flexGrow: 1}}
         >
            <Link href='/'
             style={{ textDecoration: 'none', color: 'black' }}
            >SZ Portfolio</Link>
            
          </Typography>
          
          
          {auth && (
            <div>
              <IconButton
              onClick={handleMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          
          </IconButton>
              <Menu
                color='black'
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >{navigationLinks.map((item) => (
                <MenuItem onClick={() => handleClose}>
                  <Link 
                  underline='none'
                  href={item.href}>
                    {item.name}
                  </Link></MenuItem>
              ))}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default NavBar;