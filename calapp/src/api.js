import axios from "axios";
import { authHeader, getJwtToken, getUserIdFromToken } from "./auth";

const API_URL = "http://10.25.90.110:8000";

class Api {
  getUserID() {
    var id = getUserIdFromToken(getJwtToken());
    return id;
  }

  getDept() {
    return axios.get(API_URL + "/department", {});
  }

  getAdmin() {
    getUsers();
    var admin = users.isadmin === 1;
    return admin;
  }

  // USERS
  getUsers() {
    return axios.get(API_URL + "/users", {});
  }
  getUsersDetail(user_id) {
    return axios.get(API_URL + `/users?user_id=eq.${user_id}`);
  }
  updateUser(users) {
    return axios.patch(
      API_URL + `/users?user_id=eq.${users.user_id}`,
      users,
      {
        headers: authHeader(),
      }
    );
  }
  deleteUser(user_id) {
    return axios.delete(API_URL + `/users?user_id=eq.${user_id}`, {
      headers: authHeader(),
    });
  }

  // EVENTS
  getEvent() {
    return axios.get(API_URL + "/event", {});
  }
  getEventDetail(event_id) {
    return axios.get(API_URL + `/event?event_id=eq.${event_id}`);
  }
  addEvent(event) {
    return axios.post(
      API_URL + "/event",
      {
        ...event,
        // add user id from JWT token
        user_id: getUserIdFromToken(getJwtToken()),
      },
      {
        headers: authHeader(),
      }
    );
  }
  updateEvent(event) {
    return axios.patch(
      API_URL + `/event?event_id=eq.${event.event_id}`,
      event,
      {
        headers: authHeader(),
      }
    );
  }
  deleteEvent(event_id) {
    return axios.delete(API_URL + `/event?event_id=eq.${event_id}`, {
      headers: authHeader(),
    });
  }

  // AUTHENTICATION
  login(username, password_hash) {
    return axios.post(API_URL + "/rpc/login", { username, password_hash });
  }

  signup(username, email, password_hash, dept_id) {
    return axios.post(API_URL + "/rpc/signup", { username, email, password_hash, dept_id });
  }
}

export default new Api();