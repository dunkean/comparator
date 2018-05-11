/* @flow */

import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import { Container, Navbar } from 'reactstrap';

import config from '../config';
// Import your global styles here
import 'normalize.css/normalize.css'; // eslint-disable-line import/first
import '../theme/bootstrap.min.css';
// import styles from './styles.scss';

type Props = { route: Object };

const App = ({ route }: Props) => (
  <Container>
    <Helmet {...config.app} />
    <Navbar color="light" light expand="md">
      <img src={require('./assets/Logo.png')} alt="Logo" height="70" />
      <h1>{config.app.title}</h1>
    </Navbar>
    <hr />
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
    <hr />
    <Navbar color="light" light expand="md">
      <h1>footer</h1>
    </Navbar>
  </Container>
);

export default hot(module)(App);
