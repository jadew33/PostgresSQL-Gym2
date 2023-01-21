import { Formik, useFormik, Field, Form } from "formik";
import Axios from "axios";

export default function Auth(props) {
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
          .then(() => {
            console.log("success");
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <Form>
        <label htmlFor="lastName">Username</label>
        <Field id="username" name="username" type="username" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
