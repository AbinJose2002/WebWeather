import { TextField } from '@mui/material'
import { useState } from 'react'
import React from 'react'

export default function Search() {
    const [city, setcity] = useState('')
    const handleCityField = async (e) => {
        setcity(e.target.value)
        let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=idAxTz2qsqXEai3wHtURlxxgoj9iGDzM&q=${city}`)
        if (response.ok) {
            const data = await response.json();
            // console.log('City suggestions:', data);
            console.log('------------------------------------')
            data.map((item)=>{
                console.log(item.LocalizedName,item.Key)
            })
        } else {
            console.error('Error fetching city suggestions:', response.statusText);
        }
    }

    return (
        <div className='container d-flex justify-content-center align-items-center col-12'>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" className='col-lg-8 col-md-10 col-sm-12' value={city} onChange={handleCityField}/>
        </div>
    )
}
