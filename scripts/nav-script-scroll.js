$(document).ready(function () {
  var home = 0;
  var summary = 0;
  var education = 0;
  var skills = 0;
  var projects = 0;
  var experience = 0;
  var links = document.querySelectorAll(".link");

  function setScrollHeights(width) {
    if (width <= 1000) {
      home = -100;
    } else {
      home = -200;
    }

    summary = home + $("#home").height();
    education = summary + $("#summary").height();
    skills = education + $("#education").height();
    projects = skills + $("#skills").height();
    experience = projects + $("#projects").height() - 100;

    if (width <= 1000) {
      experience -= 0;
    } else {
      experience -= 100;
    }
  }

  setScrollHeights(window.outerWidth);

  $(window).resize(function () {
    setScrollHeights(window.outerWidth);
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= home) {
      links.forEach((item) => {
        item.style.color = "#000000";
        item.style.color = "inherit";
        item.style.textDecoration = "none";
      });
      document.getElementById("home-link").style.color = "#13aff0";
      document.getElementById("home-link").style.textDecoration = "underline";
    }
    if (scroll >= summary) {
      links.forEach((item) => {
        item.style.color = "#000000";
        item.style.color = "inherit";
        item.style.textDecoration = "none";
      });
      document.getElementById("summary-link").style.color = "#13aff0";
      document.getElementById("summary-link").style.textDecoration =
        "underline";
    }
    if (scroll >= education) {
      links.forEach((item) => {
        item.style.color = "#000000";
        item.style.color = "inherit";
        item.style.textDecoration = "none";
      });
      document.getElementById("education-link").style.color = "#13aff0";
      document.getElementById("education-link").style.textDecoration =
        "underline";
    }
    if (scroll >= skills) {
      links.forEach((item) => {
        item.style.color = "#000000";
        item.style.color = "inherit";
        item.style.textDecoration = "none";
      });
      document.getElementById("skills-link").style.color = "#13aff0";
      document.getElementById("skills-link").style.textDecoration = "underline";
    }
    if (scroll >= projects) {
      links.forEach((item) => {
        item.style.color = "#000000";
        item.style.color = "inherit";
        item.style.textDecoration = "none";
      });
      document.getElementById("projects-link").style.color = "#13aff0";
      document.getElementById("projects-link").style.textDecoration =
        "underline";
    }
    if (scroll >= experience) {
      links.forEach((item) => {
        item.style.color = "#000000";
        item.style.color = "inherit";
        item.style.textDecoration = "none";
      });
      document.getElementById("experience-link").style.color = "#13aff0";
      document.getElementById("experience-link").style.textDecoration =
        "underline";
    }
  });
});
