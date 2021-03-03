import React from 'react'
import './Card.css'

export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#332222',
        borderColor: props.color || '#332222'
    }

    return (
        <div className='Card' style={cardStyle}>
            <div className='title'> {props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}