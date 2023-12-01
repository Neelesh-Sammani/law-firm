import './App.css';
import { Box,Stack } from '@mui/material';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import IntroPanel from './Components/IntroPanel';
import WhyChooseUs from './Components/WhyChooseUs';

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
      </Stack>
    </Box>
  );
}

export default App;
