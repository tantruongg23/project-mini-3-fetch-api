import { fetchApi } from "./api.js";

// GET Products
export const drawProduct = (url) => {
  fetchApi(url).then((data) => {
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
          <p class="discount">Giảm giá: ${Math.floor(
            item.discountPercentage
          )}%</p>
        </div>
      </div>
      `;
    });
    const divProduct = document.querySelector("#product");
    divProduct.innerHTML = htmls;
  });
};
