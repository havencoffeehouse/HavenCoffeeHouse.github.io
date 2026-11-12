# Haven Coffee House — sitio web

Sitio estático (HTML, CSS y JavaScript). No necesita instalar nada.

## Estructura

```
index.html          Página principal (debe quedar en la raíz del repositorio)
css/styles.css      Estilos y colores de la marca
js/main.js          Carta, galería, menú móvil y reserva por WhatsApp
img/hero.jpg        Foto del espresso (hero, historia y galería)
img/favicon.svg     Ícono de la pestaña
img/logos/          Logos y dibujos del rebranding en SVG (crema y negro)
.nojekyll           Evita que GitHub procese el sitio con Jekyll
```

## Subir a GitHub Pages sin error 404

1. Crea un repositorio nuevo en GitHub (por ejemplo `haven-cafe`).
2. Sube **el contenido de esta carpeta** (no la carpeta entera): `index.html` tiene que quedar en la raíz del repositorio, junto a `css`, `js` e `img`.
3. En el repositorio entra a **Settings → Pages**.
4. En **Source** elige **Deploy from a branch**, rama **main** y carpeta **/ (root)**. Guarda.
5. Espera uno o dos minutos. El sitio queda en `https://TU-USUARIO.github.io/haven-cafe/`.

Si ves un 404, casi siempre es una de estas causas:
- `index.html` quedó dentro de otra carpeta en vez de la raíz.
- El nombre del archivo no es exactamente `index.html` (en minúsculas).
- Pages todavía no terminó de publicar (espera un par de minutos y recarga).
- En Settings → Pages no está elegida la rama `main` con la carpeta `/ (root)`.

## Qué editar

- **Carta y precios:** en `js/main.js`, al inicio, el objeto `MENU`. Cada producto es una línea con nombre (`n`), ingredientes (`d`) y precio (`p`). Para agregar postres o salados, copia una categoría, cámbiale el nombre y llena sus productos.
- **Horario y dirección:** en `index.html`, sección `#visita` y el pie de página.
- **WhatsApp:** el número está como `584126438711` en `index.html` y `js/main.js`.
- **Reseñas:** en `index.html`, sección `#resenas` (son de ejemplo).
- **Fotos:** `img/hero.jpg` es la portada. La galería usa recortes de esa misma foto. Las de "Nuestra historia" están en `img/gal/` (`taza` y `vasos`); para cambiar una, reemplaza el archivo con el mismo nombre.
- **Colores:** variables al inicio de `css/styles.css`.
- **Animaciones:** al final de `css/styles.css`, bloque "Movimiento". Se desactivan solas si el visitante tiene "reducir movimiento" activado en su dispositivo.
