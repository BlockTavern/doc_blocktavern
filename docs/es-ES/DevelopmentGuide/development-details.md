---
title: Guía de contribución
description: Guía completa de contribución a la documentación de BlockTavern
order: 1
---

# Guía de contribución

¡Bienvenido al proyecto de documentación de BlockTavern! Esta guía te ayudará a comenzar rápidamente y enviar contribuciones de alta calidad.

## Preparación del entorno

### Requisitos del sistema

- **Node.js** 18+ 
- **Git** versión más reciente
- Cuenta de **GitHub**

### Herramientas de desarrollo recomendadas

- **VS Code** + extensión de Markdown
- **GitHub Desktop** (opcional)

::: tip Optimización de imágenes
Antes de usar imágenes locales, comprime el tamaño del archivo o usa un servicio de alojamiento de imágenes estable para mejorar la velocidad de carga.
:::

## Inicio rápido

### 1. Hacer fork del proyecto

1. Visita el repositorio del proyecto: [doc_blocktavern](https://github.com/Re0XIAOPA/doc_blocktavern)
2. Haz clic en el botón **Fork** en la esquina superior derecha
3. Espera a que se complete el fork

### 2. Desarrollo local

```bash
# Clonar tu fork
git clone https://github.com/YOUR_USERNAME/doc_blocktavern.git
cd doc_blocktavern

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run docs:dev
```

Visita `http://localhost:5173` para previsualizar el sitio de documentación.

### 3. Crear rama

```bash
# Crear rama de funcionalidad
git checkout -b feature/your-feature-name

# O rama de corrección
git checkout -b fix/your-fix-name
```

## Flujo de contribución

### 1. Escribir contenido

- Edita o crea documentos en el directorio `docs/zh-CN/`
- Sigue las [normas de escritura de documentación](./writing-docs.md)
- Vista previa en tiempo real: el navegador se actualiza automáticamente después de guardar

### 2. Enviar cambios

```bash
# Agregar archivos modificados
git add .

# Confirmar cambios (usando mensaje de confirmación estándar)
git commit -m "docs: agregar descripción de nueva funcionalidad"

# Enviar a tu fork
git push origin feature/your-feature-name
```

### 3. Crear Pull Request

1. Visita la página de tu repositorio fork
2. Haz clic en el botón **Compare & pull request**
3. Completa la información del PR:
   - **Título**: describe brevemente el contenido de los cambios
   - **Descripción**: explica detalladamente la razón e impacto de los cambios
4. Haz clic en **Create pull request**

### 4. Esperar revisión

- Los mantenedores del proyecto revisarán tu PR
- Pueden solicitar modificaciones o complementos
- Después de la aprobación de la revisión se fusionará con la rama principal

## Normas de confirmación

### Formato de mensaje de confirmación

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Tipo (type)**:
- `docs`: actualización de documentación
- `feat`: nueva funcionalidad
- `fix`: corrección de problemas
- `style`: ajuste de formato
- `refactor`: refactorización

**Ejemplos**:
```bash
git commit -m "docs(guide): agregar tutorial de instalación"
git commit -m "fix(config): corregir error de configuración de barra lateral"
git commit -m "feat(search): agregar función de búsqueda"
```

### Normas de nomenclatura de ramas

- `feature/nombre-funcionalidad`: desarrollo de nueva funcionalidad
- `fix/descripcion-problema`: corrección de problemas
- `docs/tipo-documento`: actualización de documentación
- `refactor/contenido-refactorizacion`: refactorización de código

## Tipos de contribución

### Contribución de documentación

- **Agregar documentación**: crear nuevas guías o tutoriales
- **Mejorar contenido**: complementar información detallada de documentos existentes
- **Corregir errores**: corregir información errónea en la documentación
- **Trabajo de traducción**: traducir documentos en chino a otros idiomas

### Contribución técnica

- **Optimización de configuración**: mejorar la configuración de VitePress
- **Embellecimiento de estilos**: optimizar los estilos del sitio de documentación
- **Mejora de funcionalidades**: agregar nuevas funciones de documentación
- **Optimización de rendimiento**: mejorar la velocidad de carga del sitio

## Estándares de calidad

### Calidad de documentación

- [ ] Contenido preciso y sin errores
- [ ] Expresión de lenguaje clara
- [ ] Estructura jerárquica razonable
- [ ] Ejemplos de código ejecutables
- [ ] Enlaces válidos y accesibles
- [ ] Imágenes claras y apropiadas

### Calidad técnica

- [ ] Estilo de código consistente
- [ ] Sintaxis de configuración correcta
- [ ] Pruebas de construcción exitosas
- [ ] Buena compatibilidad

## Obtener ayuda

Cuando encuentres problemas puedes:

1. **Consultar documentación existente**: [Estructura del proyecto](./project-structure.md), [Descripción de configuración](./configuration.md)
2. **Enviar Issue**: crear un reporte de problema en el repositorio de GitHub
3. **Contactar mantenedores**: a través de GitHub o canales de la comunidad
4. **Recursos de referencia**: [Documentación oficial de VitePress](https://vitepress.dev/)

---

¡Gracias por tu contribución! Cada contribución hace que la documentación de BlockTavern sea mejor.

<Contributors />

<GitHistoryInformation />