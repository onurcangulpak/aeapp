import React, { useState } from "react";
import "./SignIn.css";
import userIcon from "../../assets/person.png";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/password.png";

const SignIn = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="sign-container">
      <div className="sign-header">
        <div className="sign-text">{action}</div>
        <div className="sign-underline"></div>
      </div>
      <div className="sign-inputs">
        {action === "Login" ? (
          <div> </div>
        ) : (
          <div className="sign-input">
            <img src={userIcon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="sign-input">
          <img src={emailIcon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="sign-input">
          <img src={passwordIcon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="sign-forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

      <div className="sign-submit-container">
        <div
          className={action === "Login" ? "sign-submit gray" : "sign-submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
          sign-submit
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "sign-submit gray" : "sign-submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default SignIn;
