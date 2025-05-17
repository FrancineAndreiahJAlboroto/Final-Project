if (document.getElementById("login")) {
  document.getElementById("login").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const support = document.getElementById("support");
    const sexOptions = document.getElementsByName("sex");

    if (firstName.value === "") {
      document.getElementById("error-firstName").textContent = "required";
      isValid = false;
    }

    if (lastName.value === "") {
      document.getElementById("error-lastName").textContent = "required";
      isValid = false;
    }

    if (email.value === "") {
      document.getElementById("error-email").textContent = "required";
      isValid = false;
    }

    if (password.value === "") {
      document.getElementById("error-password").textContent = "required";
      isValid = false;
    }

    if (support.value === "") {
      document.getElementById("error-support").textContent = "required";
      isValid = false;
    }

    let sexSelected = "";
    for (let option of sexOptions) {
      if (option.checked) {
        sexSelected = option.value;
        break;
      }
    }

    if (!sexSelected) {
      document.getElementById("error-sex").textContent = "required";
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("firstName", firstName.value);
      localStorage.setItem("lastName", lastName.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("sex", sexSelected);
      localStorage.setItem("support", support.value);

      window.location.href = "proj_profile_ALBOROTO.html";
    }
  });
}

if (document.getElementById("displayFirstName")) {
  document.getElementById("displayFirstName").textContent = localStorage.getItem("firstName") || "";

  document.getElementById("displayLastName").textContent = localStorage.getItem("lastName") || "";

  document.getElementById("displayEmail").textContent = localStorage.getItem("email") || "";

  document.getElementById("displaySex").textContent = localStorage.getItem("sex") || "";

  document.getElementById("displaySupport").textContent = localStorage.getItem("support") || "";
}
