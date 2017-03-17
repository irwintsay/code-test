import React from 'react';
import './MasonryItem.css';

const MasonryItem = props => (
  <div className="MasonryItem">
    <img src={ props.img } alt="blah" />
    <span className="date">{ props.date }</span>
    <span className="title springville">{ props.title }</span>
    <span className="presented acaslonpro">Presented by <span className="author acaslonpro">{ props.author }</span></span>
  </div>
);

export default MasonryItem;