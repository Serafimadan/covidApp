import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import { Cards } from './components/Cards/Cards';
import { Chart } from './components/Chart/Chart';
import { CountryPicker } from './components/CountryPicker/CountryPicker';
import { fetchData } from './api/';

import image from './surces/covid1.jpg';

const  App = () => {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState('');
    
    useEffect(() => {
      const fetchApi = async () => {
        const data = await fetchData();
          setData(data);
        }
      fetchApi()
    }, [])

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data)
    setCountry(country );
  }

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
}

export default App;
