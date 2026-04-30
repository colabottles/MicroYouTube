import axios from 'axios'

const API_KEY: string = import.meta.env.VITE_YOUTUBE_API_KEY as string
const BASE_URL: string = 'https://www.googleapis.com/youtube/v3'

export interface Video {
  videoId: string
  title: string
  channelTitle: string
  description: string
  thumbnail: string
}

interface YouTubeSearchItem {
  id: { videoId: string }
  snippet: {
    title: string
    channelTitle: string
    description: string
    thumbnails: {
      medium: { url: string }
    }
  }
}

interface YouTubeVideoItem {
  id: string
  snippet: {
    description: string
  }
}

export const searchVideos = async (query: string): Promise<Video[]> => {
  const searchResponse = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      maxResults: 7,
      key: API_KEY,
      q: query,
      type: 'video'
    }
  })

  const items: YouTubeSearchItem[] = searchResponse.data.items

  const videoIds = items.map((item) => item.id.videoId).join(',')

  const videoResponse = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: 'snippet',
      id: videoIds,
      key: API_KEY
    }
  })

  const fullDescriptions: Record<string, string> = {}
  videoResponse.data.items.forEach((item: YouTubeVideoItem) => {
    fullDescriptions[item.id] = item.snippet.description
  })

  return items.map((item) => ({
    videoId: item.id.videoId,
    title: item.snippet.title,
    channelTitle: item.snippet.channelTitle,
    description: fullDescriptions[item.id.videoId] || item.snippet.description,
    thumbnail: item.snippet.thumbnails.medium.url
  }))
}