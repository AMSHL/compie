import React from 'react';

export const Circule = ({ handleClick, id }) => (
  <li id={`circ${id}`} className={"circle"} onClick={() => handleClick(id)} />
);
