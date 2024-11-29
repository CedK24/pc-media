import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import BuildIcon from '@mui/icons-material/Build';
import ComputerIcon from '@mui/icons-material/Computer';
import SettingsIcon from '@mui/icons-material/Settings';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';
import SpeedIcon from '@mui/icons-material/Speed';
import ThemeSwitcher from '../../theme/ThemeSwitcher';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Services', path: '/services', icon: <BuildIcon /> },
    { text: 'PC Bureau & Multimédia', path: '/pc-bureau-multimedia', icon: <ComputerIcon /> },
    { text: 'Configurateur PC', path: '/configurateur', icon: <SettingsIcon /> },
    { text: 'Rendez-vous', path: '/rendez-vous', icon: <EventIcon /> },
    { text: 'Contact', path: '/contact', icon: <EmailIcon /> },
    { text: 'Urgence', path: '/urgence', icon: <SpeedIcon />, isUrgent: true },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          component={Link} 
          to={item.path} 
          key={item.text}
          onClick={handleDrawerToggle}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo et Titre */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                }}
              >
                PC-MÉDIA@
              </Typography>
            </Link>
          </Box>

          {/* Navigation Desktop */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            gap: 2,
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'flex-end',
            ml: 4
          }}>
            {menuItems.map((item) => (
              item.isUrgent ? (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  variant="contained"
                  color="error"
                  startIcon={item.icon}
                  sx={{
                    fontWeight: 600,
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': {
                        boxShadow: '0 0 0 0 rgba(244, 67, 54, 0.7)',
                      },
                      '70%': {
                        boxShadow: '0 0 0 10px rgba(244, 67, 54, 0)',
                      },
                      '100%': {
                        boxShadow: '0 0 0 0 rgba(244, 67, 54, 0)',
                      },
                    },
                  }}
                >
                  {item.text}
                </Button>
              ) : (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  startIcon={item.icon}
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  {item.text}
                </Button>
              )
            ))}
            <ThemeSwitcher />
          </Box>

          {/* Menu Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Drawer Mobile */}
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: 240,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
