import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import Membro from './components/basicos/Membro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/TabelaProduto'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai.jsx'
import Input from './components/formulario/input'
import Contador from './components/contador/contador.jsx'
import Mega from './components/mega/Mega'
import MegaProf from './components/megaNova/MegaNova'

import './App.css'
import './components/layout/Style.css'


export default _ =>
    <div className="App">
        <h1 class='titulo'>Fundamento React (Arrow)</h1>
        <div className='Cards'>
        <Card titulo="#13 - Desafio da Mega  " color="#132457">
                <MegaProf ></MegaProf>
            </Card>
            <Card titulo="#13 - Desafio da Mega  " color="#132457">
                <Mega entradaInicial={6} ></Mega>
            </Card>
            <Card titulo="#12 - Contador  " color="#421731">
                <Contador numeroInicial={10} passoInicial={2}></Contador>
            </Card>
            <Card titulo="#11 - Componente controlado  " color="#424121">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta  " color="#423551">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação direta  " color="#441410">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Renderização condicional  " color="#221451">
                <ParOuImpar numero={321}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Isaias' }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'Isaias' }}></UsuarioInfo>
            </Card>
            <Card titulo="#07 - Desafio Repetição " color="#222531">
                <ListaProdutos></ListaProdutos>
            </Card>

            <Card titulo="#06 - Repetição " color="#146531">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componentes filhos " color="#021480">
                <Familia sobrenome="Brito">
                    <Membro nome="Isaias" ></Membro>
                    <Membro nome="Pedro"></Membro>
                    <Membro nome="Silas"></Membro>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio
                    min={1}
                    max={10}
                />
            </Card>

            <Card titulo="#03 - Fragmento" color="#611580">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color="#521110">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Muito bom!"
                    nota={-4 + 5}
                />
            </Card>
            <Card titulo="#01 - Primeiro" color="#245080">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div >