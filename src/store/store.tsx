import { compose, createStore, applyMiddleware, Middleware } from "redux";

import {
  CategoriesState,
  categoriesReducer,
} from "./categories/category.reducer";
import { CartState, cartReducer } from "./cart/cart.reducer";
import { UserState, userReducer } from "./user/user.reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export interface StoreState {
  user: UserState;
  categories: CategoriesState;
  cart: CartState;
}

export const combineReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const rootReducer = (state: any, action: any) => {
  return combineReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  //enhancers: storeEnhancers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// type ExtendedPersistConfig = PersistConfig<RootState> & {
//   whitelist: (keyof RootState)[];
// };

// const persistConfig: ExtendedPersistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };

// const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [
//   process.env.NODE_ENV !== "production" && logger,
//   sagaMiddleware,
// ].filter((middleware): middleware is Middleware => Boolean(middleware));

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
