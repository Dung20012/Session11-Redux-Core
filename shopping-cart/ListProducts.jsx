import React from 'react';
import { useSelector } from 'react-redux'; // lấy dữ liệu từ Redux store

export default function ListProducts() {
  const products = useSelector((state) => state.products); // lấy danh sách products từ store

  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {products.map((product) => (
              <div key={product.id}>
                <div className="media product">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src={product.image}
                        alt={product.name}
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{product.name}</h4>
                    <p>{product.description}</p>

                    {/* Input quantity đảm bảo >= 1 */}
                    <input
                      name={`quantity-product-${product.id}`}
                      type="number"
                      defaultValue={1}
                      min={1}
                      onInput={(e) => {
                        if (e.target.value < 1) e.target.value = 1;
                      }}
                    />

                    <span className="price"> {product.price} USD</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
