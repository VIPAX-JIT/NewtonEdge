import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiBookOpen, FiYoutube, FiCode, FiUsers, FiCheckCircle, FiClock, FiHeart, FiShare2 } from "react-icons/fi";
import VideoThumbnail from "../components/VideoThumbnail";
import "../styles/VideoThumbnail.css";

function Pandas() {
  const topics = [
    {
      title: "Introduction to Pandas Library",
      description: "Learn the fundamentals of Python's powerful data analysis library. Understand DataFrames, Series, and essential operations for data manipulation.",
      videos: [
        {
          id: "pandas-intro",
          title: "Introduction to Pandas Library",
          url: "https://www.youtube.com/embed/5rHmL0u4gHk",
          instructor: "Dr. Emily Johnson",
          duration: "55 minutes",
          level: "Beginner",
          viewCount: 1250
        }
      ],
      pdf: "https://example.com/pandas_intro.pdf"
    },
    {
      title: "Data Cleaning and Transformation",
      description: "Master essential techniques for preparing messy real-world data. Learn to handle missing values, duplicate data, and perform advanced transformations.",
      videos: [
        {
          id: "pandas-cleaning",
          title: "Data Cleaning and Transformation",
          url: "https://www.youtube.com/embed/gB5lnV7m2wA",
          instructor: "Prof. Michael Wong",
          duration: "65 minutes",
          level: "Intermediate",
          viewCount: 980
        }
      ],
      pdf: "https://example.com/pandas_data_manipulation.pdf"
    },
    {
      title: "Data Visualization with Pandas",
      description: "Create impactful visualizations directly from your DataFrame. Learn to use pandas' built-in plotting features and integration with other visualization libraries.",
      videos: [
        {
          id: "pandas-visualization",
          title: "Data Visualization with Pandas",
          url: "https://www.youtube.com/embed/a9UrKTVEeZA",
          instructor: "Dr. Samantha Lee",
          duration: "50 minutes",
          level: "Intermediate",
          viewCount: 850
        }
      ],
      pdf: "https://example.com/pandas_visualization.pdf"
    }
  ];

  const testimonials = [
    {
      name: "Kevin H.",
      role: "Data Analyst",
      content: "The Pandas course completely transformed my data analysis workflow. I'm now able to process datasets much more efficiently than with Excel.",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    {
      name: "Maya P.",
      role: "Business Intelligence Specialist",
      content: "Learning Pandas has been invaluable for my career. The instructors explain complex concepts in a way that's easy to follow and immediately applicable.",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Python Pandas for Data Analysis</h1>
        <p className="page-description">
          Master Python's powerful data analysis library for processing, cleaning, analyzing, 
          and visualizing data in various formats. Essential skills for data science and analytics.
        </p>
        
        
      </div>
      
      <div className="welcome-message">
        <div className="welcome-content">
          <h2>Python Pandas: The Data Analysis Powerhouse</h2>
          <p>
            Pandas is Python's premier data manipulation and analysis library, giving you the ability to 
            work with structured data seamlessly. It provides data structures and functions designed to make 
            data analysis fast, flexible, and expressive in Python.
          </p>
          <ul className="pandas-features">
            <li><strong>DataFrame Manipulation:</strong> Filter, transform, and reshape data with intuitive operations</li>
            <li><strong>Data Cleaning:</strong> Handle missing values, duplicates, outliers, and inconsistent data formats</li>
            <li><strong>Data Import/Export:</strong> Read and write multiple formats (CSV, Excel, SQL, JSON, Parquet)</li>
            <li><strong>Data Analysis:</strong> Aggregation, grouping, pivoting, and statistical functions</li>
            <li><strong>Visualization:</strong> Create insightful plots and charts with pandas and matplotlib integration</li>
            <li><strong>Time Series:</strong> Specialized tools for working with time-based data</li>
          </ul>
          <p>From financial analysis to scientific research and machine learning, Pandas is an essential tool in the modern data scientist's toolkit. Our curriculum takes you from the basics to advanced techniques through hands-on examples with real-world datasets.</p>
        </div>
        <img src="https://img.freepik.com/free-vector/charts-concept-illustration_114360-471.jpg" alt="Data Analysis" className="instructor-avatar" style={{ width: "200px", height: "auto", borderRadius: "8px" }} />
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
            <a href={topic.pdf} target="_blank" rel="noopener noreferrer" className="link">
              <FiBookOpen /> Download Course Materials
            </a>
            <a href={topic.videos[0].url} target="_blank" rel="noopener noreferrer" className="link">
              <FiYoutube /> Watch Full Lecture
            </a>
            <a href="#" className="link secondary-link">
              <FiCode /> Access Practice Datasets
            </a>
          </div>
        </div>
      ))}
      
     
      
      <div className="cta-section">
        <h2>Unlock the power of data analysis</h2>
        <p>Join thousands of students who are using Pandas to advance their careers in data science and analytics.</p>
        <button className="cta-button">Explore All Data Analysis Courses</button>
      </div>
    </div>
  );
}

export default Pandas;
