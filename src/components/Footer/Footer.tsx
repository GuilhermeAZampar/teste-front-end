
import {FaInstagram, FaFacebook, FaLinkedin} from "react-icons/fa"
import {useState} from 'react'
import type {SubmitEvent} from 'react'
import './Footer.scss'
import logoEconverse from '../../assets/logo-econverse.png'

export default function Footer(){
    const [nome,setNome]=useState("");
    const [email,setEmail]=useState("");
    const [accept,setAccept]=useState(false);

    function handleSubmit(event:SubmitEvent<HTMLFormElement>){
        event.preventDefault();

        if(!accept || nome.trim()==='' || email.trim()===''){
            alert("Voce deve aceitar os termos e preencher os campos");
            return;
        }

        alert("Formulario valido com sucesso");
    }

    return(
        <footer className='footer'>

            <div className='footer__newsletter'>
                <div className='footer__newsletter-content'>

                    <div className='footer__newsletter-text'>
                        <h2>Inscreva-se no nosso Newsletter</h2>
                        <p>Assina nosso Newsletter e receba novidades exclusivas</p>
                    </div>

                    <form className='footer__form' onSubmit={handleSubmit}>
                        <div className='footer__fields'>
                            <input type='text' value={nome} placeholder='Digite seu nome' onChange={(e)=>setNome(e.target.value)}></input>
                            <input type='email' value={email} placeholder='Digite seu email' onChange={(e)=>setEmail(e.target.value)}></input>
                            <button type='submit'>Inscrever-se</button>
                        </div>

                        <label className='footer__terms'>
                            <input type='checkbox' checked={accept} onChange={(event)=>setAccept(event.target.checked)}></input>
                            Aceite os termos
                        </label>
                    </form>

                </div>
            </div>

            <div className='footer__main'>

                <div className='footer__about'>
                    <div className='footer__logo'>
                        <img src={logoEconverse} alt="Logo e-converse"></img>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className='footer__social'>
                        <FaInstagram size={20}/>
                        <FaFacebook size={20}/>
                        <FaLinkedin size={20}/>
                    </div>
                </div>

                <div className='footer__links'>

                    <div className='footer__column'>
                        <h3>Institucional</h3>
                        <a href='#sobre'>Sobre nós</a>
                        <a href='#trabalhe'>Trabalhe Conosco</a>
                        <a href='#movimento'>Movimento</a>
                    </div>

                    <div className='footer__column'>
                        <h3>Ajuda</h3>
                        <a href='#suporte'>Suporte</a>
                        <a href='#contato'>Fale Conosco</a>
                        <a href='#perguntas'>Perguntas Frequentes</a>
                    </div>

                    <div className='footer__column'>
                        <h3>Termos</h3>
                        <a href='#termos'>Termos e Condições</a>
                        <a href='#privacidade'>Política de Privacidade</a>
                        <a href='#trocas'>Trocas e devolução</a>
                    </div>

                </div>
            </div>

            <div className='footer__bottom'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </footer>
    )
}
