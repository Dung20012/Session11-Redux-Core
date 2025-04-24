const initialState = [
    {
        id: 1,
        name: 'Pizza',
        image: 'pizza.jpg',
        description: 'Lorem ipsum dolor sit amet...',
        price: 30,
    },
    {
        id: 2,
        name: 'Hamburger',
        image: 'Hamburger.jpg',
        description: 'Lorem ipsum dolor sit amet...',
        price: 15,
    },
    {
        id: 3,
        name: 'Bread',
        image: 'bread.jpg',
        description: 'Lorem ipsum dolor sit amet...',
        price: 20,
    },
    {
        id: 4,
        name: 'Cake',
        image: 'cake.jpg',
        description: 'Lorem ipsum dolor sit amet...',
        price: 10,
    },
];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productsReducer;
