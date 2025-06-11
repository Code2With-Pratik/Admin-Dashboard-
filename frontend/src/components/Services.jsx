import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';

const Services = () => {
  const { theme } = useContext(ThemeContext);

  const data = [
    { id: 10, name: 'Instagram Followers', originalPrice: 1999, discount: 0, price: 1999, quantity: 500, type: 'API', provider: 'Vinasmm', apiRate: 1469, status: 'Active', created: '2024-11-20' },
    { id: 1, name: 'Instagram Followers', originalPrice: 1999, discount: 0, price: 1999, quantity: 500, type: 'API', provider: 'Vinasmm', apiRate: 1469, status: 'Active', created: '2024-11-20' },
    { id: 15, name: 'Instagram Followers', originalPrice: 5000, discount: 0, price: 1529, quantity: 500, type: 'API', provider: 'Vinasmm', apiRate: 1469, status: 'Active', created: '2024-11-20' },
    { id: 12, name: 'Instagram Followers', originalPrice: 1999, discount: 0, price: 1999, quantity: 500, type: 'API', provider: 'Vinasmm', apiRate: 1469, status: 'Active', created: '2024-11-20' },
    { id: 17, name: 'Instagram Followers', originalPrice: 1999, discount: 0, price: 1999, quantity: 500, type: 'API', provider: 'Vinasmm', apiRate: 1469, status: 'Active', created: '2024-11-20' },
    { id: 16, name: 'Instagram Followers', originalPrice: 1999, discount: 0, price: 1999, quantity: 500, type: 'API', provider: 'Vinasmm', apiRate: 1469, status: 'Active', created: '2024-11-20' },
    { id: 18, name: 'Instagram Followers', originalPrice: 1999, discount: 0, price: 1999, quantity: 500, type: 'API', provider: 'Vinasmm', apiRate: 1469, status: 'Active', created: '2024-11-20' },
    { id: 11, name: 'Instagram Likes', originalPrice: 999, discount: 10, price: 899, quantity: 1000, type: 'API', provider: 'Vinasmm', apiRate: 799, status: 'Active', created: '2024-11-20' },
    { id: 12, name: 'Twitter Followers', originalPrice: 2500, discount: 0, price: 2500, quantity: 300, type: 'API', provider: 'SocialPro', apiRate: 2000, status: 'Inactive', created: '2024-11-21' },
    { id: 13, name: 'YouTube Views', originalPrice: 5000, discount: 5, price: 4750, quantity: 5000, type: 'API', provider: 'ViewBoost', apiRate: 4000, status: 'Active', created: '2024-11-22' },
    { id: 14, name: 'Facebook Shares', originalPrice: 1500, discount: 0, price: 1500, quantity: 200, type: 'Manual', provider: 'ShareEasy', apiRate: 1200, status: 'Inactive', created: '2024-11-23' },
    { id: 15, name: 'TikTok Followers', originalPrice: 3999, discount: 15, price: 3399, quantity: 1500, type: 'API', provider: 'TikGrow', apiRate: 3000, status: 'Active', created: '2024-11-24' },
    { id: 16, name: 'LinkedIn Connections', originalPrice: 6000, discount: 0, price: 6000, quantity: 100, type: 'Manual', provider: 'LinkNet', apiRate: 5500, status: 'Inactive', created: '2024-11-25' },
    { id: 17, name: 'Instagram Comments', originalPrice: 2999, discount: 0, price: 2999, quantity: 400, type: 'API', provider: 'Vinasmm', apiRate: 2500, status: 'Active', created: '2024-11-26' },
    { id: 18, name: 'Twitter Retweets', originalPrice: 1800, discount: 5, price: 1710, quantity: 250, type: 'API', provider: 'SocialPro', apiRate: 1500, status: 'Active', created: '2024-11-27' },
    { id: 19, name: 'YouTube Likes', originalPrice: 2200, discount: 0, price: 2200, quantity: 300, type: 'API', provider: 'ViewBoost', apiRate: 1800, status: 'Inactive', created: '2024-11-28' },
    { id: 20, name: 'Facebook Likes', originalPrice: 1200, discount: 10, price: 1080, quantity: 500, type: 'Manual', provider: 'ShareEasy', apiRate: 900, status: 'Active', created: '2024-11-29' },
    { id: 21, name: 'Instagram Likes', originalPrice: 1200, discount: 5, price: 1140, quantity: 800, type: 'API', provider: 'LikeBoost', apiRate: 1000, status: 'Active', created: '2024-11-30' },
    { id: 22, name: 'Instagram Likes', originalPrice: 1500, discount: 0, price: 1500, quantity: 1200, type: 'API', provider: 'Vinasmm', apiRate: 1300, status: 'Inactive', created: '2024-12-01' },
    { id: 23, name: 'Instagram Likes', originalPrice: 800, discount: 10, price: 720, quantity: 600, type: 'Manual', provider: 'LikeBoost', apiRate: 650, status: 'Active', created: '2024-12-02' },
    { id: 24, name: 'Instagram Likes', originalPrice: 2000, discount: 15, price: 1700, quantity: 1500, type: 'API', provider: 'SocialPro', apiRate: 1600, status: 'Active', created: '2024-12-03' },
    { id: 25, name: 'Instagram Likes', originalPrice: 1100, discount: 0, price: 1100, quantity: 700, type: 'API', provider: 'Vinasmm', apiRate: 950, status: 'Inactive', created: '2024-12-04' },
  ];

  const followersData = data.filter((item) => item.name === 'Instagram Followers');
  const likesData = data.filter((item) => item.name === 'Instagram Likes');

  // Pagination state
  const [currentPageFollowers, setCurrentPageFollowers] = useState(1);
  const [currentPageLikes, setCurrentPageLikes] = useState(1);
  const itemsPerPage = 5;

  const paginate = (dataArray, currentPage) => {
    const totalPages = Math.ceil(dataArray.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPageData = dataArray.slice(startIndex, startIndex + itemsPerPage);
    return { totalPages, currentPageData };
  };

  const { totalPages: totalFollowersPages, currentPageData: currentFollowersData } = paginate(followersData, currentPageFollowers);
  const { totalPages: totalLikesPages, currentPageData: currentLikesData } = paginate(likesData, currentPageLikes);

  const renderTable = (dataArray) => (
    <>
      <thead>
        <tr className="bg-gray-700 text-white">
          {['ID', 'NAME', 'ORIGINAL PRICE', 'DISCOUNT (%)', 'PRICE', 'QUANTITY', 'TYPE', 'PROVIDER', 'API RATE (PER 1000)', 'STATUS', 'CREATED', 'ACTION'].map((head, idx) => (
            <th key={idx} className="p-2">{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataArray.length === 0 ? (
          <tr><td colSpan="12" className="text-center p-4">No data available.</td></tr>
        ) : (
          dataArray.map(item => (
            <tr key={item.id} className="border-b border-gray-600">
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.originalPrice}</td>
              <td className="p-2">{item.discount}</td>
              <td className="p-2">{item.price}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">{item.type}</td>
              <td className="p-2">{item.provider}</td>
              <td className="p-2">{item.apiRate}</td>
              <td className="p-2">{item.status}</td>
              <td className="p-2">{item.created}</td>
              <td className="p-2">...</td>
            </tr>
          ))
        )}
      </tbody>
    </>
  );

  const renderPagination = (totalPages, currentPage, setPage) => (
    <nav aria-label="Pagination" className="mt-4 flex justify-center mb-8">
      <ul className="flex space-x-2">
        <li>
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border ${currentPage === 1
              ? theme === 'dark' ? 'bg-gray-800 text-gray-500 border-gray-600 cursor-not-allowed'
              : 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
              : theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600'
              : 'bg-white text-gray-700 hover:bg-blue-100 border-gray-400'}`}
          >
            Previous
          </button>
        </li>
        {[...Array(totalPages)].map((_, i) => (
          <li key={i + 1}>
            <button
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded border ${currentPage === i + 1
                ? theme === 'dark' ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-blue-500 text-white border-blue-500'
                : theme === 'dark' ? 'bg-gray-700 text-white border-gray-500 hover:bg-gray-600'
                : 'bg-white text-gray-700 border-gray-400 hover:bg-blue-100'}`}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded border ${currentPage === totalPages
              ? theme === 'dark' ? 'bg-gray-800 text-gray-500 border-gray-600 cursor-not-allowed'
              : 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
              : theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600'
              : 'bg-white text-gray-700 hover:bg-blue-100 border-gray-400'}`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-6">SERVICES</h2>

      <h4 className="font-semibold mb-4">Instagram Followers</h4>
      <table className="w-full border-collapse mb-4">{renderTable(currentFollowersData)}</table>
      {renderPagination(totalFollowersPages, currentPageFollowers, setCurrentPageFollowers)}

      <h4 className="font-semibold mb-4">Instagram Likes</h4>
      <table className="w-full border-collapse mb-4">{renderTable(currentLikesData)}</table>
      {renderPagination(totalLikesPages, currentPageLikes, setCurrentPageLikes)}
    </div>
  );
};

export default Services;
