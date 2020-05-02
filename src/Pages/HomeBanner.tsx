import React, { ReactElement } from 'react';
import dfrLogo from './dfr-60.jpg';
import { LiveStream } from '../Components/LiveStream';

export function HomeBanner(): ReactElement {
  const styles = {
    backgroundImage: `url(${dfrLogo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '95px 0 40px 0',
  };

  return (
    <section id="home" style={styles}>
      <div className="bg-overlay" />
      <div className="col-lg-8 offset-lg-2 text-center">
        <LiveStream />
      </div>
    </section>
  );
}
