// Жоба туралы хабарлама терезесі
function showWelcomeMessage() {
    alert("Қош келдіңіз! Бұл цифрлық платформа Алаш арысы Халел Досмұхамедұлының ғылыми, ағартушылық және медициналық мұрасын терең зерттеу мақсатында арнайы құрылған. Монография материалдарын толық оқып шығу ұсынылады.");
}

// Бетті төмен айналдырғанда оқу прогресін есептеу функциясы
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
}
