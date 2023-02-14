import {
  addNewHomework,
  deleteHomework,
} from "../controllers/homeworkController.js";

const routes = (app) => {
  app.route("/homework").post(addNewHomework);
  app.route("/homework/:num").delete(deleteHomework);
};

export default routes;
