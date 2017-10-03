import React, { Component } from 'react';
import '../App.css';

class PurchaseContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentWillReceiveProps(newProps) {
    const index = newProps.selected;
    const productData = Number.isInteger(index) ? newProps.productData[index] : null;
    // console.log(`--->> New Props = ${JSON.stringify(productData)}`);
    if (productData !== null) {
      this.setState({ data: productData });
    }
  }

  render() {
    // const promos = this.state.data ? this.state.data.Promotions : null;
    // console.log(`>>> promos = ${JSON.stringify(promos)}`);
    // const promoList = promos ? this.getPromoList(promos) : null;

    return (
      <div className="purchase-container">(Placeholder for PurchaseContainer)</div>
    )
  }

}

export default PurchaseContainer;
