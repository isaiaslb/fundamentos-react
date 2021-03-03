import React from 'react'

export default props => {

    const min = 50
    const max = 60

    const geraIdade =  () => parseInt ( Math.random () * (20)) + 50
    const geraNome = Math.random() > 0.5 ? 'João' : 'Maria'

    return (
        <div>
            <div>Filho</div>
            <button onClick={ e => {
                props.quandoClicar(geraNome, geraIdade)
            }}>Enviar informações</button>
        </div>
    )
}