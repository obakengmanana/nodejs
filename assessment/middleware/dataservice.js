import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/getAll");
  }

  get(id) {
    return http.get(`/get/${id}`);
  }

  create(data) {
    return http.get(`/add/${data.gender}/${data.name}/${data.lastname}/${data.cellphone}/${data.email}/${data.height}/${data.weight}/${data.recentlySick}/`);
  }

  update(id, data) {
    return http.put(`/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/deleteAll`);
  }

}

export default new DataService();