import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getRandomNumber } from './utils/getRandomNumber';
import Location from './components/Location';

const App = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const getIdLocationRandom = () => getRandomNumber(1, 126);
  const loadLocationInfo = async () => {
    const url = `https://rickandmortyapi.com/api/location/${getIdLocationRandom()}`;
    try {
      const res = await axios.get(url);
      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadLocationInfo();
  }, []);
  return (
    <div className="h-full flex flex-col justify-center items-center p-10 text-white">
      {locationInfo && <Location {...locationInfo} />}
    </div>
  );
};

export default App;
