const axios = require('axios');

export default async (req, res) => {
  try {
    if (req.method !== 'GET') {
      res.status(404);
      return res.end();
    }

    const { status } = req.query;

    if (!isValidStatus(status)) {
      res.status(400);
      return res.send({
        error: 'Invalid Status',
      });
    }

    const { BOT_ID, USERNAME } = process.env;

    await axios.post(`https://api.telegram.org/bot${BOT_ID}/sendMessage`, {
      chat_id: `${USERNAME}`,
      text: `Burner Notif\nBattery Status: ${status.toUpperCase()}`,
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

function isValidStatus(status) {
  const valids = ['low', 'charged'];
  return valids.indexOf(status.toLowerCase()) > -1;
}
