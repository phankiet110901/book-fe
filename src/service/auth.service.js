import { BaseAPI } from "./baseAPI.service.js";

export class AuthService extends BaseAPI {
    login(dataLogin) {
        return this.post("user/login",dataLogin);
    }
}