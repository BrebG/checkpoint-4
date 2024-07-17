const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const contactFormRouter = require("./contactForm/router");

router.use("/contact", contactFormRouter);

/* ************************************************************************* */

module.exports = router;
