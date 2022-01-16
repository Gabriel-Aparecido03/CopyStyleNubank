import React,{useState } from 'react'


import logo from '../assets/images/logo.jpg'

import '../styles/components/Header.scss'

import { MdOutlineLogin } from 'react-icons/md'
import { RiArrowDownSLine } from 'react-icons/ri'
import { HiMenuAlt4 } from 'react-icons/hi'

export function Header() {

    const styleIconLogin = {color:"rgb(130, 10, 209)"}

    const [isClosedFunction,setIsClosedFunction] = useState<boolean>(false)
    const [classBtn,setClassBtn] = useState<string>('open-menu')


    function toggleButoon() {
        setIsClosedFunction(!isClosedFunction)

        setClassBtn(isClosedFunction?'close-menu':'open-menu')
    }
    return(
        <div id="Header">
           <div className="principal-content">
                <div className="image-header-content">
                    <img src={logo} alt="imagem no cabeçalho representando a logo do Nubank" />
                </div>
                <div className="header-informations-content">
                    <nav>
                        <li>
                            <p>Página inicial</p>
                            <p className='dot'>.</p>
                        </li>
                        <li>
                            <p>Para você <RiArrowDownSLine /></p>
                            <div className="dropdown">
                                <ul>
                                    <li><h1>Nubank</h1></li>
                                    <li><p>Cartão de crédito</p></li>
                                    <li><p>Conta do Nubank</p></li>
                                    <li><p>Tudo Sobre Pix</p></li>
                                </ul>
                                <ul>
                                    <li><h1>Nubank Ultravioleta</h1></li>
                                    <li><p>Cartão de crédito<a>Novo</a></p></li>
                                </ul>
                                <ul>
                                    <li><h1>Outros produtos</h1></li>
                                    <li><p>Empréstimo Pessoal</p></li>
                                    <li><p>Seguro de Vida</p></li>
                                    <li><p>Investimentos<a>Novo</a></p></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <p>Para seu negócio  <RiArrowDownSLine/></p>
                            <div className="dropdown">
                                <ul>
                                    <li><h1>Nubank PJ</h1></li>
                                    <li><p>Conta PJ</p></li>
                                    <li><p>Cartâp de crédito PJ <a>Novo</a></p></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <p>O Nubank  <RiArrowDownSLine/></p>
                            <div className="dropdown">
                                <ul>
                                    <li><h1>Sobre nós</h1></li>
                                    <li><p>O Nu</p></li>
                                    <li><p>Sala de imprensa</p></li>
                                    <li><p>Carreiras</p></li>
                                    <li><p>Carreiras</p></li>
                                    <li><p>Nu Impacto</p></li>
                                </ul>
                                <ul>
                                    <li><h1>Outros canais</h1></li>
                                    <li><p>Blog</p></li>
                                    <li><p>Newsletter</p></li>
                                    <li><p>Comunidade</p></li>
                                    <li><p>InvestNews <a>Novo</a></p></li>
                                </ul>
                                <ul>
                                    <li><h1>Nubank pelo mundo</h1></li>
                                    <li><p>México</p></li>
                                    <li><p>Colômbia</p></li>
                                    <li><p>Argentina</p></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <p>Perguntas</p>
                        </li>
                    </nav>
                </div>
                <div className="login-header-content">
                    <div className="login">
                        <p>Login<MdOutlineLogin style={styleIconLogin}/></p>
                        <div className='open-menu'><p><HiMenuAlt4/></p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}