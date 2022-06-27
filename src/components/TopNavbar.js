import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DToolbar, PrimaryButton, TextButton } from './styledComponents';
import { ROUTES } from '../utils/constants';
import useWallet from '../hooks/useWallet';

export default function TopNavbar() {
  const navigate = useNavigate();

  const { connectWallet, walletConnected, disconnectWallet } = useWallet();

  const handleDisconnect = () => {
    disconnectWallet();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0)', py: 3, boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <DToolbar>
          <Button component={RouterLink} to="/">
            <Box component="img" src="/assets/images/logo.png" width={100} />
          </Button>
          <Box flexGrow={1} />
          {
            ROUTES.map(route => (
              <TextButton
                key={route.id}
                sx={{
                  mr: 4,
                  fontWeight: 600,
                  display: { xs: 'none', md: 'flex' },
                  fontSize: { xs: 14, sm: 16, md: 18 }
                }}
                component={RouterLink}
                to={route.path}
              >{route.name}</TextButton>
            ))
          }

          {
            walletConnected ? (
              <PrimaryButton
                variant="contained"
                onClick={handleDisconnect}
                sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}
              >Disconnect</PrimaryButton>
            ) : (
              <PrimaryButton
                variant="contained"
                onClick={() => connectWallet()}
                sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}
              >Connect</PrimaryButton>
            )
          }
        </DToolbar>
      </Container>
    </AppBar>
  );
}