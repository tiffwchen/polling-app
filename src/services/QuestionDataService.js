import http from "../http-common";

class QuestionDataService {
  getAll() {
    return http.get("/questions");
  }

  get(id) {
    return http.get(`/questions/${id}`);
  }

  create(data) {
    return http.post("/questions", data);
  }

}

export default new QuestionDataService();