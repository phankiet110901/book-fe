import { Component } from "./../../../core/Component.js";
import { CategoryService } from "./../../../service/category.service.js";

const cateService = new CategoryService();

export class CategoryForm extends Component {
  handlShowData = () => {
    cateService
      .getAllCate()
      .then((res) => {
        this.createElmCate(res.data);
      })
      .catch((err) => console.log(err));
  };

  createElmCate = (allCate) => {
    let content = "<option value=''>Select Cate</option>";

    allCate.forEach((cate) => {
      content += `
            <option value="${cate.id_category}" >${cate.name_category}</option>
        `;
    });
    document.querySelector("#category").innerHTML = content;
  };
}
