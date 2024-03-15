import {
  fetchApi
} from "./fetchApi.js";
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


// // GET Product
fetch("http://localhost:3000/products")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // console.log(data.products);
    let htmls = "";
    data.products.map(item => {
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


// Async / Await
// // Fetch API function 
// const fetchApi = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   return result;
// }


// fetchApi("https://dummyjson.com/products/categories")
//   .then(data => console.log(data))
//  GET category 
fetchApi("https://dummyjson.com/products/categories")
  .then(data => {
    // console.log(data.products);
    let htmls = "";
    data.forEach(item => {
      htmls += `
        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
          <div class="category-item ">${item}</div>
        </div>
        
      `
    });
    const divCategory = document.querySelector("#category");
    // console.log(htmls);
    divCategory.innerHTML = htmls;

  });