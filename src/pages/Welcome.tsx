import { useNavigate } from 'react-router-dom';

//@mui
import { Box, Typography } from '@mui/material';
//components
import Page from 'src/components/Page';

//images
import Sneaker from 'src/assets/images/Sneaker.jpg';

//mui-icons
import TouchAppIcon from '@mui/icons-material/TouchApp';
//styled components
import { Container, CustomButton } from 'src/components/sharedStyles/styles';

//paths
import { PATH_MAIN } from 'src/routes/paths';

//................................................

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <Page title="Welcome" meta="Shop Landing Page" img={Sneaker}>
      <Container>
        <Box textAlign={{ xs: 'center', sm: 'center', md: 'left' }}>
          <Typography mt={10} mb={3} variant="h1" color="grey.700">
            Welcome to YURS_SHOP
          </Typography>
          <CustomButton
            onClick={() => navigate(PATH_MAIN.shopping)}
            startIcon={<TouchAppIcon fontSize="large" />}
          >
            Explore
          </CustomButton>
        </Box>
      </Container>
    </Page>
  );
}
