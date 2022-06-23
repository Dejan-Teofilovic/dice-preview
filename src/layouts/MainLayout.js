import React from 'react';
import { Outlet } from 'react-router';
import { Box, IconButton, Link, Stack } from '@mui/material';
import { Twitter } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import TopNavbar from '../components/TopNavbar';
import Loading from '../components/Loading';
import AlertMessage from '../components/AlertMessage';
import { URL_TWITTER } from '../utils/constants';

export default function MainLayout() {
  return (
    <Box className="bg-main" sx={{ minHeight: '100vh' }} position="relative">
      <Stack sx={{ minHeight: 'inherit' }}>
        <TopNavbar />
        <Box flexGrow={1}>
          <Outlet />
        </Box>
      </Stack>
      <IconButton
        sx={{
          color: { xs: grey[800], md: grey[900] },
          position: 'fixed',
          bottom: 32,
          left: { xs: 32, md: 64 },
          zIndex: 100
        }}
        component={Link}
        href={URL_TWITTER}
        target="_blank"
      >
        <Twitter sx={{ fontSize: { xs: 32, md: 48 } }} />
      </IconButton>
      <Loading />
      <AlertMessage />
    </Box>
  );
}