import {
  addNewHomework,
  deleteHomework,
  getAllHomeworks,
  getHomework,
} from "../controllers/homeworkController.js";

const routes = (app) => {
  app.route("/homework").post(addNewHomework).get(getAllHomeworks);
  app.route("/homework/:num").delete(deleteHomework).get(getHomework);
};

export default routes;
