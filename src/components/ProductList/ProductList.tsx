import { useEffect,useState } from "react";
import type{Product,ProdutcsResponse} from "../../types/Product";
import './ProductList.scss'
import ProductModal from "./ProductModal/ProductModal";
type ProductListProp={
    variant?: "default" | "simple"
}

export default function ProductList({variant="default"}:ProductListProp){
    const [products,setProducts]=useState<Product[]>([]);
    const [selectedProduct,setSelectedProduct]=useState<Product|null>(null);
    useEffect(()=>{
        async function fetchProducts(){
            try{
                const response = await fetch('/api-econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
                if(!response.ok){
                    throw new Error('Erro ao buscar produtos');
                }
                const data:ProdutcsResponse=await response.json();
                setProducts(data.products);

            }catch(error){
                console.error('Erro ao buscar produtos:',error);
            }
        }

        fetchProducts();

    },[])

    return(
        <section id="produtos" className="products">
            <h2 className="products__title">Produtos Relacionados</h2>
            {variant === "default"? (
                <nav className="products__tabs" aria-label="Categorias de produtos">
                <span className="products__tab products__tab--active">CELULAR</span>
                <span className="products__tab">ACESSÓRIOS</span>
                <span className="products__tab">TABLETS</span>
                <span className="products__tab">NOTEBOOKS</span>
                <span className="products__tab">TVS</span>
                <span className="products__tab">VER TODOS</span>
                </nav>
            ):(
                <p className="products__see-all">Ver Todos</p>
            )}
           
            <div className="products__grid">
            {products.slice(0,4).map((product,index)=>(
               <article key={index} className="products__card">
                <img src={product.photo} alt={product.productName} width="180" className="products__image"/>
                <h3>{product.productName}</h3>
                <p>{product.descriptionShort}</p>
                <strong>
                    {product.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
                </strong>
             <p className="products__installments">
             ou 2x de{" "}
                 {(product.price / 2).toLocaleString("pt-BR", {
                     style: "currency",
                     currency: "BRL"
                     })}{" "}
                     sem juros
                        </p>
                
                <p className="products__shipping">Frete Grátis</p>
                <button type="button" className="products__buy" onClick={()=>setSelectedProduct(product)}>COMPRAR</button>
                </article>

            ))}

            </div>
            {selectedProduct && <ProductModal product={selectedProduct} onclose={()=>setSelectedProduct(null)}/>}
            </section>
    )
}

