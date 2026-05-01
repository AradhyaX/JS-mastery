//! document.querySelectorALL and querySelector are versatile

const menuClicked = (currEL) => {
    const menuitems = document.getElementsByClassName('menu-item');
    for(let i = 0; i < menuitems.length; i++){
        menuitems[i].classList.remove('active');
 }

    currEL.classList.add('active');
}