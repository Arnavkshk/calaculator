function zero() {
    a = document.getElementById("textview").value + "0";
    document.getElementById("textview").value = a;
}
function one() {
    a = document.getElementById("textview").value + "1";
    document.getElementById("textview").value = a;
}

function two() {
    a = document.getElementById("textview").value + "2";
    document.getElementById("textview").value = a;
}
function three() {
    a = document.getElementById("textview").value + "3";
    document.getElementById("textview").value = a;
}
function four() {
    a = document.getElementById("textview").value + "4";
    document.getElementById("textview").value = a;
}
function five() {
    a = document.getElementById("textview").value + "5";
    document.getElementById("textview").value = a;
}
function six() {
    a = document.getElementById("textview").value + "6";
    document.getElementById("textview").value = a;
}
function seven() {
    a = document.getElementById("textview").value + "7";
    document.getElementById("textview").value = a;
}
function eight() {
    a = document.getElementById("textview").value + "8";
    document.getElementById("textview").value = a;
}
function nine() {
    a = document.getElementById("textview").value + "9";
    document.getElementById("textview").value = a;
}
function plus() {
    a = document.getElementById("textview").value + "+";
    document.getElementById("textview").value = a;
}
function sub() {
    a = document.getElementById("textview").value + "-";
    document.getElementById("textview").value = a;
}
function divide() {
    a = document.getElementById("textview").value + "/";
    document.getElementById("textview").value = a;
}
function mul() {
    a = document.getElementById("textview").value + "*";
    document.getElementById("textview").value = a;
}
function point() {
    a = document.getElementById("textview").value + ".";
    document.getElementById("textview").value = a;
}
function calc() {
    a = document.getElementById("textview").value;
    eval("res = " + a);
    document.getElementById("textview").value = res;
}

function esc() {
    a = document.getElementById("textview").value;
    l = a.length;
    a = a.slice(0, l - 1);
    document.getElementById("textview").value = a;
}
function clr() {
    document.getElementById("textview").value = "";
}