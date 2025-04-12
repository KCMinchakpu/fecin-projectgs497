import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  useEffect(() => {
    
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUsers((prevUsers) => [...prevUsers, data]);
    setNewUser({ name: "", email: "" }); 
  };

  const handleDeleteUser = async (id) => {
    const response = await fetch("/api/users", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
  };

  return (
    <div>
      <h2>Manage Users</h2>
      
      {/* Add User Form */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {/* Users List */}
      <div>
        <h3>Users List</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name} - {user.email}
              <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageUsers;
