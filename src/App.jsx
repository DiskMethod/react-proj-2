import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    setUsers((prevUsers) => {
      return [{ id: Math.random(), username, age }, ...prevUsers];
    });
  };

  const removeUserHandler = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id.toString() !== id);
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {users.length && (
        <UsersList users={users} onRemoveUser={removeUserHandler} />
      )}
    </>
  );
}

export default App;
