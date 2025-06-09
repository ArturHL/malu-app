export default function closeMenu() {
  const menu = document.querySelector('.dropDownMenu');
  const checkbox = document.getElementById('checkbox2');

  if (menu && checkbox) {
    menu.classList.remove('drop');
    menu.classList.add('unDrop');

    setTimeout(() => {
      menu.classList.add('inactive');
      menu.classList.remove('unDrop');
    }, 500);
    
    checkbox.checked = false;
  }
}

