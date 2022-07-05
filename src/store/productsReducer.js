import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: [
        {
            id: 1,
            name: 'Товар 1',
            price: 1000
        },
        {
            id: 2,
            name: 'Товар 2',
            price: 2000
        },
        {
            id: 3,
            name: 'Товар 3',
            price: 7000
        }
    ],
    discount: 0
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        deleteProduct: (state, action) => {
            state.products.splice(action.payload, 1)
        },
        setDiscount: (state, action) => {
            state.discount = action.payload
        }
    }
})

export const { addProduct, deleteProduct, setDiscount } = productSlice.actions

export const productCount = state => state.products.products.length
export const productTotal = state => Math.floor(state.products.products.reduce((acc, product) => acc + product.price, 0)).toLocaleString('ru')
export const productTotalDiscount = state => Math.floor(state.products.products.reduce((acc, product) => acc + product.price, 0) * (100 - state.products.discount) / 100).toLocaleString('ru')


export default productSlice.reducer