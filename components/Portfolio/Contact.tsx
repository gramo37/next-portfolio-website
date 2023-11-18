"use client";

import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import styles from "@/components/css/Contact.module.css";
import MyLoader from "@/components/ui/MyLoader";

const contactMeSchema = Yup.object({
  firstname: Yup.string()
    .min(2, "First Name cannot be less than 2 characters")
    .max(30, "First Name cannot exceed 30 characters")
    .required("Please enter your first name"),
  lastname: Yup.string()
    .min(2, "Last Name cannot be less than 2 characters")
    .max(30, "Last Name cannot exceed 30 characters")
    .required("Please enter your last name"),
  email: Yup.string()
    .email("Please enter a Valid Email")
    .required("Please enter your email"),
  subject: Yup.string()
    .min(10, "Subject cannot be less than 10 characters")
    .max(50, "Subject cannot exceed 50 characters")
    .required("Please enter the subject"),
  message: Yup.string()
    .min(10, "Message cannot be less than 10 characters")
    .max(1000, "Message cannot exceed 1000 characters")
    .required("Please enter the message"),
});

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const formRef:any = useRef();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [sendMail, setSendMail] = useState(true);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactMeSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values)
        if (!sendMail) {
          toast({
            variant: "destructive",
            title: "Wait 10 mins",
            description: "Kindly wait for 10 mins",
          });
          return;
        }
        resetForm({ values: initialValues });
        setLoading(true);
        if (formRef?.current)
          console.log("Sending Mail")
          console.log(formRef?.current, formRef)
          emailjs
            .sendForm(
              "service_npzjtpg",
              "template_v1582qq",
              formRef?.current,
              "uF6OeJEqNkVC7B5mC"
            )
            .then(
              () => {
                setLoading(false);
                alert("Your message has been sent");
                setSendMail(false);
                setTimeout(() => {
                  setSendMail(true);
                }, 60 * 10 * 1000);
              },
              () => {
                setLoading(false);
                alert("Something went wrong");
              }
            )
            .catch((error: any) => console.log(error));
      },
    });
  return (
    <div className={styles["contact-container"]}>
      <h1>Contact Me</h1>
      <div>
        <form
          ref={formRef as any}
          className={styles["contact-form"]}
          onSubmit={handleSubmit}
        >
          <input
            id="firstname"
            name="firstname"
            placeholder="Your firstname"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.firstname && touched.firstname ? (
            <p className={styles["form-error"]}>{errors.firstname}</p>
          ) : null}

          <input
            id="lastname"
            name="lastname"
            placeholder="Your lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.lastname && touched.lastname ? (
            <p className={styles["form-error"]}>{errors.lastname}</p>
          ) : null}

          <input
            id="email"
            name="email"
            placeholder="Your Email address"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.email && touched.email ? (
            <p className={styles["form-error"]}>{errors.email}</p>
          ) : null}

          <input
            id="subject"
            name="subject"
            placeholder="Your subject of this message"
            type="text"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.subject && touched.subject ? (
            <p className={styles["form-error"]}>{errors.subject}</p>
          ) : null}

          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>

          {errors.message && touched.message ? (
            <p className={styles["form-error"]}>{errors.message}</p>
          ) : null}

          <button type="submit">
            {loading ? <MyLoader /> : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
