const txt = "Welcome to My Website — S.K Sushanta";
  let i = 0;

  // Typing effect
  function typeText() {
    if (i < txt.length) {
      document.getElementById("autoType").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeText, 80);
    }
  }

  // Load user data from localStorage
  function loadUser() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      // Set the profile card details
      document.getElementById("profilePic").src = user.profilePic || "https://via.placeholder.com/120"; // Default image if none exists
      
      user.profilePic
      document.getElementById("userName").innerText = user.name;
      document.getElementById("userEmail").innerText = "Email: " + user.email;
      document.getElementById("userId").innerText = "User ID: " + user.userId;
    }
  }

  // Logout functionality
  function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  }

  window.onload = () => {
    typeText();   // Start typing animation
    loadUser();   // Load user data from localStorage
  };