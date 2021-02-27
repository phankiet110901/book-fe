import { APIConfig } from "./../config/baseAPI.config.js";

export class BaseAPI {
  get(endPoint) {
    const url = `${APIConfig.baseUrl}${endPoint}`;
    return axios({
      url,
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    });
  }

  post(endPoint, data) {
    const url = `${APIConfig.baseUrl}${endPoint}`;
    return axios({
      url,
      method: "POST",
      data,
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    });
  }

  put(endPoint, data) {
    const url = `${APIConfig.baseUrl}${endPoint}`;
    return axios({
      url,
      method: "PUT",
      data,
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    });
  }

  patch(endPoint, data) {
    const url = `${APIConfig.baseUrl}${endPoint}`;
    return axios({
      url,
      method: "PATCH",
      data,
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    });
  }

  delete(endPoint) {
    const url = `${APIConfig.baseUrl}${endPoint}`;
    return axios({
      url,
      method: "DELETE",
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    });
  }
}
