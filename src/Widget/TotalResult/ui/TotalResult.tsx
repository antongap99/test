import cn from "classnames";
import style from './TotalResult.module.css'
import {useSelector} from "react-redux";
import {getTotalPriceSelector, getTotalProducts} from "../model/store/selectors.ts";


export const TotalResult = () =>{
	const price = useSelector(getTotalPriceSelector)
	const totalProducts = useSelector(getTotalProducts)
    return  (
        <div className={cn(style.TotalResultWrapper)}>
	        <p className={cn(style.TotalResultProductCount)}>Колличество товаров: {totalProducts}</p>
	        <p className={cn(style.TotalResultPrice)}>Итого {price} руб</p>
        </div>
    )
}

