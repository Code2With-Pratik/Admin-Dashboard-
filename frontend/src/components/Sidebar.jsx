import { FaUsers, FaTags, FaThList, FaBoxOpen, FaComments, FaTicketAlt, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-6">SmartStore</h2>
      <nav className="space-y-2">
        <div className="text-gray-400 text-xs">GENERAL</div>
        <button className="flex items-center gap-2 hover:text-orange-400"><FaThList /> Statistics</button>

        <div className="text-gray-400 text-xs mt-4">SERVICE</div>
        <button className="flex items-center gap-2 hover:text-orange-400"><FaBoxOpen /> Social Network</button>
        <button className="flex items-center gap-2 hover:text-orange-400"><FaTags /> Category</button>
        <button className="flex items-center gap-2 text-orange-500"><FaBoxOpen /> Services</button>
        <button className="flex items-center gap-2 hover:text-orange-400"><FaBoxOpen /> Orders</button>

        <div className="text-gray-400 text-xs mt-4">SUPPORT AREA</div>
        <button className="flex items-center gap-2 hover:text-orange-400"><FaTicketAlt /> Ticket</button>

        <div className="text-gray-400 text-xs mt-4">MANAGE USERS</div>
        <button className="flex items-center gap-2 hover:text-orange-400"><FaUsers /> Customers</button>
        <button className="flex items-center gap-2 hover:text-orange-400"><FaComments /> Manage Reviews</button>

        <div className="text-gray-400 text-xs mt-4">ACCOUNT</div>
        <button className="flex items-center gap-2 hover:text-red-500"><FaSignOutAlt /> Logout</button>
      </nav>
    </aside>
  );
};

export default Sidebar;
