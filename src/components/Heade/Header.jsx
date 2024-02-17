import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import "./Header.css"; // Import your CSS file for styling

const Header = () => {
  const [language, setLanguage] = useState("English"); // State for language selection
  const [showNotification, setShowNotification] = useState(false); // State to toggle notification dropdown
  const notificationCount = 5; // Example notification count (you can replace it with your own logic to get the actual count)
  const [showUserOptions, setShowUserOptions] = useState(false); // State to toggle user options dropdown

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const toggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  const handleLogout = () => {

  };

  const handleResetPassword = () => {
   
  };

  const handleViewProfile = () => {
   
  };

  return (
    <div className="management-container">
      <div className="left-content">
        <span className="icon">
          <img src="/assets/img/page-header-icons.svg" alt="Management Icon" />
        </span>
        <span className="text">
          Management - <span className="device-list">Device List</span>
        </span>
      </div>
      <div className="right-content">
        <select
          defaultValue={language}
          onChange={handleLanguageChange}
          className="drop_down"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        <div className="notification-icon-container notification-box drop_down">
          <FaBell size={24} />
          {notificationCount > 0 && (
            <span className="notification-badge">{notificationCount}</span>
          )}
        </div>
        <div className="user-dropdown-container">
          <div className="user-image-container">
            <img src="/assets/img/user-image.svg" alt="User Image" />
          </div>
          <select
            className="user-profile drop_down"
            onChange={toggleUserOptions}
            defaultValue="M Karavidas"
          >
            <option disabled value="M Karavidas">
              M Karavidas
            </option>
            <option value="viewProfile" onClick={handleViewProfile}>
              View Profile
            </option>
            <option value="resetPassword" onClick={handleResetPassword}>
              Reset Password
            </option>
            <option value="logout" onClick={handleLogout}>
              Logout
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
