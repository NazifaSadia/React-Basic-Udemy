import React, { useState } from 'react';
import Product from './Product';
import Total from './Total';

const ProductList = () => {

    const [total, setTotal] = useState(0);

    const calculateTotal = (price)=> {
        setTotal(total+price);
    };

    const showProduct = (name)=> {
        alert("You selected " + name);
    } 

    return (
        <div>
            <Product name="Android" price={121} handleShow={showProduct} handleTotal={calculateTotal}/>
            <Product name="Apple" price={123} handleShow={showProduct} handleTotal={calculateTotal}/>
            <Product name="Nokia" price={65} handleShow={showProduct} handleTotal={calculateTotal}/>
            <Total total={total}/>
        </div>
    );
};

export default ProductList;