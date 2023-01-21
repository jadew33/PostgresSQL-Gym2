// import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { map } from "lodash";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function AllUsers(props) {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    Axios.get("http://localhost:5000/getUsers")
      .then((res) => {
        setUsers(res.data.allUsers.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(users);
  return users != null ? (
    users.map((u) => {
      return (
        <>
          <h3>
            {u.firstname} {u.lastname}
          </h3>
          <ul>
            {console.log(u.firstname)}
            <li>Gender: {u.gender}</li>
            <li>Age: {u.age}</li>
            <li>Address: {u.address}</li>
            <li>Email: {u.email}</li>
            <li>Username: {u.username}</li>
            <li>Password: {u.password}</li>
          </ul>
        </>
      );
    })
  ) : (
    <h3>Please wait while we are loading</h3>
  );
}
