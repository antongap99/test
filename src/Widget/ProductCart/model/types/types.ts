import {Product} from "../../../../entities/Product";

export interface CartState {
	products: Product[];
	totalPrice: number,
	productsCount: number
}