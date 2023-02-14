import {
  addNewClass,
  deleteClass,
  getAllClasses,
  getClass,
} from "../controllers/classController.js";

const routes = (app) => {
  app.route("/class").post(addNewClass).get(getAllClasses);
  app.route("/class/:num").delete(deleteClass).get(getClass);
};

export default routes;
