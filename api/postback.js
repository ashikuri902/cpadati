export default async function handler(req, res) {

  const {
    sid,
    sid2,
    sid3,
    sid4,
    sid5,
    payout,
    status,
    offer_id,
    offer_name,
    code,
    ip_address,
    browsers,
    ua_target
  } = req.query;

  const BOT_TOKEN = "8757239334:AAFRkYJ62w2n3WhcWharR_O06h4GYgpPMcU";
  const CHAT_ID = "-1004482264129";

  const statusMap = {
    "1": "🟢 APPROVED",
    "2": "🔴 REJECTED",
    "0": "🟡 PENDING"
  };

  const message = `👑 <b>CPA MASTER ELITE</b>
╭━━━━━━━━━━━━━━━╮
💎 <b>NEW CONVERSION</b>
┣💰 <b>Payout:</b> <code>$${Number(payout).toFixed(2)}</code>
┣📊 <b>Status:</b> ${statusMap[status] || "UNKNOWN"}
┣🎯 <b>Offer:</b> <code>${offer_name}</code>
┣🆔 <b>Offer ID:</b> <code>${offer_id}</code>
┣🔗 <b>Click ID:</b> <code>${sid}</code>
┣📌 <b>SID2:</b> <code>${sid2}</code>
┣📌 <b>SID3:</b> <code>${sid3}</code>
┣📌 <b>SID4:</b> <code>${sid4}</code>
┣📌 <b>SID5:</b> <code>${sid5}</code>
┣🌍 <b>IP:</b> <code>${ip_address}</code>
┣💻 <b>Browser:</b> <code>${browsers}</code>
┣📱 <b>Device:</b> <code>${ua_target}</code>
┣🔑 <b>Code:</b> <code>${code}</code>
╰━━━━━━━━━━━━━━━╯`;

  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML"
      })
    }
  );

  const data = await response.json();

  return res.status(200).json(data);
}
