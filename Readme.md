## StreetFlow

Program ini merupakan projek E-Commerce StreetFlow yang terdiri dari dua direktori yaitu:

- Backend : https://github.com/K1StreetFlow/streetflow_be
- Frontend : https://github.com/K1StreetFlow/streetflow_fe

## Persyaratan

Untuk dapat menjalankan aplikasi, pastikan telah memenuhi persyaratan berikut:

- Node.js
- PostgreSQL
- Browser
- Postman (optional)

## Instalasi

1. Clone kedua repositori ini ke komputer:

   ```bash
   Frontend : git clone https://github.com/K1StreetFlow/streetflow_fe.git

   Backend : git clone https://github.com/K1StreetFlow/streetflow_be.git

2. Buka ke direktori Backend

3. Install package module dari kedua direktori 

   ```bash
   npm install  
   
4. Buatlah file baru dengan nama `.env` kemudian atur dan sesuaikan dengan program dan database anda

    ```bash
    PORT=...

    DB_USERNAME=....
    DB_PASSWORD=....
    DB_NAME=....
    DB_HOST=localhost
    JWT_SECRET=....

    MIDTRANS_SERVER_KEY=....
    MIDTRANS_CLIENT_KEY=....


5. Lakukan migration dan seeder data ke database kalian :

    ```bash
    npm run reset

    * command tersebut akan melakukan migration serta seeder data ke database kalian

6. Proses selesai


## Demo Program
1. Pastikan semua program sudah benar dan terhubung ke database, kemudian jalankan kedua direktori program dengan terminal menggunakan command berikut : 

   ```bash
   npm run dev

2. Untuk menjalankan Dokumentasi API dapat dilakukan di Postman atau semisalnya 

3. Berikut Full Dokumentasi APInya jika kalian ingin melakukan testing :

* Address
![Address-Create](uploads/Dokumentasi%20API/1%20-%20Address%20-%20Create.png)
![Address-Delete](uploads/Dokumentasi%20API/1%20-%20Address%20-%20Delete.png)
![Address-Edit](uploads/Dokumentasi%20API/1%20-%20Address%20-%20Edit.png)
![Address-GetAll](uploads/Dokumentasi%20API/1%20-%20Address%20-%20GET%20all.png)
![Address-GetID](uploads/Dokumentasi%20API/1%20-%20Address%20-%20GET%20By%20ID.png)

* Admin
![Admin-Create](uploads/Dokumentasi%20API/2%20-%20Admin%20-%20Create.png)
![Admin-Delete](uploads/Dokumentasi%20API/2%20-%20Admin%20-%20Delete.png)
![Admin-GetAll](uploads/Dokumentasi%20API/2%20-%20Admin%20-%20GET%20All%20Admin.png)
![Admin-GetID](uploads/Dokumentasi%20API/2%20-%20Admin%20-%20GET%20By%20ID.png)
![Admin-Edit](uploads/Dokumentasi%20API/2%20-%20Admin%20-%20Update%20By%20ID.png)

* Auth Admin
![Admin-Login](uploads/Dokumentasi%20API/2%20-%20Admin%20-%20Login.png)
![Admin-Logout](uploads/Dokumentasi%20API/2%20-%20Admin%20-%20Logout.png)

* Cart Detail
![Cart_Details-Create](uploads/Dokumentasi%20API/3%20-%20Cart%20Detail%20-%20Create.png)
![Cart_Details-Delete](uploads/Dokumentasi%20API/3%20-%20Cart%20Detail%20-%20Delete.png)
![Cart_Details-Edit](uploads/Dokumentasi%20API/3%20-%20Cart%20Detail%20-%20Edit.png)
![Cart_Details-GetAll](uploads/Dokumentasi%20API/3%20-%20Cart%20Detail%20-%20Get%20All.png)
![Cart_Details-GetCart](uploads/Dokumentasi%20API/3%20-%20Cart%20Detail%20-%20Get%20By%20Cart.png)
![Cart_Details-GetID](uploads/Dokumentasi%20API/3%20-%20Cart%20Detail%20-%20Get%20By%20ID.png)

* Carts
![Carts-Create](uploads/Dokumentasi%20API/4%20-%20Carts%20-%20Create.png)
![Carts-Delete](uploads/Dokumentasi%20API/4%20-%20Carts%20-%20Delete.png)
![Carts-Edit](uploads/Dokumentasi%20API/4%20-%20Carts%20-%20Edit.png)
![Carts-GetAll](uploads/Dokumentasi%20API/4%20-%20Carts%20-%20Get%20All.png)
![Carts-GetID](uploads/Dokumentasi%20API/4%20-%20Carts%20-%20Get%20By%20ID.png)

* Category Products
![Category_Products-Create](uploads/Dokumentasi%20API/5%20-%20Category%20Product%20-%20Create.png)
![Category_Products-Delete](uploads/Dokumentasi%20API/5%20-%20Category%20Product%20-%20Delete.png)
![Category_Products-Edit](uploads/Dokumentasi%20API/5%20-%20Category%20Product%20-%20Update.png)
![Category_Products-GetAll](uploads/Dokumentasi%20API/5%20-%20Category%20Product%20-%20GET%20All.png)
![Category_Products-GetID](uploads/Dokumentasi%20API/5%20-%20Category%20Product%20-%20GET%20By%20ID.png)

* Order
![Order-Create](uploads/Dokumentasi%20API/6%20-%20Order%20-%20Create.png)
![Order-Delete](uploads/Dokumentasi%20API/6%20-%20Order%20-%20Delete.png)
![Order-Edit](uploads/Dokumentasi%20API/6%20-%20Order%20-%20Update.png)
![Order-GetAll](uploads/Dokumentasi%20API/6%20-%20Order%20-%20GET%20All.png)
![Order-GetID](uploads/Dokumentasi%20API/6%20-%20Order%20-%20GET%20By%20ID.png)
![Order-GetUser](uploads/Dokumentasi%20API/6%20-%20Order%20-%20GET%20Order%20By%20User.png)

* Payment
![Payment-CreateProcess](uploads/Dokumentasi%20API/7%20-%20Payment%20-%20Create%20Process%20Payment.png)
![Payment-Create](uploads/Dokumentasi%20API/7%20-%20Payment%20-%20Create.png)
![Payment-Delete](uploads/Dokumentasi%20API/7%20-%20Payment%20-%20Delete.png)
![Payment-Edit](uploads/Dokumentasi%20API/7%20-%20Payment%20-%20Edit.png)
![Payment-GetAll](uploads/Dokumentasi%20API/7%20-%20Payment%20-%20Get%20All.png)
![Payment-GetID](uploads/Dokumentasi%20API/7%20-%20Payment%20-%20Get%20By%20ID.png)

* Photo Products
![PhotoProducts-Create](uploads/Dokumentasi%20API/8%20-%20Photo%20Product%20-%20Upload%20.png)
![PhotoProducts-Delete](uploads/Dokumentasi%20API/8%20-%20Photo%20Product%20-%20Delete.png)
![PhotoProducts-Edit](uploads/Dokumentasi%20API/8%20-%20Photo%20Product%20-%20Edit%20Photo%20.png)
![PhotoProducts-GetAll](uploads/Dokumentasi%20API/8%20-%20Photo%20Product%20-%20GET%20All.png)
![PhotoProducts-GetID](uploads/Dokumentasi%20API/8%20-%20Photo%20Product%20-%20GET%20By%20%20ID.png)
![PhotoProducts-View](uploads/Dokumentasi%20API/8%20-%20Photo%20Product%20-%20View%20Photo.png)

* Products
![Products-Create](uploads/Dokumentasi%20API/9%20-%20Product%20-%20Create.png)
![Products-Delete](uploads/Dokumentasi%20API/9%20-%20Product%20-%20Delete.png)
![Products-Edit](uploads/Dokumentasi%20API/9%20-%20Product%20-%20Update.png)
![Products-GetAll](uploads/Dokumentasi%20API/9%20-%20Product%20-%20GET%20All.png)
![Products-GetID](uploads/Dokumentasi%20API/9%20-%20Product%20-%20GET%20By%20ID.png)

* Review Products
![ReviewProducts-Create](uploads/Dokumentasi%20API/10%20-%20Review%20-%20Create.png)
![ReviewProducts-Delete](uploads/Dokumentasi%20API/10%20-%20Review%20-%20Delete.png)
![ReviewProducts-Edit](uploads/Dokumentasi%20API/10%20-%20Review%20-%20Edit.png)
![ReviewProducts-GetAll](uploads/Dokumentasi%20API/10%20-%20Review%20-%20Get%20all.png)

* Shipping
![Shipping-Create](uploads/Dokumentasi%20API/11%20-%20Shipping%20-%20Create.png)
![Shipping-Delete](uploads/Dokumentasi%20API/11%20-%20Shipping%20-%20Delete.png)
![Shipping-Edit](uploads/Dokumentasi%20API/11%20-%20Shipping%20-%20Update.png)
![Shipping-GetAll](uploads/Dokumentasi%20API/11%20-%20Shipping%20-%20GET%20All.png)
![Shipping-GetID](uploads/Dokumentasi%20API/11%20-%20Shipping%20-%20GET%20By%20ID.png)

* User
![User-Delete](uploads/Dokumentasi%20API/12%20-%20User%20-%20Delete.png)
![User-Edit](uploads/Dokumentasi%20API/12%20-%20User%20-%20Update.png)
![User-GetAll](uploads/Dokumentasi%20API/12%20-%20User%20-%20Get%20All.jpeg)
![User-GetID](uploads/Dokumentasi%20API/12%20-%20User%20-%20GET%20by%20ID.jpeg)

* Auth User
![AuthUser-GetID](uploads/Dokumentasi%20API/12%20-%20User%20-%20Register.jpeg)
![AuthUser-GetID](uploads/Dokumentasi%20API/12%20-%20User%20-%20Login.jpeg)
![AuthUser-GetID](uploads/Dokumentasi%20API/12%20-%20User%20-%20Logout.jpeg)

* Checkout Products
![Checkout-Create](uploads/Dokumentasi%20API/13%20-%20Checkout%20Product%20-%20Create.png)
![Checkout-Delete](uploads/Dokumentasi%20API/13%20-%20Checkout%20Product%20-%20Delete.png)
![Checkout-GetAll](uploads/Dokumentasi%20API/13%20-%20Checkout%20Product%20-%20Get%20All.png)
![Checkout-GetID](uploads/Dokumentasi%20API/13%20-%20Checkout%20Product%20-%20Get%20By%20ID.png)
![Checkout-GetOrder](uploads/Dokumentasi%20API/13%20-%20Checkout%20Product%20-%20Get%20By%20Order.png)

5. Untuk dapat mengakses tampilan dari dari Dashboard dan User Customer, kalian harus menjalankan Readme yang ada di direktori frontend
