import { fetchApi } from "./api.js";
import { API_CATEGORY } from "./constant.js";

import { drawCategory } from "./drawItemCategory.js";

import { category, params } from "./variable.js";

// Vẽ danh mục ra màn hình
drawCategory(API_CATEGORY);

// Get category
// fetchApi(API_CATEGORY).then((data) => {
//   let htmls = data.map((item) => {
//     return `
//         <div class="category__item">
//           ${item}
//         </div>
//       `;
//   });

//   category.innerHTML = htmls.join("");
// });
