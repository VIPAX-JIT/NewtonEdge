import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";
import { SidebarData } from "../data/SidebarData";
import { FiBook, FiChevronRight } from 'react-icons/fi';

export default function Sidebar() {
  // Get current path for highlighting active link
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <FiBook className="logo-icon" />
          <div className="logo-text">
            <span className="logo-title">Newton</span>
            <span className="logo-subtitle">Edge</span>
          </div>
        </div>
        <div className="header-divider"></div>
      </div>
      <div className="sidebar-menu">
        {SidebarData.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`sidebar-item ${location.pathname === item.link ? 'active' : ''}`}
          >
            <div className="item-content">
              <span className="item-icon">{item.icon}</span>
              <span className="item-title">{item.title}</span>
            </div>
            <FiChevronRight className="item-arrow" />
          </Link>
        ))}
      </div>
      <div className="sidebar-footer">
        <p>© {new Date().getFullYear()} Newton Edge</p>
      </div>
    </div>
  );
}
