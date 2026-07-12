export default async function handler(req, res) {
  const { sid, payout, status, offer_id, offer_name } = req.query;

  const BOT_TOKEN = "8757239334:AAFRkYJ62w2n3WhcWharR_O06h4GYgpPMcU";
  const CHAT_ID = "-1004482264129";

const statusMap = {
  "1": "🟢 <b>APPROVED</b>",
  "2": "🔴 <b>REJECTED</b>",
  "0": "🟡 <b>PENDING</b>"
};

const message = `<b>👑 CPA MASTER ELITE</b>
━━━━━━━━━━━━━━
💎 <b>NEW CONVERSION</b>
💰 <b>Payout:</b> <code>$${Number(payout).toFixed(2)}</code>
📊 <b>Status:</b> ${statusMap[status] || "⚪ UNKNOWN"}
🎯 <b>Offer:</b> <code>${offer_name}</code>
🆔 <b>Offer ID:</b> <code>${offer_id}</code>
🔗 <b>Click ID:</b> <code>${sid}</code>
🌐 <b>Network:</b> <code>CPAZon</code>
🕒 <b>Time:</b> <code>${new Date().toLocaleString("en-US",{timeZone:"Asia/Dhaka"})}</code>
━━━━━━━━━━━━━━
🏆 <b>CPA MASTER ELITE</b>`;

await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "HTML",
    disable_web_page_preview: true
  })
});

  return res.status(200).send("OK");
}
