import './Header.scss'
import {Wallet , ShoppingCart, Heart,UserRound} from 'lucide-react'
import econverseLogo from '../../assets/logo-econverse.png'


export default function Header() {
    return(
        <>
        <header className="header">
            <div className="header__top">
                <span>♢ Compra 100% segura</span>
                <span>🚚 Frete grátis acima de R$ 200</span>
                <span>▣ Parcele suas compras</span>
            </div>
            <div className="header__container">
            <img className='header__logo' src={econverseLogo} alt='Logo e converse'></img>
            <div className="header__search">
                <input type="search" placeholder="O que você está procurando?" aria-label="Pesquisar produtos" />
                <button type="submit" aria-label="Buscar">🔍</button>

                </div>
            <nav className="header__nav" aria-label="Açoes da Loja">
                <a href="#pedidos"  aria-label="Meus Pedidos"><Wallet size={21} /></a>
                <a href="#favoritos"  aria-label="Meus favoritos"><Heart size={21}/></a>
                < a href="#conta"  arial-label="Minhca Conta"><UserRound size={21} /></a>
                <a href="#carrinho" arial-label="Meu Carrinho"><ShoppingCart size={21} /></a>
                </nav>
            </div>
            <nav className="header__categories" aria-label='Categoria de Produtos'>
                <a href="#todos produtos">TODOS OS PRODUTOS</a>
                <a href="#supermercado">SUPERMERCADO</a>
                <a href="#livros">LIVROS</a>
                <a href="#moda">MODA</a>
                <a href ="#lançamentos">LANÇAMENTOS</a>
                <a href="#ofertas" className="header__highlight">OFERTAS DO DIA</a>
                <a href="#assinaturas">ASSINATURAS</a>
            </nav>

        </header>
        
        
        </>
    )
}