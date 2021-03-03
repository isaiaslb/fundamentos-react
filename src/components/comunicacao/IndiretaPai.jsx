import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import InidireaFilho from './InidireaFilho'

export default props => {

    const [a, b] = [1, 2]

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)

    function fornecerInformacoes(nome, idade) {
        setNome(nome)
        setIdade(idade)
        console.log(nome, idade)
    }

    return (
        <div>
            <div>Pai</div>
            <span> {nome} </span>
            <span> {idade} </span>
            <InidireaFilho quandoClicar={fornecerInformacoes} ></InidireaFilho>
        </div>
    )
}