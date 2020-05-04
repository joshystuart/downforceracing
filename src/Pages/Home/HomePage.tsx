import React, { ReactElement } from 'react';
import { Navbar } from '../Sections/Navbar';
import { Videos } from './Sections/Videos/Videos';
import { Team } from './Sections/Team/Team';
import { Footer } from '../Sections/Footer';
import { LiveStream } from './Sections/LiveStream';

export class HomePage extends React.Component {
  public render(): ReactElement {
    return (
      <>
        <Navbar />
        <LiveStream />
        <Videos />
        <Team />
        <Footer />
      </>
    );
  }
}
