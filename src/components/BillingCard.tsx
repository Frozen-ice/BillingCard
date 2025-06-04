import React from 'react';
import { Box, Button, Typography, List, ListItem, ListItemIcon, ListItemText, Chip, Divider, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import SecurityIcon from '@mui/icons-material/Security';
import AssessmentIcon from '@mui/icons-material/Assessment';

interface BillingCardProps {
  planName: string;
  subtitle?: string;
  price: string;
  period: string;
  note?: string;
  features: string[];
  onSelect: () => void;
  selected?: boolean;
  recommended?: boolean;
}

const BillingCard: React.FC<BillingCardProps> = ({
  planName,
  subtitle,
  price,
  period,
  note,
  features,
  onSelect,
  selected,
  recommended
}) => {
  return (
    <Paper
      elevation={selected ? 8 : 3}
      tabIndex={0}
      role="region"
      aria-label={`${planName} plan`}
      sx={{
        p: 4,
        borderRadius: 3,
        bgcolor: 'background.paper',
        minWidth: 280,
        maxWidth: 360,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        border: selected ? '2px solid' : '1px solid',
        borderColor: selected ? 'primary.main' : 'divider',
        transition: 'all 0.3s ease',
        outline: selected ? '2px solid #1a237e' : 'none',
        '&:hover': {
          boxShadow: 4,
          transform: 'translateY(-4px)',
        },
        '&:focus': {
          outline: '2px solid #1a237e',
        },
      }}
    >
      {recommended && (
        <Chip
          label="Recommended"
          color="primary"
          size="small"
          sx={{
            position: 'absolute',
            top: -12,
            right: 16,
            fontWeight: 600,
          }}
        />
      )}
      <Typography variant="h6" sx={{ mb: 1, color: 'primary.main', textAlign: 'center' }}>
        {planName}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            mb: 2,
            color: 'text.secondary',
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          {subtitle}
        </Typography>
      )}
      <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          {price}
        </Typography>
        <Typography variant="subtitle1" sx={{ ml: 1, color: 'text.secondary' }}>
          /{period}
        </Typography>
      </Box>
      {note && (
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 2, textAlign: 'center' }}>
          {note}
        </Typography>
      )}
      <Divider sx={{ width: '100%', mb: 3 }} />
      <List sx={{ width: '100%', mb: 3 }}>
        {features.map((feature, idx) => (
          <ListItem
            key={idx}
            disablePadding
            sx={{ mb: 1.5 }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText
              primary={feature}
              primaryTypographyProps={{ sx: { color: 'text.secondary' } }}
            />
          </ListItem>
        ))}
      </List>
      <Button
        variant={selected ? 'contained' : 'outlined'}
        color="primary"
        onClick={onSelect}
        aria-pressed={selected}
        fullWidth
        size="large"
        startIcon={selected ? <SecurityIcon /> : <AssessmentIcon />}
        sx={{ mt: 'auto', py: 1.5 }}
      >
        {selected ? 'Current Plan' : 'Select Plan'}
      </Button>
    </Paper>
  );
};

export default BillingCard; 