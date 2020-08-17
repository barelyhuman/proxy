const got = require('got');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(404);
    return res.end();
  }

  return got
    .post(`https://api.telegram.org/${BOT_ID}/sendMessage`)
    .then((_) => {
      return res.end();
    })
    .catch((err) => {
      console.error(err);
    });
};
