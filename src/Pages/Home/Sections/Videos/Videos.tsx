import React, { ReactElement } from 'react';
import { youTubeDao, YoutubeResponseItem } from '../../../../YouTube/YouTubeDao';
import YouTube from 'react-youtube';

type VideosState = {
  videos: YoutubeResponseItem[];
};

type VideosProps = {
  videos?: YoutubeResponseItem[];
};

export class Videos extends React.Component<VideosProps, VideosState> {
  public state: VideosState;

  constructor(props: VideosProps, state: VideosState) {
    super(props);
    this.state = state;
    if (props && props.videos && !state.videos) {
      this.state.videos = props.videos;
    }
  }

  public async componentDidMount(): Promise<void> {
    try {
      const videos = await youTubeDao.getRecentVideos();

      if (videos && videos.length > 0) {
        this.setState({ videos });
      }
    } catch (e) {
      console.error(e);
    }
  }

  public render(): ReactElement {
    const { videos = [] } = this.state;
    const videoList = videos.map((video: YoutubeResponseItem) => {
      return (
        <div key={video.id.videoId} className="col-lg-4">
          <div className="features-box">
            <YouTube
              videoId={video.id.videoId}
              opts={{
                playerVars: {
                  autoplay: 0,
                  controls: 2,
                  showinfo: 0,
                },
                // width: '350px',
                height: '200px',
              }}
              className="youtube-grid"
            />
          </div>
        </div>
      );
    });
    if (videoList.length > 0) {
      return (
        <section className="section bg-light" id="videos">
          <div className="container">
            <div className="row">{videoList}</div>
          </div>
        </section>
      );
    }

    return <></>;
  }
}
