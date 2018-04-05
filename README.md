# Домашнее задание "Performance"

Домашнее задание #7 в ШРИ Яндекса 2018.

## Задание

Найти проблемы со скоростью загрузки сайта [Лайфхакер](https://lifehacker.ru) и предложить способы их решения.

## Запуск

```bash
$ npm i
```

Посмотреть локальную копию сайта:

```bash
npm start
```

Провести аудит оригинального сайта:

```bash
npm run audit
```

Посмотреть архив отчетов:

```bash
npm run report
```

## Выполнение задания

- Сохранил страницу в репозиторий для истории, весь аудит проводился на реальном сайте.
- Добавил `<meta name="robots" content="noindex">` в сохранённый сайт.
- Для аудита использовал утилиту [lighthouse](https://github.com/GoogleChrome/lighthouse).
- Сгенерировал несколько отчетов.
