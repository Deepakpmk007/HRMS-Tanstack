package model

import "time"


type User struct{
	ID string `json:"id" bson:"id,omitempty"`
	Name string `json:"name" bson:"name"`
	Email string `json:"email" bson:"email"`
	DEPT string `json:"dept" bson:"dept"`
	PHONE string `json:"phone" bson:"phone"`
	Position string `json:"position" bson:"position"`
	JOININGDATE time.Time `json:"joining_date" bson:"joining_date"`
}