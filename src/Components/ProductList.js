import React from 'react';
import Product from './Product';
import Total from './Total';

const ProductList = () => {
    return (
        <div>
            <Product/>
            <Product/>
            <Product/>
            <Total/>
        </div>
    );
};

export default ProductList;