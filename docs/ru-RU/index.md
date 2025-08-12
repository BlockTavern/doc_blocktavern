---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: Здесь каждый блок имеет историю, каждый игрок - легенда
  image:
    src: /logo.png
    alt: BlockTavern Logo
  actions:
    - theme: brand
      text: Начать обучение
      link: /ru-RU/InstallationTutorial/installation-details
    - theme: alt
      text: Руководство разработчика (Внести вклад в документацию)
      link: /ru-RU/DevelopmentGuide/development-details

features:
  - icon: 📦
    title: Руководство по установке
    details: Установите игру BlockTavern и подготовьтесь к началу приключения
    link: /ru-RU/InstallationTutorial/installation-details

  - icon: 🎮
    title: Руководство по игре
    details: Изучите основные правила и игровые механики
    link: /ru-RU/GameplayGuide/server-rules

  - icon: ❓
    title: Часто задаваемые вопросы
    details: Быстро решите ваши проблемы
    link: /ru-RU/FAQ/faq-details
---

### Обзор вклада

```sh
# Клонировать репозиторий
git clone https://github.com/your-username/doc_blocktavern.git

# Перейти в директорию проекта
cd doc_blocktavern

# Установить зависимости
npm install

# Запустить сервер разработки
npm run docs:dev

# Добавить все изменения
git add .

# Зафиксировать содержимое
git commit -m "docs: обновить содержимое документации"

# Отправить изменения
git push origin main
```

::: warning Примечание
Убедитесь, что ваша версия Node.js >= 16.0 и вы уже сделали форк оригинального репозитория.
:::

### Процесс внесения вклада

1. **Форк репозитория**: Нажмите кнопку "Fork" в правом верхнем углу репозитория, чтобы создать копию в вашем аккаунте GitHub.
2. **Клонирование репозитория**: Используйте команду `git clone` для клонирования вашего форка локально.
3. **Внесение изменений**: Внесите изменения в документацию в вашем локальном репозитории.
4. **Фиксация изменений**: Используйте `git commit` для фиксации ваших изменений.
5. **Отправка изменений**: Используйте `git push` для отправки изменений в ваш форк.
6. **Создание Pull Request**: В оригинальном репозитории нажмите вкладку "Pull Requests", затем нажмите "New Pull Request".
7. **Заполнение информации Pull Request**:
   - Заголовок: Кратко опишите ваши изменения
   - Описание: Подробно объясните мотивацию и влияние ваших изменений
8. **Отправка Pull Request**: Нажмите "Create Pull Request" для отправки ваших изменений.
9. **Ожидание проверки**: Сопровождающие проекта проверят ваш Pull Request.
