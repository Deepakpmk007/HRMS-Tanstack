package router

import (
	"github.com/Deepak007/HRMS-Tanstack/controller"
	"github.com/gin-gonic/gin"
)

func SerRouter(r *gin.Engine) {
	api := r.Group("/api/v1/");

	user := api.Group("/user")
	{
		user.GET("/",controller.GetAllUsers)
		user.GET("/:id",controller.GetUser)
	}
}