import { Formik, Field, Form } from "formik";
import { redirect } from "react-router-dom";
import Axios from "axios";

export default function Auth(props) {
  console.log(sessionStorage);
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        console.log(values);
        resetForm({ values: "" });
        Axios.post("http://localhost:5000/login", { data: values })
          .then((res) => {
            console.log(res.data);
            if (res.data.loggedIn) {
              sessionStorage.setItem(
                "loggedInUser",
                res.data.isAdmin ? "admin" : "client"
              );
            }
            return res.data.isAdmin
              ? redirect("/admin/profile")
              : redirect("/client/profile");
          })

          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <Form className="flex-col">
        <label htmlFor="lastName">Username</label>
        <Field id="username" name="username" type="username" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
