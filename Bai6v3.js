import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += product.quantity; // Cập nhật số lượng nếu sản phẩm đã có trong giỏ
      } else {
        state.push(product); // Thêm mới nếu chưa có trong giỏ
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find(item => item.id === id);
      if (product) {
        product.quantity = Math.max(1, quantity); // Đảm bảo số lượng >= 1
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      return state.filter(item => item.id !== id); // Xóa sản phẩm khỏi giỏ
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
