import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" align='center' color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        HOMELLC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        flexDirection: 'column',
      }}>
      <Container maxWidth="sm">
        <Typography variant="body1">
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}