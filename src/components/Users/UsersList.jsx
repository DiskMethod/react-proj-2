import React from "react";
import Card from "../UI/Card";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  const clickHandler = (e) => {
    props.onRemoveUser(e.target.id);
  };

  return (
    <Card className={styles.users}>
      <ul onClick={clickHandler}>
        {props.users.map((user) => {
          return (
            <li key={user.id} id={user.id}>
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
