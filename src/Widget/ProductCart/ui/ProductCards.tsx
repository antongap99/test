import cn from "classnames";
import style from './ProductCards.module.css'
import {Product} from "../../../entities/Product";
import {ProductCard} from "../../../entities/Product";

interface  ProductCardsProps {
    className?: string;
	products: Product[]
}


export const ProductCards = ({className, products}: ProductCardsProps) =>{
    return  (
        <div className={cn(style.ProductCards, className, )}>
	        {products.map(product => (<ProductCard key={product.id} productData={product}/>))}
        </div>
    )
}

