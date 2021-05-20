// Test import of a JavaScript module
import App from '@/js/App/App';
import SidePanel from '@/js/SidePanel/SidePanel';

// Test import of styles
import '@/styles/index.scss';

// Appending to the DOM
const app = document.querySelector('#root');
app.append(new App().render());
app.append(new SidePanel().render());

const category = document.querySelector('#category-display');
const product = document.querySelector('#prod-container');
const price = document.querySelector('#price');
const addToCart = document.querySelector('#add-to-cart');
/* 2  */
const renderProducts = (products) => {
  category.innerHTML = products
    .map((product) => {
      return `
        <div class="item">
            <li><a href="" id="category-select" >${product.category}</a><li>
        </div>
        `;
    })
    .join('');
  category.addEventListener('click', (event) => {
    event.preventDefault(); //to prevent the default property of <a> tag

    if (event.target.id == 'category-select') {
      const getResult = (items) => {
        //3.3 display selected category products inside body
        product.innerHTML = items
          .map((item) => {
            return `
                <div id="box">
                <div class="box-item" id="item-img">
                    <img src="${item.image}" style="width:150px;">
                </div>
                <div class="box-item" id="item-title-desc">
                    <h3>${item.title}</h3>
                    <h6>Category: ${item.category}</h6>
                    <p>Product description: ${item.description}</p>
                    <p class="price-tag"><b>Price: $ ${item.price}<b></p>
                     <a href="#" id="add-to-cart">Add to cart</a>
                </div>
                </div>
                  `;
          })
          .join('');
      };

      //3.2 filter the selected category to display
      const categoryFilter = async () => {
        const response1 = await fetch('https://fakestoreapi.com/products');
        const result1 = await response1.json();
        console.log(result1);

        const selecteditem = event.target.text;
        localStorage.setItem('category', selecteditem);

        console.log(selecteditem);
        const filtered = result1.filter(
          (item) => item.category === selecteditem
        );
        console.log(filtered);
        getResult(filtered);
      };
      /* 3.1 */
      categoryFilter();
    }

    /*4.3 displaying the producs based on price after selection of category */
    price.addEventListener('click', (event) => {
      event.preventDefault();

      if (event.target.id == 'price-select') {
        const show = (items) => {
          product.innerHTML = items
            .map((item) => {
              return `
                  <div id="box">
                  <div class="box-item" id="item-img">
                      <img src="${item.image}" style="width:150px;">
                  </div>
                  <div class="box-item" id="item-title-desc">
                      <h3>${item.title}</h3>
                      <h6>Category: ${item.category}</h6>
                      <p>Product description: ${item.description}</p>
                      <p class="price-tag"><b>Price: $ ${item.price}<b></p>
                      <a href="#" id="add-to-cart">Add to cart</a>
                  </div>
                  </div>
                    `;
            })
            .join('');
        };
        /*4.2 filtering the previously selected category based on the price selected  */
        const categoryPricefilter = async () => {
          const response1 = await fetch('https://fakestoreapi.com/products');
          const result1 = await response1.json();
          console.log(result1);

          const selectedPrice = event.target.text;
          console.log(selectedPrice);

          const localData = localStorage.getItem('category');
          //actual filter
          const filtered = result1.filter(
            (item) => item.category === localData && item.price < selectedPrice
          );
          console.log(filtered);
          show(filtered);
        };
        /* 4.1 */
        categoryPricefilter();
      }
    });
  }); //event listener close

  price.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.id == 'price-select') {
      const show = (items) => {
        product.innerHTML = items
          .map((item) => {
            return `
                <div id="box">
                <div class="box-item" id="item-img">
                    <img src="${item.image}" style="width:150px;">
                </div>
                <div class="box-item" id="item-title-desc">
                    <h3>${item.title}</h3>
                    <h6>Category: ${item.category}</h6>
                    <p>Product description: ${item.description}</p>
                    <p class="price-tag"><b>Price: $ ${item.price}<b></p>
                    <a href="#" id="add-to-cart">Add to cart</a>
                </div>
                </div>
                  `;
          })
          .join('');
      };

      const priceFilter = async () => {
        const response1 = await fetch('https://fakestoreapi.com/products');
        const result1 = await response1.json();
        console.log(result1);

        const selectedPrice = event.target.text;
        console.log(selectedPrice);

        const filtered = result1.filter((item) => item.price < selectedPrice);
        console.log(filtered);
        show(filtered);
      };
      priceFilter();
    }
  });
};

/* 1.  initial display with all the products inside prod-container */
const displayProducts = (items) => {
  product.innerHTML = items
    .map((item) => {
      return `
        <div id="box">
        <div class="box-item" id="item-img">
            <img src="${item.image}" style="width:150px;">
        </div>
        <div class="box-item" id="item-title-desc">
            <h3>${item.title}</h3>
            <h6>Category: ${item.category}</h6>
            <p>Product description: ${item.description}</p>
            <p class="price-tag"><b>Price: $ ${item.price}<b></p>
            <a href="#" id="add-to-cart">Add to cart</a>
        </div>
        </div>
          `;
    })
    .join('');
};

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const result = await response.json();

  let newArray = [];
  // Declare an empty object
  let uniqueObject = {};

  // Loop for the array elements
  for (let i in result) {
    // Extract the category
    let objTitle = result[i]['category'];

    // Use the category as the index
    uniqueObject[objTitle] = result[i];
  }

  // Loop to push unique object into array
  for (var i in uniqueObject) {
    newArray.push(uniqueObject[i]);
  }

  /* 1. for displaying all products inside prod-container */
  displayProducts(result);
  //2. Display the unique objects inside sidepanel
  renderProducts(newArray);
};

fetchProducts();

/* search function */
document
  .getElementById('search-box')
  .addEventListener('keyup', mySearchFunction);

function mySearchFunction() {
  const x = document.getElementById('search-box');
  const y = x.value;

  const search = (items) => {
    product.innerHTML = items
      .map((item) => {
        return `
          <div id="box">
          <div class="box-item" id="item-img">
              <img src="${item.image}" style="width:150px;">
          </div>
          <div class="box-item" id="item-title-desc">
              <h3>${item.title}</h3>
              <h6>Category: ${item.category}</h6>
              <p>Product description: ${item.description}</p>
              <p class="price-tag"><b>Price: $ ${item.price}<b></p>
              <a href="#" id="add-to-cart">Add to cart</a>
          </div>
          </div>
            `;
      })
      .join('');
  };

  const c1 = async () => {
    const response1 = await fetch('https://fakestoreapi.com/products');
    const result2 = await response1.json();

    const selectitem = y;
    console.log(selectitem);

    const filtered = result2.filter((item) =>
      item.title.toLocaleLowerCase().includes(selectitem)
    );
    search(filtered);
  };
  c1();
}
