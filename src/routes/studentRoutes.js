import {
  addNewStudent,
  getAllStudents,
  getStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const routes = (app) => {
  app.route("/student").get(getAllStudents).post(addNewStudent);
  app.route("/student/:num").get(getStudent).delete(deleteStudent);
};

export default routes;
