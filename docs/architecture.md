# Архитектура FoodHub

FoodHub основан на учебном проекте Foodgram, но развивается как самостоятельный продукт.

## Структура проекта

FoodHub состоит из двух независимых частей:

- **Backend** — API на Django REST Framework.
- **Frontend** — приложение на React.

### Backend отвечает за:

- аутентификацию пользователей;
- работу с рецептами;
- управление избранным;
- управление списком покупок;
- систему подписок;
- предоставление REST API для фронтенда.

### Frontend отвечает за:

- пользовательский интерфейс;
- маршрутизацию (навигацию между страницами);
- работу с формами;
- взаимодействие с API.

## Технологический стек

### Backend
- Python
- Django
- Django REST Framework
- PostgreSQL
- Gunicorn

### Frontend
- React
- JavaScript
- React Router
- CSS Modules

### Инфраструктура
- Docker
- Nginx
