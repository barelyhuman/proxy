const axios = require('axios');

export default async (req, res) => {
  try {
    if (req.method !== 'GET') {
      res.status(404);
      return res.end();
    }

    const { BOT_ID, USERNAME } = process.env;

    await axios.post(`https://api.telegram.org/bot${BOT_ID}/sendMessage`, {
      chat_id: `${USERNAME}`,
      text: 'Burner Notif\nWhatsapp Notification on Burner',
    });

    return res.send({
      done: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send({
      error: 'Oops! Something went wrong',
    });
  }
};
