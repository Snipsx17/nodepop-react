import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Icon } from '../../assets/logo-nodepop.svg';
import './Header.css';
import Button from '../Button';
import { useIsLogged } from '../../pages/auth/loginPage/LoginContext';

const Header = () => {
  const { logoutHandler } = useIsLogged();
  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/" replace>
          <Icon width="80px"></Icon>
        </NavLink>
      </div>
      <nav className="header-nav">
        <NavLink to="/adverts" end>
          Main page
        </NavLink>
        <NavLink to="/adverts/new" className="">
          New advert
        </NavLink>
        <Button as={Link} onClick={logoutHandler} $variant="primary">
          Logout
        </Button>
      </nav>
    </header>
  );
};

export default Header;
