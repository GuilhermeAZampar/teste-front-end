import './Partners.scss'
import partnersImage from "../../assets/parceiros.png";


export function Partners(){
    return(
        <section className='partners'>
            <div className='partners__grid'>
                {[1,2].map((item)=>(
                    <article className='partners__card' key={item} style={{backgroundImage:`url(${partnersImage})`}} >
                        <div className='partners__content'>
                            <h2>Parceiros</h2>
                              <p>
                                Lorem ipsum dolor sit
                                <br />
                                amet, consectetur
                                </p>
                                <button type='button' className='partners__button'>CONFIRA</button>
                        </div>

                    </article>

                ))}
            </div>

        </section>
    )
}