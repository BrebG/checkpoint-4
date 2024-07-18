const AbstractRepository = require("./AbstractRepository");

class AboutRepository extends AbstractRepository {
  constructor() {
    super({ table: "about" });
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

  async create(section) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, content, image_url, alt_text) VALUES (?, ?, ?, ?)`,
      [section.title, section.content, section.imageUrl, section.altText]
    );
    return result.insertId;
  }

  async update(id, section) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, content = ?, image_url = ?, alt_text = ? WHERE id = ?`,
      [section.title, section.content, section.imageUrl, section.altText, id]
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

module.exports = AboutRepository;
