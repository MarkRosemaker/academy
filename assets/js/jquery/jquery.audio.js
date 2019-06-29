$(".audio-available").click(function () {
    new Audio($(this).attr("audio")).play();

    // later just for word-info
    var e = document.querySelectorAll('[basic-form='+this.getAttribute("basic-form")+']');
    for(var i = 0; i < e.length; i++){
        e[i].classList.add('checked');
    }
});

document.getElementById("show-translation").onclick = function () {
    var d = document.getElementsByClassName("de");
    var o = document.getElementsByClassName("other-language");
    if (this.checked) {
        for(var i = 0; i < d.length; i++){
            d[i].classList.add('de-colored');
        }
        for(var i = 0; i < o.length; i++){
            o[i].classList.remove('hidden');
        }
    } else {
        for(var i = 0; i < d.length; i++){
            d[i].classList.remove('de-colored');
        }
        for(var i = 0; i < o.length; i++){
            o[i].classList.add('hidden');
        }
    }
}

document.getElementById("show-genders").onclick = function () {
    var e = document.getElementById("highlight-wrapper");
    e.classList.remove("show-important");
    e.classList.add("show-genders");
}

document.getElementById("show-important").onclick = function () {
    var e = document.getElementById("highlight-wrapper");
    e.classList.add("show-important");
    e.classList.remove("show-genders");
}