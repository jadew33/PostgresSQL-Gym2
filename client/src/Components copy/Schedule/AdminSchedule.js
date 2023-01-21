import { Formik, Field, Form } from "formik";
import Axios from "axios";

export default function AdminSchedule(props) {
  return (
    <Formik
      initialValues={{
        activityName: "",
        trainer: "",
        cost: "",
        toggle: false,
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

        <label htmlFor="firstName">Is there a trainer?</label>
        <Field type="checkbox" name="toggle" />

        <label htmlFor="cost">Cost</label>
        <Field type="number" id="cost" name="cost" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
