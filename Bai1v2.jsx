import React from 'react'

export default function () {
    return (
        <>
            <div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title">List Products</h1>
                        </div>
                        <div className="panel-body" id="list-product">
                            <div>
                                <div className="media product">
                                    <div className="media-left">
                                        <a href="#">
                                            <img
                                                className="media-object"
                                                src="pizza.jpg"
                                                alt="pizza"
                                            />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Pizza</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            At dicta asperiores veniam repellat unde debitis quisquam
                                            magnam magni ut deleniti!
                                        </p>
                                        <span className="price"> 30 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="media product">
                                    <div className="media-left">
                                        <a href="#">
                                            <img
                                                className="media-object"
                                                src="Hamburger.jpg"
                                                alt="pizza"
                                            />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Hamburger</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            At dicta asperiores veniam repellat unde debitis quisquam
                                            magnam magni ut deleniti!
                                        </p>
                                        <input
                                            name="quantity-product-1"
                                            type="number"
                                            defaultValue={4}
                                        />
                                        <a data-product={1} className="price">
                                            15 USD{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="media product">
                                    <div className="media-left">
                                        <a href="#">
                                            <img
                                                className="media-object"
                                                src="bread.jpg"
                                                alt="pizza"
                                            />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Bread</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            At dicta asperiores veniam repellat unde debitis quisquam
                                            magnam magni ut deleniti!
                                        </p>
                                        <input
                                            name="quantity-product-1"
                                            type="number"
                                            defaultValue={1}
                                        />
                                        <a data-product={1} className="price">
                                            20 USD{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="media product">
                                    <div className="media-left">
                                        <a href="#">
                                            <img
                                                className="media-object"
                                                src="cake.jpg"
                                                alt="pizza"
                                            />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Cake</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            At dicta asperiores veniam repellat unde debitis quisquam
                                            magnam magni ut deleniti!
                                        </p>
                                        <input
                                            name="quantity-product-1"
                                            type="number"
                                            defaultValue={1}
                                        />
                                        <a data-product={1} className="price">
                                            10 USD{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
