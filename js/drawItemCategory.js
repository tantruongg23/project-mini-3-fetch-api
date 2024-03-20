import { fetchApi } from "./api.js";
//  GET category
export const drawCategory = (url) => {
  fetchApi(url).then((data) => {
    // console.log(data.products);
    let htmls = "";
    data.forEach((item) => {
      htmls += `
        <div class="px-2 col-lg-2 col-md-3 col-sm-4 col-6">
          <button class="category-item" data-category="${item}">${item}</button>
        </div>

      `;
    });
    const divCategory = document.querySelector("#category");
    // console.log(htmls);
    divCategory.innerHTML = htmls;
  });
};
