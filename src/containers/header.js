import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src={`${process.env.PUBLIC_URL}/images/misc/logo.png`}
          alt="Netflix"
        />
        <Header.ButtonLink to={ROUTES.LOG_IN}>Log In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
