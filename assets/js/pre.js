// Get body class list which we'll need often.
var b = document.body.classList;

// Create an extra button in the navigation to toggle translation.
var l = document.getElementsByClassName("lecture-nav")[0];
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