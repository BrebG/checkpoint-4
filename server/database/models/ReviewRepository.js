const AbstractRepository = require("./AbstractRepository");

class ReviewRepository extends AbstractRepository {
  constructor() {
    super({ table: "review" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async create(review) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, title, content, email,publication_date) VALUES (?, ?, ?, ?, NOW())`,
      [review.username, review.title, review.content, review.email]
    );
    return result.insertId;
  }

  async update(id, review) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, content = ?, edit_date = NOW() WHERE id = ?`,
      [review.title, review.content, id]
    );
    return result.affectedRows > 0;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = ReviewRepository;
