import { Outlet } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';

import Header from 'src/layouts/header';

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <Header />
      <div>
        <Outlet />
      </div>
    </Box>
  );
}
