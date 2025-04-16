// Verificăm dacă utilizatorul este deja autentificat
if (sessionStorage.getItem("isAuthenticated") === "true") {
    window.location.href = "../continut/text.html";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Verificăm datele în sessionStorage
    const savedEmail = sessionStorage.getItem("email");
    const savedPassword = sessionStorage.getItem("password");

    // Verificăm datele în config.js
    const isUser1 = email === env.USER1_EMAIL && password === env.USER1_PASSWORD;
    const isUser2 = email === env.USER2_EMAIL && password === env.USER2_PASSWORD;

    if ((email === savedEmail && password === savedPassword) || isUser1 || isUser2) {
        // Setăm starea de autentificare
        sessionStorage.setItem("isAuthenticated", "true");
        // Redirecționare către pagina principală
        window.location.href = "../continut/text.html";
    } else {
        alert("Email sau parolă incorectă! Vă rugăm să încercați din nou.");
    }
});