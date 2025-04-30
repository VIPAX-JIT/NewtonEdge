import React, { useState, useEffect } from "react";
import { FiBookOpen, FiYoutube, FiCode, FiUsers, FiCheckCircle, FiClock, FiHeart, FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import VideoThumbnail from "../components/VideoThumbnail";
import "../styles/VideoThumbnail.css";

function WAP() {
  const topics = [
    {
      title: "Introduction to Modern JavaScript",
      description: "Learn the fundamentals of JavaScript including variables, loops, and functions. This course covers ES6+ features and best practices for web development.",
      videos: [
        {
          id: "js-intro",
          title: "Introduction to Modern JavaScript",
          url: "https://www.youtube.com/embed/8aGhZQkoFbQ",
          instructor: "Prof. Emma Rodriguez",
          duration: "50 minutes",
          level: "Beginner",
          viewCount: 1800
        }
      ],
      pdf: "https://example.com/loops_in_js.pdf"
    },
    {
      title: "React.js Fundamentals",
      description: "Master the basics of React.js, including components, props, and state management. Learn how to build dynamic, responsive web applications.",
      videos: [
        {
          id: "react-fundamentals",
          title: "React.js Fundamentals",
          url: "https://www.youtube.com/embed/eIrMbAQSU34",
          instructor: "Dr. Jason Lee",
          duration: "65 minutes",
          level: "Intermediate",
          viewCount: 1600
        }
      ],
      pdf: "https://example.com/functions_in_js.pdf"
    },
    {
      title: "Responsive Web Design",
      description: "Explore techniques for creating websites that work on any device. Learn about media queries, flexbox, CSS Grid, and responsive frameworks.",
      videos: [
        {
          id: "responsive-design",
          title: "Responsive Web Design",
          url: "https://youtu.be/TGButYY1t3Q?si=UGmmqrU9npJssolq",
          instructor: "Prof. Olivia Chen",
          duration: "55 minutes",
          level: "Beginner",
          viewCount: 1400
        }
      ],
      pdf: "https://example.com/responsive_design.pdf"
    }
  ];

  const testimonials = [
    {
      name: "Mark T.",
      role: "Front-end Developer",
      content: "The WAP course helped me transition from basic HTML/CSS to building complex web applications. The React tutorials were especially helpful!",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      name: "Jennifer K.",
      role: "UX Designer",
      content: "As a designer, I needed to understand how my designs would be implemented. This course bridged that gap perfectly.",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Web Application Programming</h1>
        <p className="page-description">
          Comprehensive study materials for modern web development, 
          from JavaScript fundamentals to advanced frameworks and responsive design.
        </p>
        
        
      </div>
      
      <div className="welcome-message">
        <div className="welcome-content">
          <h2>Modern Web Development Technologies</h2>
          <p>
            Web Application Programming encompasses the full stack of technologies needed to build 
            dynamic, responsive web applications. From front-end interfaces to back-end servers 
            and databases, our curriculum covers the entire development lifecycle.
          </p>
          <ul className="web-dev-technologies">
            <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript, React, Angular, Vue.js</li>
            <li><strong>Back-End:</strong> Node.js, Express, Django, Ruby on Rails, PHP</li>
            <li><strong>Databases:</strong> MongoDB, MySQL, PostgreSQL, Firebase</li>
            <li><strong>DevOps:</strong> Git, CI/CD, Docker, AWS/Azure deployment</li>
          </ul>
          <p>Our project-based approach ensures you'll graduate with a portfolio of real applications that demonstrate your skills to potential employers.</p>
        </div>
        <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" alt="Web Development" className="instructor-avatar" style={{ width: "200px", height: "auto", borderRadius: "8px" }} />
      </div>
      
      {topics.map((topic, index) => (
        <div key={index} className="topic-card">
          <h2>{topic.title}</h2>
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
          
          <div className="video-frame">
            {topic.videos.map((video) => (
              <VideoThumbnail 
                key={video.id} 
                video={video} 
                onThumbnailClick={() => window.open(video.url, '_blank')}
              />
            ))}
          </div>
          
          <div className="topic-actions">
            <Link to={`/resources/wap/${index}`} className="link">
              <FiBookOpen /> Download Course Materials
            </Link>
            <Link to={`/videos/wap/${index}`} className="link">
              <FiYoutube /> Watch Full Lecture
            </Link>
            <Link to={`/exercises/wap/${index}`} className="link secondary-link">
              <FiCode /> Try Interactive Exercises
            </Link>
          </div>
        </div>
      ))}
      
     
      
      <div className="cta-section">
        <h2>Ready to become a web developer?</h2>
        <p>Join our community of developers and start building amazing web applications today.</p>
        <button className="cta-button">Explore All Web Dev Courses</button>
      </div>
    </div>
  );
}

export default WAP;
