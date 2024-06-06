//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    /* var logo = document.getElementById("rss-logo"); */
  
    if (menu.style.display === "block" /* &&  logo.style.display === "none" */) {
      menu.style.display = "none";
      /*logo.style.display = "block";*/
    } else {
      menu.style.display = "block";
      /* logo.style.display = "none"; */
    }
  }


  function category() {
    var cat = document.getElementById("category");
  
    if (cat.style.display === "block") {
      cat.style.display = "none";
    } else {
      cat.style.display = "block";
    }
  }