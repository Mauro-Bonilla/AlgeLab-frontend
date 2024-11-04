import { useState } from 'react';
import { experimentalStyled, useMediaQuery, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import Footer from './footer/Footer';
import { TopbarHeight } from '../../assets/global/Theme-variable';
import backgroundImage from '../../assets/images/anh-wallpapers/wp1.png';
import { Box } from '@mui/material';

const MainWrapper = experimentalStyled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  width: '100%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(20px)',
    zIndex: -2,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FAFBFB',
    opacity: 0.8,
    zIndex: -1,
  },
}));

const PageWrapper = experimentalStyled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  backgroundColor: 'transparent',
  [theme.breakpoints.up('lg')]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down('lg')]: {
    paddingTop: '64px',
  },
}));

const FullLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <MainWrapper>
      <Header
        sx={{
          paddingLeft: isSidebarOpen && lgUp ? '265px' : '',
          backgroundColor: 'transparent',
        }}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      />

      <Sidebar
        isSidebardir={'left'}
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />

      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: '20px',
            paddingLeft: isSidebarOpen && lgUp ? '280px!important' : '',
          }}
        >
          <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
            <Outlet />
          </Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;