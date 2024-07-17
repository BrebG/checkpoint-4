const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const message = await tables.message.readAll();

    res.json(message);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const message = await tables.message.read(req.params.id);
    if (message === null) {
      res.sendStatus(404);
    } else {
      res.json(message);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const message = req.body;

  try {
    const insertId = await tables.message.create(message);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    await tables.message.delete(id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { add, browse, read, destroy };
