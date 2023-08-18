import { Container } from '@mui/material';
import React from 'react'

export default function Footer() {
  return (
    <Container>
      <div className="w-full justify-between">
        <div>
          <a href="/">SmartSpend</a> © 2023
        </div>
        <div>Powered by Artificers</div>
      </div>
    </Container>
  );
}