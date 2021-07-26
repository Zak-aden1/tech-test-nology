import React from 'react'
import WeatherCard from '../WeatherCard'
import { useEffect, useState } from 'react'
import styles from './Weather.module.scss'
import useFetch from '../../useFetch'

const Weather = () => {

    const {data: dataOne, ispending: ispendingOne, error: errorOne} = useFetch('http://api.weatherapi.com/v1/current.json?key=3aeedf407a344f91ab695829212607&q=London')
    const {data: dataTwo, ispending: ispendingTwo, error: errorTwo} = useFetch('http://api.weatherapi.com/v1/current.json?key=3aeedf407a344f91ab695829212607&q=Bristol')
    const {data: dataThree, ispending: ispendingThree, error: errorThree} = useFetch('http://api.weatherapi.com/v1/current.json?key=3aeedf407a344f91ab695829212607&q=Bristol')
    
    return (
        <div className={StyleSheet.weather}>
            za Weather
            <WeatherCard data={dataOne} ispending={ispendingOne} error={errorOne}/>
            <WeatherCard data={dataTwo} ispending={ispendingTwo} error={errorTwo}/>
            <WeatherCard data={dataThree} ispending={ispendingThree} error={errorThree}/>
        </div>
    )
}

export default Weather
