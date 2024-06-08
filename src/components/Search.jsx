import { TextField } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import './Search.css'
import { v4 as uuidv4 } from 'uuid';
import Weather_card from './Weather_card';

export default function Search() {
  const [city, setCity] = useState('');
  const [cityResponse, setCityResponse] = useState([]);

  const handleCityField = async (e) => {
    setCity(e.target.value);
    let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=idAxTz2qsqXEai3wHtURlxxgoj9iGDzM&q=${city}`);
    if (response.ok) {
      const data = await response.json();
      const newCityResponse = data.map((item) => ({
        id:uuidv4(),
        key: item.Key,
        name: item.LocalizedName,
      }));
      setCityResponse(newCityResponse);
    } else {
      console.error('Error fetching city suggestions:', response.statusText);
    }
  };

  const cardHandle = (key) => {
    setCityResponse([])
    generateCard(key)
  }

  const generateCard = async (key) => {
    console.log(key)

  }

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center col-12'>
      <TextField
        id="outlined-basic"
        label="Enter the location"
        variant="outlined"
        className='col-lg-8 col-md-10 col-sm-12'
        value={city}
        onChange={handleCityField}
      />
      <div className="dropdown ">
        <ul className="drop-list d-flex flex-column">
          {cityResponse.map((item) => (
            <button className='list-btn my-1 px-5 py-1' onClick={()=>cardHandle(item.key)} key={item.id}><li  >{item.name}</li></button>
          ))}
        </ul>
      </div>
      <Weather_card/>
    </div>
  );
}