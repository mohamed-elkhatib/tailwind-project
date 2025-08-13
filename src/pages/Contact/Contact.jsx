
import styles from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [changeName, setChangeName] = useState(false);
  const [changeAge, setChangeAge] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  function userWrite(e) {
    if (e.target.name === "userName") {
      if (e.target.value != "") {
        setChangeName(true);
      } else {
        setChangeName(false);
      }
    }
    if (e.target.name === "userAge") {
      if (e.target.value != "") {
        setChangeAge(true);
      } else {
        setChangeAge(false);
      }
    }
    if (e.target.name === "userEmail") {
      if (e.target.value != "") {
        setChangeEmail(true);
      } else {
        setChangeEmail(false);
      }
    }
    if (e.target.name === "userPassword") {
      if (e.target.value != "") {
        setChangePassword(true);
      } else {
        setChangePassword(false);
      }
    }
  }
  // className=" absolute top-4 left-0 opacity-0 text-sm text-secondary"
  return (
    <section className="min-h-screen pt-28">
      <div className="container">
        <div className="header text-center text-primary mb-10">
          <h2 className="mb-5 text-5xl">conatct section</h2>
          <span className={`${styles.starIcon} relative mb-5`}>
            <i class="fa-solid fa-star"></i>
          </span>
        </div>
        <form className=" w-[50%] mx-auto  flex flex-col">
          <div className=" relative mb-20   ">
            <label
              htmlFor="userName"
              className={
                changeName
                  ? "absolute -top-4 left-0 opacity-100 text-sm text-secondary z-30 transition-all duration-500"
                  : "absolute top-4 left-0 opacity-0 text-sm text-secondary transition-all duration-500"
              }
            >
              userName:
            </label>
            <input
              type="text"
              name="userName"
              placeholder="userName"
              className="min-w-full h-10 border-b-2 border-gray-300 focus:outline-0 "
              onChange={userWrite}
            />
          </div>
          <div className="mb-20 relative ">
            <label
              htmlFor="userName"
              className={
                changeAge
                  ? "absolute -top-4 left-0 opacity-100 text-sm text-secondary z-30 transition-all duration-500"
                  : "absolute top-4 left-0 opacity-0 text-sm text-secondary transition-all duration-500"
              }
            >
              userAge:
            </label>
            <input
              type="number"
              name="userAge"
              placeholder="userAge"
              className="min-w-full h-10 border-b-2 border-gray-300 focus:outline-0"
              onChange={userWrite}
            />
          </div>
          <div className="mb-20 relative ">
            <label
              htmlFor="userName"
              className={
                changeEmail
                  ? "absolute -top-4 left-0 opacity-100 text-sm text-secondary z-30 transition-all duration-500"
                  : "absolute top-4 left-0 opacity-0 text-sm text-secondary transition-all duration-500"
              }
            >
              userEmail:
            </label>

            <input
              type="email"
              name="userEmail"
              placeholder="userEmail"
              className="min-w-full h-10 border-b-2 border-gray-300 focus:outline-0"
              onChange={userWrite}
            />
          </div>
          <div className="mb-5 relative">
            <label
              htmlFor="userName"
              className={
                changePassword
                  ? "absolute -top-4 left-0 opacity-100 text-sm text-secondary z-30 transition-all duration-500"
                  : "absolute top-4 left-0 opacity-0 text-sm text-secondary transition-all duration-500"
              }
            >
              userPassword:
            </label>
            <input
              type="password"
              name="userPassword"
              placeholder="userPassword"
              className="min-w-full h-10 border-b-2 border-gray-300 focus:outline-0"
              onChange={userWrite}
            />
          </div>
          <button className="text-start bg-secondary max-w-fit p-3 text-white border-0 rounded-[5px] text-[15px] mb-5">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
