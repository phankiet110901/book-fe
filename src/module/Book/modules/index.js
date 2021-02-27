import BookTable from "./book-table.component.js";
import { CategoryForm } from "./category-form.component.js";
import { BookForm } from "./book-form.component.js";

if (!sessionStorage.getItem("accessToken")) {
  window.location.href = "http://127.0.0.1:5500/src/module/LoginPage/views/";
}

const bookForm = new BookForm();

// render list book in table
BookTable.run({
  getDetail: bookForm.handleGetDetail
});

// render list category into select tag
new CategoryForm().handlShowData();

document.querySelectorAll("input").forEach((elm) => {
  elm.onkeyup = function (e) {
    bookForm.handleOnChange(e);
  };
});

document.querySelector("select").onchange = function (e) {
  bookForm.handleOnChange(e);
};

document.querySelector("#image").addEventListener("change", (e) => {
  bookForm.handleOnChange(e);
});

document.querySelector("textarea").onkeyup = function (e) {
  bookForm.handleOnChange(e);
};

document.querySelector("#btn-add").onclick = function () {
  bookForm
    .handleAddBook()
    .then((res) => {
      return bookForm.handleUploadImg(res.data.id_book);
    })
    .then(() => {
      BookTable.run();
    })
    .catch((err) => {
      const messErr = err.response.data.message.join(",");
      alert(messErr);
    });
};




