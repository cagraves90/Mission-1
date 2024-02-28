const pool = require("../db/db");

module.exports.getStudentProjectInfo = (req, res) => {
  pool.execute(
    "SELECT project_id, name, learning_objective, instructions, video FROM `missio20_2310-L4FT12-team5`.project WHERE project_id = ?;",
    [req.params.project_id],
    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage:
            "An error occurred while fetching data from the database.",
          error: err,
        });
      }

      res.send(result);
    }
  );
};
//  Refactored code to make only one query instead of five - made code more consise and compact

module.exports.getUser = (req, res) => {
  pool.execute(
    "SELECT profile_pic FROM `missio20_2310-L4FT12-team5`.student WHERE first_name = ?;",
    ["Aiden"],
    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage:
            "An error occurred while fetching data from the database.",
          error: err,
        });
      }

      res.send(result);
    }
  );
};
