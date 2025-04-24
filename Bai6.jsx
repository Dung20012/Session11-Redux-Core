import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartReducer';

const ProductList = ({ products }) => {
  const [quantity, setQuantity] = useState(1); // Số lượng mặc định là 1
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Đảm bảo số lượng luôn >= 1
    const validQuantity = Math.max(1, quantity);
    dispatch(addToCart({ ...product, quantity: validQuantity }));
  };

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h1 className="panel-title">List Products</h1>
      </div>
      <div className="panel-body" id="list-product">
        {products.map(product => (
          <div key={product.id} className="media product">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src={product.image} alt={product.name} />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{product.name}</h4>
              <p>{product.description}</p>
              <span className="price">{product.price} USD</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value || '1')))} // Điều chỉnh số lượng
                className="form-control"
              />
              <button onClick={() => handleAddToCart(product)} className="btn btn-success">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
