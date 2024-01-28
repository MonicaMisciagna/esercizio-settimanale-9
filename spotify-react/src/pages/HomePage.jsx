import React from 'react';
import {  Container } from 'react-bootstrap'; // Assuming you are using Bootstrap for styling
import TopBar from '../components/TopBar';
import MainComp from '../components/TopBar';
export default function HomePage() {
  return (
    <Container>
      <TopBar />
      <MainComp />
    </Container>
  );
}
