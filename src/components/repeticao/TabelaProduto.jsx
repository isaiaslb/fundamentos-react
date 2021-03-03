import React from 'react'
import produtos from '../../data/produtos'


export default props => {

    const listaProdutos = produtos.map((produto, i) => {
        return (
            <tr key={ produto.id } className={ i % 2 === 0 ? 'par' : 'impar'}>
                <td> {produto.id} </td>
                <td> {produto.nome} </td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')} </td>
            </tr>
        )
    })
    return (
        <table className='tabela'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {listaProdutos}
            </tbody>


        </table>
    )

}