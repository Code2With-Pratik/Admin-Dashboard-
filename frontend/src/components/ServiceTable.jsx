const services = [
  { id: 10, name: "Instagram Followers", originalPrice: 1.99, discount: "0%", price: 1.99, quantity: 500, provider: "Vinasmm 1173", apiRate: 1.469, created: "2024-11-20 13:25:37", active: true },
  { id: 11, name: "Instagram Followers", originalPrice: 2.99, discount: "0%", price: 2.99, quantity: 1000, provider: "Vinasmm 1173", apiRate: 1.469, created: "2024-11-20 13:25:37", active: true },
  { id: 17, name: "Instagram Followers", originalPrice: 10.99, discount: "-30%", price: 7.69, quantity: 5000, provider: "Vinasmm 1173", apiRate: 1.469, created: "2024-11-20 13:25:37", active: true },
];

const ServiceTable = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg w-full overflow-x-auto">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Instagram Followers</h2>
        <button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-sm">+ Add New</button>
      </div>
      <table className="w-full table-auto text-sm">
        <thead className="text-gray-400">
          <tr>
            <th className="text-left px-2 py-2">ID</th>
            <th className="text-left px-2 py-2">Name</th>
            <th className="text-left px-2 py-2">Original Price</th>
            <th className="text-left px-2 py-2">Discount (%)</th>
            <th className="text-left px-2 py-2">Price</th>
            <th className="text-left px-2 py-2">Quantity</th>
            <th className="text-left px-2 py-2">Provider</th>
            <th className="text-left px-2 py-2">API Rate</th>
            <th className="text-left px-2 py-2">Status</th>
            <th className="text-left px-2 py-2">Created</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s) => (
            <tr key={s.id} className="border-b border-gray-700">
              <td className="px-2 py-2">{s.id}</td>
              <td className="px-2 py-2">{s.name}</td>
              <td className="px-2 py-2">${s.originalPrice}</td>
              <td className="px-2 py-2">{s.discount}</td>
              <td className="px-2 py-2">${s.price}</td>
              <td className="px-2 py-2">{s.quantity}</td>
              <td className="px-2 py-2">{s.provider}</td>
              <td className="px-2 py-2">{s.apiRate}</td>
              <td className="px-2 py-2">
                <input type="checkbox" checked={s.active} className="accent-orange-500" />
              </td>
              <td className="px-2 py-2">{s.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;
