const input = document.getElementById("pass");
const butt = document.getElementById("toggle");

butt.onclick =() =>{
    const isHidden = input.type === "password";
    input.type = isHidden ? "text": "password";
    butt.textContent = isHidden ? "Hide" : "Show";
};