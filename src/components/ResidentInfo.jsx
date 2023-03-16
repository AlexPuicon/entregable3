import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);
  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);
      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadResidentInfo();
  }, []);
  return (
    <>
      {residentInfo && (
        <article>
          <div>
            <img src={residentInfo.image} alt={residentInfo.image} />
          </div>
          <h3>{residentInfo.name}</h3>
          <ul>
            <li>
              <span>Especie: </span>
              {residentInfo.species}
            </li>
            <li>
              <span>Origen: </span>
              {residentInfo.origin.name}
            </li>
            <li>
              <span>Appearance in episodes: </span>
              {residentInfo.episode.length}
            </li>
          </ul>
          <div>
            <span>Status: </span>
            {residentInfo.status}
          </div>
        </article>
      )}
    </>
  );
};

export default ResidentInfo;
