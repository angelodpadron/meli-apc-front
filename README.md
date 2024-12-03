# Meli APC

[![Angular](https://img.shields.io/badge/Angular-18-red)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)

## 📖 Overview
Este repositorio contiene el frontend de Meli APC, Asesor Personal de Compras. Proyecto de la materia Practicas de Desarrollo de Software (UNQ).

## 🌐 Enlaces Útiles
- 🔗 [Repositorio del Backend de Meli APC](https://github.com/angelodpadron/meli-apc-back)

---

## 🛠 Tecnologías Utilizadas
- **Lenguaje**: TypeScript 5.5.2
- **Framework**: Angular 18
- **Gestion de dependencias**: npm
- **Contenerización**: Docker

## 📋 Requisitos

- **Node v22.11.0 o superior**
- **npm 10.9.0 o superior**
- La API de [Meli APC](https://github.com/angelodpadron/meli-apc-back) corriendo localmente o en un entorno accesible.

>Nota: la app tambien se puede ejecutar mediante Docker, utilizando el archivo Dockerfile del repositorio o bien la imagen de [Docker Hub](https://hub.docker.com/r/angelodpadron/meli-apc-front/tags)

## ⚙️ Configuración y Ejecución
1. **Instala las dependencias**:  
   
   En el directorio raíz del proyecto, ejecutar el siguiente comando en una terminal:

   ```bash
   npm install
   ```

2. **Configura el entorno**:

    Crear un archivo .env (o modifica environment.ts) con las siguientes variables:

    API_BASE_URL: URL base del backend (por ejemplo, http://localhost:8080).

3. **Ejecutar la aplicacion**

    Iniciar el servidor de desarrollo con el siguiente comando:
    ```bash
    npm run start
    ```

    La aplicacion estara disponible en http://localhost:4200

## 🧪 Tests
Es posible ejecutar los tests del proyecto utilizando el siguiente comando:
```bash
npm run test
  ```

## 🛡 Disclaimer
Este proyecto es didáctico y **no está destinado para realizar compras reales** en MercadoLibre, ni diseñado para entornos de producción.
