import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';

const ThemeSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (themeName) => {
    console.log('Changing theme to:', themeName);
    localStorage.setItem('preferred-theme', themeName);
    console.log('Theme saved in localStorage:', localStorage.getItem('preferred-theme'));
    window.location.reload();
    handleClose();
  };

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        aria-label="change theme"
        sx={{ ml: 1 }}
      >
        <PaletteIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleThemeSelect('modern')}>
          Style Moderne
        </MenuItem>
        <MenuItem onClick={() => handleThemeSelect('dark')}>
          Mode Sombre
        </MenuItem>
        <MenuItem onClick={() => handleThemeSelect('gaming')}>
          Style Gaming
        </MenuItem>
      </Menu>
    </>
  );
};

export default ThemeSwitcher;
