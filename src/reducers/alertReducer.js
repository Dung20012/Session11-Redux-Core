const initialState = {
    message: '',
    type: '',
  };
  
  export default function alertReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_ALERT':
        return {
          message: action.payload.message,
          type: action.payload.type,
        };
  
      case 'CLEAR_ALERT':
        return {
          message: '',
          type: '',
        };
  
      default:
        return state;
    }
  }
  