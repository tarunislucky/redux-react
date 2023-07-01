import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';

import { authActions } from '../store/auth-slice';
const Header = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => {
    return state.auth.isAuthenticated;
  })
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn
        &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      }

    </header>
  );
};

export default Header;
