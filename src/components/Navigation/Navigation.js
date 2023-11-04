import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div>
      <NavLink
        exact
        to="/"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/colors"
          activeClassName={s.activeNavLink}
          className={s.navLink}
        >
          Edit colors
        </NavLink>
      )}
    </div>
  );
}
