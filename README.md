# CHISPART Logo

CHISPART Logo es una aplicación web que te permite generar logos impresionantes utilizando inteligencia artificial. Simplemente describe tu visión, elige un estilo y deja que nuestra IA cree la identidad de tu marca en segundos.

## ¿Cómo funciona?

La aplicación utiliza un modelo de inteligencia artificial para generar logos basados en dos entradas principales:

*   **Descripción:** Una descripción textual de lo que quieres que represente el logo.
*   **Estilo:** Un estilo visual para el logo (por ejemplo, neón, ciberpunk, origami).

Una vez que proporcionas la descripción y el estilo, la aplicación genera un logo único para ti. Además, puedes refinar un logo existente proporcionando instrucciones adicionales.

## Tecnologías Utilizadas

*   **Next.js:** Un framework de React para construir aplicaciones web.
*   **Firebase:** Utilizado para el hosting de la aplicación.
*   **Genkit:** Un framework de código abierto para desarrollar aplicaciones de IA.
*   **Google AI:** El modelo de IA utilizado para generar los logos.
*   **React:** Una biblioteca de JavaScript para construir interfaces de usuario.
*   **Tailwind CSS:** Un framework de CSS para el diseño de la interfaz de usuario.

## Cómo Empezar

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## Scripts Disponibles

En el archivo `package.json`, puedes encontrar los siguientes scripts:

*   `dev`: Inicia el servidor de desarrollo de Next.js.
*   `genkit:dev`: Inicia el servidor de desarrollo de Genkit.
*   `genkit:watch`: Inicia el servidor de desarrollo de Genkit en modo de observación.
*   `build`: Crea una compilación de producción de la aplicación.
*   `start`: Inicia un servidor de producción.
*   `lint`: Ejecuta el linter de Next.js.
*   `typecheck`: Ejecuta el verificador de tipos de TypeScript.
