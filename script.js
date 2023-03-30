
// add navbar tab functionality
navitems=document.getElementsByClassName("nav-item");
for(i=0;i<navitems.length-2;i++){
    console.log(navitems[i]);
    navitems[i].addEventListener("click",function(){
        for(j=0;j<navitems.length;j++){
            //set all other desktop to display none
            dot=navitems[j].getElementsByClassName("active-dot")[0];
            if(dot!=undefined){
            dot.remove();}
        }
        //set this desktop to display flex
        dot=document.createElement("div");
        dot.className="active-dot";
        this.appendChild(dot);

    });
}


//add cursor functionality
var cursor = document.getElementById("cursor");

cursor_width = 16;
document.addEventListener("mousemove",function(e){
        x=e.clientX-cursor_width;
        y=e.clientY-cursor_width;
    cursor.style.transform = " translate3d("+x+"px,"+y+"px,0)";
});


//add navbar hover for cursor
var navbar=document.getElementsByClassName("navbar")[0];
navbar.addEventListener("mouseover",function(){
    cursor.style.width="42px";
    cursor.style.height="42px";
}
);
navbar.addEventListener("mouseout",function(){
    cursor.style.width="32px";
    cursor.style.height="32px";
}
);


//adding dark mode
var dark_state=false;


//dark mode body
var body=document.getElementsByTagName("body")[0];
var darkmode=document.getElementById("darkmode");
var darkmode_img=document.getElementById("darkmode-img");
var bg_ball1=document.getElementById("bg-ball1");
var bg_ball2=document.getElementById("bg-ball2");
var cursor_dot=document.getElementById("cursor-dot");
var content_header=document.getElementsByClassName("content-header");
var project_card=document.getElementsByClassName("project-card");
var project_card_title=document.getElementsByClassName("project-card-title");
var project_card_desc=document.getElementsByClassName("project-card-description");
var literature_card=document.getElementsByClassName("literature-card");
var hobbies_card=document.getElementsByClassName("hobbies-card");
//initial dark mode if dark mode is enabled in browser
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode 
    body.classList.add("body-dark");
    navbar.classList.add("navbar-dark");
    home.classList.add("home-dark");
    bg_ball1.classList.add("bg-ball1-dark");
    bg_ball2.classList.add("bg-ball2-dark");
    cursor.classList.add("cursor-dark");
    cursor_dot.classList.add("cursor-dot-dark");
    for(i=0;i<content_header.length;i++){
        content_header[i].classList.add("content-header-dark");
    }
    for(i=0;i<project_card.length;i++){
        project_card[i].classList.add("project-card-dark");
    }
    for(i=0;i<project_card_title.length;i++){
        project_card_title[i].classList.add("project-card-title-dark");
    }
    for(i=0;i<project_card_desc.length;i++){
        project_card_desc[i].classList.add("project-card-description-dark");
    }
    for(i=0;i<literature_card.length;i++){
        literature_card[i].classList.add("literature-card-dark");
    }
    for(i=0;i<hobbies_card.length;i++){
        hobbies_card[i].classList.add("hobbies-card-dark");
    }
    //dark mode image change
    darkmode_img.src="icons/icons8-summer-96 (1).png";
    dark_state=true;
  
}
darkmode.addEventListener("click",function(){
    if(dark_state){
        body.classList.remove("body-dark");
        navbar.classList.remove("navbar-dark");
        home.classList.remove("home-dark");
        bg_ball1.classList.remove("bg-ball1-dark");
        bg_ball2.classList.remove("bg-ball2-dark");
        cursor.classList.remove("cursor-dark");
        cursor_dot.classList.remove("cursor-dot-dark");
        for(i=0;i<content_header.length;i++){
            content_header[i].classList.remove("content-header-dark");
        }
        for(i=0;i<project_card.length;i++){
            project_card[i].classList.remove("project-card-dark");
        }
        for(i=0;i<project_card_title.length;i++){
            project_card_title[i].classList.remove("project-card-title-dark");
        }
        for(i=0;i<project_card_desc.length;i++){
            project_card_desc[i].classList.remove("project-card-description-dark");
        }
        for(i=0;i<literature_card.length;i++){
            literature_card[i].classList.remove("literature-card-dark");
        }
        for(i=0;i<hobbies_card.length;i++){
            hobbies_card[i].classList.remove("hobbies-card-dark");
        }
        //dark mode image change
        darkmode_img.src="icons/icons8-moon-and-stars-96 (1).png";
        dark_state=false;
    }
    else{
        body.classList.add("body-dark");
        navbar.classList.add("navbar-dark");
        home.classList.add("home-dark");
        bg_ball1.classList.add("bg-ball1-dark");
        bg_ball2.classList.add("bg-ball2-dark");
        cursor.classList.add("cursor-dark");
        cursor_dot.classList.add("cursor-dot-dark");
        for(i=0;i<content_header.length;i++){
            content_header[i].classList.add("content-header-dark");
        }
        for(i=0;i<project_card.length;i++){
            project_card[i].classList.add("project-card-dark");
        }
        for(i=0;i<project_card_title.length;i++){
            project_card_title[i].classList.add("project-card-title-dark");
        }
        for(i=0;i<project_card_desc.length;i++){
            project_card_desc[i].classList.add("project-card-description-dark");
        }
        for(i=0;i<literature_card.length;i++){
            literature_card[i].classList.add("literature-card-dark");
        }
        for(i=0;i<hobbies_card.length;i++){
            hobbies_card[i].classList.add("hobbies-card-dark");
        }
        //dark mode image change
        darkmode_img.src="icons/icons8-summer-96 (1).png";
        dark_state=true;
    }
});



//adding project cards
var project_cards=document.getElementById("project-cards");

/* Projects data */
var projects = [
    {
        title: "ChelseaJS",
        cardImage: "./images/ChelseaJS_banner.webp",
        description: "A JavaScript library for building amazing SVG illustrations and animations.",
        Preview: "https://prakrisht.me/ChelseaJS-docs/",
    },
    {
        title: "Sidus",
        cardImage: "./images/Main Light (5).webp",
        description: "A Simple, Intuitive and Fast Maths Plotter.",
        Preview: "https://prakrisht.me/Sidus/",
    },
    {
        title: "Periodica",
        cardImage: "./images/Periodica_banner.webp",
        description: "A Beautiful Periodic Table of Elements.",
        Preview: "https://periodic-table-navy.vercel.app/",
    },
    {
        title: "Project-G",
        cardImage: "./images/project G (1).webp",
        description: "SVG Graphing library that will make you and your audience fall in love with your visuals.",
        Preview: "https://prakrisht.me/Project-G-docs/",
    },
    {
        title: "fancy-input",
        cardImage: "./images/fancy_input_banner.png",
        description: "fancy_input is a WIP library. Just an HTML tag to light up your webpage. Amazing input animations and customizations for your sad default input boxes",
        Preview: "https://prakrisht.me/fancy-input/",
    },
    {
        title: "Sidus Initiative",
        cardImage: "./images/Sidus.webp",
        description: "A Bigger Picture of the Sidus Ecosystem where we aim to make learning simpler, more intuitive, more fun, and more accessible to everyone.",
        Preview: "https://prakrisht.me/Sidus-Home/",
    },
];

projects.forEach(function (project, index) {
    var project_card = document.createElement("div");
    project_card.classList.add("project-card");
    project_card.style.animationDelay = "0." + index + "s";
    var project_card_img = document.createElement("img");
    project_card_img.classList.add("project-card-img");
    project_card_img.src = project.cardImage;
    project_card_img.alt = project.title;
    var project_card_title = document.createElement("h1");
    project_card_title.classList.add("project-card-title");
    project_card_title.innerHTML = project.title;
    var project_card_desc = document.createElement("p");
    project_card_desc.classList.add("project-card-description");
    project_card_desc.innerHTML = project.description;    

    project_card.appendChild(project_card_img);
    project_card.appendChild(project_card_title);
    project_card.appendChild(project_card_desc);
    project_card.onclick = function () {
        window.open(project.Preview, "_blank");
    };
    project_cards.appendChild(project_card);
});

