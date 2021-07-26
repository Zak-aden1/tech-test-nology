import React from 'react'
import styles from './Quiz.module.scss'
import { useState } from 'react'

const Quiz = () => {
    const [answer, setAnswer] =useState('B')
    const [userAnswer, setUserAnswer] =useState('')
    const [reveal, setReveal] =useState(false)
    const [number, setNumber] = useState(0)

    const handleForm = (e) => {
        e.preventDefault()
        console.log(userAnswer);

        if (userAnswer == 'B') {
            setNumber(100)
            setReveal(true)
            // let output = 100
            // const timer = setInterval(() => {
            //     if (number === output) {
            //         clearInterval(timer)
            //     } else {
            //         setNumber(number ++)
            //     }
            // }, 10)
        } else {
            setNumber(0)
            setReveal(true)
        }
    }
    return (
        <div>
            <h2>Quiz</h2>

            <form className={styles.quiz} onSubmit={handleForm}>
                <p>PineApple On Pizza</p>
                <label >Hell YEAHH!!!!</label>
                <input type="radio" name='q1' value='A' onChange={(e) => setUserAnswer(e.target.value)}/>
                <label>That is Nasty</label>
                <input type="radio" name='q1' value='B'  onChange={(e) => setUserAnswer(e.target.value)}/>
                <button>Submit</button>
            </form>

            <div>
                {reveal && <h4>You have scored {number} %!!</h4> }
            </div>
        </div>
    )
}

export default Quiz
