import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiBookOpen, FiYoutube, FiCode, FiUsers, FiCheckCircle, FiClock, FiHeart, FiShare2 } from "react-icons/fi";
import VideoThumbnail from "../components/VideoThumbnail";
import "../styles/VideoThumbnail.css";
import "../styles/IKS.css";

function IKS() {
  const topics = [
    {
      title: "Introduction to Indigenous Knowledge Systems",
      description: "Learn about the foundations and importance of indigenous knowledge systems from around the world. Explore how traditional wisdom contributes to modern science and technology.",
      videos: [
        {
          id: "iks-intro-1",
          title: "Introduction to Indigenous Knowledge Systems",
          url: "https://www.youtube.com/watch?v=7dcdFkTRRcg",
          instructor: "Prof. Rahul Sharma",
          duration: "60 minutes",
          level: "Beginner",
          viewCount: 1200
        },
        {
          id: "iks-intro-2",
          title: "Traditional Knowledge and Modern Science",
          url: "https://www.youtube.com/watch?v=6N7vV15F_EI",
          instructor: "Dr. Priya Patel",
          duration: "45 minutes",
          level: "Beginner",
          viewCount: 850
        }
      ],
      pdf: "https://example.com/iks_intro.pdf"
    },
    {
      title: "Indian Knowledge Systems & Technology",
      description: "Explore ancient Indian contributions to mathematics, astronomy, medicine, architecture, and sustainable practices that remain relevant in contemporary contexts.",
      videos: [
        {
          id: "iks-india-1",
          title: "Ancient Indian Mathematics",
          url: "https://www.youtube.com/watch?v=WUvTyaaNkzM",
          instructor: "Dr. Ananya Desai",
          duration: "50 minutes",
          level: "Intermediate",
          viewCount: 950
        },
        {
          id: "iks-india-2",
          title: "Traditional Indian Medicine",
          url: "https://www.youtube.com/watch?v=kYB8IZAhA1A",
          instructor: "Dr. Rajesh Kumar",
          duration: "55 minutes",
          level: "Intermediate",
          viewCount: 720
        }
      ],
      pdf: "https://example.com/iks_india.pdf"
    },
    {
      title: "Traditional Knowledge in Modern Applications",
      description: "Discover how indigenous knowledge is being applied to address current challenges in sustainability, medicine, agriculture, and environmental conservation.",
      videos: [
        {
          id: "iks-modern-1",
          title: "Sustainable Agriculture Practices",
          url: "https://www.youtube.com/watch?v=rdXw7Ps9vxc",
          instructor: "Dr. Meera Singh",
          duration: "40 minutes",
          level: "Intermediate",
          viewCount: 800
        },
        {
          id: "iks-modern-2",
          title: "Traditional Architecture",
          url: "https://www.youtube.com/watch?v=5rHmL0u4gHk",
          instructor: "Prof. Arjun Verma",
          duration: "65 minutes",
          level: "Intermediate",
          viewCount: 650
        }
      ],
      pdf: "https://example.com/iks_modern.pdf"
    }
  ];

  const handleThumbnailClick = (video) => {
    window.open(video.url, '_blank');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Indigenous Knowledge Systems</h1>
        <p className="page-description">
          Explore traditional wisdom and indigenous knowledge systems from around the world,
          with special focus on Indian contributions to science, mathematics, and technology.
        </p>
      </div>

      <div className="welcome-message">
        <div className="welcome-content">
          <h2>Indigenous Knowledge Systems: Ancient Wisdom for Modern Times</h2>
          <p>
            Indigenous Knowledge Systems (IKS) represent the time-tested wisdom accumulated by cultures 
            around the world over thousands of years of observation, experimentation, and adaptation. 
            These knowledge systems offer valuable insights for addressing contemporary challenges.
          </p>
          <ul className="iks-domains">
            <li><strong>Traditional Medicine:</strong> Herbal remedies, holistic healing approaches, Ayurveda, Traditional Chinese Medicine</li>
            <li><strong>Sustainable Agriculture:</strong> Crop rotation, water harvesting, biodiversity preservation</li>
            <li><strong>Ancient Engineering:</strong> Architecture, metallurgy, irrigation systems, traditional construction methods</li>
            <li><strong>Astronomical Knowledge:</strong> Calendrical systems, celestial navigation, seasonal predictions</li>
            <li><strong>Traditional Ecology:</strong> Conservation practices, ecosystem management, weather forecasting</li>
          </ul>
          <p>Our curriculum explores these knowledge systems with a focus on their scientific basis and potential applications in modern contexts, from biodiversity conservation to sustainable development.</p>
        </div>
        <img src="https://img.freepik.com/free-vector/hand-drawn-ayurveda-elements_23-2149006480.jpg" alt="Indigenous Knowledge" className="instructor-avatar" />
      </div>

      <div className="topics-container">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            <h2 className="topic-title">{topic.title}</h2>
            <p className="topic-description">{topic.description}</p>
            
            <div className="topic-meta">
              <div className="meta-item">
                <FiUsers />
                <span>Instructor: {topic.videos[0].instructor}</span>
              </div>
              <div className="meta-item">
                <FiClock />
                <span>Duration: {topic.videos[0].duration}</span>
              </div>
              <div className="meta-item">
                <FiCode />
                <span>Level: {topic.videos[0].level}</span>
              </div>
            </div>

            <div className="videos-container">
              {topic.videos.map((video, videoIndex) => (
                <VideoThumbnail
                  key={videoIndex}
                  video={video}
                  onThumbnailClick={handleThumbnailClick}
                />
              ))}
            </div>

            <div className="topic-actions">
              {topic.pdf && (
                <a href={topic.pdf} className="link" target="_blank" rel="noopener noreferrer">
                  <FiBookOpen /> Download Course Materials
                </a>
              )}
              <a href={topic.videos[0].url} className="link" target="_blank" rel="noopener noreferrer">
                <FiYoutube /> Watch Full Lecture
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Discover ancient wisdom for modern challenges</h2>
        <p>Learn how traditional knowledge systems continue to inform and inspire contemporary science and technology.</p>
        <button className="cta-button">Explore All IKS Courses</button>
      </div>
    </div>
  );
}

export default IKS;
