import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();

  const [error, setError] = useState(false);

  const errorHandler = (e) => {
    setError(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const age = ageRef.current.value;

    if (username.trim().length && age.trim().length && parseInt(age) > 0) {
      props.onAddUser(username, parseInt(age));
      usernameRef.current.value = "";
      ageRef.current.value = "";
      return;
    }
    setError(true);
  };

  return (
    <>
      {error ? (
        <ErrorModal
          onError={errorHandler}
          title="An error occured"
          message="Something went wrong..."
        />
      ) : null}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={usernameRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
