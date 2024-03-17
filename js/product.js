import { API_PRODUCT } from "./constant.js";

import { drawProduct } from "./drawItemProduct.js";
import {
  params,
  pagiPrev,
  pagiNext,
  buttonSearch,
  inputSearch,
  filter,
} from "./variable.js";

import { fetchApi } from "./api.js";

// console.log(sortDesc.value);
let textSearch = "";
let url = `${API_PRODUCT}?_page=${params.page}&_limit=${params.limit}`;
drawProduct(url);

const changeUrl = () => {
  if (params.category != "") {
    url = `${API_PRODUCT}?_page=${params.page}&_limit=${params.limit}&_sort=${params.sort}&_order=${params.order}&q=${textSearch}&category=${params.category}`;
  } else {
    url = `${API_PRODUCT}?_page=${params.page}&_limit=${params.limit}&_sort=${params.sort}&_order=${params.order}&q=${textSearch}`;
  }
};

// Kiểm tra đến trang đầu chưa
pagiPrev.addEventListener("click", () => {
  if (params.page > 1) {
    params.page--;
    // console.log("Vừa nhấn về trang trước");
  }
  // pagiNumber.innerHTML = `Trang ${params.page}`;
  changeUrl();
  drawProduct(url);
});

// Kiểm tra đến trang cuối chưa
pagiNext.addEventListener("click", () => {
  fetchApi(API_PRODUCT)
    .then((data) => {
      const numberOfProducts = data.length;
      const numOfPages = numberOfProducts / params.limit;
      if (params.page < numOfPages) {
        params.page++;
      } else {
        // console.log("Đã đến trang cuối");
      }
      // console.log(`Đang ở trang ${params.page}`);
    })
    .then(() => {
      changeUrl();
      drawProduct(url);
    });
});

// Tìm kiếm

function checkInput() {
  if (inputSearch.value !== "") {
    textSearch = inputSearch.value;
  } else {
    textSearch = "";
  }
  changeUrl();
  drawProduct(url);
}

// Thay đổi kết quả tìm kiếm theo input nhập vào thời gian thực
// inputSearch.addEventListener("input", checkInput);
buttonSearch.addEventListener("click", checkInput);

// Lọc
filter.addEventListener("change", () => {
  const sortValue = filter.value;
  if (sortValue === "sort-price-desc") {
    params.sort = "price";
    params.order = "desc";
  } else if (sortValue === "sort-price-asc") {
    params.sort = "price";
    params.order = "asc";
  } else if (sortValue === "sort-discount-desc") {
    params.sort = "discountPercentage";
    params.order = "desc";
  } else {
    params.sort = "id";
    params.order = "asc";
  }
  changeUrl();
  drawProduct(url);
});
