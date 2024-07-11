import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import LiveShow from './LiveShow';
import AvatarImage from 'assets/images/users/AvatarImage.jpg'

function MainCard() {
  return (
    <Container>
      <CssBaseline />
      <LiveShow
        name="John Doe"
        additionalInfo1="Additional Info 1"
        additionalInfo2="Additional Info 2"
        imageUrl={AvatarImage} // Replace with actual image URL
      />
    </Container>
  );
}

export default MainCard;
