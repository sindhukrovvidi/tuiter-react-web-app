import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunk";
import { ToastContainer, toast } from "react-toastify";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const user = await dispatch(loginThunk({ username, password }));
      if (user.payload) navigate("/tuiter/profile");
      else {
        toast.error("Please enter valid credentails or register.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div>
      <ToastContainer />
      <h1>Login Screen</h1>
      <div className="mt-2">
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="mt-2">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
export default LoginScreen;
