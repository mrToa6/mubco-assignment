import { addNewClass, deleteClass } from "../controllers/classController.js";

const routes = (app) => {
  app.route("/class").post(addNewClass);
  app.route("/class/:num").delete(deleteClass);
};

export default routes;
