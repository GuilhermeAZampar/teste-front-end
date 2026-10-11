import type { Product } from "../../../types/Product"
import { useState } from "react"
import './ProductModal.scss'


interface ProductModalProps{
    product:Product,
    onclose:()=>void;
}

export default function ProductModal({product,onclose}:ProductModalProps){
    const [quantity,setQuantity]=useState(1);
    
    return(
    
        <div className="modal">
            <div className="modal__content">
                <button type="button" onClick={onclose} className="modal__close">X</button>
                <img src={product.photo} alt={product.productName}></img>
                <div className="modal__info">
                <h2>{product.productName}</h2>
                <p>{product.descriptionShort}</p>
                <span className="modal__details">Detalhes do Produto &gt;</span>
                <strong>
                    {product.price.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}
                </strong>
                 <div className="modal__actions">
        <div className="modal__quantity">
            <button type="button" onClick={()=>setQuantity(prev=>Math.max(1,prev-1))}>-</button>
            <span>{String(quantity).padStart(2,"0")}</span>
            <button type="button" onClick={()=>setQuantity(prev=>prev+1)}>+</button>


            </div>

            <button type="button" className="modal__buy">COMPRAR</button>

         </div>
                </div>
                </div>
            </div>

    )
}