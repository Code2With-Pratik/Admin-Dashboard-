import React from 'react';
import { ThemeContext } from '../App';

const Sidebar = ({ setActiveSection, isOpen, toggleSidebar }) => {
  const { theme } = React.useContext(ThemeContext);

  const sections = [
    { name: 'Statistics', icon: '📊' },
    { name: 'Social Network', icon: '🌐' },
    { name: 'Category', icon: '📁' },
    { name: 'Services', icon: '🛠️' },
    { name: 'Orders', icon: '🛒' },
    { name: 'Tickets', icon: '🎫' },
    { name: 'Customers', icon: '👥' },
    { name: 'Reviews', icon: '⭐' },
    { name: 'Transactions', icon: '💸' },
    { name: 'Subscribers', icon: '📧' },
  ];

  return (
    <div
      className={`sidebar h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} 
      fixed top-0 left-0 z-20 transition-transform duration-300 
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-48`}
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
              if (window.innerWidth < 768) toggleSidebar(); // Close sidebar on mobile after selection
            }}
            className="w-full text-left p-4 hover:bg-gray-700 flex items-center space-x-2"
          >
            <span>{section.icon}</span>
            <span className="block md:block">{section.name.toUpperCase()}</span>
          </button>
        ))}
      </div>
      <button className="p-4 hover:bg-red-600 flex items-center space-x-2">
        <span>🔒</span>
        <span className="block md:block">LOGOUT</span>
      </button>
    </div>
  );
};

export default Sidebar;