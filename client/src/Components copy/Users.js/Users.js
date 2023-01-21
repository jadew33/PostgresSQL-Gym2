// import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import Axios from "axios";

export default function AdminUsers(props) {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        console.log(values);
        resetForm({ values: "" });
        Axios.post("http://localhost:5000/addUser", { data: values })
          .then((res) => {
            console.log("success");
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <Form className="flex-col">
        <label htmlFor="email">Email Address</label>
        <Field id="email" name="email" type="email" />

        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" type="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" type="lastName" />

        <label htmlFor="lastName">Username</label>
        <Field id="username" name="username" type="username" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
