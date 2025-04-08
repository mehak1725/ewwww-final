function showPopup(type) {
  const content = {
    dispose: "To dispose of plastic, rinse and recycle it in a dry waste bin. Avoid burning.",
    upcycle: "Use plastic bottles to create planters or storage containers.",
    toxic: "Plastics may contain BPA and microplastics. Avoid heating or reusing for food.",
    score: "Eco Score: 2/5. Plastics take 450+ years to decompose. Try alternatives like metal or glass.",
  };

  document.getElementById('popup-content').innerText = content[type];
  document.getElementById('popup').classList.remove('hidden');
}

function hidePopup() {
  document.getElementById('popup').classList.add('hidden');
}
