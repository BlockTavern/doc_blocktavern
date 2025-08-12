---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: Здесь каждый блок имеет свою историю, каждый игрок - легенда
  image:
    src: /logo.png
    alt: BlockTavern Logo
  actions:
    - theme: brand
      text: Перейти к руководству
      link: /ru-RU/InstallationTutorial/installation-details
    - theme: alt
      text: Руководство разработчика (Документация)
      link: /ru-RU/DevelopmentGuide/development-details

features:
  - icon: 📦
    title: Руководство по установке
    details: Установите игру BlockTavern и приготовьтесь начать свое приключение
    link: /ru-RU/InstallationTutorial/installation-details

  - icon: 🎮
    title: Руководство по игре
    details: Изучите основные правила и геймплей игры
    link: /ru-RU/GameplayGuide/server-rules

  - icon: ❓
    title: Часто задаваемые вопросы
    details: Быстро решите ваши проблемы
    link: /ru-RU/FAQ/faq-details
---

### Краткое описание вклада

```sh
# Клонировать репозиторий
git clone https://github.com/your-username/doc_blocktavern.git

# Перейти в каталог проекта
cd doc_blocktavern

# Установить зависимости
npm install

# Запустить сервер разработки
npm run docs:dev

# Добавить все изменения
git add .

# Зафиксировать содержимое
git commit -m "docs: обновление содержимого документации"

# Отправить изменения
git push origin main
```

::: warning Внимание
Убедитесь, что ваша версия Node.js >= 16.0, и что вы уже сделали fork оригинального репозитория.
:::

### Процесс внесения вклада

1. **Fork репозитория**: Нажмите кнопку "Fork" в правом верхнем углу репозитория, чтобы создать копию в вашем аккаунте GitHub.
2. **Клонировать репозиторий**: Используйте команду `git clone` для клонирования вашего fork на локальную машину.
3. **Внести изменения**: Внесите изменения в документацию в вашем локальном репозитории.
4. **Зафиксировать изменения**: Используйте `git commit` для фиксации ваших изменений.
5. **Отправить изменения**: Используйте `git push` для отправки ваших изменений в ваш fork.
6. **Создать Pull Request**: В оригинальном репозитории нажмите вкладку "Pull Requests", затем нажмите "New Pull Request".
7. **Заполнить информацию о Pull Request**:
   - Заголовок: Кратко опишите ваши изменения
   - Описание: Подробно объясните мотивацию и влияние ваших изменений
8. **Отправить Pull Request**: Нажмите "Create Pull Request" для отправки ваших изменений.
9. **Ожидать рассмотрения**: Сопровождающие проекта рассмотрят ваш Pull Request.
