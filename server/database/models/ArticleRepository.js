const AbstractRepository = require("./AbstractRepository");

class ArticleRepository extends AbstractRepository {
  constructor() {
    super({ table: "article" });
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
      `INSERT INTO ${this.table} (title, content, image_url, alt_text, category, username, publication_date) VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [
        section.title,
        section.content,
        section.imageUrl,
        section.altText,
        section.category,
        section.username,
      ]
    );
    return result.insertId;
  }

  async update(id, section) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, content = ?, image_url = ?, alt_text = ?, category = ? WHERE id = ?`,
      [
        section.title,
        section.content,
        section.imageUrl,
        section.altText,
        section.selectedCategory,
        id,
      ]
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

module.exports = ArticleRepository;
