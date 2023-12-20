import { useState } from "react";
import { login } from "../service";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useIsLogged } from "./LoginContext";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const { loginHandler } = useIsLogged();

  const onChangeHandler = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await login(credentials);
      loginHandler();
      navigate("/adverts");
    } catch (error) {
      setLoginError(error.data.message);
    }
  };

  return (
    <div className="login-content">
      <div className="login-dialog">
        <h3>Login</h3>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={credentials.email}
            autoComplete="username"
          />
          <br />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={credentials.password}
            autoComplete="current-password"
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
