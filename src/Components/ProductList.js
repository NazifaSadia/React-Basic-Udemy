import React from 'react';
import Product from './Product';
import Total from './Total';

const ProductList = () => {

    const showProduct = (name)=> {
        alert("You selected " + name);
    } 

    return (
        <div>
            <Product name="Android" price="121" handleShow={showProduct}/>
            <Product name="Apple" price="123" handleShow={showProduct}/>
            <Product name="Nokia" price="65" handleShow={showProduct}/>
            <Total/>
        </div>
    );
};

export default ProductList;