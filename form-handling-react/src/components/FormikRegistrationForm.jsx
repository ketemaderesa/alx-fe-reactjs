import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 chars").required("Required"),
});

export default function FormikRegistrationForm() {
  return (
    <div>
      <h2>Formik + Yup Registration</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          setSubmitting(true);
          try {
            // Replace with real API call; here's a mock:
            await new Promise(res => setTimeout(res, 700));
            setStatus({ ok: true, message: "Registered (mock)" });
            resetForm();
          } catch (err) {
            setStatus({ ok: false, message: "Registration failed" });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <div>
              <label>Username</label>
              <Field name="username" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email</label>
              <Field name="email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Register"}</button>

            {status && <div style={{ marginTop: 8, color: status.ok ? "green" : "red" }}>{status.message}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
