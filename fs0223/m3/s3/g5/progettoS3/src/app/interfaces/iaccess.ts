import { IUser } from "./iuser";

export interface IAccess {
  accessToken: string;
  user: IUser;
}
