import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import ParkingCamera from './ParkingCamera';
import AvatarImage from 'assets/images/users/AvatarImage.jpg'

function MainCameraCard() {
  return (
    <Container>
      <CssBaseline />
      <ParkingCamera
        name="John Doe"
        additionalInfo1="Additional Info 1"
        additionalInfo2="Additional Info 2"
        imageUrl={AvatarImage} // Replace with actual image URL
      />
    </Container>
  );
}

export default MainCameraCard;
