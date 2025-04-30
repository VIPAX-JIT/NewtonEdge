import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiBookOpen, FiYoutube, FiCode, FiUsers, FiCheckCircle, FiClock, FiHeart, FiShare2, FiCornerDownRight } from "react-icons/fi";
import VideoThumbnail from "../components/VideoThumbnail";
import "../styles/VideoThumbnail.css";

function DSA() {
  // State variables for interactive features
  const [likedVideos, setLikedVideos] = useState(JSON.parse(localStorage.getItem('likedDSAVideos')) || {});
  const [watchProgress, setWatchProgress] = useState(JSON.parse(localStorage.getItem('watchProgressDSA')) || {});
  const [comments, setComments] = useState(JSON.parse(localStorage.getItem('dsaComments')) || []);
  const [commentText, setCommentText] = useState('');
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [showNameInput, setShowNameInput] = useState(!localStorage.getItem('userName'));
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Simple topics structure with multiple videos listed under each topic
  const topics = [
    {
      id: "binary-search",
      title: "Binary Search Algorithm",
      description: "Learn how to efficiently search through sorted arrays to quickly find specific elements. This fundamental algorithm is essential for technical interviews and real-world applications.",
      videos: [
        {
          id: "bin-search-basic",
          title: "Binary Search Fundamentals",
          url: "https://youtu.be/MHf6awe89xw?si=7-ic5Ql0XmYK8-MW",
          instructor: "Take U Forward",
          duration: "45 minutes",
          level: "Beginner",
          viewCount: 1254
        },
        {
          id: "bin-search-js",
          title: "Binary Search in JavaScript",
          url: "https://youtu.be/TbbSJrY5GqQ?si=SdhsoPs5abRAR0_P",
          instructor: "Apna College",
          duration: "35 minutes",
          level: "Intermediate",
          viewCount: 873
        },
        {
          id: "bin-search-adv",
          title: "Advanced Binary Search Applications",
          url: "https://youtu.be/YJeoQBevNVo?si=Y1jlAk-HuGrQnwNE",
          instructor: "CodeHelp",
          duration: "50 minutes",
          level: "Advanced",
          viewCount: 612
        }
      ]
    },
    {
      id: "linked-list",
      title: "Linked List Data Structures",
      description: "Master the implementation and operations of linked lists. This course covers singly and doubly linked lists, with practical examples and coding exercises.",
      videos: [
        {
          id: "list-intro",
          title: "Introduction to Linked Lists",
          url: "https://www.youtube.com/embed/sVxBVvlnJsM",
          instructor: "Dr. Michael Chen",
          duration: "55 minutes",
          level: "Beginner",
          viewCount: 982
        },
        {
          id: "list-python",
          title: "Implementing Linked Lists in Python",
          url: "https://www.youtube.com/embed/JlMyYuY1aXU",
          instructor: "Prof. Emily Williams",
          duration: "40 minutes",
          level: "Intermediate",
          viewCount: 745
        }
      ]
    },
    {
      id: "sorting",
      title: "Sorting Algorithms Explained",
      description: "Explore various sorting techniques including Bubble Sort, Merge Sort, Quick Sort and more. Learn when to use each algorithm and understand their time and space complexity.",
      videos: [
        {
          id: "sort-intro",
          title: "Introduction to Sorting Algorithms",
          url: "https://www.youtube.com/embed/kgBjXUE_Nwc",
          instructor: "Prof. James Wilson",
          duration: "60 minutes",
          level: "Intermediate",
          viewCount: 1105
        },
        {
          id: "sort-merge-quick",
          title: "Merge Sort & Quick Sort: Deep Dive",
          url: "https://www.youtube.com/embed/4VqmGXwpLqc",
          instructor: "Dr. Lisa Chen",
          duration: "50 minutes",
          level: "Advanced",
          viewCount: 632
        }
      ]
    }
  ];

  // Update local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('likedDSAVideos', JSON.stringify(likedVideos));
  }, [likedVideos]);

  useEffect(() => {
    localStorage.setItem('watchProgressDSA', JSON.stringify(watchProgress));
  }, [watchProgress]);
  
  useEffect(() => {
    localStorage.setItem('dsaComments', JSON.stringify(comments));
  }, [comments]);
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Function to toggle like status of a video
  const toggleLike = (videoId) => {
    setLikedVideos(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };
  
  // Function to simulate watch progress
  const simulateProgress = (videoId) => {
    const randomProgress = Math.floor(Math.random() * 100);
    setWatchProgress(prev => ({
      ...prev,
      [videoId]: randomProgress
    }));
  };
  
  // Function to add a comment
  const addComment = (e) => {
    e.preventDefault();
    if (!commentText.trim() || !userName.trim()) return;
    
    const newComment = {
      id: Date.now(),
      userName,
      text: commentText,
      timestamp: new Date().toISOString(),
      likes: 0
    };
    
    setComments(prev => [newComment, ...prev]);
    setCommentText('');
  };
  
  // Function to save username
  const saveUserName = (e) => {
    e.preventDefault();
    if (!userName.trim()) return;
    
    localStorage.setItem('userName', userName);
    setShowNameInput(false);
  };
  
  // Calculate time ago for comments
  const timeAgo = (timestamp) => {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    
    return "just now";
  };
  
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Data Structures & Algorithms</h1>
        <p className="page-description">
          Comprehensive study materials for mastering fundamental programming concepts.
          These resources are designed to help you excel in technical interviews and programming tasks.
        </p>
        
        <div className="welcome-user">
          {showNameInput ? (
            <form onSubmit={saveUserName} className="name-form">
              <p>To personalize your experience, please enter your name:</p>
              <div className="form-group">
                <input 
                  type="text" 
                  value={userName} 
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your name"
                  className="name-input"
                />
                <button type="submit" className="submit-btn">Save</button>
              </div>
            </form>
          ) : (
            <p className="welcome-back">Welcome back, {userName}! 
            {Object.keys(watchProgress).length > 0 && 
              ` You have ${Object.keys(watchProgress).length} videos in progress.`}
            </p>
          )}
        </div>
        
        
      </div>
      
      <div className="welcome-message">
        <div className="welcome-content">
          <h2>Why Study Data Structures & Algorithms?</h2>
          <p>
            Data Structures and Algorithms form the foundation of computer science and software engineering. 
            They enable efficient problem-solving and are crucial for building scalable applications.
            Mastering DSA will help you:
          </p>
          <ul className="dsa-benefits">
            <li><strong>Ace Technical Interviews:</strong> DSA questions are standard in interviews at top tech companies</li>
            <li><strong>Build Efficient Software:</strong> Learn to write code that uses minimal resources and scales well</li>
            <li><strong>Solve Complex Problems:</strong> Break down difficult challenges into manageable components</li>
            <li><strong>Understand System Design:</strong> Gain insights into how larger software systems are architected</li>
          </ul>
          <p>Our curriculum covers essential topics like arrays, linked lists, trees, graphs, sorting algorithms, and dynamic programming with practical examples.</p>
        </div>
        <img src="https://img.freepik.com/free-vector/algorithm-concept-illustration_114360-1043.jpg" alt="Data Structures" className="instructor-avatar" style={{ width: "200px", height: "auto", borderRadius: "8px" }} />
      </div>
      
      {topics.map((topic) => (
        <div key={topic.id} className="topic-section">
          <h2 className="topic-title">{topic.title}</h2>
          <p className="topic-description">{topic.description}</p>
          
          {topic.videos.map((video) => (
            <VideoThumbnail 
              key={video.id} 
              video={video} 
              onThumbnailClick={() => window.open(video.url, '_blank')}
            />
          ))}
        </div>
      ))}
      
      
    </div>
  );
}

export default DSA;
