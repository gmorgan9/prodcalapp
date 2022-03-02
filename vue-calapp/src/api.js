import axios from "axios";
import { authHeader, getJwtToken, getUserIdFromToken } from "./auth";

const API_URL = "http://10.25.90.110:8000";

class Api {
//   login_view() {
//     return axios.get(API_URL + "/users", {});
//   }

  event_view(event_id) {
    return axios.get(API_URL + `/event_view?event_title=eq.${event_name}`);
  }

//   addArticle(article) {
//     return axios.post(
//       API_URL + "/articles",
//       {
//         ...article,
//         // add user id from JWT token
//         userid: getUserIdFromToken(getJwtToken()),
//       },
//       {
//         headers: authHeader(),
//       }
//     );
//   }

//   updateArticle(article) {
//     return axios.patch(
//       API_URL + `/articles?articleid=eq.${article.articleid}`,
//       article,
//       {
//         headers: authHeader(),
//       }
//     );
//   }

//   deleteArticle(id) {
//     return axios.delete(API_URL + `/articles?articleid=eq.${id}`, {
//       headers: authHeader(),
//     });
//   }

//   publishArticle(id) {
//     return axios.post(
//       API_URL + "/rpc/publish",
//       { id: id },
//       {
//         headers: authHeader(),
//       }
//     );
//   }

  login(user_name, password_hash) {
    return axios.post(API_URL + "/rpc/login", { user_name, password_hash });
  }

  signup(user_name, user_email, password_hash, dept_id) {
    return axios.post(API_URL + "/rpc/signup", { user_name, user_email, password_hash, dept_id });
  }
}

export default new Api();