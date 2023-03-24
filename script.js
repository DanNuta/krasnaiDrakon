import {items} from "./constants/items.js";
import { navDesktop, navTablet } from "./constants/items.js";


const tabletNav = document.querySelector(".nav_tablet");
const desktopNav = document.querySelector(".nav_desktop");

navTablet.forEach(item => {
   tabletNav.append(healperHtmlNav(item));
});

navDesktop.forEach(item => {
    desktopNav.append(healperHtmlNav(item));
});




function healperHtmlNav(target){
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${target}`;
    a.textContent = `${target}`;

    li.append(a);
    ul.append(li);
    return ul;
}