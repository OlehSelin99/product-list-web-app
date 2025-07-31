import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FormState = {
  name: string;
  size: string;
  count: string;
  weight: string;
  height: string;
  width: string;
  comments: string;
};

type ProductsState = {
  form: FormState;
  list: any[]; // список продуктів
};

const initialState: ProductsState = {
  form: {
    name: '',
    size: '',
    count: '',
    weight: '',
    height: '',
    width: '',
    comments: '',
  },
  list: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateFormField: (state, action: PayloadAction<{ field: keyof FormState; value: string }>) => {
      state.form[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    addProduct: (state, action: PayloadAction<any>) => {
      state.list.push(action.payload);
    },
  },
});

export const { updateFormField, resetForm, addProduct } = productsSlice.actions;
export default productsSlice.reducer;
