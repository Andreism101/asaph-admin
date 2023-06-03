
import React from 'react';

const UserManagement = () => {
const users = [
{ id: 1, name: 'Jaden Smith', position: 'Employee', branchHead: 'Sta. Ana Branch' },
{ id: 2, name: 'Justine Bieber', position: 'Employee', branchHead: 'Pasig Branch' },
{ id: 3, name: 'DJ Khaled', position: 'Branch Head', branchHead: 'Pasig Branch' },
{ id: 4, name: 'Glyn Medina', position: 'Branch Head', branchHead: 'Mandaluyong Branch' },
];

return (
    <div className='flex overflow-x-auto justify-center align-middle px-5'>
        <div class="flex justify-between pb-4 pl-96 md:pl-0 ">
            <div className="pt-4 mb-5 grid grid-cols">
                <table className="min-w-full">
                    <thead class="rounded-lg bg-slate-800">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch Head</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.position}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.branchHead}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
};

export default UserManagement;