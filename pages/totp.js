// pages/index.js

import { useState } from "react";
import speakeasy from "speakeasy";
import QRCode from "qrcode";

export default function TOTP() {
  const [secret, setSecret] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [verified, setVerified] = useState(false);
  const [userInput, setUserInput] = useState("");
  const SecretKey = "SecretKey";
  const key = "LJOWEKCBJ42SUOKJOFSTY3JWJM7F2KBR";
  const generateSecret = () => {
    const secret = speakeasy.generateSecret({ length: 20 });
    setSecret(secret.base32);

    // Generate QR code URL

    QRCode.toDataURL(
      `otpauth://totp/${SecretKey}?secret=${key}`,
      (err, dataUrl) => {
        if (err) {
          console.error("Error generating QR code:", err);
          return;
        }
        setQrCodeUrl(dataUrl);
      }
    );
  };
  const verifyToken = () => {
    const verified = speakeasy.totp.verify({
      secret: secret,
      encoding: "base32",
      token: userInput,
      window: 2,
    });
    console.log(verified, "function");
    setVerified(verified);
  };

  return (
    <div style={{ color: "white" }}>
      <h1>Two Factor Authentication Example</h1>
      {secret ? (
        <>
          <p>Scan the QR code with Google Authenticator:</p>
          <img src={qrCodeUrl} alt="QR Code" />
          <p>Enter the verification code from Google Authenticator:</p>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={verifyToken}>Verify Code</button>
          {verified && <p>Code Verified!</p>}
        </>
      ) : (
        <button onClick={generateSecret}>Generate Secret</button>
      )}
    </div>
  );
}
