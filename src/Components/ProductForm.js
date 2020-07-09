import React, { Component } from 'react';

class ProductForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
          name: '', 
          price: ''
        };
    }
  
    handleName = event => {
		this.setState({
			name: event.target.value
		})
	}
    handlePrice = event => {
		this.setState({
			price: event.target.value
		})
	}
  
    handleSubmit = event => {
		alert(`${this.state.name} ${this.state.price}`);
        event.preventDefault()
        
        // Reset
        this.setState({name : "" , price : ""});
	}
  
    render() {
        
    const { name, price } = this.state;

      return (
        <form onSubmit={this.handleSubmit}>

            <div>
                <label>Product Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={this.handleName}
                />
            </div>

            <div>
                <label>Product Price: </label>
                <input
                    type="text"
                    value={price}
                    onChange={this.handlePrice}
                />
            </div>
            <button type="submit">Submit</button>

        </form>
      );
    }
}

export default ProductForm;