import React, { useState } from 'react';
import './AdminDashboard.css';
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaCaretDown,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const permissionsData = [
    { name: 'Management', assignedTo: 'Administrator', createdDate: '14 Apr 2021, 8:43 PM' },
    { name: 'Manage Billing & Roles', assignedTo: 'Administrator', createdDate: '15 Sep 2021, 3:30 PM' },
    { name: 'Add & Remove Users', assignedTo: 'Administrator,Manager', createdDate: '16 Oct 2021, 10:30 AM' },
    { name: 'Project Planning', assignedTo: 'Administrator,Users,Support', createdDate: '18 May 2021, 12:10 PM' },
    { name: 'Manage Email Sequences', assignedTo: 'Administrator,Users,Support', createdDate: '23 Aug 2021, 2:00 PM' },
    { name: 'Client Communication', assignedTo: 'Administrator,Manager', createdDate: '19 Apr 2021, 11:30 AM' },
    { name: 'Only View', assignedTo: 'Administrator,Restricted User', createdDate: '04 Dec 2021, 9:15 PM' },
    { name: 'Financial Management', assignedTo: 'Administrator,Manager', createdDate: '25 Feb 2021, 10:30 AM' },
    { name: 'Manage Others\' Tasks', assignedTo: 'Administrator,Support', createdDate: '04 Nov 2021, 11:45 AM' },
  ];

  const filteredData = permissionsData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderBadges = (assignedTo) => {
    return assignedTo.split(',').map((role, index) => {
      const trimmedRole = role.trim();
      let badgeClass = '';

      switch (trimmedRole) {
        case 'Administrator':
          badgeClass = 'administrator-badge';
          break;
        case 'Manager':
          badgeClass = 'manager-badge';
          break;
        case 'Users':
          badgeClass = 'users-badge';
          break;
        case 'Support':
          badgeClass = 'support-badge';
          break;
        case 'Restricted User':
          badgeClass = 'restricted-user-badge';
          break;
        default:
          badgeClass = 'default-badge';
      }

      return (
        <span key={index} className={badgeClass}>
          {trimmedRole}
        </span>
      );
    });
  };

  return (
    <div className="dashboard">
      <header>
        <div className="header-container">
          <div className="logo-container">
            <div className="blue-box" />
            <div className="logo">
              <h1>GetBeds</h1>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#">Overview</a>
            <a href="#">Bookings</a>
            <a href="#">Inventory</a>
            <a href="#">Payment</a>
            <a href="#">Analytics</a>
          </nav>
          <div className="search-container">
            <FaSearch size={16} className="search-icon" />
          </div>
          <div className="icons">
            <div className="notification-icon">
              <FaBell size={18} />
              <span className="red-dot" />
            </div>
            <div className="profile" onClick={toggleDropdown}>
              <FaUserCircle size={32} />
              <div className="profile-info">
                <span>John Doe</span>
                <span className="admin-text">Admin</span>
              </div>
              <FaCaretDown size={12} className="dropdown-arrow" />
              {showDropdown && (
                <div className="dropdown-menu">
                  <a href="#">Profile</a>
                  <a href="#" className="active">User Management</a>
                  <a href="#">Customer Support</a>
                  <a href="#">Subscription Plan</a>
                  <a href="#">Settings</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="content">
        <div className="breadcrumb">
          <span>Home</span> &gt; <span>User Management</span>
        </div>
        <h2>Permissions List</h2>
        <p className="subtitle">
          Each category (Basic, Professional, and Business) includes the four predefined roles shown below.
        </p>

        <div className="search-filter-container">
          <div className="search-input">
            <FaSearch size={14} />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <button className="search-button">Search</button>
          <button className="filter-button">Filter</button>
        </div>

        <button className="add-permission">+ Add Permission</button>

        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>ASSIGNED TO</th>
              <th>CREATED DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className="name-cell">{item.name}</td>
                <td>
                  <div className="badge-container">{renderBadges(item.assignedTo)}</div>
                </td>
                <td className="date-cell">{item.createdDate}</td>
                <td className="actions-cell">
                  <FaTrash className="action-icon" size={16} />
                  <FaEdit className="action-icon" size={16} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button>Previous</button>
          <span className="page-number"><button>1</button></span>
          <button>Next</button>
        </div>
      </section>

      <footer className="footer">
  <div className="footer-container">
    <div className="footer-left">
      <h4>Learn More</h4>
      <ul>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Compliance Policy</a></li>
      </ul>
    </div>

    <div className="footer-middle">
      <h4>Download the app below</h4>
      <div className="app-links">
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
        </a>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.
      </p>
      <p>
        El funcionamiento de la plataforma es muy sencillo. Se debe completar la solicitud, esta información se envía a los asesores financieros a tiempo real con el fin de que la herramienta compare, negocie y seleccione las mejores ofertas.
      </p>
    </div>

    <div className="footer-right">
      <h4>Need any assistance? Talk to us:</h4>
      <p><strong>Business Manager:</strong> John Doe</p>
      <p>support@gmail.com</p>
      <p>+81-567985479</p>
      <p><strong>Zonal Manager:</strong> John Doe</p>
      <p>xyz@gmail.com</p>
      <p>+90-567987547</p>
    </div>
  </div>

  <div className="footer-bottom">
  <div className="footer-logo">
  <div className="logo-box">
    <span>G</span>
  </div>
  <span>GetBeds</span>
</div>
    <p>&copy; 2024 GetBeds. All Rights Reserved</p>
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
        </svg>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="#0077B5">
          <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.729C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.452c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.452 20.452h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26z" />
        </svg>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="#1DA1F2">
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.635.961-.695 1.8-1.562 2.46-2.549z" />
        </svg>
      </a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default AdminDashboard;
