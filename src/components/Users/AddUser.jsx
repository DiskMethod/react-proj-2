import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length && age.trim().length && parseInt(age) > 0) {
      props.addUserHandler(username, parseInt(age));
      setUsername("");
      setAge("");
      return;
    }
    console.log("Invalid Input");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameHandler}
          value={username}
        />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageHandler} value={age} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
