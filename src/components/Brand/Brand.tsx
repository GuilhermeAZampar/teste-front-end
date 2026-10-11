import brandsImage from '../../assets/Brand.png'
import './Brand.scss'

export default function Brand(){
    return(
        <section className='brands'>
            <h2 className='brands__title'>Navegue por marcas</h2>
            <img src={brandsImage} alt='Marcas parceiras' className='brands__image'></img>

        </section>

    )
}