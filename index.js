const images =["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg",
    "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10"];

function leftButton() {
    let k = document.getElementById("k");
    console.log(k.src);
    if(k.src === images[0]) {
        k.src = images[1];
    }
    else if(k.src === images[1]) {
        k.src = images[2];
    }
    else {
        k.src = images[0];
    }
}
function rightButton() {
    let k = document.getElementById("k");
    console.log(k.src);
    if(k.src === images[2]) {
        k.src = images[1];
    }
    else if(k.src === images[1]) {
        k.src = images[0];
    }
    else {
        k.src = images[2];
    }
}
function APCSP() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-principles", "_blank");
}
function APCSA(){
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-a", "_blank");
}
function first(){
    window.location.href="#first";
}

function APP(){
    window.location.href="#APCSP";
}
function APA(){
    window.location.href="#APCSA";
}
function Honors(){
    window.location.href="#Honors";
}
function Capstone(){
    window.location.href="#Capstone";
}
function discrete(){
    window.location.href="#discrete";
}

function courses(){
    let k = document.getElementById("showCourses");
    window.location.href="#courses";
    console.log(k.style.display);
    if (k.style.display === "block"){
        k.style.display = "none";
    }
    else {
        k.style.display = "block";
    }
}
function Clubs(){
    let k = document.getElementById("showClubs");
    window.location.href="#extra";
    console.log(k.style.display);
    if (k.style.display === "block"){
        k.style.display = "none";
    }
    else {
        k.style.display = "block";
    }
}

function robot(){
    window.location.href="#robot";
}
function cyber(){
    window.location.href="#cyber";
}
function ACSL(){
    window.location.href="#ACSL";
}
function CIMA(){
    window.location.href="#CIMA";
}

function colleges(){
    window.location.href="#colleges";
}
function side(){
    let k = document.getElementById("sidebar");
    let j = document.getElementById("hamburger");
    let l = document.getElementById("hamburger");
    if (k.style.display === "none"){
        k.style.display = "block";
        j.style.color = "black";
        l.style.borderColor = "black";
        console.log("stick it" + k.style.display);
    }
    else {
        k.style.display = "none";
        j.style.color = "white";
        l.style.borderColor = "white";
        console.log(k.style.display);
    }

}
