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
