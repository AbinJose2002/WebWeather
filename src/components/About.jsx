import React from 'react'
import './About.css'

export default function About() {
  return (
    <section className='container col-lg-8 col-sm-12 about-sec my-3 py-5 px-5'>
        <h1>About WebWeather</h1>
        <h3>Project Description:</h3>
        <p>WebWeather is a web application built with Vite and React that leverages the AccuWeather API to provide a user-friendly weather information experience. It offers the following features:</p>
        <br />
        <ul>
            <li><b>City Autocomplete:</b> As users type their desired location, suggestions from the AccuWeather API dynamically populate a dropdown list.</li>
            <li><b>Weather Card:</b> Upon selecting a location, the application fetches and renders a weather card displaying relevant weather data for the chosen city.</li>
        </ul>
        <h3>Technologies Used:</h3>
        <ul>
            <li><b>CFrontend:</b></li>
            <ul>
                <li>React: JavaScript library for building user interfaces.</li>
                <li>Vite: Build tool for modern web development.</li>
            </ul>
            <li><b>API: </b>AccuWeather API for retrieving weather data.</li>
        </ul>
    </section>
  )
}
