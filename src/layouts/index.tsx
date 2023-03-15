import { Outlet } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <div>
        {' '}
        <Outlet />
      </div>
    </Box>
  );
}
