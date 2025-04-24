import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ProductList = () => {
  const products = useSelector(state => state.products); // Truy cập store

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
