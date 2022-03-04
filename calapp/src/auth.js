import { userSetter } from "core-js/fn/symbol";
import jwt_decode from "jwt-decode";

export function getJwtToken() {
  return localStorage.getItem("accessToken" + users.id);
}

export function getUserIdFromToken(token) {
  const decoded = jwt_decode(token);
  console.log(decoded);
  return decoded.id;
}

export function setJwtToken(token) {
  localStorage.setItem("accessToken", token);
}

export function deleteJwtToken() {
  localStorage.removeItem("accessToken");
}

export function authHeader() {
  let accessToken = getJwtToken();

  if (accessToken) {
    return { Authorization: "Bearer " + accessToken };
  } else {
    return {};
  }
}