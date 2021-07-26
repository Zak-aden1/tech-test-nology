import React from 'react'
import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={styles.Nav}>
            <h4>Tech Test</h4>

            <ul>
                <Link to='/'>
                <li>Weather</li>
                </Link>
                <Link to='/quiz'>
                <li>Quiz</li>
                </Link>
                <Link to='/football'>
                <li>Football</li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar
