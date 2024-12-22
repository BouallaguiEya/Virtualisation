export interface UserModel {
  id: number | null,
  firstname: string,
  lastname: string,
  age: number,
  email: string,
  login: string
}
export interface UserCreateModel {
  firstname: string,
  lastname: string,
  age: number,
  email: string,
  password: string,
  login: string
}
export interface LoginModel {
  login: string | null,
  pwd: string | null,
}

