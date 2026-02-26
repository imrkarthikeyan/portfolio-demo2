
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({behavior:"smooth"});
    });
});


const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e){
    e.preventDefault();
    msg.textContent = "Message sent successfully!";
    form.reset();
});