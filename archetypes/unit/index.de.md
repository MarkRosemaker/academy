+++
title = "{{ .Name | replaceRE "unit-[0-9]*?-(.*)" "$1" | replaceRE  "-" " " }}"
date =  {{ .Date }}
weight = {{ .Name | replaceRE "unit-([0-9]*?)-.*" "$1" }}
type = "course"
layout = "unit"

categories = []
draft = true
spellchecked = false
+++




