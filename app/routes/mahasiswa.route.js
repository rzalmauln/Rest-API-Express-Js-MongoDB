module.exports = (app) => {
  const mahasiswa = require("../controllers/mahasiswa.controller.js");
  const router = require("express").Router();

  router.post("/", mahasiswa.create);
  router.get("/", mahasiswa.findAll);
  router.get("/:id", mahasiswa.show);
  router.put("/:id", mahasiswa.update);
  router.delete("/:id", mahasiswa.delete);
  app.use("/mahasiswa", router);
};
