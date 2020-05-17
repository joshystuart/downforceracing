import React, { ReactElement } from 'react';
import YouTube from 'react-youtube';
import { YoutubeResponseItem } from '../../../YouTube/YouTubeDao';
import dfrLogo from '../dfr-60.jpg';

type LiveStreamProps = {
  videos?: YoutubeResponseItem[];
};

const styles = {
  backgroundImage: `url(${dfrLogo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '95px 0 40px 0',
};

export class LiveStream extends React.Component<LiveStreamProps> {
  public render(): ReactElement {
    const { videos } = this.props;
    if (videos && videos.length > 0) {
      const videoId = videos[0].id.videoId;

      return (
        <section id="home" style={styles}>
          <div className="bg-overlay" />
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="text-white">Recent live stream</h2>
            <YouTube
              videoId={videoId}
              opts={{
                playerVars: {
                  autoplay: 0,
                  controls: 2,
                  showinfo: 0,
                },
                width: '650px',
                height: '365px',
              }}
            />
          </div>
        </section>
      );
    }

    return <></>;
  }
}
