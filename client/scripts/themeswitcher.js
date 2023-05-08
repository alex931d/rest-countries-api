const btnSwitcher = document.querySelector(".switch");
function toggleTheme(){
    window.theme = typeof(window.theme)==='string' ? window.theme : 'light';
    var switchToTheme = window.theme === 'light' ? 'dark' : 'light';
    window.theme = switchToTheme;
    window.localStorage.setItem('data-theme', switchToTheme)
    document.querySelector('body').setAttribute('data-theme',switchToTheme);
}
btnSwitcher.addEventListener("click",()=>{
    toggleTheme();
    btnSwitcher.classList.toggle("active");
    if (btnSwitcher.classList.contains("active")) {
        btnSwitcher.src ="../imgs/sun-solid.svg"
    }
    else{
        btnSwitcher.src ="../imgs/moon-solid.svg"
    }
});

window.addEventListener("load",()=>{
    if (window.localStorage.getItem('data-theme')) {
        if (window.localStorage.getItem('data-theme') == 'dark') {
            btnSwitcher.src ="../imgs/sun-solid.svg"
            btnSwitcher.classList.toggle("active");
        }
        else{
            btnSwitcher.src ="../imgs/moon-solid.svg"
        }
         document.querySelector('body').setAttribute('data-theme',window.localStorage.getItem('data-theme')); 
    }
})