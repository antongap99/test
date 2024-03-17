import {StateSchema} from "../../../../app/providers/storeProvider/config/StateSchema.ts";

export const getTotalPriceSelector = (state: StateSchema) => state.cart.totalPrice;

export const getProductsCountSelector = (state: StateSchema) => state.cart.productsCount

export const getProductsSelector = (state: StateSchema) => state.cart.products