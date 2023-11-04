import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';

const AuthNav = () => (
  <div>
    <NavLink
      to="/login"
      activeClassName={s.activeNavLink}
      className={s.navLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
