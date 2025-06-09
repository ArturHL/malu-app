import { useState } from 'react';

export default function useAnimateOrder() {
  const [menuActive, setMenuActive] = useState(false);

  function translate(menuClass) {
    const menu = document.querySelector(`.${menuClass}`);
    const px = menu.getBoundingClientRect().height - 30;
    if (menuActive) {
      menu.style.transform = `translateY(0px)`;
      rotateIcon('iconDropMenu');
      setMenuActive(false);
    } else {
      menu.style.transform = `translateY(-${px}px)`;
      rotateIcon('iconDropMenu');
      setMenuActive(true);
    }
  }

  function adjustHeight(menuClass) {
    if (menuActive) {
      const menu = document.querySelector(`.${menuClass}`);
      const px = menu.getBoundingClientRect().height - 30;
      menu.style.transform = `translateY(-${px}px)`;
    }
  }

  function rotateIcon(iconClass) {
    const icon = document.querySelector(`.${iconClass}`);
    if (menuActive) {
      icon.style.transform = `rotate(0deg)`;
      setMenuActive(false);
    } else {
      icon.style.transform = `rotate(180deg)`;
      setMenuActive(true);
    }
  }
  return {translate, adjustHeight}
}