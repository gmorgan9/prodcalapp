import axios from "axios";
import { authHeader, getJwtToken, getUserIdFromToken } from "./auth";

const API_URL = "http://10.25.90.110:8000";

class Api {
  getEvent() {
    return axios.get(API_URL + "/event", {});
  }

  getEventDetail(event_id) {
    return axios.get(API_URL + `/event?event_id=eq.${event_id}`);
  }

  getUsers() {
    return axios.get(API_URL + "/users", {});
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





  updateArticle(article) {
    return axios.patch(
      API_URL + `/articles?articleid=eq.${article.articleid}`,
      article,
      {
        headers: authHeader(),
      }
    );
  }

  deleteArticle(id) {
    return axios.delete(API_URL + `/articles?articleid=eq.${id}`, {
      headers: authHeader(),
    });
  }

  publishArticle(id) {
    return axios.post(
      API_URL + "/rpc/publish",
      { id: id },
      {
        headers: authHeader(),
      }
    );
  }

  login(username, password_hash) {
    return axios.post(API_URL + "/rpc/login", { username, password_hash });
  }

  signup(username, email, password_hash, dept_id) {
    return axios.post(API_URL + "/rpc/signup", { username, email, password_hash, dept_id });
  }
}

export default new Api();