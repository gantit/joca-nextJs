---
title: Rutas absolutas al importar componentes
published: true
description: Las rutas de los ficheros y al importarlos.
tags: javascript, modules, imports
cover_image: https://me.joca.dev/code.jpeg
---

# Rutas relativas + nombresDeComponentesLargos

Esto hace que a veces, llegar a detectar en qué carpeta esta ese componente, sea caótico. Pero, ¿se pueden importar de rutas absolutas? La respuesta es **SI** gracias a jsconfig.json en la raíz del proyecto.

<div style="width:400px; margin:0 auto;">
  <img src="https://media.giphy.com/media/3016In3PO5FO8Uo7v7/giphy.gif" width="100%" height="100%" alt="esto es magia" >
</div>

```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

Y, a partir de este momento, ya puedes importar tus componentes de manera absoluta

```javascript
import Button from 'components/Button'
```
