document.addEventListener("DOMContentLoaded", function(event) {

    window.onscroll = () => {
        this.scrollY > 20 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
    }

    const body = document.querySelector("body");
    const main = document.querySelector("main");


    /* navigation */
    const nav = document.querySelector(".nav");
    const navList = document.querySelector(".nav-list");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");

    menuBtn.onclick = () => {
        body.classList.add("disable-scroll");
        main.classList.add("blur");
        navList.classList.add("active");
        menuBtn.classList.add("hide");
        cancelBtn.classList.add("show");
        navList.classList.add("scroll");
    }

    cancelBtn.onclick = () => {
        body.classList.remove("disable-scroll");
        main.classList.remove("blur");
        navList.classList.remove("active");
        menuBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        navList.classList.remove("scroll");
    }


    /* work */
    let moreWork = document.querySelector(".work-project-more");
    let showButton = document.querySelector(".button-work-show");
    let lessButton = document.querySelector(".button-work-less");

    function showMoreWork() {
        moreWork.style.display = "block";
        showButton.style.display = "none";
        lessButton.style.display = "block";
    }

    function showLessWork() {
        moreWork.style.display = "none";
        showButton.style.display = "block";
        lessButton.style.display = "none";
    }


    /* change theme */
    var checkbox = document.querySelector('input[name=theme]');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            trans()
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'light')
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    }

    /* uncheck checkbox when reload */
    window.onload = function uncheck() {
        checkbox.checked = false;

        /* delete empty text of label */
        var label = document.querySelector("label");
        var emptyText = label.childNodes[3];
        emptyText.textContent = "";
    }
})

