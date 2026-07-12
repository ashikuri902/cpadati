export default async function handler(req, res) {
  const { sid, payout, status, offer_id, offer_name } = req.query;

  const BOT_TOKEN = 8757239334:AAFRkYJ62w2n3WhcWharR_O06h4GYgpPMcU;
  const CHAT_ID = -1004482264129;

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
