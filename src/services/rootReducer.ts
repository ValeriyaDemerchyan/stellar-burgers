import { combineReducers } from '@reduxjs/toolkit';
import { ingredientReducer } from './slices/ingredientSlice';
import { constructorReducer } from './slices/constructorSlice';
import { feedReducer } from './slices/feedSlice';
import { userReducer } from './slices/userSlice';
import { orderReducer } from './slices/orderSlice';
import { userOrderReducer } from './slices/userOrderSlice';

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  constructorBurger: constructorReducer,
  feed: feedReducer,
  user: userReducer,
  userOrder: userOrderReducer,
  order: orderReducer
});
