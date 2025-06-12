import React from 'react';
import { ThemeContext } from '../App';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = ({ setActiveSection, isOpen, toggleSidebar }) => {
  const { theme } = React.useContext(ThemeContext);

  const sections = [
    { name: 'Statistics', icon: 'bi-bar-chart' },
    { name: 'Social Network', icon: 'bi-globe' },
    { name: 'Category', icon: 'bi-folder' },
    { name: 'Services', icon: 'bi-tools' },
    { name: 'Orders', icon: 'bi-cart' },
    { name: 'Tickets', icon: 'bi-ticket-detailed' },
    { name: 'Customers', icon: 'bi-people' },
    { name: 'Reviews', icon: 'bi-star' },
    { name: 'Transactions', icon: 'bi-cash-stack' },
    { name: 'Subscribers', icon: 'bi-envelope' },
  ];

  return (
    <div
      className={`sidebar h-screen ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
      } fixed top-0 left-0 z-20 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:w-48`}
    >
      <div className="p-4">
        <span className="text-2xl block md:block">SMARTSTORE</span>
      </div>

      <div className="flex flex-col flex-1">
        {sections.map((section) => (
          <button
            key={section.name}
            onClick={() => {
              setActiveSection(section.name);
              if (window.innerWidth < 768) toggleSidebar();
            }}
            className={`w-full text-left p-4 flex items-center space-x-2 
              hover:bg-gray-700 
              ${theme === 'light' ? 'hover:text-white' : ''}`}
          >
            <i className={`bi ${section.icon} text-lg`}></i>
            <span className="block md:block">{section.name.toUpperCase()}</span>
          </button>
        ))}
      </div>

      <button
        className={`w-full p-4 flex items-center space-x-2 
          hover:bg-red-600 
          ${theme === 'light' ? 'hover:text-white' : ''}`}
      >
        <i className="bi bi-lock-fill text-lg"></i>
        <span className="block md:block">LOGOUT</span>
      </button>
    </div>
  );
};

export default Sidebar;
