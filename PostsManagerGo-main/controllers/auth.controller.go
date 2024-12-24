package controllers

import (
	"net/http"

	db "root/database"
	"root/model"

	"github.com/gofiber/fiber/v2"
)

// @Summary Регистрация пользователя
// @Description Создание нового пользователя с ролью "user"
// @Tags v1
// @Accept json
// @Produce json
// @Param login body string true "Логин пользователя"
// @Param password body string true "Пароль пользователя"
// @Success 201 {object} model.User
// @Failure 400 {object} map[string]string
// @Router /v1/signup [post]
func SignUp(c *fiber.Ctx) error {
	var body struct {
		Name           string `json:"name"`
		Number         string `json:"number"`
		Login          string `json:"login"`
		Password       string `json:"password"`
		RepeatPassword string `json:"repeatpassword"`
	}

	// Парсим тело запроса
	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"status":  "fail",
			"message": "Не удалось прочитать данные",
		})
	}

	// // Проверяем совпадение пароля и его подтверждения
	// if body.Password != body.RepeatPassword {
	// 	return c.Status(400).JSON(fiber.Map{
	// 		"status":  "fail",
	// 		"message": "Пароли не совпадают",
	// 	})
	// }

	// Проверяем, существует ли пользователь с таким логином
	var existingUser model.User
	db.DB.DB.First(&existingUser, "login = ?", body.Login)
	if existingUser.ID != 0 {
		return c.Status(400).JSON(fiber.Map{
			"status":  "fail",
			"message": "Пользователь с таким логином уже существует",
		})
	}



	// Создаем нового пользователя
	user := model.User{
		Name:           body.Name,
		Number:         body.Number,
		Login:          body.Login,
		Password:       body.Password,
		RepeatPassword: body.RepeatPassword, 
		Role:           false,         
	}

	// Сохраняем пользователя в базе данных
	result := db.DB.DB.Create(&user)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{
			"status":  "error",
			"message": "Не удалось создать пользователя",
		})
	}

	// Возвращаем успешный ответ
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"status":  "success",
		"message": "Пользователь успешно создан",
		"user": fiber.Map{
			"login":          user.Login,
			"name":           user.Name,
			"number":         user.Number,
			"password":       body.Password,       // Возвращаем исходный пароль (не рекомендуется)
			"repeatpassword": body.RepeatPassword, // Возвращаем исходное подтверждение пароля (не рекомендуется)
			"role":           user.Role,
		},
	})
}


// @Summary Авторизация пользователя
// @Description Авторизация с логином и паролем
// @Tags v1
// @Accept json
// @Produce json
// @Param login body string true "Логин пользователя"
// @Param password body string true "Пароль пользователя"
// @Success 200 {object} model.User
// @Failure 401 {object} map[string]string
// @Router /v1/login [post]
func Login(c *fiber.Ctx) error {
	var body struct {
		Login    string `json:"login"`
		Password string `json:"password"`
	}

	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"status":  "fail",
			"message": "Не удалось прочитать данные",
		})
	}

	var user model.User
	db.DB.DB.First(&user, "login = ?", body.Login)

	if user.ID == 0 {
		return c.Status(400).JSON(fiber.Map{
			"status":  "fail",
			"message": "Пользователь не найден",
		})
	}

	return c.Status(http.StatusOK).JSON(fiber.Map{
		"status":  "success",
		"message": "Успешный вход",
		"user": fiber.Map{
			"name" : user.Name,
			"login": user.Login,
			"password" : user.Password,
			"number" : user.Number,
			"role":  user.Role,
		},
	})
}
