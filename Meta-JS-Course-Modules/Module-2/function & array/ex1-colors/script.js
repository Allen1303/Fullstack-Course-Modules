let colors = [];
const addColors = function () {
  const input = document.getElementById("colorInput");
  const result = document.getElementById("colorResult");
  const color = input.value.trim();
  if (color === "") {
    result.innerHTML = "⚠️ Please enter a color";
    return;
  }
  colors.push(color);
  result.innerHTML = `${color} added, ${colors.length} Color(s): ${colors.join(
    ", "
  )}`;
  input.value = "";
  input.focus();
};
function showColors() {
  const result = document.getElementById("colorResult");
  if (colors.length === 0) {
    result.innerHTML = " 🤔 No colors yet. Add some colors";
  } else {
    let colorText = `Colors (${colors.length} total):<br>`;
    for (let i = 0; i < colors.length; i++) {
      colorText += `${i + 1}. ${colors[i]}<br>`;
    }
    result.innerHTML = colorText;
  }
}
document.getElementById("addColorBtn").addEventListener("click", addColors);
document.getElementById("showColorBtn").addEventListener("click", showColors);
