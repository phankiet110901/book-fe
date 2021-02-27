import { AuthService } from "./../../../service/auth.service.js";
import { Validation } from "./../../../sharing/validation.js";

const authService = new AuthService();
const validation = new Validation();

export class LoginForm {
  state = {
    username: "",
    password: "",
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      !validation.isEmpty(this.state.username) &&
      !validation.isEmpty(this.state.password)
    ) {
      authService
        .login(this.state)
        .then((res) => {
          sessionStorage.setItem("user", JSON.stringify(res.data));
          sessionStorage.setItem("accessToken", res.data.accessToken);
          window.location.href = "/";
        })
        .catch(() => {
          alert("Wrong Usernam or Password");
        });
    } else {
      alert("Can not empty input !!!");
    }
  };

  handleOnChange = (e) => {
    this.state = {
      ...this.state,
      [e.target.name]: e.target.value,
    };
    validation.isEmptyDom(
      this.state[`${e.target.name}`],
      `#${e.target.name}-alert`,
      `${e.target.name} can not empty`
    );
  };
}
