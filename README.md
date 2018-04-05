# Домашнее задание "Performance"

Домашнее задание #7 в ШРИ Яндекса 2018.

## Задание

![Лайфхакер](reports/screenshot.png)

Найти проблемы со скоростью загрузки сайта [Лайфхакер](https://lifehacker.ru) и предложить способы их решения.

## Запуск

```bash
$ npm i
```

Посмотреть архив отчётов (только lighthouse, psi — выводится в cli):

```bash
npm start
```

Провести аудит сайта:

```bash
npm run audit
```

## Выполнение задания

- Сохранил страницу в репозиторий для истории, весь аудит проводился на реальном сайте.
- Добавил `<meta name="robots" content="noindex">` в сохранённый сайт.
- Для аудита использовал:
  - [lighthouse](https://github.com/GoogleChrome/lighthouse)
  - [psi](https://github.com/addyosmani/psi)
- Сгенерировал несколько отчетов.
