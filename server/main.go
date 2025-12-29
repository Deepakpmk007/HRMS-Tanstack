package main

import (
	"github.com/Deepak007/HRMS-Tanstack/db"
	"github.com/Deepak007/HRMS-Tanstack/router"
	"github.com/gin-gonic/gin"
)


func main(){

	db.ConnectDB()

	r:=gin.Default();
	router.SerRouter(r)

	r.Run(":8080")
}