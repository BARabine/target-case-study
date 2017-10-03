import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SelectedProductContainer from './components/SelectedProductContainer';
import ProductOffers from './components/ProductOffers';
import Promotions from './components/Promotions';
import PurchaseContainer from './components/PurchaseContainer';
import ProductHighlights from './components/ProductHighlights';
import ProductReviews from './components/ProductReviews';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });


describe('<App />', () => {
  it('Renders App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  // randomly pick one of the child components to make sure it's there
  it('renders a <Promotions /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Promotions)).to.have.length(1);
  });
});

describe('<SelectedProductContainer />', () => {
  it('Renders SelectedProductContainer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SelectedProductContainer />, div);
  });
});

describe('<ProductOffers />', () => {
  it('Renders ProductOffers without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductOffers />, div);
  });
});

describe('<Promotions />', () => {
  it('Renders Promotions without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Promotions />, div);
  });
});

describe('<PurchaseContainer />', () => {
  it('Renders PurchaseContainer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PurchaseContainer />, div);
  });
});

describe('<ProductHighlights />', () => {
  it('Renders ProductHighlights without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductHighlights />, div);
  });
});

describe('<ProductReviews />', () => {
  it('Renders ProductReviews without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductReviews />, div);
  });
});
