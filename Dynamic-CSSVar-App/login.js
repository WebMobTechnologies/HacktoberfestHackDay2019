function check(form) {
    if (form.text1.value == "admin" && form.text2.value == "admin") {
        form.style.backgroundColor = "yellow";
        // alert("Success")

    } else {
        form.style.backgroundColor = "";
        // alert("Error Password or Username")
    }
}
check();