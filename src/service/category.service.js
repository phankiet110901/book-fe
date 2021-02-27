import { BaseAPI } from "./baseAPI.service.js";

export class CategoryService extends BaseAPI {
  getAllCate() {
    return this.get("category");
  }

  addCate(dataAdd) {
    return this.post("category", dataAdd);
  }

  deleteCate(idCate) {
    return this.delete(`category/delete/${idCate}`);
  }

  editCate(idCate, dataUpdate) {
    return this.patch(`category/update/${idCate}`, dataUpdate);
  }
}
