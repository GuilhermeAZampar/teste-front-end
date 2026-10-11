import './Banner.scss'
import bannerImage from "../../../assets/black-friday.jpg";


export default function Banner() {
    return(
        <section className="banner">
            <img src={bannerImage} alt="Banner promocional da Black Friday" className="banner__image" />
            <div className="banner__content">
                <h2>Venha conhecer nossas promoções</h2>
                <p><strong>70% OFF</strong>nos produtos</p>
                <a href="#ofertas" className="banner__button">Ver Ofertas</a>
            </div>



            </section>
    )
}