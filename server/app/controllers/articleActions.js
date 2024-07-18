const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const sections = await tables.article.readAll();
    res.json(sections);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving sections");
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const section = await tables.article.read(req.params.id);
    if (section === null) {
      res.sendStatus(404);
    } else {
      res.json(section);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res) => {
  try {
    const section = req.body;
    const insertId = await tables.article.create(section);
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const destroy = async (req, res) => {
  try {
    await tables.article.delete(req.params.id);
    res.json({ message: "Section deleted successfully" });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const section = req.body;
    await tables.article.update(id, section);
    const updatedSection = await tables.article.read(id);
    res.json(updatedSection);
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
