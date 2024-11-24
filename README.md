Тестовое задание для компании Infomaximum
## Запуск
[Vercel](https://kupi-avto.vercel.app)
## Локальный запуск
1. Склонируйте репозиторий командой `git clone https://github.com/jqvelin/kupi-avto`
2. Установите зависимости для клиента
```
cd kupi-avto
cd client

npm i
// В случае ошибок с версиями библиотек:
npm i --legacy-peer-deps
```
3. Установите зависимости для сервера
```
cd ..
cd server
npm i
```
4. Запустите сервер командой `npm run start`
5. Запустите клиент
```
cd ..
cd client
npm run start
```
6. В файле client/src/shared/api.ts замените BASE_URL на локальный хост
7. Откройте страницу http://localhost:3000
