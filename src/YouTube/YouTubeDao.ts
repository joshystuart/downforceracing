const CHANNEL_ID = 'UCb98v7T8Sn4i2IgxCBzjvNw';
const API_KEY = 'AIzaSyDPKyFRVOrGfu3FQ7k4hJoBxcxlkeY_fjE';
const API_ENDPOINT = `https://www.googleapis.com/youtube/v3`;
const SEARCH = `/search`;

export type YoutubeResponse = {
  items: YoutubeResponseItem[];
};

export type YoutubeResponseItem = {
  id: {
    videoId: string;
  };
};

type YouTubeFilters = {
  eventType?: string;
  channelId?: string;
  key?: string;
  part?: string;
  type?: string;
  query?: string;
  maxResults?: number;
  order?: string;
};

type YouTubeOptions = {
  endpoint: string;
  filters?: YouTubeFilters;
  query?: string;
};

export class YouTubeDao {
  public async getRecentVideos(): Promise<YoutubeResponseItem[]> {
    return this.getVideos({
      endpoint: SEARCH,
      filters: {
        eventType: 'completed',
        channelId: CHANNEL_ID,
        maxResults: 6,
      },
    });
  }

  public async getLiveStream(): Promise<YoutubeResponseItem[]> {
    const response = await this.getVideos({
      endpoint: SEARCH,
      filters: {
        eventType: 'completed',
        channelId: CHANNEL_ID,
        maxResults: 1,
        order: 'date',
      },
      query: 'live',
    });

    return response;
  }

  private async getVideos(options: YouTubeOptions): Promise<YoutubeResponseItem[]> {
    const { endpoint, query, filters } = options;
    const params = this.getParams(filters, query);
    const uri = `${API_ENDPOINT}${endpoint}?${params}`;
    const response = await fetch(uri);

    const youtubeResponse = (await (response.json() as unknown)) as YoutubeResponse;
    if (youtubeResponse && youtubeResponse.items && youtubeResponse.items.length > 0) {
      return youtubeResponse.items;
    }

    const errorMessage = `Failed to get any videos from YouTube`;
    console.error(errorMessage, youtubeResponse);
    throw new Error(errorMessage);
  }

  private getParams(filters: YouTubeFilters = {}, query?: string): string {
    const params = { ...filters };

    params['key'] = API_KEY;
    params['part'] = 'snippet';
    params['type'] = 'video';

    if (query) {
      params['query'] = query;
    }

    return Object.entries(params)
      .map((param) => {
        return `${param[0]}=${param[1]}`;
      })
      .join('&');
  }
}

const youTubeDao = new YouTubeDao();

export { youTubeDao };
