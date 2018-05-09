/* @flow */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Universe } from '../../components';

const universes = [
  {
    id: '1',
    name: 'Dogs',
    image: 'Dog.jpg',
    price: '???',
    description: 'All the dogs food'
  },
  {
    id: '2',
    name: 'Cats',
    image: 'Cat.jpg',
    price: '???',
    description: 'All the cats food'
  },
  {
    id: '3',
    name: 'Rabbit & Ferret',
    image: 'Rabbit.jpg',
    price: '???',
    description: 'All your little friends food'
  },
  {
    id: '4',
    name: 'Birds & Others',
    image: 'Bird.jpg',
    price: '???',
    description: 'All your pets food'
  }
];

export default () => (
  <div>
    <Helmet title="Landing page" />
    <div className="row mt-3">
      {universes.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/UserInfo/${id}`}>{name}</Link>
        </li>
      ))}
    </div>
    <div className="row mt-3">
      {universes.map(({ id, name, img, description }) => (
        <Universe key={id} name={name} img={img} desc={description} />
      ))}
    </div>
  </div>
);
