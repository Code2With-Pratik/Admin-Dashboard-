import React, { useEffect, useState } from 'react';

const mockTickets = [
  {
    id: 1,
    username: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    subject: 'Login issue',
    message: 'I cannot log in to my account.',
    status: 'pending',
    priority: 'high',
    created_at: '2025-06-10 / 10:00 AM',
  },
  {
    id: 2,
    username: 'Jane Smith',
    email: 'jane@example.com',
    phone: '8123456789',
    subject: 'Payment not showing',
    message: 'Payment completed but not updated.',
    status: 'solved',
    priority: 'medium',
    created_at: '2025-06-09 / 5:45 PM',
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-200 text-yellow-800 dark:bg-yellow-600 dark:text-white';
    case 'solved':
      return 'bg-green-200 text-green-800 dark:bg-green-600 dark:text-white';
    case 'cancelled':
      return 'bg-red-200 text-red-800 dark:bg-red-600 dark:text-white';
    default:
      return '';
  }
};

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setTickets(mockTickets);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    const updated = tickets.map(ticket =>
      ticket.id === id ? { ...ticket, status: newStatus } : ticket
    );
    setTickets(updated);
  };

  const filteredTickets = tickets.filter(ticket =>
    ticket.username.toLowerCase().includes(search.toLowerCase()) ||
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-950 dark:text-gray-500 transition-colors duration-300">
      Tickets
    </h2>
      <input
        type="text"
        placeholder="Search by username or subject..."
        className="border px-3 py-2 rounded w-70  mb-4 bg-white text-black 
                  dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">
              <th className="p-2">#</th>
              <th className="p-2">Username</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Subject</th>
              <th className="p-2">Priority</th>
              <th className="p-2">Status</th>
              <th className="p-2">Created</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket, index) => (
              <tr key={ticket.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{ticket.username}</td>
                <td className="p-2">{ticket.email}</td>
                <td className="p-2">{ticket.phone}</td>
                <td className="p-2">{ticket.subject}</td>
                <td className="p-2 capitalize">{ticket.priority}</td>
                <td className="p-2 capitalize">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium transition-colors duration-300 ${getStatusStyle(ticket.status)}`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="p-2">{ticket.created_at}</td>
                <td className="p-2">
                  <select
                    value={ticket.status}
                    onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
                    className="px-2 py-1 border rounded text-sm font-medium bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-all"
                  >
                    <option value="pending">Pending</option>
                    <option value="solved">Solved</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
            {filteredTickets.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center p-4 text-gray-600 dark:text-gray-300">
                  No tickets found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
