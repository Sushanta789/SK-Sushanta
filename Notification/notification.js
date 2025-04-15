function loadNotifications() {
    const notifications = [
      "Meeting at 10 AM today.",
      "Don't forget to submit your assignment by 5 PM.",
      "Reminder: Your profile needs an update."
    ];
    const notificationContainer = document.getElementById("notifications");
    notifications.forEach((msg, index) => {
      const notificationDiv = document.createElement("div");
      notificationDiv.classList.add("notification");
      notificationDiv.innerText = msg;
      notificationContainer.appendChild(notificationDiv);
    });
  }

  window.onload = loadNotifications;