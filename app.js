const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;
let qr;

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (qrText.value.length > 0) {
    generateQRCode();
  } else {
    alert("Enter the text or URL to Generate your QR Code.");
  }
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
});

function generateQRCode() {
  qrContainer.innerHTML = ""; // clear old QR
  qr = new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });

  setTimeout(() => {
    const img = qrContainer.querySelector("img");
    if (img) {
      downloadBtn.href = img.src;
      downloadBtn.download = "qrcode.png";
    }
  }, 500);
}
