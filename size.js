let container = document.getElementById("mainpage"),
  screen = document.getElementById("screen");

addOrRemove = (cek) => {
  return cek
    ? container.classList.remove("container-fluid")
    : container.classList.add("container-fluid");
};
const resize = () => {
  const isChecked = screen.checked;
  addOrRemove(isChecked);
};

addEventListener("change", resize, false);

// const resize = () => {
//   const isChecked = screen.checked,
//     remove = container.classList.remove("container"),
//     add = container.classList.add("container");
//   isChecked
//     ? container.classList.remove("container")
//     : container.classList.add("container");
//   container.classList.toggle("container");
// };

// function resize() {
//   if (screen.checked) {
//     container.classList.remove("container");
//   } else {
//     container.classList.add("container");
//   }
// }
