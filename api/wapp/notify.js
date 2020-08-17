const axios = require('axios');

export default async (req, res) => {
  if (req.method !== 'GET') {
    res.status(404);
    return res.end();
  }

  const { BOT_ID, USERNAME } = process.env;

  axios
    .post(`https://api.telegram.org/bot${BOT_ID}/sendMessage`, {
      chat_id: `${USERNAME}`,
      text: 'Whatsapp Notification on Burner',
    })
    .then((_) => {
      return res.send({
        done: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(400);
      return res.end();
    });
};
