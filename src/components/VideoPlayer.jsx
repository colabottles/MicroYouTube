import { formatDescription } from '../utils/formatDescription'
import '../styles/VideoPlayer.css'

const VideoPlayer = ({ video }) => {
  if (!video) {
    return (
      <div className="video-player video-player--empty">
        <p>Search for a video to get started.</p>
      </div>
    )
  }

  const { videoId, title, channelTitle, description } = video
  const formattedDescription = formatDescription(description)

  return (
    <div className="video-player">
      <div className="video-player__embed">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className="video-player__info">
        <h2 className="video-player__title">{title}</h2>
        <p className="video-player__channel">{channelTitle}</p>
        <details className="video-player__details">
  <summary className="video-player__summary">
    Read More
    <svg
      className="video-player__summary-arrow"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </summary>
  <div
    className="video-player__description-full"
    dangerouslySetInnerHTML={{ __html: formattedDescription }}
  />
</details>
      </div>
    </div>
  )
}

export default VideoPlayer