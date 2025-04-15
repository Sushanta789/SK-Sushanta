function loadSettings() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      document.getElementById("userId").value = user.userId;  // Display User ID
      document.getElementById("email").value = user.email;    // Display current email
    }
  }

  function saveChanges(event) {
    event.preventDefault();
    
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      // Get updated values from the form
      const newName = document.getElementById("newName").value.trim() || user.name;
      const newMobile = document.getElementById("newMobile").value.trim() || user.mobile;
      const newEmail = document.getElementById("email").value.trim() || user.email;

      // Regenerate User ID based on the updated values
      const updatedUserId = (newName.slice(0, 3) + newMobile.slice(-3) + newEmail.slice(0, 3)).toLowerCase();
      
      // Update the user object with new details
      user.name = newName;
      user.mobile = newMobile;
      user.email = newEmail;
      user.userId = updatedUserId;  // Update User ID

      // Save the updated user data back to localStorage
      localStorage.setItem("userData", JSON.stringify(user));

      // Update the User ID field
      document.getElementById("userId").value = updatedUserId;

      alert("Profile updated successfully!");
    }
  }

  // Load settings when the page loads
  window.onload = loadSettings;