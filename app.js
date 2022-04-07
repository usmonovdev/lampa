var svitcher = true;
var nur = document.getElementById("nur");

function myfunction() {
    if(svitcher) {
        svitcher = false;
        document.getElementById("svitcher").style.transform = "rotate(-50deg)";
        nur.style.transform = " rotate(-40deg) scaleY(1)";
    } else {
        svitcher = true;
        document.getElementById("svitcher").style.transform = "rotate(-10deg)";
        nur.style.transform = " rotate(-40deg) scaleY(0)";
    }
}