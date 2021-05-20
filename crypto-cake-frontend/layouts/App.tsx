import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ResetCSS } from '@pancakeswap/uikit';
import GlobalStyle from '@style/Global';

const LogIn = loadable(() => import('@views/LogIn'));
const SignUp = loadable(() => import('@views/SignUp'));

const App = () => {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Redirect exact path="/" to="/login" />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;