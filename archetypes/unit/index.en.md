+++
title = "{{ .Name | replaceRE "\\A[0-9]*?-(.*)" "$1" | replaceRE  "-" " " | title }}"
date = {{ .Date }}
+++




