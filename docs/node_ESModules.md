---
title: ESModules en Node ya esta aquí
published: true
description: Ya puedes hace import y exports desde un fichero JS en NODE facílmente.
tags: javascript, nose, ESModule, import, export
cover_image: https://me.joca.dev/SyntaxError.webp
date: '10/02/2021'
order: 3
---

# Soporte para ECMAScript modules en Node
 
Dejaremos de ver el molesto error de `SyntaxError: Cannot use import statement outside a module` gracias a que, desde ahora podremos usar ESModules en nuestros ficheros de NODE,  solo tenemos que añadir `"type": "module"` a nuestro package.json y ya tendremos el soporte.

En caso de no quererlo en todo el proyecto, pero si para determinado script que ejecutas en node, como es mi caso. Debes añadirle un flag al script que ejecutas `node script.js —-input-type=module` 

Y ahora puedes pasar tus ficheros de esto:
 
```javascript
  const fs = require('fs')
...
```
 
A esto:
 
```javascript
  import fs from 'fs'
...
```
 
Pueden encontrar más información detallada esta noticia [Announcing core Node.js support for ECMAScript modules](https://nodejs.medium.com/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663)