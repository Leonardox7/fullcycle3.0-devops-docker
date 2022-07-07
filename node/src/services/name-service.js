class NameService {
  constructor({ database }) {
    this.database = database;
  }

  async save({ name }) {
    await this.database.query('INSERT INTO names (name) VALUES (?)', [name]);
  }

  async findAll() {
    const [rows, _] = await this.database.execute('SELECT * FROM names');
    return rows;
  }
}

module.exports = NameService;