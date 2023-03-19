//add cursor functionality
var cursor = document.getElementById("cursor");

cursor_width = 16;
document.addEventListener("mousemove", function (e) {
    x = e.clientX - cursor_width;
    y = e.clientY - cursor_width;
    cursor.style.transform = " translate3d(" + x + "px," + y + "px,0)";
});

/*dark mode*/
var body = document.getElementsByTagName("body")[0];

var bg_ball1 = document.getElementById("bg-ball1");
var bg_ball2 = document.getElementById("bg-ball2");
var cursor_dot = document.getElementById("cursor-dot");
var tablinks = document.getElementsByClassName("tablinks");
var tabs = document.getElementsByClassName("tabs");
var active_tab = document.getElementsByClassName("active");
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode 
    body.classList.add("body-dark");
    bg_ball1.classList.add("bg-ball1-dark");
    bg_ball2.classList.add("bg-ball2-dark");
    cursor.classList.add("cursor-dark");
    cursor_dot.classList.add("cursor-dot-dark");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.add("tablinks-dark");
    }
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.add("tabs-dark");
    }
    for (i = 0; i < active_tab.length; i++) {
        active_tab[i].classList.add("active-dark");
    }
    //dark mode image change
    dark_state = true;

}

/*tablinks*/
function openTab(evt, tabName) {
    var tab_open = document.getElementById(tabName);
    var tablinks = document.getElementsByClassName("tablinks");



    /*turn all other tabs off*/
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tab_open.style.display = "block";

    if (dark_state) {
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active-dark");
        }
        evt.currentTarget.classList.add("active-dark");
    } else {
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        evt.currentTarget.classList.add("active");
    }
}