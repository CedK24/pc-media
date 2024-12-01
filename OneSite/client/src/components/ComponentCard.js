import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Tooltip,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledCard = styled(Card)(({ theme, selected }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  position: 'relative',
  transition: 'all 0.3s ease',
  transform: selected ? 'scale(1.02)' : 'scale(1)',
  border: selected ? `2px solid ${theme.palette.primary.main}` : '1px solid rgba(0, 0, 0, 0.12)',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[8],
  },
}));

const PriceChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const SelectedIcon = styled(CheckCircleIcon)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  left: 16,
  color: theme.palette.primary.main,
}));

const ComponentCard = ({ component, selected, onClick }) => (
  <StyledCard selected={selected} onClick={onClick}>
    {selected && <SelectedIcon />}
    <PriceChip 
      label={`${component.price.toFixed(2)}€`}
      size="medium"
    />
    <CardContent>
      <Typography variant="h6" component="h3" gutterBottom>
        {component.name}
      </Typography>
      <Typography color="textSecondary" paragraph>
        {component.description}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <List dense>
          {component.features?.map((feature, index) => (
            <ListItem key={index}>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </Box>
      {component.details && (
        <Tooltip title="Plus d'informations">
          <IconButton
            size="small"
            sx={{ position: 'absolute', bottom: 8, right: 8 }}
          >
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      )}
    </CardContent>
  </StyledCard>
);

export default ComponentCard;
