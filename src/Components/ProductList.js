import React, { useState } from 'react';
import Product from './Product';
import Total from './Total';
import ProductForm from './ProductForm';

const ProductList = () => {

    const productList = [
        { name : "Android", price : 121 },
        { name : "Apple", price : 123 },
        { name : "Nokia", price : 65 }
    ];

    const [total, setTotal] = useState(0);

    const calculateTotal = (price)=> {
        setTotal(total+price);
    };

    const showProduct = (name)=> {
        alert("You selected " + name);
    } 

    var products = productList.map(product =>
        <Product name={product.name} price={product.price} handleShow={showProduct} handleTotal={calculateTotal}/>);

    return (
        <div>
            <ProductForm/>
            {products}

            {/* <Product name="Android" price={121} handleShow={showProduct} handleTotal={calculateTotal}/>
            <Product name="Apple" price={123} handleShow={showProduct} handleTotal={calculateTotal}/>
            <Product name="Nokia" price={65} handleShow={showProduct} handleTotal={calculateTotal}/> */}
            <Total total={total}/>
        </div>
    );
};

export default ProductList;