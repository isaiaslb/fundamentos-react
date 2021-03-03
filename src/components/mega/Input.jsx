import React from 'react'


export default props => {
    return (
        <div>
            <label htmlFor="entrada"> Quantas casas: </label>
            <input 
            type="number" 
            id="entrada" 
            value={props.entrada} 
            onChange={e => props.setNovaSeq(+e.target.value)} />
        </div>
    )
}