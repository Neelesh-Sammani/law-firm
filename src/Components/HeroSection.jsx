import { Box, Typography,Button } from '@mui/material';
import React from 'react';
import HeroImg from '../assets/heroImg.svg';

const HeroSection = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-between'}} px={3} >
        <section style={{display:'flex',flexDirection:'column',gap:'3rem'}}>
            <Box>
                <Typography variant='h2'>
                    You don't have to
                </Typography>
                <Typography variant='h2' sx={{fontWeight:"bold"}}>
                    Fight them Alone.
                </Typography>
            </Box>
            <Box>
                <Typography variant='subtitle1' sx={{textWrap:'balance',opacity:'0.3'}}>
                    We are here to help you with all your legal needs. We are a team of experienced lawyers who are passionate about helping you. We have been in business for over 10 years and have helped thousands of people just like you.
                </Typography>
            </Box>
            <Box>
                <Typography variant='body1'>
                    <input type='text' />
                    <Button variant='contained'>let's talk</Button>
                </Typography>
            </Box>
        </section>
        <Box width='27.71944rem' height='35.55675rem'>
        <img src={HeroImg} alt='hero' width={'100%'} height={"100%"} />
        </Box>
    </Box>
  )
}

export default HeroSection;
