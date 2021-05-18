import './App.scss';
import logo from '../../images/shop-bag.png';
import shopCart from '../../images/cart4.png';

class App {
  // Nav bar elements
  navdivEl = document.createElement('div');
  navlogoEl = document.createElement('div');
  navtextDivEl = document.createElement('div');
  navtextEl = document.createElement('h1');
  mycartEl = document.createElement('div');
  logoImg = document.createElement('img');
  cartImg = document.createElement('img');

  constructor() {
    //Navigation
    this.navdivEl.setAttribute('id', 'navbar');
    this.navlogoEl.setAttribute('id', 'logo-container');
    this.logoImg.src = logo;
    this.cartImg.src = shopCart;
    this.navtextDivEl.setAttribute('id', 'text-container');
    this.navtextEl.setAttribute('id', 'para1');
    this.mycartEl.setAttribute('id', 'mycart');
    this.logoImg.setAttribute('id', 'logo-img');
    this.cartImg.setAttribute('id', 'cart-img');
    this.navtextEl.textContent = 'BringMe.com';
  }

  render() {
    //Appending navigation elements
    this.navdivEl.append(this.navlogoEl);
    this.navlogoEl.append(this.logoImg);
    this.navdivEl.append(this.navtextDivEl);
    this.navtextDivEl.append(this.navtextEl);
    this.navdivEl.append(this.mycartEl);
    this.mycartEl.append(this.cartImg);

    return this.navdivEl;
  }
}

export default App;
