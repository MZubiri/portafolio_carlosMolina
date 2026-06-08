# Guía de Etapas

## Etapa 1 - Base profesional

Estado: completada y validada.

Incluye:
- Estructura base Angular 20 con standalone components.
- Estilos globales en SCSS con tokens, mixins y utilidades.
- Layout principal con header responsive, hero inicial y footer.
- Datos tipados para perfil, navegación, tecnologías, proyectos y contacto.
- Preparación para despliegue en Netlify.
- Validación ejecutada con `npm run build`.

## Etapa 2 - Secciones restantes

En progreso.

Implementado en esta iteración:
- Hero ajustado con CTA correcto.
- Bloque técnico derecho del hero.
- Sección independiente de Proyectos con `#projects`.
- Navegación actualizada para apuntar a proyectos.
- Soporte reutilizable de tech badges con Devicon y fallback textual.
- Reemplazo de proyectos por casos reales actualizados.
- Orden final aplicado: Imperius Draconis, TaskFlow Microservices, GeoURP y Sistema de Gestión de Pollería.
- TODO pendiente de confirmar en Pollería: si el frontend final fue Razor o Thymeleaf.

Actualización de esta iteración:
- Hero con fotografía profesional real.
- Botón de descarga de CV.
- Sección independiente de Stack Tecnológico.
- Contacto compactado en formato profesional.
- Texto del perfil corregido para indicar que sigue siendo estudiante.
- Proyectos con mayor protagonismo visual.

Nueva iteración aplicada:
- Se eliminó la sección Sobre mí del flujo principal.
- Se removió el bloque de stack bajo la foto del Hero.
- Se eliminó la frase de tecnologías debajo del summary en Hero.
- Stack: se eliminaron textos descriptivos y se aumentó tamaño de logotipos.
- Proyectos: encabezado simplificado a "Proyectos" y soporte de capturas habilitado.
- Contacto: texto simplificado, iconos por red social y limpieza de copy final del footer.
- Carpeta creada para logos manuales faltantes en `src/assets/icons/manual/`.
- Carpeta creada para capturas de proyectos en `src/assets/images/projects/`.

Actualización adicional:
- Barra superior de navegación eliminada por completo.
- Tarjeta de foto del Hero sin comportamiento sticky para evitar desplazamiento al hacer scroll.
- Proyectos con soporte de múltiples capturas por proyecto mediante carrusel.
- Fondo con animación ambiental sutil para mayor dinamismo visual.

Interactividad agregada:
- Microinteracciones en botones del Hero (brillo y elevación en hover).
- Tarjeta de perfil con hover suave y zoom sutil en fotografía.
- Tarjetas de Stack y Proyectos con elevación y feedback visual.
- Carrusel de capturas con controles y dots interactivos.
- Links de contacto con respuesta visual en hover.
- Soporte de accesibilidad con `prefers-reduced-motion`.

Próximos bloques previstos:
- Sobre mí.
- Stack tecnológico completo.
- Experiencia.
- Educación.
- Contacto refinado.

## Etapa 3 - Pulido visual y contenido final

Pendiente.

Próximos bloques previstos:
- Animaciones suaves.
- Ajustes finos responsive.
- SEO final.
- Optimización de contenido y métricas visuales.