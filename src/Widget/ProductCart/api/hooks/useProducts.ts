import {useEffect} from "react";
import {Product, ProductResponse} from "../../../../entities/Product";
import useFetch from "../../../../shared/lib/hooks/useFetch.ts";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../model/store/cartSlice.ts";
import {CartState} from "../../model/types/types.ts";
import {getProductsSelector} from "../../model/store/selectors.ts";


interface useProductsReturnType {
	products:  Product[]
	isLoading: boolean,
	isError: boolean,
}

export const useProducts = (apiUrl: string):useProductsReturnType => {
	const products = useSelector(getProductsSelector)
	const dispatch = useDispatch()
	const {isLoading,
		isError,
		data,
		} = useFetch<ProductResponse>({
		method: "get",
		url: apiUrl,
	})

	useEffect(() =>{
		if(!data) return;
		const cartData: CartState = {
			products: data.products,
			totalPrice: data.total,
			productsCount: data.totalQuantity
		}
		dispatch(cartActions.initProductCart( cartData ))
	}, [data])



	return {
		products,
		isLoading,
		isError,
	}
}