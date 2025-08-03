import React, { useState } from "react";
import axios from "axios";

function InputForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    let endPoint = isSignUp ? "register" : "signin";
    await axios
      .post(`http://localhost:5000/user/${endPoint}`, { email, password })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setSuccess(response.data.message);
      })
      .catch((err) => setError(err.response.data.message));
  };
  return (
    <>
      <form action="" className="input-form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mt-3"
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mt-3"
          name="password"
          type="password"
          placeholder="Enter password"
        />

        <div className="text-center">
          <button className="button mt-5 w-100" type="submit">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </div>
        <h5 className="success">{success != "" && success}</h5>

        <h5 className="error">{error != "" && error}</h5>
        <p onClick={() => setIsSignUp(!isSignUp)} className="mt-5">
          {isSignUp ? "Already have an account?" : "Create an account"}
        </p>
      </form>
    </>
  );
}

export default InputForm;
