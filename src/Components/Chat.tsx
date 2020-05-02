import React, { ReactElement } from 'react';

export class Chat extends React.Component {
  public render(): ReactElement {
    return (
      <iframe
        src="https://embed.restream.io/player/index.html?token=5be55b6316dff5c2a859af94afff0727"
        width="640"
        height="396"
        frameBorder="0"
        allowFullScreen
      />
    );
  }
}
