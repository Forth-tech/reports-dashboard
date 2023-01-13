import { Role } from "./enums";

export interface IUser {
    id?: number;
    email?: string;
    Role?: Role;
    id_internal?: number;
    password?: string;
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
