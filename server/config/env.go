package config

import "os"

type DB struct {
	DBURL string
}


func LoadEnv() *DB{
	return &DB{
		DBURL:os.Getenv("DBURL"),
	}
}