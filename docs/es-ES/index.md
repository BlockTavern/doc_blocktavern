---

layout: home

hero:
name: "BlockTavern"
text: ""
tagline: Aquí, cada bloque tiene una historia, cada jugador es una leyenda
image:
src: /logo.png
alt: BlockTavern Logo
actions:
\- theme: brand
text: Entrar al Tutorial
link: /es-ES/InstallationTutorial/installation-details
\- theme: alt\
text: Guía de Desarrollo (Contribuir Documentación)
link: /es-ES/DevelopmentGuide/development-details

features:

* icon: 📦
  title: Tutorial de Instalación
  details: Instala el juego BlockTavern y prepárate para comenzar tu aventura
  link: /es-ES/InstallationTutorial/installation-details

* icon: 🎮
  title: Guía de Juego
  details: Aprende las reglas básicas y mecánicas del juego
  link: /es-ES/GameplayGuide/server-rules

* icon: ❓
  title: Preguntas Frecuentes
  details: Resuelve tus problemas rápidamente
  link: /es-ES/FAQ/faq-details

***

### Resumen de Contribución

```sh
# Clonar el repositorio
git clone https://github.com/your-username/doc_blocktavern.git

# Cambiar al directorio del proyecto
cd doc_blocktavern

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run docs:dev

# Agregar todos los cambios
git add .

# Confirmar contenido
git commit -m "docs: actualizar contenido de documentación"

# Enviar cambios
git push origin main
```

::: warning Nota
Asegúrate de que tu versión de Node.js >= 16.0 y que ya hayas hecho fork del repositorio original.
:::

### Proceso de Contribución

1. **Hacer Fork del Repositorio**: Haz clic en el botón "Fork" en la esquina superior derecha del repositorio para crear una copia en tu cuenta de GitHub.
2. **Clonar Repositorio**: Usa el comando `git clone` para clonar tu fork localmente.
3. **Realizar Cambios**: Haz tus cambios de documentación en tu repositorio local.
4. **Confirmar Cambios**: Usa `git commit` para confirmar tus cambios.
5. **Enviar Cambios**: Usa `git push` para enviar tus cambios a tu fork.
6. **Crear Pull Request**: En el repositorio original, haz clic en la pestaña "Pull Requests", luego haz clic en "New Pull Request".
7. **Completar Información del Pull Request**:

   * Título: Describe tus cambios de manera concisa

   * Descripción: Explica en detalle la motivación e impacto de tus cambios
8. **Enviar Pull Request**: Haz clic en "Create Pull Request" para enviar tus cambios.
9. **Esperar Revisión**: Los mantenedores del proyecto revisarán tu Pull Request.

