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
    if (productData !== null) {
      this.setState({ data: productData });
    }
  }

  render() {
    const pCode = this.state.data ? parseInt(this.state.data.purchasingChannelCode, 10) : null;
    // console.log(`>>>> pCode = ${pCode} => ${typeof pCode}`);

    const addToCartEnabled = Number.isInteger(pCode) ? (pCode === 0 || pCode === 1) : null;
    // console.log(`==> addToCartEnabled = ${addToCartEnabled}`);
    const addToCartStr = addToCartEnabled ? "Add to Cart is Enabled" : "Add to Cart is Disabled";

    const pickupInStoreEnabled = Number.isInteger(pCode) ? (pCode === 0 || pCode === 2) : null;
    // console.log(`==>> pickupInStoreEnabled = ${pickupInStoreEnabled}`);
    const pickupInStoreStr = pickupInStoreEnabled ? "Pickup in Store is Enabled" : "Pickup in Store is Disabled";

    return (
      <div className="purchase-container">
        <div className="purchase-item">(Placeholder for PurchaseContainer)</div>
        <div className="purchase-item">{addToCartStr}</div>
        <div className="purchase-item">{pickupInStoreStr}</div>
      </div>
    )
  }

}

export default PurchaseContainer;
