import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit"

type FormState = {
  name: string
  size: string
  count: string
  weight: string
  height: string
  width: string
  comments: string
}

type ProductsState = {
  form: FormState
  list: unknown[] // список продуктів
}

const initialState: ProductsState = {
  form: {
    name: "",
    size: "",
    count: "",
    weight: "",
    height: "",
    width: "",
    comments: "",
  },
  list: [],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateFormField: (
      state,
      action: PayloadAction<{ field: keyof FormState; value: string }>,
    ) => {
      state.form[action.payload.field] = action.payload.value
    },
    resetForm: state => {
      state.form = initialState.form
    },
    addProduct: (state, action: PayloadAction<unknown>) => {
      state.list.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(product => product.id !== action.payload)
    },
  },
})

export const { updateFormField, resetForm, addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer
