import React from 'react';
import { FiPlay, FiClock, FiUsers } from 'react-icons/fi';

function VideoThumbnail({ video, onThumbnailClick }) {
  // Extract video ID from YouTube URL
  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(video.url);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '/images/default-thumbnail.jpg';

  return (
    <div className="video-thumbnail" onClick={() => onThumbnailClick(video)}>
      <div className="thumbnail-image">
        <img src={thumbnailUrl} alt={video.title} />
        <div className="play-overlay">
          <FiPlay className="play-icon" />
        </div>
        <div className="duration-badge">
          <FiClock className="duration-icon" />
          <span>{video.duration}</span>
        </div>
      </div>
      <div className="thumbnail-info">
        <h3>{video.title}</h3>
        <div className="video-meta">
          <span className="instructor">
            <FiUsers className="meta-icon" />
            {video.instructor}
          </span>
          <span className="views">
            {video.viewCount.toLocaleString()} views
          </span>
        </div>
        <div className="level-badge">{video.level}</div>
      </div>
    </div>
  );
}

export default VideoThumbnail; 