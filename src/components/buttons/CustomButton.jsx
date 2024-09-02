import React from 'react';
import PropTypes from 'prop-types';
import { Button, useTheme } from '@mui/material';
import { darken } from '@mui/material/styles';
import FeatherIcon from 'feather-icons-react';

const getContrastColor = (hexColor) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

const sizeStyles = {
  small: { fontSize: '0.8125rem', padding: '6px 16px' },
  medium: { fontSize: '0.875rem', padding: '8px 20px' },
  large: { fontSize: '0.9375rem', padding: '10px 24px' }
};

const iconSizes = { small: 16, medium: 20, large: 24 };

const CustomButton = ({
  children,
  color = 'primary',
  size = 'medium',
  icon,
  fontSizeScale = 0.07,
  iconSizeScale = 0.4,
  widthScale = 1.2,
  heightScale = 0.9,
  fontColor, // New prop for overwriting font color
  ...props
}) => {
  const theme = useTheme();
  const buttonColor = theme.palette[color].main;
  const contrastColor = getContrastColor(buttonColor);

  const calculateFontSize = (baseSize, scale) => `${parseFloat(baseSize) * (1 + scale)}rem`;
  const calculateIconSize = (baseSize, scale) => baseSize * (1 + scale);

  const buttonSx = {
    backgroundColor: buttonColor,
    color: fontColor || contrastColor, // Use fontColor if provided, otherwise use contrastColor
    fontWeight: 'bold',
    fontSize: calculateFontSize(sizeStyles[size].fontSize, fontSizeScale),
    padding: `${parseFloat(sizeStyles[size].padding.split(' ')[0]) * heightScale}px ${parseFloat(sizeStyles[size].padding.split(' ')[1]) * widthScale}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: darken(buttonColor, 0.2),
    },
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '8px',
  };

  const iconStyle = {
    color: fontColor || contrastColor, // Use fontColor if provided, otherwise use contrastColor
    width: calculateIconSize(iconSizes[size], iconSizeScale),
    height: calculateIconSize(iconSizes[size], iconSizeScale),
  };

  return (
    <Button
      variant="contained"
      size={size}
      sx={buttonSx}
      {...props}
    >
      {icon && (
        <div style={iconContainerStyle}>
          <FeatherIcon
            icon={icon}
            style={iconStyle}
          />
        </div>
      )}
      <span style={{ flex: 1, textAlign: 'center' }}>{children}</span>
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.string,
  fontSizeScale: PropTypes.number,
  iconSizeScale: PropTypes.number,
  widthScale: PropTypes.number,
  heightScale: PropTypes.number,
  fontColor: PropTypes.string, // New prop type for fontColor
};

export default CustomButton;