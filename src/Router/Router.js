import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const ColorsPage = lazy(() =>
  import('../pages/ColorsPage' /* webpackChunkName: "contact-page" */),
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage' /* webpackChunkName: "login-page" */),
);

export const paths = {
  MAIN: '/',
  COLORS: '/colors',
  LOGIN: '/login',
};

const Router = () => {
  return (
    <Suspense fallback={<p align="center">Loading...</p>}>
      <Switch>
        <Route exact path={paths.MAIN}>
          <HomePage />
        </Route>

        <PrivateRoute path={paths.COLORS} redirectTo={paths.LOGIN}>
          <ColorsPage />
        </PrivateRoute>

        <PublicRoute path={paths.LOGIN} restricted redirectTo={paths.COLORS}>
          <LoginPage />
        </PublicRoute>

        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default Router;
