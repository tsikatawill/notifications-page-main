const initApp = () => {
  const notificationCount = document.querySelector(".notification-count");
  const readToggle = document.querySelector(".mark-read");
  const notificationCards = document.querySelectorAll(".notification-card");

  const toggleAllRead = () => {
    notificationCards.forEach((card) => {
      if (card.classList.contains("unread")) {
        card.classList.remove("unread");
      }
      notificationCount.style.display = "none";
    });
  };

  readToggle.addEventListener("click", toggleAllRead);
};

document.addEventListener("DOMContentLoaded", initApp);
