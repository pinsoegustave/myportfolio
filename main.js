

// creating button click  show hide navbar
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");


togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

var typed = new Typed(".input", {
    strings:["Backend Developer","Frontend Developer","UI/UX Designer","Backend Developer"],
    typedSpeed:70,
    backSpeed:55,
    loop:true
});

// Queries to send feedback on email

function sendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        phone : document.getElementById("phone").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };

    emailjs.send("service_tf9ki7t","template_wkbpf5m", params) 
        .then(function (res) {
            alert ("Thanks for your contact!" + (res.status));
        });
}
