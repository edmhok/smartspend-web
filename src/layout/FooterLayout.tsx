import { Container } from '@mui/material';
import React from 'react'

export default function Footer() {
  return (
    <Container>
      <div className="w-full flex-row flex justify-between">
        <div>
          <a className="text-decoration-none" href="#">SmartSpend</a>
          {' '}
          © 2023
        </div>
        <div className="ms-md-auto">
          Powered by&nbsp;Artificers
        </div>
      </div>
    </Container>
  );
}