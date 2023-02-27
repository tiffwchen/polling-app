import http from "../http-common";

class TeacherDataService {
  getAll() {
    return http.get("/teachers");
  }

  get(id) {
    return http.get(`/teachers/${id}`);
  }

  create(data) {
    return http.post("/teachers", data);
  }

}

export default new TeacherDataService();