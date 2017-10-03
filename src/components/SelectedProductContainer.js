import React, { Component } from 'react';
import '../App.css';

class SelectedProductContainer extends Component {

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
    this.setState({ data: productData });
  }

  render() {
    const title = this.state.data ? this.state.data.title : 'No product selected';
    const images = this.state.data ? this.state.data.Images : null;
    const primaryImage = images ? images[0].PrimaryImage[0].image : null;
    const altImages = images ? images[0].AlternateImages : null;

    const AlternateImages = ({ images }) => {
      if (images === null) {
        return null;
      }
      return (
        <div className="alt-images">(Image Carousel goes Here)</div>
      )
    }

    return (
      <div className="selected-product">
        <div className="product-title">{title}</div>
        <img className="primary-image"
          src={primaryImage}
          alt={title}
        />
        <AlternateImages
          images={altImages}
        />
      </div>
    )
  }

}

export default SelectedProductContainer;
