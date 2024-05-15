// Datos de usuarios
var users = [
{ username: "SUP", password: "1234", alias: "Supervisor@"},
{ username: "M1B", password: "Matutino", alias: "Coordinador@ Matutino 1 Balderas"},
{ username: "M2B", password: "Matutino", alias: "Coordinador@ Matutino 2 Balderas"},
{ username: "V1B", password: "Velada", alias: "Coordinador@ Velada 1 Balderas"},
{ username: "V2B", password: "Velada", alias: "Coordinador@ Velada 2 Balderas"},
{ username: "M1C5", password: "Matutino", alias: "Coordinador@ Matutino 1 C5"},
{ username: "M2C5", password: "Matutino", alias: "Coordinador@ Matutino 2 C5"},
{ username: "V1C5", password: "Velada", alias: "Coordinador@ Velada 1 C5"},
{ username: "V2C5", password: "Velada", alias: "Coordinador@ Velada 2 C5"},
];


// Función para verificar el login
function checkLogin() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
    // Si el login es correcto, redirecciona a la página de bienvenida
    window.location.href = "bienvenida.html?username=" + users[i].alias;
    return;
    }
}
alert("Usuario o contraseña incorrectos");
}


// Función para cerrar sesión
function logout() {
window.location.href = "index.html";
}


