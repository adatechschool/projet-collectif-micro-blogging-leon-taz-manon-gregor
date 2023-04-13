const Pool = require('pg').Pool
const pool = new Pool({
  user: 'yuna',
  host: 'localhost',
  database: 'miniblog',
  password: 'kaikai1269',
  port: 5433,
})