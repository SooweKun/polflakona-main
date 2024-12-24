package model

type MiniPost struct {
	ID      int    `json:"id" gorm:"type:uuid;primary_key;autoIncrement"`
	Image   string `json:"image" gorm:"type:text"`
}
