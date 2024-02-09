import { useEffect, useState } from 'react';
import { login } from '../service';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { useIsLogged } from './LoginContext';
import Button from '../../../components/Button';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [rememberSesion, setRememberSesion] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { loginHandler, isLogged } = useIsLogged();

  const onChangeHandler = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const rememberSessionHandler = () => {
    setRememberSesion(!rememberSesion);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await login(credentials, rememberSesion);
      loginHandler();
      navigate('/adverts');
    } catch (error) {
      setLoginError(error.data.message);
    }
  };

  useEffect(() => {
    isLogged && navigate('/adverts');
  }, [isLogged, navigate]);

  return (
    <div className="login-content">
      <div className="login-dialog">
        <h2>Login</h2>
        <form className="login-form" onSubmit={submitHandler}>
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
          <input
            type="checkbox"
            name="rememberSesion"
            checked={rememberSesion}
            onChange={rememberSessionHandler}
          />
          <label> Remenber me</label>
          <br />
          <Button $variant="primary">Login</Button>
        </form>
        <span>{loginError ? 'User or password invalid' : null}</span>
      </div>
    </div>
  );
};

export default LoginPage;
