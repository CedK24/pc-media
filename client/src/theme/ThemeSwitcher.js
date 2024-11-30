import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const ThemeSwitcher = ({ onThemeChange, currentTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (themeName) => {
    onThemeChange(themeName);
    handleClose();
  };

  const themes = [
    { name: 'modern', label: 'Style Moderne', icon: <WbSunnyIcon /> },
    { name: 'dark', label: 'Mode Sombre', icon: <DarkModeIcon /> },
    { name: 'gaming', label: 'Style Gaming', icon: <SportsEsportsIcon /> },
    { name: 'gradient', label: 'Style Gradient', icon: <WaterDropIcon /> },
  ];

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-label="change theme"
        sx={{ 
          ml: 1,
          color: 'primary.main',
          '&:hover': {
            color: 'primary.dark',
          },
        }}
      >
        <PaletteIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            minWidth: 180,
            '& .MuiMenuItem-root': {
              py: 1,
            },
          },
        }}
      >
        {themes.map((theme) => (
          <MenuItem 
            key={theme.name}
            onClick={() => handleThemeSelect(theme.name)}
            selected={currentTheme === theme.name}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.light',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              },
            }}
          >
            <ListItemIcon sx={{ color: currentTheme === theme.name ? 'primary.main' : 'inherit' }}>
              {theme.icon}
            </ListItemIcon>
            {theme.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ThemeSwitcher;
