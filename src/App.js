import React, { useState, useEffect } from "react";

import AddUser from "./Components/AddUser";
import UsersList from "./Components/UsersList";
import Axios from "axios";
import classes from './App.module.css'

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uEmail) => {
    Axios.post("http://localhost:3001/createUser", {
      name: uName,
      age: uAge,
      email: uEmail,
    })
    
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, email: uEmail, id: Math.random().toString() },
      ];
    });
  };

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/deleteUser/${id}`)
    }
  

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setUsersList(response.data);
    });
  }, []);

  const removeUserHandler = (userId) => {
    setUsersList((prevUsersList) => {
      const updateUserList = prevUsersList.filter(
        (user) => user._id !== userId
      );
      return updateUserList;
    });
  };

  return (
    <div>
      <h1 className={classes.title}>Weekly Magazine Members</h1>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDeleteUser={removeUserHandler} removeUser={deleteUser}/>
    </div>
  );
}

export default App;
