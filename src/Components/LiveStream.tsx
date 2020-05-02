import React, { ReactElement } from 'react';
import YouTube from 'react-youtube';

const SEARCH_QUERY = 'LIVE';
const CHANNEL_ID = 'UCb98v7T8Sn4i2IgxCBzjvNw';
const API_KEY = 'AIzaSyDPKyFRVOrGfu3FQ7k4hJoBxcxlkeY_fjE';
// eslint-disable-next-line max-len
const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&q=${SEARCH_QUERY}&key=${API_KEY}`;

type LiveStreamState = {
  videoId: string;
};

type LiveStreamProps = {
  videoId: string;
};

type YoutubeResponse = {
  items: YoutubeResponseItem[];
};

type YoutubeResponseItem = {
  id: {
    videoId: string;
    items: string;
  };
};

export class LiveStream extends React.Component<{}, LiveStreamState> {
  public state: LiveStreamState;

  constructor(props: LiveStreamProps, state: LiveStreamState) {
    super(props);
    this.state = state;
    if (props && props.videoId && !state.videoId) {
      state.videoId = props.videoId;
    }
  }

  public async componentDidMount(): Promise<void> {
    const response = await fetch(`${YOUTUBE_API}`);
    const responseJson = (await (response.json() as unknown)) as YoutubeResponse;
    const { items } = responseJson;

    if (items && items.length > 0) {
      const videoId = items[0].id.videoId;

      this.setState({ videoId });
    }
  }

  public render(): ReactElement {
    const { videoId } = this.state;

    // TODO switch between live / completed if there is a live event happening
    return <YouTube videoId={videoId} />;
  }
}
