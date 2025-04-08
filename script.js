function scanWaste() {
  const input = document.getElementById("wasteInput");
  const result = document.getElementById("scanResult");
  
  if (input.files.length === 0) {
    result.textContent = "Please upload an image first!";
  } else {
    // Dummy response
    result.textContent = "🟢 Organic Waste detected. Put it in the Green Bin!";
  }
}

function getSuggestion() {
  const input = document.getElementById("ecoInput").value.toLowerCase();
  const result = document.getElementById("suggestionResult");

  if (input.includes("phone")) {
    result.textContent = "📱 You can donate old phones or recycle them at e-waste centers.";
  } else if (input.includes("plastic")) {
    result.textContent = "♻️ Reuse plastic bottles as planters or refillable containers!";
  } else {
    result.textContent = "🌍 Try reusing, donating, or recycling it responsibly!";
  }
}
