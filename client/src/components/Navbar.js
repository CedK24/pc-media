import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import ThemeSwitcher from '../theme/ThemeSwitcher';
import ComputerIcon from '@mui/icons-material/Computer';
import CloseIcon from '@mui/icons-material/Close';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Accueil', path: '/' },
    { text: 'Services', path: '/services' },
    { text: 'Rendez-vous', path: '/rendez-vous', highlight: true },
    { text: 'Urgence', path: '/urgence', error: true },
  ];

  const isActive = (path) => window.location.pathname === path;

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={RouterLink} 
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: item.error ? 'error.main' : 'text.primary',
              bgcolor: isActive(item.path) ? 'action.selected' : 'transparent',
            }}
          >
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: isActive(item.path) ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
        <ListItem>
          <ThemeSwitcher />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll trigger={false}>
        <AppBar position="fixed" color="inherit">
          <Toolbar sx={{ px: { xs: 0 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <ComputerIcon 
                sx={{ 
                  mr: 1, 
                  color: 'primary.main',
                  fontSize: '2rem',
                }} 
              />
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: 'text.primary',
                  fontWeight: 600,
                  letterSpacing: '-0.5px',
                }}
              >
                PC-Média@
              </Typography>
            </Box>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    color={item.error ? 'error' : 'inherit'}
                    variant={item.highlight ? 'contained' : 'text'}
                    sx={{
                      fontWeight: isActive(item.path) ? 600 : 400,
                      ...(isActive(item.path) && !item.highlight && {
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                        },
                      }),
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
                <ThemeSwitcher />
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar /> {/* Spacer */}

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        PaperProps={{
          sx: {
            boxShadow: theme.shadows[3],
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
