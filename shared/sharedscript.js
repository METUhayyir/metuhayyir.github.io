const depth = window.location.pathname.replace(/^\/[A-Za-z]:/, "").split('/').length - 2;
const sharedPath = "../".repeat(Math.max(depth, 0)) + "shared";

console.log("Current Path:", window.location.pathname);
console.log("Detected Depth:", depth);
console.log("Calculated sharedPath:", sharedPath);

const languageSwitcherHTML = `
    <div class="language-switcher">
        <img src="${sharedPath}/img/Turkishlanguage.png" alt="Turkish Flag" class="flag" id="turkish-flag" />
        <img src="${sharedPath}/img/Englishlanguage.png" alt="English Flag" class="flag" id="english-flag" />
    </div>
`;

document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcherContainer = document.getElementById("language-switcher");
    if (languageSwitcherContainer) {
        languageSwitcherContainer.innerHTML = languageSwitcherHTML;
    } else {
        document.body.insertAdjacentHTML("beforeend", languageSwitcherHTML);
    }

    document.getElementById("turkish-flag").addEventListener("click", function() {
        changeLanguage('tr');
    });

    document.getElementById("english-flag").addEventListener("click", function() {
        changeLanguage('en');
    });

    const userLang = navigator.language || navigator.userLanguage;
    const currentPath = window.location.pathname;
    const currentLang = currentPath.split('/')[1];

    if (currentPath === "/" || currentLang === "") {
        if (userLang.includes('tr')) {
            window.location.href = "/tr";
        } else {
            window.location.href = "/en";
        }
    }
});

function changeLanguage(language) {
    let currentPath = window.location.pathname;
    const currentLang = currentPath.split('/')[1];

    if (language !== currentLang) {
        currentPath = currentPath.replace(/^\/(tr|en)\//, "/");

        window.location.href = `/${language}${currentPath}`;
    }
}
