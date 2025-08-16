function precargarPreferencias() {
  const color = localStorage.getItem("panelColor");
  if (color) {
    const panel = document.getElementById("panel-color");
    if (panel) panel.style.backgroundColor = color;
    const picker = document.getElementById("color-picker");
    if (picker) picker.value = color;
  }
}