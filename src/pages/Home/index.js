import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from "formik";
import ErrorIcon from '@mui/icons-material/Error';
import MotionDiv from '../../components/MotionDiv';
import {
  ERROR,
  FONT_IBM_PLEX,
  INFO,
  SUCCESS,
  varFadeInDown,
  varFadeInLeft,
  varFadeInRight,
  varFadeInUp,
  WARNING
} from '../../utils/constants';
import { DTextField, PrimaryButton } from '../../components/styledComponents';
import useWallet from '../../hooks/useWallet';
import useAlertMessage from '../../hooks/useAlertMessage';
import useLoading from '../../hooks/useLoading';
import api from '../../utils/api';

const validSchema = yup.object().shape({
  email: yup.string().email('Invaild email.').required('Email is required.'),
});

export default function Home() {
  const { walletConnected, currentAccount } = useWallet();
  const { openAlert } = useAlertMessage();
  const { openLoading, closeLoading } = useLoading();

  const handleSubmit = async (values) => {
    if (walletConnected) {
      openLoading();
      api.post('/preview/saveUserdata', { ...values, walletAddress: currentAccount })
        .then(response => {
          openAlert({
            severity: SUCCESS,
            message: "You've been joined in our waiting list. Thank you."
          });
          closeLoading();
        })
        .catch(error => {
          console.log('# error.response => ', error.response);
          if (error.response.status === 400) {
            openAlert({
              severity: INFO,
              message: "You were already joined."
            });
          } else {
            openAlert({
              severity: ERROR,
              message: "Server error. Try again in a few minutes, please."
            });
          }
          closeLoading();
        });
    } else {
      openAlert({
        severity: WARNING,
        message: "Connect your wallet, please."
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      return handleSubmit(values);
    }
  });

  return (
    <Container maxWidth="xl" sx={{ pb: 3 }}>
      <Grid container flexDirection={{ xs: 'column-reverse', md: 'row' }} spacing={{ xs: 0, sm: 14, md: 0 }}>
        <Grid item xs={12} md={6}>
          <MotionDiv variants={varFadeInUp}>
            <Typography
              mt={{ xs: 5, sm: 5, md: 5, lg: 15 }}
              fontSize={{ xs: 22, md: 32 }}
              fontFamily="sfProRounded"
              fontWeight={900}
              textAlign={{ xs: 'center', md: 'left' }}
              color="white"
              letterSpacing={3}
            >
              <Typography
                component="span"
                fontSize={{ xs: 28, md: 46 }}
                fontFamily={FONT_IBM_PLEX}
                fontWeight="inherit"
                fontStyle="italic"
                color="#A1275D"
              >What if</Typography>&nbsp;you can touch your Avatar NFT?
            </Typography>
          </MotionDiv>

          <Box mr={{ xs: 0, sm: 3, md: 6 }}>
            <MotionDiv variants={varFadeInDown}>
              <Typography
                mt={8}
                fontSize={{ xs: 18, md: 24 }}
                fontFamily="sfProRounded"
                fontWeight={900}
                textAlign="center"
                color="white"
                letterSpacing={3}
              >
                Be the first to know
              </Typography>
            </MotionDiv>

            <Stack direction="row" justifyContent="center" width="100%">
              <Box pt={2} width={{ md: '90%', xl: "80%" }}>
                <Grid container spacing={{ xs: 1, md: 3 }} alignItems="center">
                  <Grid item xs={12} sm={7} md={7}>
                    <MotionDiv variants={varFadeInLeft}>
                      <DTextField
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={
                          formik.touched.email && formik.errors.email && (
                            <Typography
                              component="span"
                              fontSize={14}
                              fontWeight={700}
                              sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                            >
                              <ErrorIcon />&nbsp;
                              {formik.touched.email && formik.errors.email}
                            </Typography>)
                        }
                        fullWidth
                      />
                    </MotionDiv>
                  </Grid>
                  <Grid item xs={12} sm={5} md={5}>
                    <MotionDiv variants={varFadeInRight}>
                      <PrimaryButton
                        variant="contained"
                        fullWidth
                        sx={{
                          borderRadius: 0,
                          fontSize: { xs: 12, sm: 14, md: 16 },
                          textTransform: 'uppercase'
                        }}
                        onClick={formik.handleSubmit}
                      >Join Waiting List</PrimaryButton>
                    </MotionDiv>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <MotionDiv variants={varFadeInUp}>
            <Stack mt={5} alignItems="center">
              <Box
                component="img"
                src="/assets/images/hero.png"
                width={{ xs: '70%', sm: '50%', md: '50%' }}
              />
            </Stack>
          </MotionDiv>
        </Grid>
      </Grid>
    </Container>
  );
}