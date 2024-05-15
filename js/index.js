function cambiarMenuPrincipal() {
    if (document.getElementById("header").className == "header-default") {
      document.getElementById("header").className = "header-activo";
      document.getElementById("body-contenido").className = "body-activo";
    } else {
      document.getElementById("header").className = "header-default";
      document.getElementById("body-contenido").className = "";
    }
  }
  document.getElementById("toggle-menu").onclick = cambiarMenuPrincipal;