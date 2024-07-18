const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  add,
  destroy,
  update,
} = require("../../../controllers/reviewActions");

router.post("/", add);
router.get("/", browse);
router.get("/:id", read);
router.delete("/:id", destroy);
router.put("/:id", update);

module.exports = router;
