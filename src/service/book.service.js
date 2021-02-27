import { BaseAPI } from "./baseAPI.service.js";

export class BookService extends BaseAPI {
  getAllBook() {
    return this.get("book");
  }

  uploadImg(file, idUser) {
    const fileSend = new FormData();
    fileSend.append("imgBook", file);
    return this.post(`book/upload-img-book/${idUser}`, fileSend);
  }

  createBook(dataBook) {
    return this.post("book", dataBook);
  }

  deleteBook(idBook) {
    return this.delete(`delete-book/${idBook}`);
  }
}
