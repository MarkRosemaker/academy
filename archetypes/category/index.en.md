+++
title = "{{ .Name | replaceRE "\\A[0-9]*?-(.*)" "$1" | replaceRE  "-" " " }}"
date = {{ .Date }}

draft = true
spellchecked = false
+++

