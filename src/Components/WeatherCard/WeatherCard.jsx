import React from 'react'
import styles from './WeatherCard.module.scss'
import useFetch from '../../useFetch'

const WeatherCard = ({data, ispending, error}) => {

    
   
    return (
        <div>
            {ispending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article className={styles.weather}>
                    <h2>{data.location.name}</h2>
                    <img src={data.current.condition.icon} alt="" />
                    <p>Temperature: {data.current.temp_c} Celsius</p>
                    <p>Humidity: {data.current.humidity}</p>
                </article>
            )}
        </div>
    )
}

export default WeatherCard
