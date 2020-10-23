import React from 'react';

const VideoDetail = ({video}) =>{
  if(!video) {
    return <div className="video-container">Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const title = `video.id.title`;
  return (
    <section className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={title}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div className="desc-video">{video.snippet.description}</div>
      </div>
    </section>
  );
}

export default VideoDetail;
