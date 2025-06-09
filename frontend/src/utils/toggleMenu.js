export default function toggleMenu() {
  const dropDownMenu = document.querySelector(".dropDownMenu");
  if (dropDownMenu.classList.contains("inactive")) {
    dropDownMenu.classList.remove("unDrop");
    dropDownMenu.classList.remove("inactive");
    setTimeout(() => {
      dropDownMenu.classList.add("drop");
    }, 20);
  } else {
    dropDownMenu.classList.add("unDrop");
    setTimeout(() => {
      dropDownMenu.classList.remove("drop");
      dropDownMenu.classList.add("inactive");
    }, 510);
  }
}
