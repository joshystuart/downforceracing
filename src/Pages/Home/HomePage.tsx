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
        <LiveStream
          videos={[
            {
              id: {
                videoId: '73p_bF3R_9w',
              },
            },
          ]}
        />
        <Videos
          videos={[
            {
              id: {
                videoId: 'sA_OascSM0g',
              },
            },
            {
              id: {
                videoId: 'x0vhgzBGMgM',
              },
            },
            {
              id: {
                videoId: 'aZROwa9IxlE',
              },
            },
            {
              id: {
                videoId: 'r2vRcBkp3UI',
              },
            },
            {
              id: {
                videoId: 'n4uLVr336zI',
              },
            },
            {
              id: {
                videoId: 'c3SA3Hd87Ng',
              },
            },
          ]}
        />
        <Team />
        <Footer />
      </>
    );
  }
}
