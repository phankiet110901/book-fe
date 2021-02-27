import { LoginForm } from "./login-form.component.js";

if(sessionStorage.getItem("user")) {
  window.location.href = "/";
}

const loginForm = new LoginForm();

document.querySelector("form").onsubmit = (e) => {
  loginForm.handleOnSubmit(e);
};

document.querySelectorAll("input").forEach((elm) => {
  elm.onkeyup = (e) => {
    loginForm.handleOnChange(e);
  };
});
