import { useState } from "react";
import { login } from "../service";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      await login(credentials);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoginError(error.data.message);
    }
  };

  return (
    <div className="login-content">
      <div className="login-dialog">
        <h3>Login</h3>
        <form onSubmit={loginHandler}>
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={credentials.email}
          />
          <br />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={credentials.password}
          />
          <br />
          <button type="submit">Login</button>
        </form>
        <span>{loginError ? "User or password invalid" : null}</span>
      </div>
    </div>
  );
};

export default LoginPage;
