import { fetchApi } from "./api.js";
import { API_PRODUCT } from "./constant.js";

import { pagiNumber, params } from "./variable.js";
// GET Products
export const drawProduct = (url) => {
  let category = "";
  if (params.category != "") {
    category = `&category=${params.category}`;
  }

  const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`;
  fetchApi(api).then((data) => {
    // console.log(data.products);
    let htmls = "";
    data.map((item) => {
      // console.log(item.title);
      htmls += `
      <div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <div class="product-item">
          <div class="product-item-thumbnail">
            <img src="${item.thumbnail}" alt="${item.title}"> 
            <span class="discount">-${Math.floor(
              item.discountPercentage
            )}%  </span>
          </div>
          <h3 class="product-item-title">${item.title}</h3>
          <span class="product-item-price">$${item.price}</span>
          <span class"product-item-stock">Còn lại: ${item.stock} sp</span>
        
        </div>
      </div>
      `;
    });
    const divProduct = document.querySelector("#product");
    divProduct.innerHTML = htmls;
    pagiNumber.innerHTML = `Trang ${params.page}`;
  });
};
