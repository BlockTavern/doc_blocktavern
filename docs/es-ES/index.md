---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: Aquí, cada bloque tiene una historia, cada jugador es una leyenda
  image:
    src: /logo.png
    alt: Logo BlockTavern
  actions:
    - theme: brand
      text: Comenzar tutorial
      link: /es-ES/InstallationTutorial/installation-details
    - theme: alt
      text: Guía de desarrollo (Contribuir a la documentación)
      link: /es-ES/DevelopmentGuide/development-details

features:
  - icon: 📦
    title: Tutorial de instalación
    details: Instala BlockTavern y prepárate para tu aventura
    link: /es-ES/InstallationTutorial/installation-details

  - icon: 🎮
    title: Guía de juego
    details: Aprende las reglas básicas y la jugabilidad
    link: /es-ES/GameplayGuide/server-rules

  - icon: ❓
    title: Preguntas frecuentes
    details: Resuelve tus problemas rápidamente
    link: /es-ES/FAQ/faq-details
---

### Resumen de contribuciones

```sh
# Clonar el repositorio
git clone https://github.com/your-username/doc_blocktavern.git

# Ir al directorio del proyecto
cd doc_blocktavern

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run docs:dev

# Agregar todos los cambios
git add .

# Confirmar el contenido
git commit -m "docs: Actualización del contenido de la documentación"

# Enviar los cambios
git push origin main
```

::: warning Nota
Asegúrate de que tu versión de Node.js >= 16.0 y que hayas hecho fork del repositorio original.
:::

### Flujo de contribución

1. **Hacer fork del repositorio**: Haz clic en el botón "Fork" en la parte superior derecha del repositorio para crear una copia en tu cuenta de GitHub.
2. **Clonar el repositorio**: Usa el comando `git clone` para clonar tu fork localmente.
3. **Realizar modificaciones**: Realiza tus modificaciones de documentación en tu repositorio local.
4. **Confirmar las modificaciones**: Usa `git commit` para confirmar tus modificaciones.
5. **Enviar las modificaciones**: Usa `git push` para enviar tus modificaciones a tu fork.
6. **Crear una Pull Request**: En el repositorio original, haz clic en la pestaña "Pull Requests" y luego en "New Pull Request".
7. **Completar la información de la Pull Request**:
   - Título: Describe brevemente tus modificaciones
   - Descripción: Explica en detalle la motivación e impacto de tus modificaciones
8. **Enviar la Pull Request**: Haz clic en "Create Pull Request" para enviar tus modificaciones.
9. **Esperar la revisión**: Los mantenedores del proyecto revisarán tu Pull Request.
