module.exports = (app) => {
  const staffs = require("../controller/staff.controller");

  // Create a new staff
  app.post("/staffs", staffs.create);

  // Retrieve a single staff with staffId
  app.get("/staffs/:staffId", staffs.findOne);

  // Update a staff with staffId
  app.patch("/staffs/data", staffs.update);
};
