import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Product {
  id: string
  imageUrl?: string
  name: string
  count: number
  size: {
    width: number
    height: number
  }
  weight: string
  comments?: string[]
}

interface ProductsState {
  list: Product[]
}

const initialState: ProductsState = {
  list: [],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.list.push(action.payload)
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.list = state.list.filter(p => p.id !== action.payload)
    },
  },
})

export const { addProduct, removeProduct } = productsSlice.actions
export default productsSlice.reducer
