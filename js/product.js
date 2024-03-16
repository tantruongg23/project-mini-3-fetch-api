import { API_PRODUCT } from "./constant.js";

import { drawProduct } from "./drawItemProduct.js";

//GET Products

// Xử lí các params
export let sortDesc = document.querySelector("#sort-desc");
export let sortAsc = document.querySelector("#sort-asc");
export let sortDefault = document.querySelector("#sort-default");
export let sortDiscount = document.querySelector("#sort-discount");
// console.log(sortDesc.value);
let sortParam = "";
let url = `${API_PRODUCT}?_sort=${sortParam}`;
drawProduct(url);

sortDesc.addEventListener("click", () => {
  sortParam = "desc";
  // console.log(sortParam);
  url = `${API_PRODUCT}?_sort=price&_order=${sortParam}`;
  drawProduct(url);
});

sortAsc.addEventListener("click", () => {
  sortParam = "asc";
  // console.log(sortParam);
  url = `${API_PRODUCT}?_sort=price&_order=${sortParam}`;
  drawProduct(url);
});

sortDefault.addEventListener("click", () => {
  // sortParam = "desc";
  // console.log(sortParam);
  url = `${API_PRODUCT}`;
  drawProduct(url);
});

sortDiscount.addEventListener("click", () => {
  sortParam = "desc";
  // console.log(sortParam);
  url = `${API_PRODUCT}?_sort=discountPercentage&_order=${sortParam}`;
  drawProduct(url);
});
