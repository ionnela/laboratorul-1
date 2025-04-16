// Pasul 1 - Detalii personale
document.getElementById("formStep1").addEventListener("submit", function(event) {
  event.preventDefault();

  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  // Validare telefon Moldova: +373 urmat de 68/69/78/79 + 6 cifre
  const phoneRegex = /^\+373(68|69|78|79)\d{6}$/;
  if (!phoneRegex.test(phone)) {
    alert("Numărul de telefon trebuie să fie din Moldova și să înceapă cu +373 urmat de 68, 69, 78 sau 79 și 6 cifre!");
    return;
  }

  // Validare email: trebuie să se termine cu .com
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/;
  if (!emailRegex.test(email)) {
    alert("Emailul trebuie să fie valid și să se termine cu .com!");
    return;
  }

  // Salvăm datele în sessionStorage
  sessionStorage.setItem("firstName", document.getElementById("firstName").value);
  sessionStorage.setItem("lastName", document.getElementById("lastName").value);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("phone", phone);

  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
});

// Pasul 2 - Setează parola
document.getElementById("formStep2").addEventListener("submit", function(event) {
  event.preventDefault();

  const password = document.getElementById("password").value;

  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigitOrSpecial = /[\d!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!hasMinLength || !hasUppercase || !hasDigitOrSpecial) {
    alert("Parola trebuie să aibă:\n- minim 8 caractere\n- cel puțin o literă mare\n- cel puțin o cifră sau un simbol special (!@#$%^&*)");
    return;
  }

  // Salvăm parola în sessionStorage
  sessionStorage.setItem("password", password);

  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
});

// Funcționalitatea butonului de redirecționare
document.getElementById("redirectToLogin").addEventListener("click", function() {
  window.location.href = "../autentificare/autentificare.html";
});

// Preview live reguli parolă
const passwordInput = document.getElementById("password");
if (passwordInput) {
  const lengthRule = document.getElementById("lengthRule");
  const uppercaseRule = document.getElementById("uppercaseRule");
  const specialOrDigitRule = document.getElementById("specialOrDigitRule");

  passwordInput.addEventListener("input", function() {
    const val = passwordInput.value;

    val.length >= 8
      ? lengthRule.classList.add("valid")
      : lengthRule.classList.remove("valid");

    /[A-Z]/.test(val)
      ? uppercaseRule.classList.add("valid")
      : uppercaseRule.classList.remove("valid");

    /[\d!@#$%^&*(),.?":{}|<>]/.test(val)
      ? specialOrDigitRule.classList.add("valid")
      : specialOrDigitRule.classList.remove("valid");
  });
}