// src/components/YourComponent.js
import React, { useEffect } from "react";

function YourComponent() {
  useEffect(() => {
    // Example: Store data
    localStorage.setItem("username", "JohnDoe");

    // Example: Retrieve data
    const username = localStorage.getItem("username");
    console.log(username); // Should log "JohnDoe"
  }, []);

  return <div>Your Component</div>;
}

export default YourComponent;
