function scrollFunct(navItem, id) {
  var links = document.querySelectorAll(".link");
  /*links.forEach((item) => {
    item.style.color = "#000000";
  });
  links.forEach((item) => {
    item.style.color = "inherit";
  });
  navItem.style.color = "#13aff0";*/

  var element = document.getElementById(id);
  const offset = document
    .getElementById("nav-bar")
    .getBoundingClientRect().height;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

/*
var scrollFunct = function(id){
    console.log(id);
    var my_element = document.getElementById(id);

    my_element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}
*/
/*
var scrollFunct = function(id){
    console.log(id);
    document.getElementById(id).scrollIntoView(true, {behavior: "smooth"});
    window.scrollBy(0,-60);
}
*/
/*
$('.smooth-goto').on('click', function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 60}, 1000);
});
*/
/*
[REMOVE smooth scroll for this]
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
*/
