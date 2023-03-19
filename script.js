
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
