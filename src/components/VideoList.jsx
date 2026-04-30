import '../styles/VideoList.css'

const VideoItem = ({ video, onSelect }) => {
  const { title, channelTitle, thumbnail } = video

  return (
    <li className="video-item">
      <button
        className="video-item__button"
        onClick={() => onSelect(video)}
        aria-label={`Play ${title}`}
      >
        <img
          src={thumbnail}
          alt={title}
          className="video-item__thumbnail"
        />
        <div className="video-item__info">
          <p className="video-item__title">{title}</p>
          <p className="video-item__channel">{channelTitle}</p>
        </div>
      </button>
    </li>
  )
}

const VideoList = ({ videos, onSelect }) => {
  if (!videos || videos.length === 0) {
    return (
      <aside className="video-list video-list--empty">
        <p>No videos to display.</p>
      </aside>
    )
  }

  return (
    <aside className="video-list">
      <ul className="video-list__items">
        {videos.map((video) => (
          <VideoItem
            key={video.videoId}
            video={video}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </aside>
  )
}

export default VideoList