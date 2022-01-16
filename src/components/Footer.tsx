import React from 'react'

import '../styles/components/Footer.scss'

import { BsArrowRight } from 'react-icons/bs'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { IoIosAppstore } from 'react-icons/io'
import { SiNubank } from 'react-icons/si'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram} from 'react-icons/ai'
import { AiFillLinkedin} from 'react-icons/ai'
import { AiFillYoutube} from 'react-icons/ai'
import { AiFillTwitterSquare} from 'react-icons/ai'

export function Footer() {

    return(
        <div id="Footer">
            <div className="all-informations">
                <ul>
                    <li><h1>Nubank</h1></li>
                    <li><p>Sobre nós</p></li>
                    <li><p>Carreiras</p></li>
                    <li><p>Perguntas Frequentes</p></li>
                    <li><p>Contato</p></li>
                    <li><p>Imprensa</p></li>
                    <li><p>Num Impacto <RiArrowRightUpLine /></p></li>
                </ul>
                <ul>
                    <li><h1>Produtos</h1></li>
                    <li><p>Conta Digital</p></li>
                    <li><p>Cartão de crédito</p></li>
                    <li><p>Nubank Ultravioleta</p></li>
                    <li><p>Empréstimo</p></li>
                    <li><p>Conta PJ</p></li>
                    <li><p>Cartão de crédito PJ</p></li>
                    <li><p>Nubank Vida</p></li>
                    <li><p>Investimentos</p></li>
                </ul>
                <ul>
                    <li><h1>Explore</h1></li>
                    <li><p>Comunidade <RiArrowRightUpLine/></p></li>
                    <li><p>Blog <RiArrowRightUpLine/></p></li>
                    <li><p>InvestNews <RiArrowRightUpLine/></p></li>
                    <li><p>México  <RiArrowRightUpLine/></p></li>
                    <li><p>Argentina  <RiArrowRightUpLine/></p></li>
                    <li><p>Colômbia <RiArrowRightUpLine/></p></li>
                </ul>
                <ul>
                    <li><h1>Veja também</h1></li>
                    <li><p>Auxílio Emergencial FGTS <BsArrowRight/></p></li>
                    <li><p>Tudo sobre o Pix <BsArrowRight/></p></li>
                </ul>
                <ul>
                    <li><h1>Transparência</h1></li>
                    <li><p>Política de Privacidade</p></li>
                    <li><p>Política de Comliance</p></li>
                    <li><p>Contratos</p></li>
                    <li><p>Política de Segurança</p></li>
                    <li><p>Relatórios Finaceiros</p></li>
                    <li><p>Ética &amp; Compliance</p></li>
                    <li><p>Dados Abertos</p></li>
                    <li><p>SCR</p></li>
                    <li><p>Convenção de Boletos</p></li>
                </ul>
                <ul>
                    <li><h1>Ouvidoria</h1></li>
                    <li><p>0880 887 0463</p></li>
                    <li><p>ouvidoria@nubank.com.br</p></li>
                    <li><p>Atendimento das 9h às 18h(dias úteis)</p></li>
                </ul>
                <ul> 
                    <li><h1 >Fale com a gente</h1></li>
                    <li><p>0800 608 6236</p></li>
                    <li><p>meajuda@nubank.com.br</p></li>
                    <li><p>Atendimento 24h</p></li>
                </ul>
                <ul className='download'>
                    <li><h1>Baixe o app</h1></li>
                    <div className="apps-store">
                        <li><p><IoLogoGooglePlaystore/></p></li>
                        <li><p><IoIosAppstore/></p></li>
                    </div>
                </ul>
            </div>
            <div className="company-informations">
                <ul>
                    <li><p><SiNubank style={{fontSize:'2rem'}}/></p></li>
                </ul>
                <ul>
                    <li><p>© 2021  Nu Pagamentos S.A - Instituição de Pagamento.  18.236.120/0001-58<br/>
                            Rua Capote Valente, 39 - São Paulo, SP - 05409-000</p></li>
                </ul>
                <ul className='social-medias'>
                    <li><p><AiFillFacebook style={{fontSize:'2rem'}}/></p></li>
                    <li><p><AiFillInstagram style={{fontSize:'2rem'}}/></p></li>
                    <li><p><AiFillLinkedin style={{fontSize:'2rem'}}/></p></li>
                    <li><p><AiFillYoutube style={{fontSize:'2rem'}}/></p></li>
                    <li><p><AiFillTwitterSquare style={{fontSize:'2rem'}}/></p></li>
                </ul>
            </div>
            <div className="linguage">
                <input type="radio" name="" id="" checked readOnly/><p>Português</p>
                <input type="radio" readOnly={true}/><p>English</p>
            </div>
        </div>
    )
}