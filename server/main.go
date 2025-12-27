package server

import (
	"github.com/Deepak007/HRMS-Tanstack/config"
	"github.com/Deepak007/HRMS-Tanstack/db"
	"github.com/Deepak007/HRMS-Tanstack/router"
	"github.com/gin-gonic/gin"
)


func main(){
	cfg :=config.LoadEnv();

	db.ConnectDB(cfg.DBURL)
	defer db.DB.Close();

	r:=gin.Default();
	router.SerRouter(r)

	r.Run(":8080");
}