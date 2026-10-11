import './Categories.scss'
import {  MonitorSmartphone,Store, Wine,  Wrench, HeartHandshake, Dumbbell, Shirt,} from "lucide-react";

export default function Categories() {
    return(
        <section className="categories">
            <div className="categories__list">
            <div className="categories__item">
                <MonitorSmartphone  />
                <span>Tecnologia</span>
                </div>
                 <div className="categories__item">
                <Store  />
                <span>Supermercado</span>
                </div>
                 <div className="categories__item">
                <Wine  />
                <span>Vinhos</span>
                </div>
                 <div className="categories__item">
                <Wrench  />
                <span>Ferramentas</span>
                </div>
                <div className="categories__item">
                <HeartHandshake  />
                <span>Saúde e Bem-estar</span>
                </div>
                 <div className="categories__item">
                <Dumbbell  />
                <span>Esportes e Fitness</span>
                </div>
                 <div className="categories__item">
                <Shirt  />
                <span>Moda</span>
                </div>
                </div>
        </section>

    )
}