import CategoryTable from "./category-table.component.js";
import CategoryForm from "./category-form.component.js";

if (!sessionStorage.getItem("accessToken")) {
  window.location.href = "http://127.0.0.1:5500/src/module/LoginPage/views/";
}

CategoryTable.run({
  getCate: CategoryForm.getDetailCate,
});
CategoryForm.run({
  reRenderTable: function () {
    CategoryTable.run({
      getCate: CategoryForm.getDetailCate,
    });
  },
});
document.querySelector("#nameCategory").onkeyup = function (e) {
  CategoryForm.handleOnChange(e);
};

// add cate
document.querySelector("#btn-add").onclick = function () {
  CategoryForm.handleAddCate();
  document.querySelector("form").reset();
};

// edit cate
document.querySelector("#btn-edit").onclick = function () {
  CategoryForm.handleEdit();
  document.querySelector("form").reset();
};
