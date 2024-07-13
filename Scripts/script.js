
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
    var cat = document.querySelector;
  
    if (cat.style.display === "block") {
      cat.style.display = "none";
    } else {
      cat.style.display = "block";
    }
  }

  var scrollstart = 0;

  function pagescroll(){
    var scrollvalue = document.body.scrollTop;
    const l_reel = document.querySelector("#l_reel");
    const r_reel = document.querySelector("#r_reel");

    l_reel.style.transform = "translateY(" + scrollvalue + "px)";
    r_reel.style.transform = "translateY(-" + scrollvalue + "px)";

    scrollstart = scrollvalue;
  }




  
  
