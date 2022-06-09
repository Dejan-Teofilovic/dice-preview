import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import MotionDiv from '../../components/MotionDiv';
import {
  FONT_IBM_PLEX,
  varFadeInDown,
  varFadeInLeft,
  varFadeInRight,
  varFadeInUp
} from '../../utils/constants';
import { DTextField, PrimaryButton } from '../../components/styledComponents';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ pb: 3 }}>
      <Grid container flexDirection={{ xs: 'column-reverse', md: 'row' }} spacing={{ xs: 0, sm: 14, md: 0 }}>
        <Grid item xs={12} md={6}>
          <MotionDiv variants={varFadeInUp}>
            <Typography
              mt={{ xs: 5, sm: 5, md: 5, lg: 15 }}
              fontSize={{ xs: 28, md: 48 }}
              fontFamily="sfProRounded"
              fontWeight={900}
              textAlign={{ xs: 'center', md: 'left' }}
              color="white"
              letterSpacing={3}
            >
              <Typography
                component="span"
                fontSize={{ xs: 32, md: 54 }}
                fontFamily={FONT_IBM_PLEX}
                fontWeight="inherit"
                fontStyle="italic"
                color="#A1275D"
              >What if</Typography>&nbsp;you can touch your Avatar NFT?
            </Typography>
          </MotionDiv>

          <MotionDiv variants={varFadeInDown}>
            <Typography
              mt={5}
              fontSize={{ xs: 22, md: 36 }}
              fontFamily="sfProRounded"
              fontWeight={900}
              textAlign="center"
              color="white"
              letterSpacing={3}
            >
              Be the first to know
            </Typography>
          </MotionDiv>

          <Grid container spacing={{ xs: 1, md: 3 }} sx={{ pt: 2 }}>
            <Grid item xs={12} sm={9} md={9}>
              <MotionDiv variants={varFadeInLeft}>
                <DTextField
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  fullWidth
                />
              </MotionDiv>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <MotionDiv variants={varFadeInRight}>
                <PrimaryButton
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: 0,
                    fontSize: 16,
                    py: 1
                  }}
                >Join Waiting List</PrimaryButton>
              </MotionDiv>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <MotionDiv variants={varFadeInUp}>
            <Stack mt={5} alignItems="center">
              <Box
                component="img"
                src="/assets/images/hero.png"
                width={{ xs: '70%', sm: '50%', md: '70%' }}
              />
            </Stack>
          </MotionDiv>
        </Grid>
      </Grid>
    </Container>
  );
}