#!/usr/bin/env node
const crypto = require("crypto");

// calculate hash from seed
function hash() {
  return crypto.createHash("sha256").update(
    ""
  ).digest("hex");
};

function calculateNumber () {
  const hmac = crypto
    .createHmac("sha512", "CohRC5j55KVa5wbupDt0vkOR0aO2")
    .update(
      "742967355a034785ddbc7270ce27410f3f64975ef7a5e0c09f249036116413b3"
    )
    .digest("hex");

  const first7 = hmac.substring(0, 7);
  return Math.round(parseInt(first7, 16) 
    / 7456540.416);  
}

console.log(calculateNumber() === 24)
