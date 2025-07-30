const previewText = document.getElementById("previewText");
const customText = document.getElementById("customText");
const colorPicker = document.getElementById("colorPicker");
const fontSelect = document.getElementById("fontSelect");
const fontSize = document.getElementById("fontSize");
const shirtColor = document.getElementById("shirtColor");
const uploadImage = document.getElementById("uploadImage");
const uploadedImg = document.getElementById("uploadedImg");
const removeImage = document.getElementById("removeImage");
const downloadBtn = document.getElementById("downloadBtn");
const mockup = document.getElementById("mockup");

customText.addEventListener("input", () => {
  previewText.textContent = customText.value || "Your Text";
});

colorPicker.addEventListener("input", () => {
  previewText.style.color = colorPicker.value;
});

fontSelect.addEventListener("change", () => {
  previewText.style.fontFamily = fontSelect.value;
});

fontSize.addEventListener("input", () => {
  previewText.style.fontSize = `${fontSize.value}px`;
});

shirtColor.addEventListener("input", () => {
  mockup.style.backgroundColor = shirtColor.value;
});

uploadImage.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      uploadedImg.src = event.target.result;
      uploadedImg.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

removeImage.addEventListener("click", () => {
  uploadedImg.src = "";
  uploadedImg.style.display = "none";
  uploadImage.value = "";
});

downloadBtn.addEventListener("click", () => {
  html2canvas(mockup).then(canvas => {
    const link = document.createElement("a");
    link.download = "my-drip.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});
