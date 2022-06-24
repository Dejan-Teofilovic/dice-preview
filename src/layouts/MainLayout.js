import React from 'react';
import { Outlet } from 'react-router';
import { Box, Container, IconButton, Link, Stack } from '@mui/material';
import { Twitter } from '@mui/icons-material';
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
      <Stack direction="row" justifyContent="center" width="100%">
        <Container
          maxWidth="xl"
          sx={{
            position: 'fixed',
            bottom: 32,
          }}
        >
          <IconButton
            sx={{
              color: 'white',
              zIndex: 100
            }}
            component={Link}
            href={URL_TWITTER}
            target="_blank"
          >
            <Twitter sx={{ fontSize: { xs: 32, md: 48 } }} />
          </IconButton>
        </Container>
      </Stack>
      <Loading />
      <AlertMessage />
    </Box>
  );
}