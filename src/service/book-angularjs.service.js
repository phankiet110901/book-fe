import { APIConfig } from "./../config/baseAPI.config.js";

export class BookAngularjsService {
  getAllBook() {
    return {
      method: "GET",
      url: `${APIConfig.baseUrl}book`,
    };
  }

  uploadImgBook(fileSend, idBook) {
    const formData = new FormData();

    formData.append("img_book", fileSend);

    return {
      method: "POST",
      url: `${APIConfig.baseUrl}book/upload-img-book/${idBook}`,
      data: formData,
    };
  }

  createBook(dataBook) {
    return {
      method: "POST",
      url: `${APIConfig.baseUrl}book`,
      data: dataBook,
    };
  }

  getAllCate() {
    return {
      url: `${APIConfig.baseUrl}category`,
      method: "GET",
    };
  }
}
