const expr = require("express");
const router = expr.Router();

// Import contact controller
const {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// Routes
router.get("/", getContacts).post("/", createContact);
router
  .get("/:id", getContactById)
  .delete("/:id", deleteContact)
  .put("/:id", updateContact);

// Export router
module.exports = router;
