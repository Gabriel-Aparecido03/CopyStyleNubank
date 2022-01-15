import React from 'react'

import { Header } from '../components/Header'

import { BsArrowRight } from 'react-icons/bs'
import { RiArrowRightUpLine } from 'react-icons/ri'

import '../styles/pages/Home.scss'

import firstPeopleBackground from '../assets/images/first-background.jpg'
import cartPurple from '../assets/images/background-cartao.jpg'
import cartUltraviolet from '../assets/images/cart-ultraviolet.png'
import phoneInformations from '../assets/images/phone-show-nubank-account.jpg'
import secondPeopleBackgroudn from '../assets/images/second-background.jpg'
import thirdPeopleBackground from '../assets/images/third-background.jpg'
import fouthPeopleBackground from '../assets/images/fourth-background.jpg' 

export function Home() {
    return(
        <div id="Home">
            <header>
                <Header/>
            </header>
            <main>
                <div className="order-cart">
                    
                    <div className="order-content">
                        <div className="ads-order">
                           <div className="write-content-order">
                                <h1>O futuro é a razão que a gente faz <br/>planos.</h1>
                                <p>Escolha o futuro.Comece a controlar melhor sua vida financeira <br/> com o Nubank.</p>
                           </div>
                            <div className="input-content-order">
                                <h1>Peça sua conta e cartão de crédito do Nubank</h1>
                                <input type="text" className="order-cart" placeholder='digite seu CPF' />
                                <button><p>Continuar</p></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="normal-cart">
                        <div className="write-content-normal-cart">
                            <p><a>Cartão de Crédito</a><br/>Pode chamar ele de<br/>  roxinho.Além disso,pode<br/>  chamar ele demoderno,<br/> gratuito e prático também.</p>
                            <span>Saiba mais  <BsArrowRight/></span>
                        </div>
                        <div className="image-content-normal-cart">
                            <img src={cartPurple} alt="cartão roxo do Nubank" />
                        </div>
                </div>

                <div className="ultraviolet-cart">
                    <div className="write-content-ultraviolet-cart">
                        <p><a>Nubank Ultravioleta</a><br/>O cartão pensado para quem quer ver além</p><span>Saiba mais <BsArrowRight/></span>
                    </div>
                    <div className="image-content-ultraviolet-cart">
                        <img src={cartUltraviolet} alt="Cartão de crédito " />
                    </div>
                </div>

                <div className="phone-informations">
                    <div className="write-content-phone-informations">
                        <p><a>Conta do Nubank</a><br/>A conta uqe vai levar você<br/> ao controle da sua vida<br/> financeira.</p>
                        <span>Sem tarifas e sem complicações <BsArrowRight/></span>
                    </div>
                    <div className="image-content-phone-informations">
                        <img src={phoneInformations} alt="" />
                    </div>
                </div>

                <div className="control-finance-life">
                    <div className="write-content-control-finance-life">
                        <h1>Nós acreditamos que só<br/>uma pessoa pode ter<br/>controle sobre sua vida<br/>financeira: você.</h1>
                        <span>Saiba mais sobre como fazemos isso <BsArrowRight/></span>
                    </div>
                </div>

                <div className="nu-community">
                    <div className="write-content-nu-community">
                        <h1>NuCommunity<br/>A comunidade oficial do<br/> Nubank para você tirar<br/>dúvidas e compartilhar<br/>ideias.</h1>
                        <span>Faça parte <RiArrowRightUpLine/></span>
                    </div>
                </div>

                <div className="hi-nubank">
                    <div className="write-content-hi-nubank">
                        <h1>Muita informação e <br/>contéudo para você <br/>encontrar a melhor <br/>versão da sua vida<br/>finaceira</h1>
                        <span>Fala, Nubank <BsArrowRight/></span>
                    </div>
                </div>
            </main>
        </div>
    )
}