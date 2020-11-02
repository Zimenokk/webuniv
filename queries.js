const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-246-87-132.eu-west-1.compute.amazonaws.com',
  database: 'd8cbq39vcehbp7',
  user:'rfaaxvstevverh',
  password: '2e480e961f4ab4c806dbf41f0eb5ee3bd40444e3a06d5cc8efc2cbf4f12b7393',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getUsers = (request, response) => {
  response.header("Access-Control-Allow-Origin", "*");
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  response.header("Access-Control-Allow-Origin", "*");
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}