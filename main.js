var count = 1;
function postFunction() {
    if (count == 1) {
        var gettextInside = document.getElementById("text1").value;
        document.getElementById("01").innerHTML = gettextInside
        count++;
    }
    else if (count == 2) {
        var gettextInside = document.getElementById("text1").value;
        document.getElementById("02").innerHTML = gettextInside
        count++;
    }
    else if (count == 3) {
        var gettextInside = document.getElementById("text1").value;
        document.getElementById("03").innerHTML = gettextInside
        count++;
    }
}
function clearbutton() {
    if (count == 4) {
        document.getElementById("text1").innerHTML = "";
        document.getElementById("01").innerHTML = "";
        document.getElementById("02").innerHTML = "";
        document.getElementById("03").innerHTML = "";

    }
}