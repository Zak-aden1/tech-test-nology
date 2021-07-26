import React from 'react'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [ispending, setIspending] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] =useState(null)

    useEffect(() => {
    fetch(url)
    .then(res => {
        if (!res.ok) {
            throw Error('could not get data')
        } else {
            return res.json()
        }
    })
    .then (data => {
        console.log(data);
        setData(data)
        setIspending(false)
    })
    .catch(err => {
        console.log('error');
        setError(err.message)
    })
    }, [])
    return {data, ispending, error}
}

export default useFetch
