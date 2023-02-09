import React from 'react'
import classes from './User.module.css'

function User(props) {

    const deleteUser = () => {
        props.onDeleteUser(props.id);
        props.removeUser(props.id)
      };

  return (
    <li key={props._id}  >
{props.children}
<button onClick={deleteUser}>Delete</button>
   </li>  )
}

export default User;