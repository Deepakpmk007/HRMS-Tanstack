package db

import (
	"context"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

var DB *pgxpool.Pool;

func ConnectDB(url string){
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