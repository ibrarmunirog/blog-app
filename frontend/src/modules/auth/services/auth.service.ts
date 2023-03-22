import { AxiosClient } from "shared/service";
import { ILoginFormInitialValues } from "views/login/interfaces";
import { IRegisterFormInitialValues } from "views/register/interfaces";

export class AuthService {
  static register<T>(payload: IRegisterFormInitialValues) {
    return AxiosClient.post<T>("auth/register", payload);
  }

  static login<T>(payload: ILoginFormInitialValues) {
    return AxiosClient.post<T>("auth/login", payload);
  }
}
