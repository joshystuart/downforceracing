import React, { ReactElement } from 'react';
import { YoutubeResponseItem } from '../../../../YouTube/YouTubeDao';
import YouTube from 'react-youtube';

export type VideosProps = {
  videos?: YoutubeResponseItem[];
};

export class Videos extends React.Component<VideosProps> {
  public render(): ReactElement {
    const { videos = [] } = this.props;
    const videoList = videos.map((video: YoutubeResponseItem) => {
      const {
        id: { videoId },
      } = video;

      return (
        <div key={videoId} className="col-lg-4">
          <div className="features-box">
            <YouTube
              videoId={videoId}
              opts={{
                playerVars: {
                  autoplay: 0,
                  controls: 2,
                  showinfo: 0,
                  modestbranding: 1,
                },
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
        <section className="section pt-4 bg-secondary" id="videos">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1 className="section-title text-center text-white">Videos</h1>
              </div>
            </div>
            <div className="row">{videoList}</div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="section pt-4 bg-secondary" id="videos">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1 className="section-title text-center text-white">Videos</h1>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}
