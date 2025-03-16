const languageSwitcherHTML = `
    <div class="language-switcher">
        <img src="../shared/img/Turkishlanguage.png" alt="Turkish Flag" class="flag" id="turkish-flag" />
        <img src="../shared/img/Englishlanguage.png" alt="English Flag" class="flag" id="english-flag" />
    </div>
`;

document.addEventListener("DOMContentLoaded", function () {

    document.body.insertAdjacentHTML("beforeend", languageSwitcherHTML);

    document.getElementById("turkish-flag").addEventListener("click", function() {
        changeLanguage('tr');
    });

    document.getElementById("english-flag").addEventListener("click", function() {
        changeLanguage('en');
    });

    const userLang = navigator.language || navigator.userLanguage; 
    const currentPath = window.location.pathname.replace(/^\/(tr|en)\//, '/');

    if (currentPath === "/") {
        if (userLang.includes('tr')) {
            window.location.href = "/tr";
        } else {
            window.location.href = "/en";
        }
    }
});

function changeLanguage(language) {
    let currentPath = window.location.pathname;
    currentPath = currentPath.replace(/^\/(tr|en)\//, "/");

    if (language === 'tr') {
        window.location.href = "/tr" + currentPath;
    } else if (language === 'en') {
        window.location.href = "/en" + currentPath;
    }
}
