import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartState} from "../types/types.ts";

const initialState: CartState = {
	products: [], // массив товаров в корзине
	totalPrice: 0,
	productsCount: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		initProductCart(state, action:PayloadAction<CartState>){
			state.products = action.payload.products;
			state.totalPrice = action.payload.totalPrice;
			state.productsCount = action.payload.productsCount
		},
		removeProductFromCart(state, action:PayloadAction<number>) {
			const productId = action.payload;
			state.products = state.products.filter(product => product.id !== productId);
			state.totalPrice = state.products.reduce((acc, product)=> acc+product.price , 0)
			state.productsCount = state.products.reduce((acc, product) => acc + product.quantity, 0)
		},
		increaseProductCount(state, action:PayloadAction<number>) {
			const productId = action.payload
			const product = state.products.find(item => item.id === productId);
			if (product && product.quantity < 10) {
				product.quantity++;
				state.totalPrice += product.price;
				state.productsCount = state.products.reduce((acc, product) => acc + product.quantity, 0)
			}
		},
		decreaseProductCount(state, action:PayloadAction<number>) {
			const productId = action.payload
			const product = state.products.find(item => item.id === productId);
			if (product && product.quantity > 1) {
				product.quantity--;
				state.totalPrice -= product.price;
				state.productsCount = state.products.reduce((acc, product) => acc + product.quantity, 0)
			}
		},
	},
});

export const {actions: cartActions, reducer: cartReducer} = cartSlice;
