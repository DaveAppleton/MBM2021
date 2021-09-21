package main

import (
	"fmt"
	"log"

	"github.com/DaveAppleton/ether_go/ethKeys"
)

func main() {
	arr := []string{".banker", ".secret", ".mainnet"}
	for _, name := range arr {
		keyX := ethKeys.NewKey(name)
		err := keyX.RestoreOrCreate()
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(name, keyX.PublicKeyAsHexString())
	}
}
