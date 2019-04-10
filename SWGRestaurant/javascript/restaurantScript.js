// JavaScript source code
function validateForm() {
    var x = document.getElementById("nameRequired").value;
    if (x === "") {
        alert("Please enter your name.");
        return false;
    } else {
        var y = document.getElementById("emailRequired").value;
        if (y === "" || !y.includes("@", 1)) {
            alert("Please enter your email address.");
            return false;
        } else {
            var z = document.getElementById("phoneRequired").value;
            if (z === "" || z.length < 7) {
                alert("Please enter your phone number.");
                return false;
            } else {
                alert("Request Sent. We'll be in touch soon!");
                return false;
            }
        }
    }
        
}

function noScript() {
    alert("ColdCuts is best viewed with JavaScript enabled.")
}