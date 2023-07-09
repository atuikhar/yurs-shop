import { useNavigate } from 'react-router-dom';

//@mui
import { Typography } from '@mui/material';
//components
import Page from 'src/components/Page';

//images
import Sneaker from 'src/assets/images/Sneaker.jpg';

//styled components
import { Container } from 'src/components/sharedStyles/styles';

//................................................

export default function Shop() {
  const navigate = useNavigate();
  return (
    <Page title="Welcome" meta="Shop Landing Page" img={Sneaker}>
      <Container>
        <Typography mt={10} mb={3} variant="h1" color="grey.700">
          SHOP LIST
        </Typography>
      </Container>
    </Page>
  );
}
