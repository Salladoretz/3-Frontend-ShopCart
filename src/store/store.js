import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productsReducer'

export const store = configureStore({
  reducer: {
    products: productSlice
  },
})
