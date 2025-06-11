import React from 'react';

const Services = () => {
  const data = [
    { id: 10, name: 'Instagram Followers', originalPrice: 1.999, discount: 0, price: 1.999, quantity: 500, type: 'API', provider: 'Vinasmm', apiRate: 1.469, status: 'Active', created: '2024-11-20' },
    { id: 11, name: 'Instagram Followers', originalPrice: 2.999, discount: 0, price: 2.999, quantity: 1000, type: 'API', provider: 'Vinasmm', apiRate: 1.469, status: 'Active', created: '2024-11-20' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">INSTAGRAM FOLLOWERS</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="p-2">ID</th>
            <th className="p-2">NAME</th>
            <th className="p-2">ORIGINAL PRICE</th>
            <th className="p-2">DISCOUNT (%)</th>
            <th className="p-2">PRICE</th>
            <th className="p-2">QUANTITY</th>
            <th className="p-2">TYPE</th>
            <th className="p-2">PROVIDER</th>
            <th className="p-2">API RATE (PER 1000)</th>
            <th className="p-2">STATUS</th>
            <th className="p-2">CREATED</th>
            <th className="p-2">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;