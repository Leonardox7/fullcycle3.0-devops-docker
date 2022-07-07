class NameService {
  constructor({ database }) {
    this.database;
  }

  async save(name) {
    await this.database.query('INSERT INTO names (name) VALUES (?)', [name]);
  }

  async findAll() {
    const [_, fields] = await connection.execute('SELECT * FROM names');
    return fields;
  }
}
