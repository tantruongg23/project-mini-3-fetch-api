import { fetchApi } from "./api.js";
//  GET category
export const drawCategory = (url) => {
  fetchApi(url).then((data) => {
    // console.log(data.products);
    let htmls = "";
    data.forEach((item) => {
      htmls += `
        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
          <div class="category-item ">${item}</div>
        </div>

      `;
    });
    const divCategory = document.querySelector("#category");
    // console.log(htmls);
    divCategory.innerHTML = htmls;
  });
};
