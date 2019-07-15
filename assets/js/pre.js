const t = document.createElement('div');
t.id = 'show-trans-cb';
t.className = 'nav-btn ui-link';
t.innerHTML = `<label for="show-trans" id="show-trans-label" class="header half-height ui-btn ui-corner-all ui-btn-inherit ui-checkbox-off"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg" height="20"><span lang="en">Show the Translation</span></label><input type="checkbox" name="show-trans" id="show-trans" data-cacheval="true">`;
var l = document.getElementsByClassName("lecture-nav")[0];
if (typeof l !== 'undefined') {
    l.insertBefore(t, l.childNodes[2]);
}
