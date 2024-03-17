import cn from "classnames";
import style from './ProductCard.module.css'
import {SimpleCell} from "@vkontakte/vkui";
import {Product} from "../../model/types/Product.ts";
import AddProductIcon from './../../../../shared/icons/AddProductIcon.svg?react'
import RemoveProductIcon from './../../../../shared/icons/removeProductIcon.svg?react'
import {useAppDispatch} from "../../../../app/providers/storeProvider/lib/hooks/hooks.ts";
import {cartActions} from "../../../../Widget/ProductCart/model/store/cartSlice.ts";
import Trash from './../../../../shared/icons/Trash.svg?react'
import {LazyImage} from "../../../../shared/LazyIamge/LazyImage.tsx";
interface  ProductProps {
    className?: string;
	productData: Product
}

export const ProductCard = ({className, productData}: ProductProps) =>{
	const {title, thumbnail, price, quantity, id} = productData;
	const dispatch =  useAppDispatch()


	const deleteProductFromCart = () => {
		dispatch(cartActions.removeProductFromCart(id))
	}

	const increaseQuantity = () => {
		dispatch(cartActions.increaseProductCount(id))
	}

	const decreaseQuantity = () => {
		dispatch(cartActions.decreaseProductCount(id))
	}

    return  (
        <div className={cn(style.ProductCardWrapper, className)}>
            <SimpleCell
		        expandable="auto"
                before={<LazyImage src={thumbnail} alt={title} width='100px' height='100px' />}
	        >
		            <h3 style={{margin: 0, fontSize: 14}}>{title}</h3>
		            <div style={{display: "flex"}}>
			            <p className={style.ProductPrice}>{price}</p>
		            </div>
	                <div className={style.ProductEditControl}>
		                <p className={style.ProductQuantity}>{quantity}</p>
		                <div className={style.ProductEdit} onClick={increaseQuantity}>
			                <AddProductIcon/>
		                </div>
		                <div className={style.ProductEdit} onClick={decreaseQuantity}>
			                <RemoveProductIcon/>
		                </div>
		                <div className={style.ProductEdit} onClick={deleteProductFromCart}>
			                <Trash/>
		                </div>
	                </div>
            </SimpleCell>
        </div>
    )
}


