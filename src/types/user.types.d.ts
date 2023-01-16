import { Role } from "./enums";

export interface IUser {
    email?: string;
    Role?: Role;
    name?: string;
    access_token?: string;
}

export interface UserState {
    user: IUser | null;
    loading: boolean;
    error: string | null;
}

export type ApiGetUser = {
    message: string;
    success: boolean;
    data: IUser;
};
