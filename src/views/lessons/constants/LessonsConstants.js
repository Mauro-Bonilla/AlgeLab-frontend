// src/views/lessons/constants/LessonsConstants.js
import { Chip, Button, Avatar, Box, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

const AVATAR_SIZE = 40;

export const columns = [
  { 
    id: 'no', 
    label: 'No.', 
    width: '10%',
    render: (value) => <Typography fontWeight="bold">{value}</Typography>
  },
  { 
    id: 'tema', 
    label: 'Tema', 
    width: '40%',
    render: (value, row) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar 
          src={row.no === '0' ? "/anh.svg" : "/vector-space.svg"} 
          alt={value} 
          sx={{ 
            mr: 1,
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            '& img': {
              objectFit: 'contain',
              width: '100%',
              height: '100%',
            }
          }}
          variant="square"
        />
        <Typography fontWeight="bold">{value}</Typography>
      </Box>
    )
  },
  { 
    id: 'estado', 
    label: 'Estado', 
    width: '20%',
    render: (value) => (
      <Chip 
        label={<Typography fontWeight="bold">{value}</Typography>}
        color={
          value === 'No iniciado' ? 'default' :
          value === 'En proceso' ? 'warning' :
          'success'
        }
        sx={{ borderRadius: '16px' }}
      />
    )
  },
  { 
    id: 'puntos', 
    label: 'Puntos de exp.', 
    width: '20%',
    render: (value) => {
      const theme = useTheme();
      return (
        <Chip 
          label={<Typography fontWeight="bold">{`${value} pts`}</Typography>}
          sx={{ 
            backgroundColor: theme.palette.success.main, 
            color: theme.palette.common.white,
            borderRadius: '16px'
          }}
        />
      );
    }
  },
  { id: 'action', label: '', width: '10%' },
];

export const expandedColumns = [
  { id: 'no', label: 'No.', width: '10%' },
  { 
    id: 'subtema', 
    label: 'Subtema', 
    width: '40%',
    render: (value) => (
      <Typography variant="body1">{value}</Typography>
    )
  },
  { 
    id: 'estado', 
    label: 'Estado', 
    width: '20%',
    render: (value) => {
      const theme = useTheme();
      return (
        <Chip 
          label={value}
          color={value === 'No iniciado' ? 'default' : undefined}
          sx={{ 
            borderRadius: '16px',
            ...(value !== 'No iniciado' && {
              backgroundColor: alpha(
                value === 'En proceso' 
                  ? theme.palette.warning.main 
                  : theme.palette.success.main, 
                0.1
              ),
              color: value === 'En proceso' 
                ? theme.palette.warning.dark 
                : theme.palette.success.dark,
            }),
          }}
        />
      );
    }
  },
  { 
    id: 'puntos', 
    label: 'Puntos de exp.', 
    width: '20%',
    render: (value) => {
      const theme = useTheme();
      return (
        <Chip 
          label={`${value} pts`}
          sx={{ 
            borderRadius: '16px',
            backgroundColor: alpha(theme.palette.success.main, 0.1),
            color: theme.palette.success.dark,
          }}
        />
      );
    }
  },
  { 
    id: 'action', 
    label: '', 
    width: '10%',
    render: (_, row, onNavigate) => {
      const theme = useTheme();
      return (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => onNavigate(row)}
          sx={{ 
            borderRadius: '20px', 
            textTransform: 'none',
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.8),
            },
          }}
        >
          Navegar
        </Button>
      );
    }
  },
];