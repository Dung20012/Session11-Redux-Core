const initialState = '';

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.payload;
        case 'HIDE_NOTIFICATION':
            return '';
        default:
            return state;
    }
};

export default notificationReducer;
