import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Box } from '@mui/material';

const PageContainer = ({ title, description, children, sx }) => (
  <HelmetProvider>
    <Box sx={{ height: '100vh', ...sx }}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </Box>
  </HelmetProvider>
);

PageContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default PageContainer;