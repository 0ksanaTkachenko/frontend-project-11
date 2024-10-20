### Hexlet tests and linter status:

[![Actions Status](https://github.com/0ksanaTkachenko/frontend-project-11/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/0ksanaTkachenko/frontend-project-11/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/19cefcbb93a77c94340e/maintainability)](https://codeclimate.com/github/0ksanaTkachenko/frontend-project-11/maintainability)

[![ESLint Status](https://github.com/0ksanaTkachenko/frontend-project-11/actions/workflows/eslint.yml/badge.svg)](https://github.com/0ksanaTkachenko/frontend-project-11/actions)

## Access the Application

- [View the application on Vercel](https://frontend-project-11-eight-brown.vercel.app/)

# RSS Aggregator

## О проекте

RSS Aggregator — это приложение, которое позволяет пользователям добавлять и отслеживать RSS-каналы. Приложение обеспечивает валидацию вводимых данных и автоматически обновляет список постов каждые 5 секунд, чтобы отображать новые записи из добавленных RSS-каналов.

## Технологии

В проекте использовались следующие технологии:

- **Bootstrap** для стилизации интерфейса.
- **Webpack** для сборки модулей.
- **Yup** для валидации форм.
- **on-change** для отслеживания изменений состояния.
- **i18next** для интернационализации текстов интерфейса.
- **Axios** для выполнения HTTP-запросов.
- **All Origins** для обхода ограничений CORS.

## Особенности приложения

- После отправки данных формы приложение производит валидацию URL-адреса. Если адрес невалидный, рамка вокруг инпута подсвечивается красным.
- Если введенный URL уже существует в списке фидов, он не пройдет валидацию.
- После успешного добавления потока форма возвращается в первоначальное состояние: инпут очищается, и фокус устанавливается на него.
- Все тексты интерфейса выводятся с использованием i18next.
- Приложение загружает и отображает данные RSS-потока, включая заголовок (title) и описание (description).
- Пользователь видит список постов, загруженных из каждого потока, который заполняется после успешного добавления нового потока. Каждый элемент списка представляет собой ссылку на пост, где текст ссылки — название поста.
- Каждые 5 секунд приложение проверяет все добавленные RSS-потоки на наличие новых постов и добавляет только новые записи в список.
- Пользователь может просмотреть пост по клику на кнопку рядом с названием поста. Заголовок (title) и описание (description) поста появляются в модальном окне.
- При нажатии на кнопку предпросмотра поста он помечается как прочитанный.

## Развертывание

Приложение задеплоено на [Vercel](https://vercel.com).

## Установка и запуск

1. Клонируйте репозиторий на свой локальный компьютер:
   ```console
   git clone https://github.com/0ksanaTkachenko/frontend-project-11
   ```
2. Перейдите в директорию проекта:
   ```console
   cd frontend-project-11
   ```
3. Установите зависимости:
   ```console
   make install
   ```
4. Запустите приложение:
   ```console
   make start
   ```
