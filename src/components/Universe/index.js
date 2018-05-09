/* @flow */

import React from 'react';

import './styles.scss';

type Props = {
  key: string,
  universe: Object
};

export default ({ key, universe }: Props) => (
  <div key={universe.id} className="col-sm-4 col-md-3">
    <div className="product" id={key}>
      <img src={universe.image} alt={universe.name} />
      <div className="image_overlay" />
      <div className="view_details"> {'Enter'} </div>
      <div className="stats">
        <div className="stats-container">
          <span className="product_name">{universe.name}</span>
          <p>{universe.description}</p>
        </div>
      </div>
    </div>
  </div>
);
