const AbstractRepository = require("./AbstractRepository");

class ContactFormRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "Contact" as configuration
    super({ table: "message" });
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

  async create(message) {
    const [result] = await this.database.query(
      `insert into ${this.table} (username, email, message, topic, sending_time) values (?, ?, ?, ?, ?)`,
      [
        message.username,
        message.email,
        message.message,
        message.topic,
        message.sendingTime,
      ]
    );

    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = ContactFormRepository;
