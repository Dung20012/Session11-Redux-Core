const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = state.find(product => product.id === action.payload.id);
      if (item) {
        
        return state.map(product =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + action.payload.quantity }
            : product
        );
      } else {
       
        return [...state, { ...action.payload }];
      }

    case 'REMOVE_FROM_CART':
      return state.filter(product => product.id !== action.payload.id);

    case 'UPDATE_QUANTITY':
      return state.map(product =>
        product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : product
      );

    default:
      return state;
  }
}
