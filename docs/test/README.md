# Тестування працездатності системи
## Запуск серверу
![Server Start](./1.png)

## pgAdmin4 ДБ
![pgAdmin4 db](./2.png)

## Метод GET
### GET /
#### Запит
![Server serverReq](./1_1.png)
#### Відповідь
![Server serverRes](./1_2.png)

### GET /USER
#### Запит
![Server userReq](./11_1.png)
#### Відповідь
![Server userRes](./11_2.png)

### GET /USER/:ID Існуючий користувач/Не існуючий користувач
#### Запит 
![Server userIdCorrectReq](./22_1.png)
#### Відповідь
![Server userIdCorrectRes](./22_2.png)

#### Запит 
![Server userIdWrongReq](./33_1.png)
#### Відповідь
![Server userIdWrongRes](./33_2.png)

## Метод POST
#### Запит 
![Server postReq](./2_1.png)
#### Відповідь
![Server postRes](./2_2.png)

## Метод PATCH
#### Запит 
![Server patchUserCorrectReq](./3_1.png)
#### Відповідь
![Server patchUserCorrectRes](./3_2.png)

## Метод DELETE
#### Запит (виконала запит 2, щоб впевнетись чи видалився користувач)
![Server deleteReq](./4_1.png)
#### Відповідь
![Server deleteRes](./4_2.png)

