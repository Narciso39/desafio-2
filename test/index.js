const copyright = document.querySelector(".infoFooterP");
const year =  new Date();
const currentYear = year.getFullYear();
copyright.innerHTML = `Shop.co © 2000-${currentYear}, All Rights Reserved`
