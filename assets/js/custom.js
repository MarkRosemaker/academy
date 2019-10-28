// Paint all instances of the word green after it is clicked.
$(".word-info").click(function () {
    for(var e = document.querySelectorAll('[basic-form=' + this.getAttribute("basic-form") + ']'), t = 0; t < e.length; t++)
        e[t].classList.add('checked');
});

// Highlight only important and clicked words.
$("#show-important").click(function () {
    b.add("show-important");
    b.remove("show-genders");
    b.remove("show-wc");
});
b.add("show-important");

// Highlight only the genders.
$("#show-genders").click(function () {
    b.remove("show-important");
    b.add("show-genders");
    b.remove("show-wc");
});

// Highlight only the parts of speech.
$("#show-wc").click(function() {
    b.remove("show-important");
    b.remove("show-genders");
    b.add("show-wc");
});

// Highlight all nouns and verbs.
$(".check-wc-main").click(function () {
    this.checked ? b.add(this.id) : b.remove(this.id);
});
b.add("Substantiv-enabled");
b.add("Verb-enabled");

// Highlight whatever word class is selected.
$(".check-wc-choice").click(function () {
    for(var o = document.getElementsByClassName("word-info"), t = 0; t < o.length; t++){
        o[t].classList.contains(this.id) ? o[t].classList.add("wc-other") : o[t].classList.remove("wc-other");
    }
});

// Play the audio file associated with the element.
$(".audio-available").click(function() {
    new Audio($(this).attr("audio")).play();
});

// Remove the loading animation.
// document.getElementById("loading").style.display = "none";
