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
    /* add animation to image gallery to disappear and reappear*/
    if (tabName == "photography" ){
        var gallery = document.getElementsByClassName("img-gallery")[0];
        gallery.classList.add("img-gallery-animation-1");
        setTimeout(function () {
            gallery.classList.remove("img-gallery-animation-1");
        }, 1000);
    }
    else if (tabName == "drawing"){
        var gallery = document.getElementsByClassName("img-gallery")[1];
        gallery.classList.add("img-gallery-animation-2");
        setTimeout(function () {
            gallery.classList.remove("img-gallery-animation-2");
        }, 1000);
    }

}

/* set default tab to photography*/
document.getElementsByClassName("tablinks")[0].click();

/*click on image to put it to big-img*/
var img = document.getElementsByTagName("img");
var big_img = document.getElementById("big-img");

for (i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function () {
        big_img.getElementsByTagName("img")[0].src = this.src;
        big_img.style.display = "block";
    });
}

/*close big-img if clicked outside big-img*/
window.addEventListener("click", function (e) {
    console.log(e.target);
    /* close big-img if clicked outside big-img or img inside big-img*/
    if(big_img.style.display == "block" && e.target==body || e.target==tabs || e.target==tablinks[0] || e.target==tablinks[1] || e.target == big_img.getElementsByTagName("i")[0] || e.target == this.document.getElementsByTagName("h1")[0]){
        big_img.style.display = "none";
        console.log("close");
    }
});
