import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//var products = require('./Products.json');



function ProductInfoImage(props){
  return (
    <img className="ProductInfoImage"
      src={props.stuff.image}
      title={props.stuff.name}
    />
  );
}

function ProductInfo (props) {
  return (
    <ProductInfoImage stuff={props.products.image} />,
    <div className="ProductInfoName">{props.products.tumbler.name}</div>,
    <div className="ProductInfoDescr">{props.products.tumbler.description}</div>,
    <div className="ProductInfoPrice">{props.products.tumbler.price}</div>
    );
}
const products = {
  "tumbler" : {
      "name": "SPACEX TUMBLER",
      "image": "./img/tumbler.png",
      "description": "Stainless Steel, Vacuum insulated",
      "price": "$25.00"
     }
}


class ProductItemComponent extends Component {     
  render() {
    return (  
      <ProductInfo 
          image={products.tumbler.image}
          name={products.tumbler.name}
          description={products.tumbler.description}
          price={products.tumbler.price}
        />
    );
  } 
}

export default ProductItemComponent;



