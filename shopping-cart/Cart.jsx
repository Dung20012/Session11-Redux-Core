import React from 'react'
import ListProducts from './ListProducts'
import YourCart from './YourCart'

export default function Cart() {
    return (
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
                    <div>
                    {/* Danh sách sản phẩm*/}
                        <ListProducts />

                    </div>
                    <div>
                        {/* Thanh toán hóa đơn */}
                        <YourCart />

                    </div>
                </div>
            </div>
        </>

    )
}
