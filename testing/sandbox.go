package main

import "fmt"

type foo struct {
	asdf string
	city string
}

func main() {
	fmt.Println("foo")
	f := foo{}
	f.asdf = "true"
	myFunc();

}

func myFunc() string {
	return "foo"
}
