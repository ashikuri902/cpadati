export default async function handler(req, res) {

  const {
    sid,
    payout,
    status,
    offer_id,
    offer_name,
    code
  } = req.query;

  console.log({
    sid,
    payout,
    status,
    offer_id,
    offer_name,
    code
  });

  return res.status(200).send("OK");
}
