import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/data/";

const getPublicContent = () => {
  return axios.get(API_URL + "home");
};

const getUsers = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};

const deleteUser = (id, username, email, password, roles) => {
  return axios.post(API_URL + "delete/user", {
    id,
    username,
    email,
    password,
    roles,
  });
};

const deleteUsers = (usersDto) => {
  return axios.post(API_URL + "delete/users", {
    usersDto,
  });
};

const updateUser = (id, username, email, password, roles) => {
  return axios.post(API_URL + "update/user", {
    id,
    username,
    email,
    password,
    roles,
  });
};

export default {
  getUsers,
  getPublicContent,
  deleteUser,
  deleteUsers,
  updateUser,
};
