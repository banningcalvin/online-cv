function showA() {
    document.getElementById("pageA").style.visibility = "visible";
    document.getElementById("pageB").style.visibility = "hidden";
    document.getElementById("pageC").style.visibility = "hidden";

    document.getElementById("pageA").style.opacity = 1;
    document.getElementById("pageB").style.opacity = 0;
    document.getElementById("pageC").style.opacity = 0;

    document.getElementById("buttonA").style.fontWeight = 'bold';
    document.getElementById("buttonB").style.fontWeight = 'normal';
    document.getElementById("buttonC").style.fontWeight = 'normal';

    document.getElementById("buttonA").style.color = '#000';
    document.getElementById("buttonB").style.color = '#aaa';
    document.getElementById("buttonC").style.color = '#aaa';
}

function showB() {
    document.getElementById("pageB").style.visibility = "visible";
    document.getElementById("pageC").style.visibility = "hidden";
    document.getElementById("pageA").style.visibility = "hidden";

    document.getElementById("pageB").style.opacity = 1;
    document.getElementById("pageC").style.opacity = 0;
    document.getElementById("pageA").style.opacity = 0;

    document.getElementById("buttonB").style.fontWeight = 'bold';
    document.getElementById("buttonA").style.fontWeight = 'normal';
    document.getElementById("buttonC").style.fontWeight = 'normal';

    document.getElementById("buttonB").style.color = '#000';
    document.getElementById("buttonA").style.color = '#aaa';
    document.getElementById("buttonC").style.color = '#aaa';
}

function showC() {
    document.getElementById("pageC").style.visibility = "visible";
    document.getElementById("pageB").style.visibility = "hidden";
    document.getElementById("pageA").style.visibility = "hidden";

    document.getElementById("pageC").style.opacity = 1;
    document.getElementById("pageB").style.opacity = 0;
    document.getElementById("pageA").style.opacity = 0;

    document.getElementById("buttonC").style.fontWeight = 'bold';
    document.getElementById("buttonB").style.fontWeight = 'normal';
    document.getElementById("buttonA").style.fontWeight = 'normal';

    document.getElementById("buttonC").style.color = '#000';
    document.getElementById("buttonB").style.color = '#aaa';
    document.getElementById("buttonA").style.color = '#aaa';
}
