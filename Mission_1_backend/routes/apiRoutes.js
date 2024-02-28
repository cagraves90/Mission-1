const express = require("express");
const studentsController = require("../controllers/apiController");
const router = express.Router();

router.get(
  "/student_projectinfo/:project_id",
  studentsController.getStudentProjectInfo
);

// Due to refactoring the studentsController, could refactor the route above to make it only one route instead of five.
// This made the code compact and easier to read.

router.get("/users", studentsController.getUser);

module.exports = router;
