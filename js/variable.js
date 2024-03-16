import { API_PRODUCT } from "./constant.js";

import { fetchApi } from "./api.js";

export let params = {
  sort: "",
  order: "",
  page: "1",
  limit: "10",
  q: "",
  category: "",
};
// let totalProduct = 0;
export let pagiPrev = document.querySelector("#pagination-prev");
export let pagiNumber = document.querySelector("#pagination-number");
export let pagiNext = document.querySelector("#paginagion-next");

// Kiểm tra đến trang đầu chưa
pagiPrev.addEventListener("click", () => {
  if (page > 1) page -= 1;
});
// Kiểm tra đến trang cuối chưa
pagiPrev.addEventListener("click", () => {
  if (page < 1) page -= 1;
});
const getTotalProduct = () => {
  return fetchApi(API_PRODUCT).then((data) => {
    const totalProduct = data.length;
    return totalProduct;
  });
};
// console.log(getTotalProduct());

export let buttonSearch = document.querySelector("#search button");
export let inputSearch = document.querySelector("#search input");

export let filter = document.querySelector("#filter");

export let sortDesc = document.querySelector("#sort-desc");
export let category = document.querySelector("category");
