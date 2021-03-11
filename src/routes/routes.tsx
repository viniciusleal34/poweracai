/* eslint-disable no-constant-condition */
/* eslint-disable react/display-name */
import React, { ComponentType } from 'react';
import { Route, Redirect, RedirectProps } from 'react-router-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { getToken } from '../services/auth';

// Pages components
import SignIn from '../views/pages/SignIn';

interface ReactPropsDefault extends RedirectProps {
  component?: React.ComponentType | any;
}

export const PrivateRoute: React.FC<ReactPropsDefault> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};
export const routes = {
  protected: [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <FontAwesomeIcon icon={faTachometerAlt} />,
      component: () => <h1>Dashboard</h1>,
    },
    {
      title: 'Usuario',
      path: '/usuario',
      icon: <FontAwesomeIcon icon={faUser} />,
      component: () => <h1>Usuarios</h1>,
    },
  ],
  public: [
    {
      path: '/',
      icon: '',
      component: SignIn,
    },
    {
      path: '/forgot',
      icon: '',
      component: () => <h1>Esqueceu a senha</h1>,
    },
  ],
};
