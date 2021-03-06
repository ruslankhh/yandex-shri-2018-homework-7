# Домашнее задание "Performance"

Домашнее задание #7 в ШРИ Яндекса 2018.

## Задание

![Лайфхакер](reports/screenshot.png)

- [x] Найти проблемы со скоростью загрузки сайта [Лайфхакер](https://lifehacker.ru) и предложить способы их решения.

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
  - [psi](https://github.com/addyosmani/psi) (PageSpeed Insights)
- Сгенерировал несколько отчётов.

### Отчёт

#### Lighthouse Performance Mobile

Общая оценка: **6/100**.

- Первая отрисовка (First Paint): **неизвестно**
- Первая значимая отрисовка (First Meaningful Paint): **6 870 мс**
- Первая интерактивность (First Interactive): **34 910 мс**
- Последовательная интерактивность (Consistently Interactive): **слишком долго**
- Индекс перцептивной скорости (Perceptual Speed Index): **15 655**
- Предполагаемое время задержки ввода (Estimated Input Latency): **401 мс**

#### Lighthouse Performance Desktop

Общая оценка: **22/100**.

- Первая отрисовка (First Paint): **неизвестно**
- Первая значимая отрисовка (First Meaningful Paint): **4 040 мс**
- Первая интерактивность (First Interactive): **25 580 мс**
- Последовательная интерактивность (Consistently Interactive): **25 580 мс**
- Индекс перцептивной скорости (Perceptual Speed Index): **25 898**
- Предполагаемое время задержки ввода (Estimated Input Latency): **384 мс**

#### PageSpeed Insights Mobile

```bash
URL:       lifehacker.ru
Strategy:  mobile
Speed:     63
Usability: 99

CSS size                                   | 401 kB
HTML size                                  | 497 kB
Image size                                 | 1.06 MB
JavaScript size                            | 3.2 MB
CSS resources                              | 18
Hosts                                      | 45
JS resources                               | 73
Resources                                  | 184
Static resources                           | 94
Other size                                 | 126 kB
Total size of request bytes sent           | 60.8 kB

Enable GZIP compression                    | 1.12
Leverage browser caching                   | 17.13
Minify CSS                                 | 0.06
Minify HTML                                | 0.44
Minify JavaScript                          | 0.24
Minimize render blocking resources         | 40
Optimize images                            | 2
Size tap targets appropriately             | 0.15
```

#### PageSpeed Insights Desktop

```bash
URL:       lifehacker.ru
Strategy:  desktop
Speed:     78

CSS size                                   | 416 kB
HTML size                                  | 680 kB
Image size                                 | 5.51 MB
JavaScript size                            | 3.4 MB
CSS resources                              | 24
Hosts                                      | 44
JS resources                               | 81
Resources                                  | 218
Static resources                           | 124
Other size                                 | 195 kB
Total size of request bytes sent           | 62 kB

Enable GZIP compression                    | 1.09
Leverage browser caching                   | 11.42
Minify CSS                                 | 0.06
Minify HTML                                | 0.53
Minify JavaScript                          | 0.24
Minimize render blocking resources         | 10
Optimize images                            | 2.52
```

### Проблемы и способы их решения

- Блокировка основного потока скриптами.
    - Для критических сценариев можно вложить скрипты в HTML.
    - Для некритических можно использовать специальные атрибуты: `async` или `defer`.
- Блокировка основного потока стилями.
    - Стили можно разбить на разные файлы и добавить атрибут `media`.
    - Можно вставить поблочно стили перед теми блоками где они необходимы в HTML.
- Несовременные форматы изображений (Там даже есть GIF, размером в 3 748 Кб).
    - Можно использовать форматы изображений следующего поколения (JPEG 2000, JPEG XR, and WebP).
- Неоптимизированный порядок доставки ресурсов.
    - Можно использовать `<link rel="preload">` для определения приоритетности получения ресурсов.
- Неэффективная загрузка изображений.
    - Можно использовать ленивую подгрузку в фоне. Загружать сначала только те изображения, которые видны, а после в фоне скрытые (вне поля видимости пользователя) изображения.
- Лишние стили.
    - Можно оставить только те стили CSS, которые используются на странице.
- Неотзывчивые изображения.
    - Можно добавить отзывчивые изображения. Чтобы для конкретных размеров блоков/эканов загружались изображения оптимального размера.
- Неоптимизированные изображения.
    - Необходимо оптимизировать изображения, уменьшив их размер.
    - Элементы интерфейса можно объединить в спрайты.
- Нет сжатия текста.
    - Добавить сжатие текста с помощью gzip, deflate или brotli.
- Большая сетевая награзка.
    - Слишком много грузится данных. Нужно меньше загружать данных или делать это по запросу пользователя.
- Неэффективная политика кэша.
    - Можно более оптимально разбить скрипты и стили на разные файлы и кэшировать на больший период те, которые реже меняются.
- Избыточный размер DOM: 2 449 узла.
    - Нужно уменьшить количество элементов в DOM-е. Упростить вёрстку, избавиться от излишней вложенности, использовать современные способы вёрстки.
- Слишком много критических запросов: 47.
    - Объединить скрипты в несколько файлов.
    - Объединить стили в несколько файлов.
    - Удалить неиспользуемые модули в файлах сторонных библиотек (jQuery, Font Awesome). Там даже в коде есть такой комментарий:
        ```html
        <!-- TODO: remove -->
        <link rel="stylesheet" href="index_files/font-awesome.css">
        ```
- Время загрузки скриптов слишком большое: 13 620 мс.
    - Возможно стоит отказаться от такого количества скриптов статистики и рекламы<br> (оставить только Яндекс ;)
- Время работы основного потока слишком велико: 22 090 мс.
    - Возможно стоит писать меньше кода и делать его проще, что его обработка и выполнение происходили быстрее.
