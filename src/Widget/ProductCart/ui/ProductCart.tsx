import cn from "classnames";
import style from './ProductCart.module.css'
import {useProducts} from "../api/hooks/useProducts.ts";
import {ProductCards} from "./ProductCards.tsx";
import {API_URL} from "../api/const.ts";

interface  ProductCartProps {
    className?: string;

}

export const ProductCart = ({className}: ProductCartProps) =>{
	const {products, isLoading, isError} =  useProducts(API_URL)

	if(isLoading){
		return <p>Загрузка...</p>
	}

	if(isError){
		return <p>Ошибка при получении данных</p>
	}


    return  (
        <div className={cn(style.ProductCart, className)}>
	        <ProductCards products={products}/>
        </div>
    )
}

