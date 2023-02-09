import React from "react";
import User from "./User";
import Card from "../UI/Card";
import classes from "./UserList.Module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <User
            key={user._id}
            id={user._id}
            name={user.name}
            age={user.age}
            email={user.email}
            onDeleteUser={props.onDeleteUser}
           removeUser={props.removeUser}
          >
            <p>
              <b>Name:</b> {user.name}
            </p>
            <p>
              <b>Age:</b> {user.age} (years old)
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
          </User>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
