import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";


export default function BasicButtons() {

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#a594f9ff",
        darker: "#242038ff",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  return (
    <Stack spacing={2} direction="row">
      <ThemeProvider theme={theme}>
      <Button variant="contained" type='submit' color='primary'>Send Message</Button>
      </ThemeProvider>
    </Stack>
  );
}