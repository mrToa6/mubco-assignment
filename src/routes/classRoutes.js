import { addNewClass } from "../controllers/classController.js";

const routes = (app) => {
  app.route("/class").post(addNewClass);
};

export default routes;
