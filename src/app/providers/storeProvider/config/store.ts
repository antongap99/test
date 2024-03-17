import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {StateSchema} from "./StateSchema.ts";
import {cartReducer} from "../../../../Widget/ProductCart/model/store/cartSlice.ts";


const rootReducer = combineReducers({
	cart: cartReducer,
})

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: true, // TODO в проде нужно убрать
        preloadedState: initialState,
    });
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>