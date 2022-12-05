import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    total: 0,
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProductCart: (state, action) => {
            state.products = [...state.products, action.payload]
            state.total = state.products.length
        }
    }
})

export const { addProductCart } = cartSlice.actions

export default cartSlice.reducer
