import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imgUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick ={() => onVideoSelect(video)} className="list-group-item" tabindex="0">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} alt="" />
        </div>
        <div className="media-body">
          <div className="media-heading video-title" tabindex="0">{video.snippet.title}</div>
        </div>
      </div>
    </li>
    );
}

export default VideoListItem;
