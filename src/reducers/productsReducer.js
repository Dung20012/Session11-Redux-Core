const initialState = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'pizza.jpg',
      price: 30,
    },
    {
      id: 2,
      name: 'Hamburger',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'Hamburger.jpg',
      price: 15,
    },
    {
      id: 3,
      name: 'Bread',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'bread.jpg',
      price: 20,
    },
    {
      id: 4,
      name: 'Cake',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'cake.jpg',
      price: 10,
    },
  ];
  
  export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
  