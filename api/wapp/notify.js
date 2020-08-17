const got = require('got');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(404);
    return res.end();
  }

  return got
    .post(`https://api.telegram.org/${process.env.BOT_ID}/sendMessage`, {
      json: {
        chat_id: `@${process.env.USERNAME}`,
        text: 'Whatsapp Notification on Burner',
      },
    })
    .then((_) => {
      return res.end();
    })
    .catch((err) => {
      console.error(err);
    });
};
