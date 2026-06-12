# Portafolio Profesional - Carlos Gustavo Molina Zubiri 🌐

Sitio web personal y portafolio profesional desarrollado con **Angular** (Componentes Standalone). Este proyecto ha sido diseñado para presentar de forma interactiva y dinámica mis proyectos de desarrollo de software, habilidades técnicas, stack tecnológico y vías de contacto.

---

## 🚀 Características Principales

*   **Diseño Premium y Responsivo:** Interfaz moderna y minimalista adaptada para dispositivos móviles, tablets y ordenadores.
*   **Fondo Ambiental Dinámico:** Animaciones sutiles en el fondo que aportan dinamismo sin comprometer el rendimiento.
*   **Carrusel de Capturas:** Los proyectos destacados cuentan con visualización de múltiples capturas de pantalla para mostrar su funcionamiento real.
*   **Microinteracciones:** Efectos interactivos y transiciones suaves al pasar el cursor (hover) por tarjetas de proyectos, tecnologías y botones de contacto.
*   **Accesibilidad y Rendimiento:** Implementado siguiendo buenas prácticas, incluyendo soporte para `prefers-reduced-motion` y carga optimizada de recursos.
*   **Estructura Modular:** Desarrollado bajo las últimas directrices de Angular con componentes independientes (Standalone Components).

---

## 🛠️ Stack Tecnológico

*   **Framework:** Angular (Componentes Standalone)
*   **Lenguaje:** TypeScript
*   **Estilos:** SCSS (Sass) estructurado con tokens de diseño personalizados, mixins y utilidades (Vanilla CSS/SCSS).
*   **Despliegue:** Preparado para integraciones CI/CD en plataformas como **Netlify**.

---

## 📁 Estructura del Proyecto

*   `src/app/`: Contiene la lógica y los componentes de la aplicación.
*   `src/assets/images/projects/`: Capturas de pantalla de los proyectos expuestos.
*   `src/assets/icons/manual/`: Logotipos personalizados y fallbacks de tecnologías.

---

## 📦 Instrucciones de Ejecución Local

### Prerrequisitos
*   Tener instalado **Node.js** (v18 o superior) y **npm**.

### Instalación
1.  Clona el repositorio:
    ```bash
    git clone https://github.com/MZubiri/portafolio_carlosMolina.git
    cd portafolio_carlosMolina
    ```
2.  Instala las dependencias necesarias:
    ```bash
    npm install
    ```
3.  Levanta el servidor de desarrollo local:
    ```bash
    npm run start
    ```
    *(Abre tu navegador en `http://localhost:4200/`)*

### Construcción para Producción
Para compilar y generar los archivos listos para producción:
```bash
npm run build
```
Los archivos de distribución se generarán en la carpeta `dist/`.
