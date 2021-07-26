import React from 'react'
import styles from './Football.module.scss'
import data from '../../data/db'
import { useState, useEffect } from 'react'

const Football = () => {
    const [keepers, setKeepers] =useState({})
    console.log(data);

    // useEffect(() => {
    //     setKeepers(thedata.filter((keeper) => {
    //     return keeper.position.includes('Goalkeeper')
    // }))
    // }, [keepers])
    
    
    
    return (
        <div>
            <h2>Pick Your Ideal Team</h2>
            <div className={styles.footy}>
                <select name="a" id="a">
                    <option value="">keeper</option>
                </select>

                <select name="" id="">
                    <option value="">defender</option>
                </select>
                <select name="" id="">
                    <option value="">defender</option>
                </select>
                <select name="" id="">
                    <option value="">defender</option>
                </select>
                <select name="" id="">
                    <option value="">defender</option>
                </select>
            </div>
        </div>
    )
}

export default Football
