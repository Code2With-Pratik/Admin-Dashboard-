import React from 'react';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import Orders from '../components/Orders';
import Tickets from '../components/Tickets';
import Customers from '../components/Customers';
import Transactions from '../components/Transactions';
import { ThemeContext } from '../App';
import { RxAvatar } from "react-icons/rx";

const Dashboard = () => {
  const [activeSection, setActiveSection] = React.useState('Services');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { theme, toggleTheme } = React.useContext(ThemeContext); // Access both theme and toggleTheme here

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Services':
        return <Services />;
      case 'Orders':
        return <Orders />;
      case 'Tickets':
        return <Tickets />;
      case 'Customers':
        return <Customers />;
      case 'Transactions':
        return <Transactions />;
      default:
        return <div className="p-4">Select a section to view content.</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className={`p-4 flex justify-between items-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
        <div className="flex items-center space-x-4">
          <button onClick={toggleSidebar} className="md:hidden">
            {isSidebarOpen ? '✖' : '☰'}
          </button>
          <h1 className="text-2xl font-bold">SmartStore</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme} // Use the toggleTheme function directly
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <span>Hi, Admin</span>
          <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                ${theme === 'dark' ? 'bg-gray-700 border border-white' : 'bg-gray-200 border border-gray-400'}`}
            >
              <RxAvatar />
            </div>
        </div>
      </nav>
      <div className="flex flex-1 relative">
        <Sidebar
          setActiveSection={setActiveSection}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={toggleSidebar}
          />
        )}
        <div
          className={`flex-1 p-4 overflow-auto transition-all duration-300 ${
            theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
          } md:ml-48`}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;