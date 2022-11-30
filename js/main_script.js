'use strict';

import langs from "../json/languges.json" assert {type: 'json'};

function megaMenu() {
    let megaMenu = document.querySelector("header .mega-menu");
        megaMenu.classList.toggle("flex-show");
}


document.querySelector(".container .logo-group ul li:last-child a").onclick = megaMenu;
document.querySelector(".menu-icon").onclick = megaMenu;

window.onclick = event =>{
    if(!event.target.matches(".menu-icon") && !event.target.matches("header .container .logo-group> ul> li:last-child a")) {
        let megaMenu = document.querySelector("header .mega-menu");

        if(megaMenu.classList.contains("flex-show"))
            megaMenu.classList.remove("flex-show");
    }
}


// let queryDarkModeBut = document.querySelectorAll(".langs-group label input");
let queryDarkMode = document.getElementById("darkMode");

    // queryDarkModeBut[0].onchange = darkMode;
    // queryDarkModeBut[1].onchange = darkMode;

function darkMode(event) {
    if(!event.target.checked) queryDarkMode.content = "light";
    else queryDarkMode.content = "dark";
}

// let queryLangSelector = document.querySelectorAll(".langs-group select");

    // queryLangSelector[0].onclick = langSelector;
    // queryLangSelector[1].onclick = langSelector;
    
    
    function langSelector(event) {

        switch (event.target.value) {
            case "ar":
                document.body.style.direction = "rtl";
                document.querySelector(".container .logo-group h3").textContent = langs.ROOT.HOME.AR.logo;
                document.querySelector(".container .logo-group ul li:first-child a").textContent = langs.ROOT.HOME.AR.myProjects;
                document.querySelector(".container .logo-group ul li:last-child a").textContent = langs.ROOT.HOME.AR.megaMenu.name;
                queryLangSelector[0][0].textContent = langs.ROOT.HOME.AR.arabic;
                queryLangSelector[0][1].textContent = langs.ROOT.HOME.AR.english;
                queryLangSelector[1][0].textContent = langs.ROOT.HOME.AR.arabic;
                queryLangSelector[1][1].textContent = langs.ROOT.HOME.AR.english;
                document.querySelector(".mega-menu .mega-group ul:first-of-type li:nth-child(1) a").childNodes[2].textContent = langs.ROOT.HOME.AR.megaMenu.motanafeson;
                document.querySelector(".mega-menu .mega-group ul:first-of-type li:nth-child(2) a").childNodes[2].textContent = langs.ROOT.HOME.AR.megaMenu.readAndWriteProject;
                document.querySelector(".mega-menu .mega-group ul:first-of-type li:nth-child(3) a").childNodes[2].textContent = langs.ROOT.HOME.AR.megaMenu.hajjApplecation;
                document.querySelector(".mega-menu .mega-group ul:first-of-type li:nth-child(4) a").childNodes[2].textContent = langs.ROOT.HOME.AR.megaMenu.myDreems;
                document.querySelector(".mega-menu .mega-group ul:last-of-type li:nth-child(1) a").childNodes[2].textContent = langs.ROOT.HOME.AR.megaMenu.motanafeson;
                document.querySelector(".mega-menu .mega-group ul:last-of-type li:nth-child(2) a").childNodes[2].textContent = langs.ROOT.HOME.AR.megaMenu.readAndWriteProject;
                document.querySelector(".mega-menu .mega-group ul:last-of-type li:nth-child(3) a").childNodes[2].textContent = langs.ROOT.HOME.AR.megaMenu.hajjApplecation;
                document.querySelector(".mega-menu .mega-group ul:last-of-type li:nth-child(4) a").childNodes[2].textContent = langs.ROOT.HOME.AR.megaMenu.myDreems;
                    /** Start Slider */
                document.querySelector(".slider .container .text h3").textContent = langs.ROOT.SLIDER.AR.aboutMe
                document.querySelector(".slider .container .text p").childNodes[0].textContent = langs.ROOT.SLIDER.AR.fristLine
                document.querySelector(".slider .container .text p").childNodes[2].textContent = langs.ROOT.SLIDER.AR.socendLine
                document.querySelector(".slider .container .text p").childNodes[4].textContent = langs.ROOT.SLIDER.AR.therdLine
                    /** End Slider */

                break;
                
                case "en":
                document.body.style.direction = "ltr";
                document.querySelector(".container .logo-group h3").textContent = langs.ROOT.HOME.EN.logo;
                document.querySelector(".container .logo-group ul li:first-child a").textContent = langs.ROOT.HOME.EN.myProjects;
                document.querySelector(".container .logo-group ul li:last-child a").textContent = langs.ROOT.HOME.EN.megaMenu.name;
                queryLangSelector[0][0].textContent = langs.ROOT.HOME.EN.arabic;
                queryLangSelector[0][1].textContent = langs.ROOT.HOME.EN.english;
                queryLangSelector[1][0].textContent = langs.ROOT.HOME.EN.arabic;
                queryLangSelector[1][1].textContent = langs.ROOT.HOME.EN.english;
                document.querySelector(".mega-menu .mega-group ul:first-of-type li:nth-child(1) a").childNodes[2].textContent = langs.ROOT.HOME.EN.megaMenu.motanafeson;
                document.querySelector(".mega-menu .mega-group ul:first-of-type li:nth-child(2) a").childNodes[2].textContent = langs.ROOT.HOME.EN.megaMenu.readAndWriteProject;
                document.querySelector(".mega-menu .mega-group ul:first-of-type li:nth-child(3) a").childNodes[2].textContent = langs.ROOT.HOME.EN.megaMenu.hajjApplecation;
                document.querySelector(".mega-menu .mega-group ul:first-of-type li:nth-child(4) a").childNodes[2].textContent = langs.ROOT.HOME.EN.megaMenu.myDreems;
                document.querySelector(".mega-menu .mega-group ul:last-of-type li:nth-child(1) a").childNodes[2].textContent = langs.ROOT.HOME.EN.megaMenu.motanafeson;
                document.querySelector(".mega-menu .mega-group ul:last-of-type li:nth-child(2) a").childNodes[2].textContent = langs.ROOT.HOME.EN.megaMenu.readAndWriteProject;
                document.querySelector(".mega-menu .mega-group ul:last-of-type li:nth-child(3) a").childNodes[2].textContent = langs.ROOT.HOME.EN.megaMenu.hajjApplecation;
                document.querySelector(".mega-menu .mega-group ul:last-of-type li:nth-child(4) a").childNodes[2].textContent = langs.ROOT.HOME.EN.megaMenu.myDreems;
                    /** Start Slider */
                document.querySelector(".slider .container .text h3").textContent = langs.ROOT.SLIDER.EN.aboutMe
                document.querySelector(".slider .container .text p").childNodes[0].textContent = langs.ROOT.SLIDER.EN.fristLine
                document.querySelector(".slider .container .text p").childNodes[2].textContent = langs.ROOT.SLIDER.EN.socendLine
                document.querySelector(".slider .container .text p").childNodes[4].textContent = langs.ROOT.SLIDER.EN.therdLine
                    /** End Slider */
                    
                break;
        }
        
    
    }

    let stoped = true;
    document.body.onscroll = function() {

        if(window.scrollY > 400) {
            document.querySelector(".up").classList.add("up-arrow-show");
        } else {
            document.querySelector(".up").classList.remove("up-arrow-show");
        }

        if(window.scrollY >= document.querySelector(".statistics").offsetTop) {
            
            if(stoped) {
            document.querySelectorAll(".statistics .box h1").forEach(el =>{
                let count = setInterval(()=>{
                            el.textContent++
                        if(el.textContent == el.dataset.grad) {
                            clearInterval(count)
                        }
                    },100)
            });
         }
         stoped = false;
        }
    }
