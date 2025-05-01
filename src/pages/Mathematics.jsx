import React, { useState, useEffect } from "react";
import { FiBookOpen, FiYoutube, FiCode, FiUsers, FiCheckCircle, FiClock, FiHeart, FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import VideoThumbnail from "../components/VideoThumbnail";
import "../styles/VideoThumbnail.css";

function Mathematics() {
  const topics = [
    {
      title: "Calculus Fundamentals",
      description: "Master the essential concepts of calculus, including limits, derivatives, and integrals. Learn applications in real-world problem solving and computer science.",
      videos: [
        {
          id: "calc-fundamentals",
          title: "Calculus Fundamentals",
          url: "https://www.youtube.com/embed/WUvTyaaNkzM",
          instructor: "Dr. Robert Chen",
          duration: "70 minutes",
          level: "Intermediate",
          viewCount: 1500
        }
      ],
      pdf: "https://example.com/calculus_basics.pdf"
    },
    {
      title: "Linear Algebra Essentials",
      description: "Explore vectors, matrices, transformations and their applications in computer graphics, machine learning, and data analysis.",
      videos: [
        {
          id: "linear-algebra",
          title: "Linear Algebra Essentials",
          url: "https://www.youtube.com/embed/kYB8IZAhA1A",
          instructor: "Prof. Maria Garcia",
          duration: "65 minutes",
          level: "Intermediate",
          viewCount: 1300
        }
      ],
      pdf: "https://example.com/linear_algebra_notes.pdf"
    },
    {
      title: "Discrete Mathematics",
      description: "Study mathematical structures that are fundamentally discrete. Learn about logic, set theory, combinatorics, and graph theory for computer science applications.",
      videos: [
        {
          id: "discrete-math",
          title: "Discrete Mathematics",
          url: "https://www.youtube.com/embed/rdXw7Ps9vxc",
          instructor: "Dr. James Wilson",
          duration: "55 minutes",
          level: "Advanced",
          viewCount: 1100
        }
      ],
      pdf: "https://example.com/discrete_math.pdf"
    }
  ];

  const testimonials = [
    {
      name: "Daniel R.",
      role: "Computer Science Major",
      content: "The Mathematics courses helped me understand the theoretical foundations behind algorithms. Dr. Chen explains calculus in such an intuitive way!",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "Sophia L.",
      role: "Data Scientist",
      content: "Linear algebra is critical in my work with machine learning models. These lectures connected the theory with practical applications brilliantly.",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Mathematics for Computer Science</h1>
        <p className="page-description">
          Comprehensive courses covering the mathematical foundations essential for computer science, 
          data analysis, machine learning, and algorithm development.
        </p>
      </div>
      
      <div className="welcome-message">
        <div className="welcome-content">
          <h2>Essential Mathematics for Computer Science</h2>
          <p>
            Mathematics provides the theoretical foundation for computer science and is crucial for 
            understanding algorithms, data structures, artificial intelligence, and many other computational fields. 
            Our curriculum focuses on applied mathematics with direct relevance to computing.
          </p>
          <ul className="math-topics">
            <li><strong>Discrete Mathematics:</strong> Sets, logic, combinatorics, graph theory</li>
            <li><strong>Linear Algebra:</strong> Vectors, matrices, transformations, eigenvalues</li>
            <li><strong>Probability & Statistics:</strong> Random variables, distributions, hypothesis testing</li>
            <li><strong>Calculus:</strong> Derivatives, integrals, multivariable calculus for optimization</li>
            <li><strong>Number Theory:</strong> Modular arithmetic, prime numbers, cryptography applications</li>
          </ul>
          <p>Each topic includes practical examples demonstrating its application in real-world computing problems, from algorithm analysis to machine learning.</p>
        </div>
        <img src="https://img.freepik.com/free-vector/mathematics-concept-illustration_114360-3972.jpg" alt="Mathematics Concepts" className="instructor-avatar" style={{ width: "200px", height: "auto", borderRadius: "8px" }} />
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
            <Link to={`/resources/mathematics/${index}`} className="link">
              <FiBookOpen /> Download Course Materials
            </Link>
            <Link to={`/videos/mathematics/${index}`} className="link">
              <FiYoutube /> Watch Full Lecture
            </Link>
            <Link to={`/problems/mathematics/${index}`} className="link secondary-link">
              <FiCode /> Try Practice Problems
            </Link>
          </div>
        </div>
      ))}
      
      {/*  */}
      
      <div className="cta-section">
        <h2>Build your mathematical foundation</h2>
        <p>Master the mathematical concepts that will advance your skills in programming and computer science.</p>
        <button className="cta-button">Explore All Mathematics Courses</button>
      </div>
    </div>
  );
}

export default Mathematics;