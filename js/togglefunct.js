function Toggle() {
    var temp = document.getElementById("pass");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}