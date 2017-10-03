import React, { Component } from 'react';
import '../App.css';
import Moment from 'react-moment';

class ProductReviews extends Component {

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

  // getStars = (numStars => {
  //   const star = <FontAwesome name='star' />;
  //   return (
  //     star.repeat(numStars)
  //   );
  // });

  getReview = (review => {
    const datePosted = (
      <Moment format="MMMM D, YYYY">
        {new Date(review.datePosted)}
      </Moment>
    );
    return (
      <div className="review-details">
        <div className="overall-stars">{review.overallRating} stars</div>
        <div className="review-title">{review.title}</div>
        <div className="review-body">{review.review}</div>
        <div className="review-screen-name">
          {review.screenName}
          <span className="date-posted">{datePosted}</span>
        </div>
      </div>
    );
  });

  render() {
    const reviews = this.state.data ? this.state.data.CustomerReview : null;
    // const promoList = promos ? this.getPromoList(promos) : null;
    const overallRating = reviews ? reviews[0].consolidatedOverallRating : null;
    const totalReviews = reviews ? reviews[0].totalReviews : null;
    const proReview = reviews ? this.getReview(reviews[0].Pro[0]) : null;
    const conReview = reviews ? this.getReview(reviews[0].Con[0]) : null;


    return (
      <div className="customer-review-container">
        <div className="overall-info">
          <div className="overall-stars">{overallRating} overall</div>
          <div className="all-reviews">view all {totalReviews} reviews</div>
        </div>
        <div className="pro-con-info">
          <div className="pro-con-row">
            <div className="pro-con-label">PRO</div>
            <div className="pro-con-sublabel">most helpful 4-5 star review</div>
            <hr />
            {proReview}
          </div>
          <div className="pro-con-row">
            <div className="pro-con-label">CON</div>
            <div className="pro-con-sublabel">most helpful 1-2 star review</div>
            <hr />
            {conReview}
          </div>
        </div>

      </div>
    )
  }

}

export default ProductReviews;
