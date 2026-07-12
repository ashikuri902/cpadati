export default async function handler(req, res) {
  const { sid, payout, status, offer_id, offer_name } = req.query;

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const message = `
🎉 New Conversion

Offer: ${offer_name}
Offer ID: ${offer_id}
Status: ${status}
Payout: $${payout}
Click ID: ${sid}
`;

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  });

  return res.status(200).send("OK");
}
