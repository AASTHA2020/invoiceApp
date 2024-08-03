// src/components/ConsentBanner.js
import React, { useState } from "react";

function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    localStorage.setItem("cookiesConsent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "center" }}>
      <p>We use cookies to improve your experience. By using our site, you agree to our use of cookies.</p>
      <button onClick={handleAccept} style={{ backgroundColor: "#28a745", color: "#fff", border: "none", padding: "5px 10px", cursor: "pointer" }}>
        Accept
      </button>
    </div>
  );
}

export default ConsentBanner;
