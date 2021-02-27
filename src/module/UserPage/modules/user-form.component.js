import { Component } from "./../../../core/Component.js";
import { Validation } from "./../../../sharing/validation.js";
import { UserService } from "./../../../service/user.service.js";

const validation = new Validation();
const userService = new UserService();

export class UserForm extends Component {
  state = {
    username: "",
    password: "",
    selectedUser: {},
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    validation.isEmptyDom(
      e.target.value,
      `#${e.target.name}-alert`,
      `${e.target.name} can not empty`
    );
  };

  handleShowDetailUser = (user) => {
    this.setState({ selectedUser: user });
    this.handleUi(user);
  };

  handleAddUser = () => {
    if (
      validation.isEmpty(this.state.username) ||
      validation.isEmpty(this.state.password)
    ) {
      alert("Can not empty input");
      return;
    }
    const newUser = {
      nameUser: this.state.username,
      password: this.state.password,
      typeUser: "admin",
    };
    userService
      .createUser(newUser)
      .then(() => {
        this.props.reRenderTable();
      })
      .catch((err) => {
        console.log(err);
        alert(err.response?.data?.message);
      });
  };

  handleUi(user = null, type = true) {
    // true: edit
    if (type && user) {
      document.querySelector("#username").disabled = true;
      document.querySelector("#username").value = user.username;
    } else {
      document.querySelector("#username").removeAttribute("disabled");
      document.querySelector("#username").value = "";
    }
  }

  handleEditUser = () => {
    console.log(this.state.selectedUser);
    if (validation.isEmpty(this.state.password)) {
      alert("Can not empty input");
      return;
    }

    userService
      .editUser(this.state.selectedUser.id, {
        password_user: this.state.password,
      })
      .then(() => {
        alert("Edit Success");
      })
      .catch((err) => console.log(err.response));
  };
}
