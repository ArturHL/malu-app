export default function useEventsPage() {
  
  function dropSubMenu(className){
    const subMenu = document.querySelector(`.${className}`);
    subMenu.classList.contains('inactive') ? subMenu.classList.toggle('inactive') 
    : setTimeout(()=>{subMenu.classList.toggle('inactive')}, 700);
    setTimeout(()=>{subMenu.classList.toggle('dropSubMenu');}, 1);
  }

  return {
    dropSubMenu
  }
}