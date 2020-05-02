import React, { ReactElement } from 'react';
import { HomeBanner } from './HomeBanner';
import { Navbar } from '../Components/Navbar';
import { Features } from '../Components/Features';
import { Team } from '../Components/Team';
import { Footer } from '../Components/Footer';

export class HomePage extends React.Component {
  public render(): ReactElement {
    return (
      <>
        <Navbar />
        <HomeBanner />
        <Features />
        <Team />
        <Footer />
      </>
    );
  }
}
