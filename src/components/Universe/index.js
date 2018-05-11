/* @flow */

import React from 'react';
import { Col } from 'reactstrap';
import './styles.scss';

type Props = {
  name: string,
  img: string,
  color: string
};

export default ({ name, img, color }: Props) => (
  <Col sm="4" md="3">
    <div className={'product ' + color}>
      <img src={img} alt={name} />
      <div className={'image_overlay ' + color} />
      <div className={'view_details ' + color}> {'Enter'} </div>
      <div className="stats">
        <div className="stats-container">
          <span className="product_name">{name}</span>
          <p>Food...</p>
        </div>
      </div>
    </div>
  </Col>
);
