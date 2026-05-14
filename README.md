# Personalización de estilos (Shadow DOM, CSS Variables y ::part)

Este proyecto utiliza **Web Components** con Shadow DOM, slots, variables CSS y la pseudo-clase `::part` para facilitar la personalización de estilos desde fuera del componente.

## ¿Cómo personalizar los componentes?

### 1. Variables CSS
Puede sobreescribir variables CSS desde tu archivo principal (por ejemplo, en `styles.css`) para cambiar colores, tamaños, etc. Ejemplo:

```css
banner-ucr {
  --banner-bg: #e0e0e0;
  --banner-title-color: #0057b8;
}

panel-ucr {
  --panel-bg: #fffbe6;
  --panel-footer-color: #0057b8;
}
```

### 2. Usar slots
Puede insertar contenido personalizado dentro de los componentes usando slots:

```html
<banner-ucr>
  <span slot="subtexto">¡Personaliza este mensaje!</span>
</banner-ucr>
```

### 3. Usar ::part
Algunos elementos internos exponen partes con `part` para que puedas modificarlos desde fuera:

```css
banner-ucr::part(banner-texto) {
  font-size: 1.5rem;
  color: #7b2d8b;
}

panel-ucr::part(panel-footer) {
  font-weight: bold;
}
```
