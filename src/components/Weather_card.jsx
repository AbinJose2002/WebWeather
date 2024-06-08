import React from 'react'

export default function Weather_card(props) {
  return (
    <div>
      <div className="cardContainer">
  <div className="card">
  <p class="city">{props.name}</p>
    <p className="weather">{props.category}</p>
    <p className="temp">{(props.minTemp+props.maxTemp)/2}°F</p>
    <div className="minmaxContainer">
      <div className="min">
        <p className="minHeading">Min</p>
        <p className="minTemp">{props.minTemp}°F</p>
      </div>
      <div className="max">
        <p className="maxHeading">Max</p>
        <p className="maxTemp">{props.maxTemp}°F</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
