import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.cart); // Lấy giỏ hàng từ store

  return (
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h1 className="panel-title">Your Cart</h1>
      </div>
      <div className="panel-body">
        {cartItems.length === 0 ? (
          <div className="alert alert-warning text-center">
            Empty product in your cart
          </div>
        ) : (
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
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.price} USD</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      readOnly
                      className="form-control"
                    />
                  </td>
                  <td>
                    <a className="label label-info">Update</a>{' '}
                    <a className="label label-danger">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>
                  There are <b>{cartItems.length}</b> items in your shopping cart.
                </td>
                <td className="total-price text-left">
                  {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} USD
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
};

export default Cart;
