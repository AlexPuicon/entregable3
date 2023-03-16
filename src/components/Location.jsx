import React from 'react';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section>
      <h2>{name}</h2>
      <ul>
        <li>
          <span>Type: </span>
          {type}
        </li>
        <li>
          <span>Diemnsion: </span>
          {dimension}
        </li>
        <li>
          <span>Population: </span>
          {residents.length}
        </li>
      </ul>
    </section>
  );
};

export default Location;
