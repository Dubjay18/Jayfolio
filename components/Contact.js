import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import em from "../utils/emailKey";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  async function AlertDismissible(words, error) {
    if (!error) {
      toast.success(words, {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(words, {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",

          staggerChildren: 0.6,
          duration: 0.3,
          stiffness: 50,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: "-100vw",
      });
    }
  }, [inView]);

  const submit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const serviceId = em.SERVICE_ID;
      const templateId = em.TEMPLATE_ID;
      const userId = em.USER_ID;
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log(response);
          setName("");
          setEmail("");
          setMessage("");
          setEmailSent(true);
          AlertDismissible("Sent!");
        })
        .then((error) => {
          console.log(error);
          AlertDismissible(
            "Something went wrong, Refresh page and try again",
            true
          );
        });
    } else {
      AlertDismissible("Please fill in all fields.", true);
    }
  };
  return (
    <div ref={ref}>
      <motion.div animate={animation} className=" h-fit pt-20 mb-12 ">
        <div className="mx-8">
          {" "}
          <div className="flex w-full items-center justify-center mx-7">
            {" "}
            <h1 className="prose prose-lg text-primary font-bold  md:text-5xl xs:text-4xl  text-2xl">
              Get in Touch
            </h1>{" "}
            <hr className="w-24 mx-5 border-t-4 rounded-md border-secondary md:block hidden" />
          </div>
          <div className="flex w-full items-center justify-center my-10">
            <form className="w-full mx-10 font-poppins" onSubmit={submit}>
              {" "}
              <div className="flex w-full items-center justify-center  my-5">
                {" "}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered border-primary w-full max-w-xl  input-md shadow-md bg-base-200"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center justify-center  my-5">
                {" "}
                <input
                  type="email"
                  placeholder="Your email address"
                  className="input input-bordered border-primary w-full max-w-xl input-md   shadow-md bg-base-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center justify-center">
                {" "}
                <textarea
                  cols="100"
                  rows="10"
                  placeholder="Your message"
                  value={message}
                  className=" border-primary  md:w-full mx-2  textarea placeholder:text-lg  bg-base-200 shadow-md"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex w-full items-center justify-center  my-5">
                <button
                  type="submit"
                  className="btn btn-outline border-primary text-primary hover:bg-primary xl:btn-xl hover:text-white"
                >
                  Send Message
                </button>
              </div>
              <span className={emailSent ? "visible" : "hidden"}>Sent!</span>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
