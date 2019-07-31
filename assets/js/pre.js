try {
// Disable jQuery Mobile on Teachable settings or remove it outright because it's for videos
// TODO best solution: settings effect the audio player as well
var dd = document.getElementsByClassName('settings-dropdown')[0].display = 'none';
//document.getElementById('custom-toggle-autoplay').setAttribute('data-role','none');
//document.getElementById('custom-toggle-autocomplete').setAttribute('data-role','none');
//document.getElementById('toggle_html5').setAttribute('data-role','none');
//document.getElementById('toggle_flash').setAttribute('data-role','none');
//document.getElementsByClassName('playback-speed')[0].setAttribute('data-role','none');

// Attach translated header to original header.
var lh = document.getElementById('lecture_heading'); // lecture heading
var lecture_name = 'Lesson'; // variable for the mp3 player
lh.innerHTML = lh.innerHTML.replace('fa fa-download','fa fa-file-text');
lecture_name = lh.innerHTML.split('&nbsp;')[1].trim(); // lecture name
lh.appendChild(document.getElementById('lh-trans'));

// Get body class list which we'll need often.
var b = document.body.classList;

// Create an extra button in the navigation to toggle translation.
var l = document.getElementsByClassName("lecture-nav")[0];
if (undefined !== l) {
  var t = document.createElement('a');
  t.className = 'nav-btn ui-link';
  t.href = '#';
  t.setAttribute('show', true);
  t.setAttribute('role', 'button');
  t.innerHTML = `<i class="fa fa-language" aria-hidden="true"></i>
        &nbsp;
        <span class="nav-text" id="show-trans"></span>`;
  l.insertBefore(t, l.childNodes[2]);

  // Show or hide the translation based on user selection.
  t.onclick = function() {
    var show = "false" == t.getAttribute('show');
    t.setAttribute('show', show);
    show ? b.remove("hide-trans") : b.add("hide-trans");
    var msg = show ? 'Hide Translation' : 'Show Translation';
    t.setAttribute('aria-label', msg);
    document.getElementById("show-trans").innerHTML = msg;
  };
  t.onclick();
}

} catch (e) {
  alert('Error in pre.js: ' + e)
}