# 📚 Biblioteca Digital API

API RESTful construida con Node.js, Express, TypeScript y MongoDB para gestionar libros de una biblioteca digital.

## 🚀 Tecnologías

- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- MVC pattern

## 🔧 Instalación

```bash
git clone https://github.com/LucasSchulz25/biblioteca-api.git
cd biblioteca-api
npm install
cp .env.example .env
npm run dev
```

## 📌 Endpoints

- `GET /api/books` → Lista todos los libros
- `GET /api/books/:id` → Obtiene un libro por ID
- `POST /api/books` → Crea un nuevo libro
- `PATCH /api/books/:id` → Actualiza un libro existente
- `DELETE /api/books/:id` → Elimina un libro

## ✅ Criterios cumplidos

✔ CRUD completo  
✔ Patrón MVC  
✔ Mongoose + validaciones  
✔ Respuestas estandarizadas  
✔ Manejo de errores  
✔ Uso de variables de entorno  
✔ Código limpio y ordenado
