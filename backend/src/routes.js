const express = require("express");

// Controllers
const OngController = require("./controllers/OngController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const IncidentController = require("./controllers/IncidentController");

// Validators
const OngValidator = require("./validators/OngValidator");
const SessionValidator = require("./validators/SessionValidator");
const ProfileValidator = require("./validators/ProfileValidator");
const IncidentValidator = require("./validators/IncidentValidator");

const routes = express.Router();

// Login
routes.post("/sessions", SessionValidator.store, SessionController.create);

// ONGs
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngValidator.create, OngController.create);
routes.delete("/ongs/:id", OngValidator.delete, OngController.delete);

// Profile -> relacionamentos
routes.get("/profile", ProfileValidator.index, ProfileController.index);

// Incidents
routes.get("/incidents", IncidentValidator.index, IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete(
  "/incidents/:id",
  IncidentValidator.delete,
  IncidentController.delete
);

module.exports = routes;
