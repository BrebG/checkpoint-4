const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const review = await tables.review.readAll();

    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving reviews");
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const review = await tables.review.read(req.params.id);
    if (review === null) {
      res.sendStatus(404);
    } else {
      res.json(review);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res) => {
  try {
    const review = req.body;
    const insertId = await tables.review.create(review);
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const destroy = async (req, res) => {
  try {
    await tables.review.delete(req.params.id);
    res.json({ message: "Review deleted successfully" });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const review = req.body;
    await tables.review.update(id, review);
    const updatedReview = await tables.review.read(id);
    res.json(updatedReview);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  add,
  browse,
  read,
  update,
  destroy,
};
