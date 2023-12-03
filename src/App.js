import './App.css';
import { Box,Stack } from '@mui/material';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import IntroPanel from './Components/IntroPanel';
import WhyChooseUs from './Components/WhyChooseUs';
import GridArea from './Components/GridArea';
import Clients from './Components/Clients';
import TeamPanel from './Components/TeamPanel';
import Faq from './Components/Faq';
import NewsLetter from './Components/NewsLetter';
import Footer from './Components/Footer';

function App() {
  return (
    <Box className="App" sx={{backgroundColor:'page.main'}}>
      <Box sx={{backgroundColor:'page.secondary'}} mb={4}>
      <Header />
      <HeroSection />
      </Box>
      <Stack spacing={4} mb={4} mx={3}>
      <IntroPanel />
      <WhyChooseUs />
      <GridArea />
      <Clients />
      <TeamPanel />
      <Faq />
      <NewsLetter />
      </Stack>
      <Footer />
    </Box>
  );
}

export default App;
