// src/components/unit-dropdown/UnitDropdown.jsx
import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

const StyledFormControl = styled(FormControl)({
  minWidth: '200px',
});

const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    padding: '8px 12px',
  },
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: theme.shape.borderRadius,
}));

const UnitDropdown = ({ units, currentUnit, onUnitChange }) => {
  return (
    <StyledFormControl size="small">
      <StyledSelect
        value={currentUnit}
        onChange={(e) => onUnitChange(e.target.value)}
        displayEmpty
      >
        {units.map((unit, index) => (
          <MenuItem key={unit.id} value={index}>
            Unidad {index + 1}: {unit.subtema}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default UnitDropdown;
