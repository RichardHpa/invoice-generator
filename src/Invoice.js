import React from 'react';
import logo from './logo.svg';
import { Container, Grid, Typography } from '@material-ui/core';

export default function Invoice() {
  return (
    <Container>
      <Grid container justify="space-between">
        <Grid item>
          <img src={logo} alt="Logo" />
          <Typography variant="h5">React Design</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h1">Paid</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
