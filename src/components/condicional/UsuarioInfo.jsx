import React from 'react'
import If, { Else } from './If'
export default props => {

    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome} >
                seja bem vindo <strong>{props.usuario.nome}</strong>!
                <Else> seja bem vindo sem nome!</Else>
            </If>
        </div>
    )
}