//@mui
import { Box } from '@mui/material';

//components
import Page from 'src/components/Page';

//images
import Sneaker from 'src/assets/images/Sneaker.jpg';

//................................................

export default function Welcome() {
  return (
    <Page title="Welcome" meta="Shop Landing Page" img={Sneaker}>
      <Box />
    </Page>
  );
}
