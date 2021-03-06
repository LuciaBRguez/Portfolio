document.addEventListener("DOMContentLoaded", function(event) {

    const body = document.querySelector("body");
    const main = document.querySelector("main");

    /* show/hide more work */
    var moreWorks = document.getElementsByClassName("work-project-more");
    let showButton = document.querySelector(".button-work-show");
    let lessButton = document.querySelector(".button-work-less");

    showButton.onclick = showMoreWork;
    lessButton.onclick = showLessWork;

    function showMoreWork() {
        showButton.style.display = "none";
        lessButton.style.display = "none";

        for (var i = 0, length = moreWorks.length; i < length; i ++) {
            showDelay(i);
        }

        if (i == moreWorks.length) {
            setTimeout(function() {
                lessButton.style.display = "block";
            }, 200 * (i+1))
        }

        function showDelay(i) {
            setTimeout(function() {
                moreWorks[i].style.display = "flex";
                moreWorks[i].style.visibility = "visible";
                moreWorks[i].style.transition = "opacity 0.2s ease"
            }, 150 * (i+1))
            setTimeout(function() {
                moreWorks[i].style.opacity = "1";
            }, 200 * (i+1))
        }
    }

    function showLessWork() {
        for (var i = 0, length = moreWorks.length; i < length; i ++) {
            moreWorks[i].style.display = "none";
            moreWorks[i].style.visibility = "hidden";
            moreWorks[i].style.opacity = "0";
        }

        showButton.style.display = "block";
        lessButton.style.display = "none";
    }

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

    /* delete empty text of label */
    var label = document.querySelector("label");
    var emptyText = label.childNodes[3];
    emptyText.textContent = "";

    /* onload */
    window.onload = function uncheck() {
        /* go to the top */
        /*window.scrollTo(0 ,0);*/

        /* uncheck checkbox when reload */
        checkbox.checked = false;

        /* sticky */
        window.onscroll = () => {
            this.scrollY > 20 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
        }
    }
})
