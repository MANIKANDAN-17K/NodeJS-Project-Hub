const express = require("express");
const routes = express.Router();

const ctrl = require("../controllers/postController");

routes.get("/",ctrl.getAll);
routes.get('/:id',ctrl.getOne);
routes.post('/',ctrl.create);
routes.put('/:id',ctrl.update);
routes.delete("/:id",ctrl.remove);

module.exports = routes;