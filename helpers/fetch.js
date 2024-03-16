// import {
//   fetchApi
// } from "./fetchApi.js";

import { fetchApi } from "../js/api.js";
import { API_PRODUCT, API_CATEGORY } from "../js/constant.js";
// // Fetch API function
// const fetchApi = (url) => {
//   const result = fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       return data;
//     })
//   return result;
// }

// fetchApi("https://dummyjson.com/products/categories")
//   .then(data => console.log(data))
//  GET category
// fetch("https://dummyjson.com/products/categories")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     // console.log(data);
//     let htmls = "";
//     data.forEach(item => {
//       htmls += `
//         <div class="category-item col-lg-2 col-md-3 col-sm-4 col-6">${item}</div>
//       `
//     });
//     const divCategory = document.querySelector("#category");
//     // console.log(htmls);
//     divCategory.innerHTML = htmls;

//   });

export let sortDesc = document.querySelector("#sort-desc");
export let sortAsc = document.querySelector("#sort-asc");
// console.log(sortDesc.value);
let sortParam = "";
let url = `${API_PRODUCT}?_sort=${sortParam}`;

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data.products);
    let htmls = "";
    data.map((item) => {
      // console.log(item.title);

      htmls += `
      <div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <div class="product-item">
          <div class="product-item-thumbnail">
            <img src="${item.thumbnail}" alt="${item.title}"> 
          </div>
          <h3 class="product-item-title">${item.title}</h3>
          <p class="price">$${item.price}</p>
          <p class"stock">Còn lại: ${item.stock} sp</p>
        </div>
      </div>
      `;
    });
    const divProduct = document.querySelector("#product");
    divProduct.innerHTML = htmls;
  });

console.log(url);
const sortSelect = sortDesc.addEventListener("click", () => {
  sortParam = "desc";
  console.log(sortParam);
  url = `${API_PRODUCT}?_sort=price&_order=${sortParam}`;
  console.log(url);
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.products);
      let htmls = "";
      data.map((item) => {
        // console.log(item.title);

        htmls += `
      <div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <div class="product-item">
          <div class="product-item-thumbnail">
            <img src="${item.thumbnail}" alt="${item.title}"> 
          </div>
          <h3 class="product-item-title">${item.title}</h3>
          <p class="price">$${item.price}</p>
          <p class"stock">Còn lại: ${item.stock} sp</p>
        </div>
      </div>
      `;
      });
      const divProduct = document.querySelector("#product");
      divProduct.innerHTML = htmls;
    });
});

const sortSelectAsc = sortAsc.addEventListener("click", () => {
  sortParam = "asc";
  console.log(sortParam);
  url = `${API_PRODUCT}?_sort=price&_order=${sortParam}`;
  console.log(url);
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.products);
      let htmls = "";
      data.map((item) => {
        // console.log(item.title);

        htmls += `
      <div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <div class="product-item">
          <div class="product-item-thumbnail">
            <img src="${item.thumbnail}" alt="${item.title}"> 
          </div>
          <h3 class="product-item-title">${item.title}</h3>
          <p class="price">$${item.price}</p>
          <p class"stock">Còn lại: ${item.stock} sp</p>
        </div>
      </div>
      `;
      });
      const divProduct = document.querySelector("#product");
      divProduct.innerHTML = htmls;
    });
});

// let url = `${API_PRODUCT}?_sort=${sortParam}`;

// fetchApi("https://dummyjson.com/products/categories")
//   .then(data => console.log(data))
// GET category
// fetchApi(API_CATEGORY).then((data) => {
//   // console.log(data.products);
//   console.log("Categories 1");
//   let htmls = "";
//   data.forEach((item) => {
//     htmls += `
//         <div class="col-lg-2 col-md-3 col-sm-4 col-6">
//           <div class="category-item ">${item}</div>
//         </div>

//       `;
//   });
//   const divCategory = document.querySelector("#category");
//   // console.log(htmls);
//   divCategory.innerHTML = htmls;
// });

// // GET Product

// Async / Await
// // Fetch API function
// const fetchApi = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   return result;
// }
