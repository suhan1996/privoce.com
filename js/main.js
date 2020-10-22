window.onload = () => {

    let buttons = document.querySelectorAll('.get-extension');
    // If it's Mozilla Firefox, the buttons will redirect to the Firefox store
    if (typeof InstallTrigger !== 'undefined') {
        buttons[0].href = buttons[1].href = "https://addons.mozilla.org/firefox/addon/alora/";
    }
}

let isOn = false;

scrollToSection = (section) => {
    let offset = document.getElementById(section).offsetTop;
    $('html, body').animate({
        scrollTop: offset - 100
    }, 800);
}


$(function() { 
    var navMain = $("#navDropdown");
    navMain.on("click", ".menu-item", null, () => {
        navMain.collapse('hide');
    });
});