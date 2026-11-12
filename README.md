# Ecobless - web para GitHub Pages

Landing page responsive basada en la maqueta entregada en PDF. El proyecto funciona con HTML, CSS y JavaScript puro, sin compilación ni frameworks.

## Archivos

- `index.html`: estructura y contenido.
- `styles.css`: diseño desktop, tablet y mobile.
- `script.js`: menú móvil, animaciones, acordeón FAQ y validación del formulario.
- `assets/`: imágenes extraídas de la maqueta y logotipos vectoriales adaptados.
- `.nojekyll`: evita que GitHub Pages procese la carpeta como un proyecto Jekyll.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube **todo el contenido** de esta carpeta a la rama `main`.
3. Abre `Settings > Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Selecciona `main` y `/root`.
6. Guarda los cambios.

GitHub publicará la página en una dirección similar a:

`https://TU-USUARIO.github.io/TU-REPOSITORIO/`

## Datos que debes reemplazar

Busca estos textos en `index.html`:

- `correo@gmail.com`
- `+56 9 0000 0000`
- `Ubicación`
- Enlaces de Instagram, Facebook y LinkedIn.
- Testimonios de ejemplo: `Comentario de cliente` y `Nombre Apellido`.

La maqueta no incluye datos reales para esos campos, por eso se conservaron como contenido pendiente.

## Conectar el formulario

GitHub Pages es un hosting estático y no procesa formularios por sí mismo. En la versión incluida, el formulario valida los campos y muestra un mensaje informativo.

Para recibir solicitudes, puedes conectarlo a Formspree, HubSpot, Basin o un backend propio. Con Formspree, por ejemplo:

1. Crea un formulario en Formspree.
2. Copia la URL del endpoint.
3. En `index.html`, agrega al formulario:

```html
<form
  class="callback-form reveal"
  id="callback-form"
  action="https://formspree.io/f/TU-CODIGO"
  method="post"
>
```

4. Elimina o adapta el bloque del formulario ubicado al final de `script.js`, porque actualmente intercepta el envío para mostrar la demostración.

## Imágenes

Las fotografías incluidas provienen de la maqueta PDF entregada. Antes de publicar el sitio de forma comercial, confirma que Ecobless cuenta con los derechos y autorizaciones de uso correspondientes.

## Tipografía

La web carga `Poppins` desde Google Fonts. También tiene `Arial` como alternativa si el recurso externo no está disponible.
