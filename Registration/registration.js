function generateUserId(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const fileInput = document.getElementById("profilePic");

    const userId = (name.slice(0, 3) + mobile.slice(-3) + email.slice(0, 3)).toLowerCase();

    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageBase64 = e.target.result;

        const userData = { name, mobile, email, password, userId, profilePic: imageBase64 };
        localStorage.setItem("userData", JSON.stringify(userData));

        document.getElementById("userId").value = userId;
        alert("Registration successful with image! User ID: " + userId);
      };
      reader.readAsDataURL(fileInput.files[0]);
    } else {
      // If no image is uploaded
      const userData = { name, mobile, email, password, userId, profilePic: "" };
      localStorage.setItem("userData", JSON.stringify(userData));
      document.getElementById("userId").value = userId;
      alert("Registration successful! User ID: " + userId);
    }
  }