import React from 'react'
import Botoes from './Botoes'
import Display from './Display'
import Input from './Input'

class Mega extends React.Component {
    state = {
        numero: this.props.numeroInicial || 0,
        entrada: this.props.entradaInicial || 6
    }

    setSeq = () => {
        var qtd = this.state.entrada

        const meuArray = []
        var numero = 0
        var existeArray = false
    
        for (var i = 0; i < qtd; i++) {
    
            numero = parseInt(Math.random() * (59 - 1)) + 1
    
            for (var j = 0; j < meuArray.length; j++) {
                if (meuArray[j] == numero) {
                    existeArray = true
                }
            }
    
            if (!existeArray) {
                meuArray[i] = parseInt(Math.random() * (59 - 1)) + 1
            }
            numero = null
            existeArray = false
        }


        this.setState({
            numero: meuArray
        })
    }

    setNovaSeq = (novaEntrada) => {
        this.setState({
            entrada: novaEntrada
        })
    }

    

    render() {
        return (
            <div className="Contador">
                <h2>Número mega-sena</h2>
                
                <Display numero={ this.state.numero} ></Display>
                <Input entrada= {this.state.entrada} setNovaSeq = { this.setNovaSeq }></Input>

                <Botoes setSeq={ this.setSeq } ></Botoes>
            </div>
        )
    }
}

export default Mega