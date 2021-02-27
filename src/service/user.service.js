import { BaseAPI } from "./baseAPI.service.js";

export class UserService extends BaseAPI {
  getAllUser() {
    return this.get("user");
  }

  createUser(userData) {
    return this.post("user/create-user", userData);
  }

  deleteUser(idUser) {
    return this.delete(`user/delete-user/${idUser}`);
  }

  editUser(idUser, dataUpdate) {
    return this.patch(`user/update-user/${idUser}`, dataUpdate);
  }
}
