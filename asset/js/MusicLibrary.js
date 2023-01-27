

/*Onload set style */
function setStyleForHiddenElement() {
    document.getElementById("js-menu-sidebar").style.visibility = "hidden";
    document.getElementById("js-menu-sidebar").style.opacity = 0;
    document.getElementById("js-queue-sidebar").style.visibility = "hidden";
    document.getElementById("js-queue-sidebar").style.opacity = 0;

    document.getElementById("js-expand-artist").style.maxHeight = "0px";
    document.getElementById("js-expand-album").style.maxHeight = "0px";
    document.getElementById("js-expand-tag").style.maxHeight = "0px";
    document.getElementById("js-expand-category").style.maxHeight = "0px";
}
/*Sidebar toggle */
function menuSideBarToggle() {
    var x = document.getElementById("js-menu-sidebar");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.opacity = 1;
    } else {
        x.style.visibility = "hidden";
        x.style.opacity = 0;
    }
}

/*Sidebar toggle */
function randomSideBarToggle() {
    var x = document.getElementById("js-random-sidebar");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.opacity = 1;
    } else {
        x.style.visibility = "hidden";
        x.style.opacity = 0;
    }
}

function queueSideBarToggle() {
    var x = document.getElementById("js-queue-sidebar");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.opacity = 1;
    } else {
        x.style.visibility = "hidden";
        x.style.opacity = 0;
    }
}
/*Expand T-A-A*/
function expandArtist() {
    var x = document.getElementById("js-expand-artist");
    if (x.style.maxHeight === "0px") {
        x.style.maxHeight = "6000px";
        document.getElementById("js-btn-expand-artist").style.transform = "rotate(180deg)";
    } else {
        x.style.maxHeight = "0px";
        document.getElementById("js-btn-expand-artist").style.transform = "rotate(0deg)";
    }
}

function expandAlbum() {
    var x = document.getElementById("js-expand-album");
    if (x.style.maxHeight === "0px") {
        x.style.maxHeight = "6000px";
        document.getElementById("js-btn-expand-album").style.transform = "rotate(180deg)";
    } else {
        x.style.maxHeight = "0px";
        document.getElementById("js-btn-expand-album").style.transform = "rotate(0deg)";
    }
}

function expandTag() {
    var x = document.getElementById("js-expand-tag");
    if (x.style.maxHeight === "0px") {
        x.style.maxHeight = "6000px";
        document.getElementById("js-btn-expand-tag").style.transform = "rotate(180deg)";
    } else {
        x.style.maxHeight = "0px";
        document.getElementById("js-btn-expand-tag").style.transform = "rotate(0deg)";
    }
}
function expandCategory() {
    var x = document.getElementById("js-expand-category");
    if (x.style.maxHeight === "0px") {
        x.style.maxHeight = "6000px";
        document.getElementById("js-btn-expand-category").style.transform = "rotate(180deg)";
    } else {
        x.style.maxHeight = "0px";
        document.getElementById("js-btn-expand-category").style.transform = "rotate(0deg)";
    }
}