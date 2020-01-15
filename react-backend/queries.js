const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'unwritten',
  host: 'localhost',
  database: 'unwritten',
  password: 'password',
  port: 5432,
});

const getAllLangs = (request, response) => {
    pool.query('SELECT * FROM language;', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

module.exports = {getAllLangs}