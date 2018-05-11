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
      <Universe key="1" name="Dogs" img={require('./assets/Dog.jpg')} />
      <Universe key="2" name="Cats" img={require('./assets/Cat.jpg')} />
      <Universe key="3" name="Rabbits & Co" img={require('./assets/Rabbit.jpg')} />
      <Universe key="4" name="Birds & Co" img={require('./assets/Bird.jpg')} />
    </Row>
  </Container>
);
