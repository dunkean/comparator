/* @flow */

import React from 'react';

import './styles.scss';

type Props = {
  key: string,
  name: string,
  img: string,
  desc: string
};

export default ({ key, name, img, desc }: Props) => (
  <div id={key} className="col-sm-4 col-md-3">
    <div className="product">
      <img src={img} alt={name} />
      <div className="image_overlay" />
      <div className="view_details"> {'Enter'} </div>
      <div className="stats">
        <div className="stats-container">
          <span className="product_name">{name}</span>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  </div>
);
