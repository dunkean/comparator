/* @flow */

import React from 'react';
import Helmet from 'react-helmet';
// import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { Universe } from '../../components';

export default () => (
  <Container>
    <Helmet title="Landing page" />
    <Row mt="3">
      <Universe key="1" name="Dogs" img={require('./assets/Dog.jpg')} color="blue" />
      <Universe key="2" name="Cats" img={require('./assets/Cat.jpg')} color="red" />
      <Universe key="3" name="Rabbits" img={require('./assets/Rabbit.jpg')} color="green" />
      <Universe key="4" name="Birds" img={require('./assets/Bird.jpg')} color="yellow" />
    </Row>
  </Container>
);
