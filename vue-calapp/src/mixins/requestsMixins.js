const APIURL = "http://10.25.90.110:8000";
const axios = require("axios");
export const requestsMixin = {
  methods: {
    getCalendar() {
      return axios.get(`${APIURL}/calendar`);
    },
    addCalendar(data) {
      return axios.post(`${APIURL}/calendar`, data);
    },
    editCalendar(data) {
      return axios.put(`${APIURL}/calendar/${data.id}`, data);
    },
    deleteCalendar(id) {
      return axios.delete(`${APIURL}/calendar/${id}`);
    }
  }
};