function precargarPreferencias() {
  const color = localStorage.getItem("panelColor");
  if (color) {
    const panel = document.getElementById("panel-color");
    if (panel) panel.style.backgroundColor = color;
    const picker = document.getElementById("color-picker");
    if (picker) picker.value = color;
  }
  const raw = localStorage.getItem("formContacto");
  if (raw) {
    try {
      const data = JSON.parse(raw);
      if (data.nombre) document.getElementById("nombre").value = data.nombre;
      if (data.correo) document.getElementById("correo").value = data.correo;
      if (data.mensaje) document.getElementById("mensaje").value = data.mensaje;
    } catch {}
  }
}

document.addEventListener("DOMContentLoaded", () => {
  precargarPreferencias();


  const btnBienvenida = document.getElementById("btn-bienvenida");
  if (btnBienvenida) {
    btnBienvenida.addEventListener("click", () => alert("¡Bienvenido!"));
  }


  const btnCambiarP = document.getElementById("btn-cambiar-parrafo");
  if (btnCambiarP) {
    btnCambiarP.addEventListener("click", () => {
      document.getElementById("bio-paragraph").textContent =
        "Contenido actualizado: apasionado por QA.";
    });
  }

   const btnAplicarColor = document.getElementById("btn-aplicar-color");
  if (btnAplicarColor) {
    btnAplicarColor.addEventListener("click", () => {
      const color = document.getElementById("color-picker").value || "#e8f0fe";
      document.getElementById("panel-color").style.backgroundColor = color;
      localStorage.setItem("panelColor", color);
    });
  }

  $(function(){
  $("#btn-llamar-api").on("click", function(){
    $("#api-resultado").addClass("d-none");
    $("#api-error").addClass("d-none");

    $.ajax({
      method: "GET",
      url: "https://s1uplfovq4.execute-api.us-east-1.amazonaws.com/default/example",
      dataType: "json",
      timeout: 10000
    }).done(function(res){
      const msg = res?.mensaje || res?.message || JSON.stringify(res);
      $("#api-mensaje").text(msg || "Sin mensaje.");
      $("#api-resultado").removeClass("d-none");
    }).fail(function(_, status){
      $("#api-error").removeClass("d-none").find(".alert-danger").append(` (${status})`);
    });
  });
});
})
