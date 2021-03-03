import React from 'react'

export default (props) => {

    const { min, max } = props

    const numeroSaida = parseInt(Math.random() * (max - min)) + min

    
    return (
        <h1> {numeroSaida}</h1>
    )
} 