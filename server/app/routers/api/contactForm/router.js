const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  add,
  browse,
  read,
  destroy,
} = require("../../../controllers/messageFormActions");

// Route to get a list of items
router.get("/", browse);
router.get("/:id", read);
router.post("/", add);
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
