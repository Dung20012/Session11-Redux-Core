import { useState } from 'react'
import './App.css'
import ProductList from './shopping-cart/ProductList'
import CartItem from './shopping-cart/CartItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./css/style.css" />
        <link rel="stylesheet" href="./css/bootstrap.min.css" />
        <div className="container">
          <div className="page-header">
            <h1>Shopping Cart</h1>
          </div>
          <div className="row">
            {/* Danh sách các sản phẩm */}
           <ProductList />
            <div>
              {/* Giỏ hàng */}
              <CartItem />
            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default App
