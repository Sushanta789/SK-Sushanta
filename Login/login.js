function login(e) {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("userData"));
    const inputId = document.getElementById("userId").value.trim();
    const inputPass = document.getElementById("password").value.trim();

    if (stored && stored.userId === inputId && stored.password === inputPass) {
      localStorage.setItem("loggedIn", "true");
      alert("Login successful!");
      window.location.href = "/Hme/home.html";
    } else {
      alert("Invalid credentials");
    }
  }