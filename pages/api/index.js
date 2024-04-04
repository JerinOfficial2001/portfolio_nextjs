// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import speakeasy from "speakeasy";

export default function handler(req, res) {
  const method = req.method;
  switch (method) {
    case "GET":
      try {
        const url = speakeasy.generateSecret({ length: 20 });

        res.json({ status: "ok", data: url.otpauth_url, key: url.base32 });
      } catch (error) {
        console.log(error);
      }
      break;
    case "POST":
      try {
        const { otp, key } = req.body;
        try {
          const verified = speakeasy.totp.verify({
            secret: key,
            encoding: "base32",
            token: otp,
          });
          res.send({
            status: "ok",
            isVerified: verified,
          });
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      break;
  }
}
