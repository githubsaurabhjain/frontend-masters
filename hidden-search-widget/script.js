const ipt = document.getElementsByClassName("ipt");
const btn = document.getElementsByClassName("btn");
ipt[0].style.display = "none";
btn[0].addEventListener("click", () => {
    ipt[0].classList.toggle("active");
    ipt[0].focus()
});
