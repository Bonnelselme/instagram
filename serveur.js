// ==================== MENU TOGGLE ====================
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("open-menu");
  menuIcon.classList.toggle("move");
});

// Fermer le menu lors du scroll
window.addEventListener("scroll", () => {
  navbar.classList.remove("open-menu");
  menuIcon.classList.remove("move");
});

// ==================== SWIPER REVIEWS ====================
const initSwiper = () => {
  new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

// ==================== EMAIL JS CONFIGURATION ====================
const configureEmailJS = () => {
  emailjs.init("jwKDYVXzXxCDYNVoH"); // Votre User ID EmailJS

  const showAlert = (title, text, icon) => {
    swal({
      title,
      text,
      icon,
    });
  };

  const sendFormData = (formData) => {
    emailjs.send("service_rehqh6s", "template_7f3toss", formData).then(
      () =>
        showAlert("Message envoyé", "Nous vous répondrons sous 24h", "success"),
      (error) => {
        console.error("Erreur d'envoi:", error);
        showAlert("Erreur", "L'envoi a échoué", "error");
      }
    );
  };

  const validateForm = () => {
    const form = document.querySelector(".contact-form");
    const name = document.querySelector(".name");
    const email = document.querySelector(".email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!name.value || !email.value || !message.value) {
        showAlert(
          "Champs manquants",
          "Veuillez remplir tous les champs",
          "error"
        );
        return;
      }

      sendFormData({
        from_name: name.value,
        from_email: email.value,
        message: message.value,
        to_email: "bonnelselme16@gmail.com", // Votre email de réception
        date: new Date().toLocaleString("fr-FR"),
      });
    });
  };

  validateForm();
};

// ==================== HEADER EFFECTS ====================
const setupHeaderEffects = () => {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
  });
};

// ==================== SCROLL TOP BUTTON ====================
const setupScrollTop = () => {
  const scrollTopBtn = document.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("scroll-active", window.scrollY >= 400);
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  initSwiper();
  configureEmailJS();
  setupHeaderEffects();
  setupScrollTop();
});
