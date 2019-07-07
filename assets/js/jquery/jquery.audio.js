$(".audio-available").click(function () {
    new Audio($(this).attr("audio")).play();

    // later just for word-info
    var e = document.querySelectorAll('[basic-form='+this.getAttribute("basic-form")+']');
    for(var i = 0; i < e.length; i++){
        e[i].classList.add('checked');
    }
});

document.getElementById("show-translation").onclick = function () {
    var d = document.getElementById("language-wrapper");
    if (this.checked) {
        d.classList.remove("hide-other-language");
    } else {
        d.classList.add("hide-other-language");
    }
}

document.getElementById("show-important").onclick = function () {
    var e = document.getElementById("highlight-wrapper");
    e.classList.add("show-important");
    e.classList.remove("show-genders");
    e.classList.remove("show-wc");

    document.getElementById("show-important-expl").classList.remove("hidden");
    document.getElementById("show-genders-expl").classList.add("hidden");
    document.getElementById("show-wc-expl").classList.add("hidden");
}

document.getElementById("show-genders").onclick = function () {
    var e = document.getElementById("highlight-wrapper");
    e.classList.remove("show-important");
    e.classList.add("show-genders");
    e.classList.remove("show-wc");

    document.getElementById("show-important-expl").classList.add("hidden");
    document.getElementById("show-genders-expl").classList.remove("hidden");
    document.getElementById("show-wc-expl").classList.add("hidden");
}

document.getElementById("show-wc").onclick = function() {
    var e = document.getElementById("highlight-wrapper");
    e.classList.remove("show-important");
    e.classList.remove("show-genders");
    e.classList.add("show-wc");

    document.getElementById("show-important-expl").classList.add("hidden");
    document.getElementById("show-genders-expl").classList.add("hidden");
    document.getElementById("show-wc-expl").classList.remove("hidden");
}

var wc = document.getElementsByClassName("check-wc-main");
for(var i = 0; i < wc.length; i++){
    wc[i].onclick = function() {
        if (this.checked) {
            document.getElementById("highlight-wrapper").classList.add(this.id);
        } else {
            document.getElementById("highlight-wrapper").classList.remove(this.id);
        }
    }
}
var c = document.getElementsByClassName("check-wc-choice");
for(var i = 0; i < c.length; i++){
    c[i].onclick = function() {
        var o = document.getElementsByClassName("word-info");
        for(var k = 0; k < o.length; k++){
            if (o[k].classList.contains(this.id)) {
                o[k].classList.add("wc-other");
            } else {
                o[k].classList.remove("wc-other");
            }
        }
    }
}