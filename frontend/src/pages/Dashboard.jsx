import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ServiceTable from "../components/ServiceTable";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-800 min-h-screen">
        <Topbar />
        <div className="p-6">
          <ServiceTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
