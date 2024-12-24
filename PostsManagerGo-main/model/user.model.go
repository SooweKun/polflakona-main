package model



type User struct {
	ID       int `json:"id" gorm:"type:uuid;primary_key;autoIncrement"`
	Name     string `json:"name" gorm:"type:text"`
	Number  string `json:"number" gorm: "type:text"`
	Login    string `json:"login" gorm:"unique;not null"`
	Password string `json:"password"`
	RepeatPassword string `json:"repeatpassword"`
	Role     bool   `json:"role"`
}
