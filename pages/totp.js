// pages/index.js

import axios from "axios";
import QRCode from "qrcode.react";
import { useState } from "react";
export default function TOTP() {
  const [secret, setSecret] = useState("");
  const [verified, setVerified] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [SecretKey, setSecretKey] = useState("");

  const generateSecret = async () => {
    const { data } = await axios.get("/api");
    setSecret(data.data);
    setSecretKey(data.key);
  };
  const verifyToken = async () => {
    const { data } = await axios.post("/api", {
      otp: userInput,
      key: SecretKey,
    });
  };
  return (
    <div style={{ color: "white" }}>
      <h1>Two Factor Authentication Example</h1>
      {secret ? (
        <>
          <p>Scan the QR code with Google Authenticator:</p>
          <div
            style={{ padding: 15, background: "white", width: "max-content" }}
          >
            <QRCode value={`otpauth://totp/PORTFOLIO?secret=${SecretKey}`} />
          </div>

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
