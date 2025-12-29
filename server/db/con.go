package db

import (
	"context"
	"os"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

var DB *pgxpool.Pool;

func ConnectDB(){
	godotenv.Load()
	url := os.Getenv("DBURL")
	ctx,cancel := context.WithTimeout(context.Background(),10*time.Second);
	defer cancel();
	
	pool,err := pgxpool.New(ctx,url);

	if err != nil{
		panic(err);
	}

	if err = pool.Ping(ctx);err != nil{
		panic(err);
	}
	
	DB = pool;
	println("DB Connected........")
}