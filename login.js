function validateForm() {
    var name = document.getElementById("name").value;
    var password = document.getElementsByName("password")[0].value;

    if (name === "" || password === "") {
        alert("Please fill in all fields");
        return false;
    }

    return true;
}