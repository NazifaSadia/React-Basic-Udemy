import React, { useState } from 'react';

const Product = () => {

    const [count, setCount] = useState(0);

    const buy = ()=> setCount(count+1);

    return (
        <div>
            <p>Android - $199</p>
            <button onClick={buy}>Buy</button>
            <h3>Quantity: {count} items</h3>
        </div>
    );
};

export default Product;