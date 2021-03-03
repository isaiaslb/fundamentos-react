import React from 'react'
export default function(props){
    console.log(props)

    const status = props.nota > 5 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <h4> { props.nota } </h4>
            <h5><b>{ status }</b></h5>
        </div>
    )
}