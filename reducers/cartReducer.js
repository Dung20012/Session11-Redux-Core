const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existing = state.find(item => item.id === action.payload.id);
            if (existing) {
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
            }
            return [...state, { ...action.payload }];
        }
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);
        case 'UPDATE_CART':
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        default:
            return state;
    }
};

export default cartReducer;
