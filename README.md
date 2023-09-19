# rizky-betest
BE Test BTPN

Untuk menggunakan service nya ikuti langkah langkah berikut ini :
1. Clone Repositori: Klon repositori ini ke mesin lokal Anda.
2. Siapkan MongoDB nya kemudian jalankan
3. Buka direktori proyeknya menggunakan terminal kemudian masukan perintah "npm install" lalu "node app.js"
4. Buka Postman sebagai tool untuk hit API nya
5. Silahkan login dengan hit API POST dengan path http://localhost:3000/auth/login dan beri username "admin123" dan password "passadmin123" lalu postman akan mengenerate akses token
6. Setelah akses token didapatkan, akses token ditambahkan ke Authorization Header untuk melakukan request API yang lain
7. Gunakan method GET dengan path http://localhost:3000/user atau http://localhost:3000/user/:id
8. Gunakan method POST dengan path http://localhost:3000/user dan beri userName, accountNumber, emailAddress, dan identityNumber untuk request body nya
9. Gunakan method PUT dengan path http://localhost:3000/user/:id dan beri userName, accountNumber, emailAddress, dan identityNumber untuk request body nya
10. Gunakan method DELETE dengan path http://localhost:3000/user/:id
