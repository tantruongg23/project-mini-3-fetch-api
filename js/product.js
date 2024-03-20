import { drawProduct } from "./drawItemProduct.js";
import {
  params,
  pagiPrev,
  pagiNext,
  buttonSearch,
  inputSearch,
  filter,
  category,
} from "./variable.js";

import { fetchApi } from "./api.js";
import { API_PRODUCT } from "./constant.js";

drawProduct();

// Pagination
// Kiểm tra đến trang đầu chưa
pagiPrev.addEventListener("click", () => {
  pagiNext.classList.remove("disabled");

  if (params.page > 1) {
    params.page--;
    // console.log("Vừa nhấn về trang trước");
    if (params.page == 1) pagiPrev.classList.add("disabled");
  }
  // pagiNumber.innerHTML = `Trang ${params.page}`;
  drawProduct();
});

// Kiểm tra đến trang cuối chưa
pagiNext.addEventListener("click", () => {
  fetchApi(API_PRODUCT)
    .then((data) => {
      const numberOfProducts = data.length;
      const numOfPages = numberOfProducts / params.limit;
      pagiPrev.classList.remove("disabled");
      if (params.page < numOfPages) {
        params.page++;
        if (params.page == numOfPages) pagiNext.classList.add("disabled");
      }
      // console.log(`Đang ở trang ${params.page}`);
    })
    .then(() => {
      drawProduct();
    });
});

// End Pagination

//Search
function search() {
  params.q = inputSearch.value;
  drawProduct();
}
// Thay đổi kết quả tìm kiếm theo input nhập vào thời gian thực
// inputSearch.addEventListener("input", checkInput);
buttonSearch.addEventListener("click", search);
// Enter -> search
inputSearch.addEventListener("keydown", (e) => {
  if (e.key === "Enter") search();
});
//End Search

// Filter
filter.addEventListener("change", (e) => {
  const sortValue = e.target.value;
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
    params.sort = "";
    params.order = "";
  }

  drawProduct();
});

// End Filter

// Display products by category
function clearActiveFlags() {
  const activeElements = document.querySelectorAll(".active");
  activeElements.forEach(function (element) {
    element.classList.remove("active");
  });
}
//  Hiển thị danh mục theo sản phẩm
setTimeout(() => {
  // console.log("Sau  5 giây");
  const categoryItems = document.querySelectorAll(".category-item");

  // console.log(categoryItems);
  categoryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const category = this.getAttribute("data-category"); // hpac dung: innerText

      if (!item.classList.contains("active")) {
        clearActiveFlags(); // Xóa tất cả các cờ active nếu không nhấn lại vào chính nó
        item.classList.add("active");
      } else {
        item.classList.remove("active"); // Nếu nhấn lại vào chính nó, xóa lớp "active"
      }

      if (item.classList.contains("active")) {
        params.category = category;
      } else {
        params.category = "";
      }
      // console.log(params.category);
      // Vẽ sản phẩm ra màn hình

      drawProduct();
    });
  });
}, 200);

// End Display products by category
