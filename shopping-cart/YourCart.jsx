import React from 'react';
import { useSelector } from 'react-redux'; 

export default function YourCart() {
  const cart = useSelector((state) => state.cart); 

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">STT</th>
                  <th>Name</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      <b>Empty product in your cart</b>
                    </td>
                  </tr>
                ) : (
                  cart.map((item, index) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.price} USD</td>
                      <td>
                       
                        <input
                          name={`cart-item-quantity-${item.id}`}
                          type="number"
                          defaultValue={item.quantity}
                          min={1}
                          onInput={(e) => {
                            if (e.target.value < 1) e.target.value = 1;
                          }}
                        />
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          data-product={item.id}
                        >
                          Update
                        </a>
                        <a
                          className="label label-danger delete-cart-item"
                          data-product={item.id}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

              {/* Chỉ hiện tổng tiền nếu có sản phẩm trong giỏ */}
              {cart.length > 0 && (
                <tfoot id="my-cart-footer">
                  <tr>
                    <td colSpan={4}>
                      There are <b>{totalItems}</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                      {totalPrice} USD
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>

        
        <div className="alert alert-success" role="alert" id="mnotification">
          Add to cart successfully
        </div>
      </div>
    </>
  );
}
