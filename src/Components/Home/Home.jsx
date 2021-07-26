import React from 'react'
import Weather from '../Weather'
import NavBar from '../NavBar'
import Quiz from '../Quiz/Quiz';
import Football from '../Football';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Home = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <NavBar />
                    <Weather />
                </Route>

                <Route  path='/quiz'>
                    <NavBar />
                    <Quiz />
                </Route>

                <Route  path='/football'>
                    <NavBar />
                    <Football />
                </Route>

            

        </Switch>
        </Router>
    )
}

export default Home
