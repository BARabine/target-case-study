import React, { Component } from 'react';
import './App.css';
import itemJsonData from './item-data.json';
import SelectedProductContainer from './components/SelectedProductContainer';
import ProductOffers from './components/ProductOffers';
import Promotions from './components/Promotions';
import PurchaseContainer from './components/PurchaseContainer';
import ProductHighlights from './components/ProductHighlights';
import ProductReviews from './components/ProductReviews';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allData: null,
      selectedIndex: null,
    }
  }

  async componentDidMount() {
    const catalogData = await itemJsonData ? itemJsonData.CatalogEntryView : null;
    // console.log(`>> catalogData: ${JSON.stringify(catalogData)}`);
    // FIXME -- fix the logic to handle selected index,
    // but for now, just use index = 0.
    const index = catalogData ? 0 : null;
    if (Number.isInteger(index)) {
      this.setState({ allData: catalogData, selectedIndex: index });
    }
  }

  render() {
    return (
      <div className="product-container">

        <div className="product-info-item">
          <SelectedProductContainer
            productData={this.state.allData}
            selected={this.state.selectedIndex}
          />
        </div>

        <div className="product-info-item product-group">
          <ProductOffers
            productData={this.state.allData}
            selected={this.state.selectedIndex}
          />
          <Promotions
            productData={this.state.allData}
            selected={this.state.selectedIndex}
          />
          <PurchaseContainer
            productData={this.state.allData}
            selected={this.state.selectedIndex}
          />
          <ProductHighlights
            productData={this.state.allData}
            selected={this.state.selectedIndex}
          />
        </div>

        <div className="product-info-item">
          <ProductReviews
            productData={this.state.allData}
            selected={this.state.selectedIndex}
          />
        </div>

      </div>
    );
  }
}

export default App;
