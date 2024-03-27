---
layout: ../../layouts/BlogPostLayout.astro
title: Mi extensiones imprescindibles de VSCode
description: Extensiones más importantes y que uso en el día a día en VSCode.
author: Oscar Moreira
slug: "mis-extensiones-vscode"
image: "https://res.cloudinary.com/dz1h72c42/image/upload/v1711571757/OscarMoreira.dev/Vscode_hkz5n3.webp"
creationDate: "27-3-2024"
timeToRead: 5
---

## Introducción

En los últimos años [Visual Studio Code](https://code.visualstudio.com/) se ha convertido en el principal editor de código de muchos desarrolladores.

Una de las características más importantes que tiene VSCode son las extensiones ya que de esta manera podrás hacer tu editor aún más potente. Existen muchos tipos de extensiones, desde algunas para modificar el estilo visual de tu editor hasta para ser más productivo a la hora de programar en tu lenguaje favorito.

Aquí voy a dejar las que en mi día a día son las más imprescindibles y hacen que me sienta cómodo desarrollando y más productivo.

## Extensiones

### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

ESLint es una herramienta para poder analizar y encontrar problemas en nuestro código. Con esta extensión lo que haremos será integrar VSCode con ESLint.

### [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

Con esta extensión podremos ver los errores en línea. Pueden ser errores debidos a nuestra configuración de ESLint por ejemplo.

### [TODO Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

Si eres una persona que suele añadir comentarios de TODO, para remarcar tareas pendientes por hacer *TODO Tree* te permitirá ver en forma de árbol según tu estructura de directorios del proyecto todos los TODO que has creado.

### [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

Extensión imprescindible si quieres hacer pair programming, que otra persona escriba al momento sobre tu código, etc.
Te permitirá compartir el proyecto en vivo con una o más personas de manera que todos pueden añadir código. 

### [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

Para escribir código más rápido en VSCode puedes crearte tus propios snippets de código pero ya existen muchas extensiones que te ofrecen una gran cantidad de ellos. En esta ocasión son snippets de JavaScript con el que podrás general código con alguna abreviación.

**Ejemplo**
Si quieres escribir un console.log() podrías escribir `clg` y nos escribirá el console.log()

### [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

En este caso, como la anterior extensión nos provee snippets de código pero en este caso de React.

**Ejemplo**
Si quieres crear un componente rápido podrías escribir `rafc` y generará el siguiente código:
```javascript
import React from 'react'

export const component = () => {
  return (
    <div>component</div>
  )
}

```

### [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Una práctica habitual que uso en mis proyectos es tener un fichero `.editorconfig` que nos permitirá poner reglas que tendrá el editor a la hora de programar en el proyecto. Indicar la cantidad de espacios en identaciones, finales de líneas, etc. De esta manera cuando se entre en el proyecto el editor cambiará su configuración a la que hemos indicado en el fichero.

### [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

Esta extensión simplemente hará que en las etiquetas *html* o *jsx* puedas modificar una y su pareja se modifique a la vez.

### [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

Si usas TypeScript sabrás lo horrorosos que son los errores que se muestran. Con *Pretty Typescript Errors* podrás ver los errores de una manera más amigable y entendible.

### [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

Extensión imprescindible si usas Tailwind ya que te dará autocompletados a la hora de escribir los estilos.

