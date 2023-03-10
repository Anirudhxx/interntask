const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");

// Retrieve all employees
router.get("/", contactController.findAll);

// Create a new employee
router.post("/", contactController.create);

// Retrieve a single employee with id
router.get("/:id", contactController.findById);

// Update a employee with id
router.put("/:id", contactController.update);

// Delete a employee with id
router.delete("/:id", contactController.delete);

module.exports = router;
