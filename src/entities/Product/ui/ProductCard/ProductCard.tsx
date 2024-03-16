import cn from "classnames";
import style from './ProductCard.module.css'
import {IProduct} from "../../model/types/Product.ts";
import {SimpleCell} from "@vkontakte/vkui";


interface  ProductProps {
    className?: string;
	data: IProduct
}

export const ProductCard = ({className, data}: ProductProps) =>{

    return  (
        <div className={cn(style.ProductCardWrapper)}>
            <SimpleCell
		        expandable="auto"
                before={<div>avatar</div>}
	        >
                <div className={cn(style.ProductCard, className)}>
                    {data.name}
                </div>
            </SimpleCell>
        </div>
    )
}

