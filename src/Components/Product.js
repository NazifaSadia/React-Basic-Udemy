import React, { useState } from 'react';

const Product = (props) => {

    const [count, setCount] = useState(0);

    const buy = ()=> setCount(count+1);

    return (
        <div>
            <p>{props.name} - ${props.price}</p>
            <button onClick={buy}>Buy</button>
            <h3>Quantity: {count} items</h3>
            <hr/>
        </div>
    );
};

export default Product;