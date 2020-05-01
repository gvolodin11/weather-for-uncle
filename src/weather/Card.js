import React, { Component } from 'react'
import '../weather/Card.scss'

class Card extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const getCelsius = (kelvinTemp) => {
            return Math.floor(kelvinTemp - 273.15) + '°C'
        }

        return (
            <div>
                <h1>Weather forecast of { this.props.data.data.city.name + ', ' + this.props.data.data.city.country } every 3h from now</h1>
            <div className="card-container">
                { this.props.data.data.list.map((item, i) => {
                        let date = new Date(item.dt * 1000) // нужно умножить на тысячу чтоб получить норм дату из эпохи
                        console.log(date)
                        while (i < 30) return(
                            <div className="card" key={ item.dt }>
                                <h2>{ days[date.getDay()]}</h2>
                                <h2>{ getCelsius(item.main.temp) }</h2>
                                <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
                                <p>Min: { getCelsius(item.main.temp_min) }</p>
                                <p>Max: { getCelsius(item.main.temp_max) }</p>
                            </div>
                    )})}
                                </div>
            </div>
                                )}
}

                                export default Card