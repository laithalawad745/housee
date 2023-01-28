let bars = document.querySelector(".services i")
let ser = document.querySelector(".ser");
let close = document.querySelector(".closee");

bars.onclick = () => {
  ser.classList.add("open");
};
close.onclick = () => {
  ser.classList.remove("open");
};

document.onkeyup = (e) => {
  if (e.key === "Escape") {
    ser.classList.remove("open");
  }
};