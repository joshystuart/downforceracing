import React, { ReactElement } from 'react';
import YouTube from 'react-youtube';
import { youTubeDao, YoutubeResponseItem } from '../../../YouTube/YouTubeDao';
import dfrLogo from '../dfr-60.jpg';

type LiveStreamState = {
  videos: YoutubeResponseItem[];
};

type LiveStreamProps = {
  videos?: YoutubeResponseItem[];
};

const styles = {
  backgroundImage: `url(${dfrLogo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '95px 0 40px 0',
};

export class LiveStream extends React.Component<{}, LiveStreamState> {
  public state: LiveStreamState;

  constructor(props: LiveStreamProps, state: LiveStreamState) {
    super(props);
    this.state = state;
    if (props && props.videos && !state.videos) {
      this.state.videos = props.videos;
    }
  }

  public async componentDidMount(): Promise<void> {
    try {
      const videos = await youTubeDao.getLiveStream();

      if (videos && videos.length > 0) {
        this.setState({ videos });
      }
    } catch (e) {
      console.error(e);
    }
  }

  public render(): ReactElement {
    const { videos } = this.state;
    if (videos && videos.length > 0) {
      const videoId = videos[0].id.videoId;
      console.log(videos);

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
                width: '600px',
                // height: '200px',
              }}
            />
          </div>
        </section>
      );
    }

    return <></>;
  }
}
