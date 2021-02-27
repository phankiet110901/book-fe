import { Component } from "../../../core/Component.js";
import { UserService } from "./../../../service/user.service.js";

const userService = new UserService();

class UserTableBody extends Component {
  constructor(dom) {
    super(dom);
  }

  state = {
    allUser: [],
  };

  handleUiContent = () => {
    let content = "";
    this.state.allUser.forEach((user) => {
      content += `
      <tr>
          <td>${user.name_user}</td>
          <td>${user.type_user}</td>
          <td>
            <button onclick="handleGetDetailUser({username: '${user.name_user}', id: '${user.id_user}' })">Edit</button>
            <button onclick="handleDeleteUser('${user.id_user}')">Delete</button>
          </td>
      </tr>
      `;
    });

    return content;
  };

  handleDeleteUser = (idUser) => {
    userService
      .deleteUser(idUser)
      .then(() => {
        this.componentDidMout();
        alert("Delete Success");
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      });
  };

  componentDidMout = () => {
    userService
      .getAllUser()
      .then((res) => this.setState({ allUser: res.data }))
      .catch((err) => console.log(err));
  };

  handleGetDetailUser = (user) => {
    this.props.getDetailUser(user);
  };

  render() {
    return this.handleUiContent();
  }
}

const userTableBody = new UserTableBody("tbody");
window.handleGetDetailUser = function (user) {
  userTableBody.handleGetDetailUser(user);
};

window.handleDeleteUser = function (idUser) {
  userTableBody.handleDeleteUser(idUser);
};

export default userTableBody;
