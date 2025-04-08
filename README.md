# **Laporan Praktikum**

|  | Pemrograman Berbasis Framework 2025 |
|--|--|
| NIM |  2241720223|
| Nama |  Sukma Bagus Wahasdwika |
| Kelas | TI - 3D | 

## **Langkah-langkah Praktikum**
### Praktikum 1 : Persiapan Lingkungan
1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan
menjalankan perintah berikut di terminal atau command prompt:
   - **node-v**
   - **npm-v**

2. Buat direktori baru untuk proyek Next.js Anda
   * mkdir website-pribadi
   * cd website-pribadi
     
3. Inisialisasi proyek Next.js dengan menjalankan perintah berikut: Perhatikan bahwa App Router belum digunakan
   * npx create-next-app@latest . --typescript –app

4. Cek konfigurasi postcss.config.mjs:

    ![alt text](<img/0.png>)
   
5. Cek di app/globals.css, sudah ada import untuk tailwindcss:

    ![alt text](<img/0.1.png>)

6. Buka app/layout.tsx, tambahkan import './globals.css', dan modifikasi menjadi sebagai berikut:

    ![alt text](<img/6.png>)
    
7. Jalankan aplikasi Next.js:

    ![alt text](<img/7.png>)


### Praktikum 2 : Membuat Halaman Website
1. Buat file app/page.tsx sebagai halaman "Tentang Saya": 

    ![alt text](<img/1.1.png>)

2. Buat file app/projects/page.tsx sebagai halaman "Proyek": 

    ![alt text](<img/1.2.png>)

3. Buat file app/essays/page.tsx sebagai halaman "Esai": 

    ![alt text](<img/1.3.png>)

4. Buka browser dan akses:
   - http://localhost:3000/ untuk halaman "Tentang Saya".

     ![alt text](<img/ttgsaya.png>)

   - http://localhost:3000/projects untuk halaman "Proyek".
  
     ![alt text](<img/projects.png>)

   - http://localhost:3000/essays untuk halaman "Esai".

     ![alt text](<img/Essay.png>)

### Praktikum 3 : Membuat Layout dan Navigasi 
1. Buat direktori src/components jika belum ada. 

    ![alt text](<img/2.1.png>)

2. Buat file src/components/Layout.tsx: 

    ![alt text](<img/2.2.png>)
    
3. Buat file src/components/Navbar.tsx 

    ![alt text](<img/2.3.png>)

4. Buat file src/components/Footer.tsx

    ![alt text](<img/2.4.png>)

5. Update file app/layout.tsx untuk menggunakan layout:

    ![alt text](<img/2.5.png>)

6. Update setiap halaman menambahkan metadata dengan generateMetadata: 

    ![alt text](<img/2.6.png>)

    ![alt text](<img/ttgsaya.png>)

### Praktikum 4 : Membuat Halaman Proyek dengan Grid Responsi 
1. Buat folder di public/images. Kemudian tambahkan dua image, lalu rename dengan nama
project1.png dan project2.png 

    ![alt text](<img/3.1.png>)

2. Modifikasi file app/projects/page.tsx

    - Tambahkan import next/image dan beberapa image yang telah ditambahkan sebelumnya

        ![alt text](<img/3.2.png>)

    - Buat card project item sebagai berikut:

        ![alt text](<img/3.3.png>)

    - Modifikasi komponen project sebagai berikut:

        ![alt text](<img/3.4.png>)

4. Simpan file dan buka http://localhost:3000/projects di browser. Anda akan melihat daftar proyek
dalam grid yang responsif

    ![alt text](<img/proyekRespon.png>)


### Tugas
Eksplorasi Tailwindcss, kemudian.

1. Modifikasi halaman "Esai" dengan Grid daftar artikel yang telah ditulis.

    Kode Program:

      ![alt text](<img/kodetugas1.png>)

    Tampilan:   

      ![alt text](<img/tampilantugas1t.png>)
   
2. Modifikasi halaman “Tentang Saya” Buat tampilan yang menarik

   Kode Program:

      ![alt text](<img/kodetugas2.png>)

   Tampilan:   

      ![alt text](<img/tampilantugas2.png>)


### Kesimpulan

Dalam praktikum ini, Anda telah mempelajari cara membangun website pribadi menggunakan Next.js
(App Router), React, dan Tailwind CSS. Anda juga telah mengimplementasikan fitur-fitur seperti routing,
layout, serta komponen reusable.
