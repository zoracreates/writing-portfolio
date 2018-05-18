function toggleNav(x) {
    x.classList.toggle("change");
    var nav = document.getElementById("main-menu");
    if (nav.className === "top-nav") {
        nav.className += " responsive";
    } else {
        nav.className = "top-nav";
    }
}