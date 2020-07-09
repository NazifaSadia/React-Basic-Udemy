import React from 'react';
import Product from './Product';
import Total from './Total';

const ProductList = () => {
    return (
        <div>
            <Product name="Android" price="121"/>
            <Product name="Apple" price="123"/>
            <Product name="Nokia" price="65"/>
            <Total/>
        </div>
    );
};

export default ProductList;