import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { SidebarData } from "../data/SidebarData";
import { FiBookOpen, FiUsers, FiAward } from "react-icons/fi";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="video-container">
          <video autoPlay muted loop>
            <source src="/ajeenkya copy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to NewtonEdge!</h1>
            <p className="hero-subtitle">
              Your go-to platform for organized educational resources, helping students excel in subjects like Data Structures, Python, JavaScript, and AI.
            </p>
            <Link to="/dsa" className="cta-button">Get Started</Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">About Newton School</h2>
          <p className="about-description">
            NewtonEdge is your ultimate platform for seamless access to a wealth of educational resources, specifically designed to empower students in their college studies. Whether you're diving into Data Structures, mastering Python, exploring JavaScript, or expanding your knowledge in AI and other essential subjects, NewtonEdge offers a well-organized library of video tutorials, PDF guides, and interactive content to enhance your learning experience.
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <FiBookOpen className="feature-icon" />
            <h3 className="feature-title">Comprehensive Learning</h3>
            <p className="feature-description">Access a wide range of video tutorials, PDFs, and guides curated to help you master key college subjects</p>
          </div>
          <div className="feature-card">
            <FiUsers className="feature-icon" />
            <h3 className="feature-title">Expert Guidance</h3>
            <p className="feature-description">Learn from professors and experts who provide in-depth explanations and insights on various topics</p>
          </div>
          <div className="feature-card">
            <FiAward className="feature-icon" />
            <h3 className="feature-title">Structured Learning</h3>
            <p className="feature-description">Follow a step-by-step approach to mastering subjects and preparing for exams</p>
          </div>
        </div>
      </section>

      <div className="subjects-section">
        <h2>Explore Our Courses</h2>
        <p className="section-description">
          Browse our comprehensive range of technical courses designed to build your skills from the ground up
        </p>
        <div className="subjects-grid">
          {SidebarData.filter(subject => subject.title !== "Home").map((subject, index) => (
            <Link 
              to={subject.link} 
              className="subject-card" 
              key={index}
            >
              <div className="icon">{subject.icon}</div>
              <div className="subject-title">{subject.title}</div>
              <div className="subject-description">
                {getSubjectDescription(subject.title)}
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="cta-banner">
        <h2>Ready to start your learning journey?</h2>
        <p>Join thousands of students already benefiting from Newton School's resources</p>
        <button className="cta-button">Get Started Today</button>
      </div>
    </div>
  );
}

// Helper function to get descriptions for subjects
function getSubjectDescription(title) {
  const descriptions = {
    "DSA": "Master algorithms and data structures essential for coding interviews",
    "WAP": "Learn web application development with modern frameworks",
    "MATHEMATICS": "Build the mathematical foundation needed for computing",
    "IKS": "Study information and knowledge systems for data management",
    "Pandas": "Analyze and manipulate data with Python's powerful library"
  };
  
  return descriptions[title] || "Explore comprehensive materials and resources";
}
