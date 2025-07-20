# CHISPART Logo

CHISPART Logo es una aplicación web que te permite generar logos impresionantes utilizando inteligencia artificial. Esta versión de la aplicación está construida con PHP.

## Cómo Empezar

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
2.  **Instala las dependencias:**
    ```bash
    composer install
    ```
3.  **Configura tu clave de API:**
    Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API de OpenAI:
    ```
    OPENAI_API_KEY=tu_clave_de_api_aqui
    ```
4.  **Inicia el servidor de desarrollo de PHP:**
    ```bash
    php -S localhost:8000 -t public
    ```

## Tecnologías Utilizadas

*   **PHP:** El lenguaje de programación principal.
*   **Composer:** El gestor de dependencias para PHP.
*   **OpenAI API:** El servicio de IA utilizado para generar los logos.
*   **Tailwind CSS:** Un framework de CSS para el diseño de la interfaz de usuario.

## Dependencias

Este proyecto utiliza las siguientes dependencias de PHP:

*   `openai-php/client`: Un cliente de PHP para la API de OpenAI.
