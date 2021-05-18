import './SidePanel.scss';

class SidePanel {
  bodyEl = document.createElement('div');

  //Side panel elements
  sidePanelEl = document.createElement('div');
  /*   headingEl = document.createElement('h2'); */
  categoryEl = document.createElement('div');
  categoryDisplayEl = document.createElement('div');
  priceEl = document.createElement('div');
  searchEl = document.createElement('div');
  getFilter = null;

  //Main body elements
  bodyContainer = document.createElement('div');
  productContainer = document.createElement('div');

  getRepos = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
  };

  constructor() {
    //Side panel elements properties
    this.bodyEl.setAttribute('id', 'body');
    this.sidePanelEl.setAttribute('id', 'side-panel-container');
    /*     this.headingEl.setAttribute('id', 'heading'); */
    this.categoryEl.setAttribute('id', 'category');
    this.categoryEl.setAttribute('class', 'side-item');
    this.categoryDisplayEl.setAttribute('id', 'category-display');
    this.priceEl.setAttribute('id', 'price');
    this.priceEl.setAttribute('class', 'side-item');
    this.searchEl.setAttribute('id', 'search');
    this.searchEl.setAttribute('class', 'side-item');
    this.categoryEl.innerHTML = ' <div><h4 id="one">All Categories</h4>';
    this.priceEl.innerHTML =
      ' <div><h4>Price Range</h4><ul><li class = "item">< $<a href="" id="price-select">100</a></li><li class = "item">< $<a href="" id="price-select">300</a></li><li class = "item">< $<a href="" id="price-select">500</a></li><li class = "item">< $<a href="" id="price-select">700</a></li><li class = "item">< $<a href="" id="price-select">1000</a></li></ul></div> ';

    this.searchEl.innerHTML =
      ' <div><h4>Search...</h4><input type="text" id="search-box" placeholder="search here...">';

    this.getRepos;

    //Main body elements properties class = "item"
    this.bodyContainer.setAttribute('id', 'body-container');
    this.productContainer.setAttribute('id', 'prod-container');
  }

  render() {
    //Appending side panel elements to bodyEl
    this.bodyEl.append(this.sidePanelEl);
    /*     this.sidePanelEl.append(this.headingEl); */
    this.sidePanelEl.append(this.searchEl);
    this.sidePanelEl.append(this.categoryEl);
    this.categoryEl.append(this.categoryDisplayEl);
    this.sidePanelEl.append(this.priceEl);

    //Appending main body elements to bodyEl
    this.bodyEl.append(this.bodyContainer);
    this.bodyContainer.append(this.productContainer);

    return this.bodyEl;
  }
}

export default SidePanel;
