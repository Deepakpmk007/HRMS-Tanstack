package controller

import (
	"context"
	"net/http"
	"time"

	"github.com/Deepak007/HRMS-Tanstack/db"
	"github.com/Deepak007/HRMS-Tanstack/model"
	"github.com/gin-gonic/gin"
)



func GetAllUsers(c *gin.Context) {
	var users []model.User

	ctx,cancel := context.WithTimeout(context.Background(),10*time.Second)
	defer cancel()

	results, err := db.DB.Query(ctx,"SELECT id,name,email,dept,phone,position,joining_date FROM employee")
	if err != nil{
		c.JSON(http.StatusBadRequest,gin.H{
			"err":"error fetching users",
			"error":err.Error(),
		})
		return	
		}
	
	
	for results.Next(){
		var u model.User
		err := results.Scan(&u.ID,&u.Name,&u.Email,&u.DEPT,&u.PHONE,&u.Position,&u.JOININGDATE)
		if err != nil{
			c.JSON(http.StatusBadRequest,gin.H{
				"err":"error",
				"error":err.Error(),
			})
		}
		users = append(users,u)
	}
	c.JSON(http.StatusOK,gin.H{
		"data":users,
	})
}

func GetUser(c *gin.Context){
	var user model.User

	var id = c.Param("id")

	ctx,cancel := context.WithTimeout(context.Background(),10*time.Second)
	defer cancel()

	err := db.DB.QueryRow(ctx,"SELECT id,name,email,dept,phone,position,joining_date FROM employee WHERE id=$1",id).Scan(&user.ID,&user.Name,&user.Email,&user.PHONE,&user.DEPT,&user.Position,&user.JOININGDATE)

	if err != nil{
		c.JSON(http.StatusBadRequest,gin.H{
			"err":"error fetching user",
			"error":err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK,gin.H{
		"data":user,
	})
}