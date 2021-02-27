import UserTableBody from "./user-table.component.js";
import { UserForm } from "./user-form.component.js";

const userForm = new UserForm();

if (!sessionStorage.getItem("accessToken")) {
  window.location.href = "http://127.0.0.1:5500/src/module/LoginPage/views/";
}

UserTableBody.run({
  getDetailUser: userForm.handleShowDetailUser,
});

userForm.run({
  reRenderTable: function () {
    UserTableBody.run({
      getDetailUser: userForm.handleShowDetailUser,
    });
  },
});

// handle onChange for input
document.querySelectorAll("form input").forEach((elm) => {
  elm.onkeyup = (e) => {
    userForm.handleOnChange(e);
  };
});

// handle onSubmit
document.querySelector("#btn-add").onclick = function () {
  userForm.handleUi(false);
  userForm.handleAddUser();
  document.querySelector("form").reset();
};

//handle onSubmit ( edit )
document.querySelector("#btn-edit").onclick = function() {
    userForm.handleUi();
    userForm.handleEditUser();
    document.querySelector("form").reset();
};
