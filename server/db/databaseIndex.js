const {Pool} = require('pg');
const PG_URI = 'postgres://zfumxfwb:0PNXwsB496tVxPq3HDpv_At_HmY4clq3@lallah.db.elephantsql.com:5432/zfumxfwb';
const pool = new Pool({
    connectionString: PG_URI,
});



module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    },
  }