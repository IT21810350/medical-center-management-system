import React from 'react';
import { Container } from '@mui/material';

const BackgroundContainer = ({ imageUrl, minHeight, children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: minHeight || '100vh',
    opacity:1
  };

  return (
    <div style={backgroundStyle}>
      {children}
    </div>
  );
};

export default BackgroundContainer;