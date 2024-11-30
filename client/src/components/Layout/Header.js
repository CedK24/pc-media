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
  Divider,
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

const Header = ({ onThemeChange, currentTheme }) => {
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
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            component={Link} 
            to={item.path} 
            key={item.text}
            onClick={handleDrawerToggle}
            sx={{
              color: item.isUrgent ? 'error.main' : 'inherit',
              '&:hover': {
                backgroundColor: item.isUrgent ? 'error.light' : 'action.hover',
              },
            }}
          >
            <ListItemIcon sx={{ color: item.isUrgent ? 'error.main' : 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <Divider sx={{ my: 2 }} />
        <ListItem>
          <ThemeSwitcher onThemeChange={onThemeChange} currentTheme={currentTheme} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary.main',
              textDecoration: 'none',
              flexGrow: { xs: 1, sm: 0 },
            }}
          >
            PC MEDIA
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                startIcon={item.icon}
                sx={{
                  color: item.isUrgent ? 'error.main' : 'text.primary',
                  '&:hover': {
                    bgcolor: item.isUrgent ? 'error.light' : 'action.hover',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ThemeSwitcher onThemeChange={onThemeChange} currentTheme={currentTheme} />
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
