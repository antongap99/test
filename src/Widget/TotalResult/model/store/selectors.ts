import {StateSchema} from "../../../../app/providers/storeProvider/config/StateSchema.ts";

export const getTotalPriceSelector = (state: StateSchema) => state.cart.totalPrice;

export const getTotalProducts = (state: StateSchema) => state.cart.productsCount;