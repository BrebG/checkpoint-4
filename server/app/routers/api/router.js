const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const contactFormRouter = require("./contactForm/router");
const articleRouter = require("./article/router");
const reviewRouter = require("./review/router");
const aboutRouter = require("./about/router");
const consultationRouter = require("./consultation/router");

router.use("/message", contactFormRouter);
router.use("/article", articleRouter);
router.use("/review", reviewRouter);
router.use("/about", aboutRouter);
router.use("/consultation", consultationRouter);

/* ************************************************************************* */

module.exports = router;
