import { AppBar, Box, Typography } from '@mui/material';

import Logo from 'src/assets/images/Logo.png';

export default function Header() {
  return (
    <AppBar elevation={0} sx={{ p: 2, background: 'transparent' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <img height={50} width={50} src={String(Logo)} alt="logo" />
          <Typography ml={2} align="center" variant="h1" color="grey.700">
            Yurs-shop
          </Typography>
        </Box>
      </Box>
    </AppBar>
  );
}
