# Kesalahan dan Perbaikan Proyek Sistem Industri

## 1. Error JSX di main.js
**Kesalahan**: File `src/main.js` berisi JSX (React component) tapi ekstensinya `.js`. Vite hanya memproses JSX di file dengan ekstensi `.jsx` atau `.tsx`.

**Gejala**: Error "Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension."

**Perbaikan**:
- Rename `src/main.js` menjadi `src/main.jsx`
- Update `index.html`: ganti `<script src="/src/main.js">` menjadi `<script src="/src/main.jsx">`

**Langkah**:
1. Jalankan `ren src\main.js main.jsx` di terminal
2. Edit `index.html` untuk update script src

## 2. Dependensi React Hilang
**Kesalahan**: Proyek tidak punya `react` dan `react-dom` terinstall, padahal aplikasi menggunakan React.

**Gejala**: Error saat import React atau saat render komponen.

**Perbaikan**:
- Install dependensi: `npm install react react-dom`

**Langkah**:
1. Jalankan `npm install react react-dom` di folder proyek

## 3. Entry Point Tidak Merender App
**Kesalahan**: `src/main.jsx` masih menggunakan template Vite default (menampilkan logo dan tombol counter), bukan merender komponen `App`.

**Gejala**: Halaman menampilkan template Vite, bukan aplikasi monitoring produksi.

**Perbaikan**:
- Ganti isi `src/main.jsx` dengan kode React yang merender `<App />`:
  ```jsx
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './assets/App';
  import './style.css';

  const rootElement = document.getElementById('app');
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  ```

**Langkah**:
1. Ganti seluruh isi `src/main.jsx` dengan kode di atas

## 4. Import Path Salah
**Kesalahan**: `App.jsx` mengimport `KartuMesin` dari `'./Komponen/KartuMesin'`, tapi file sebenarnya di `./kartumesin.jsx`.

**Gejala**: Error "Module not found" atau komponen tidak muncul.

**Perbaikan**:
- Update import di `App.jsx`: `import KartuMesin from './kartumesin';`

**Langkah**:
1. Edit `src/assets/App.jsx` dan ganti import path

## 5. CSS Tidak Sesuai Aplikasi
**Kesalahan**: `src/style.css` masih menggunakan gaya template Vite default, bukan untuk aplikasi monitoring dengan card dan grid.

**Gejala**: Tampilan tidak rapi, tidak ada styling untuk card, badge, dll.

**Perbaikan**:
- Buat ulang `src/style.css` dengan variabel CSS custom dan styling untuk:
  - Layout grid
  - Card components
  - Badge colors
  - Input search
  - Responsive design

**Langkah**:
1. Ganti seluruh isi `src/style.css` dengan gaya baru yang sesuai aplikasi

## 6. Struktur HTML Tidak Semantik
**Kesalahan**: `App.jsx` menggunakan div biasa tanpa struktur HTML yang baik (header, section, dll).

**Gejala**: Kode tidak terstruktur, sulit dibaca dan maintain.

**Perbaikan**:
- Tambahkan struktur HTML semantik:
  - `<header>` untuk judul dan deskripsi
  - `<section>` untuk grup komponen
  - `<div className="row">` untuk grid layout

**Langkah**:
1. Edit `src/assets/App.jsx` dan tambahkan struktur HTML yang lebih baik

## 7. Tidak Ada Fitur Pencarian
**Kesalahan**: Aplikasi tidak punya input untuk mencari mesin atau karyawan.

**Gejala**: Tidak bisa filter data berdasarkan input user.

**Perbaikan**:
- Tambahkan state `search` dengan `useState`
- Buat array data untuk mesin dan karyawan
- Tambahkan input field di header
- Filter data berdasarkan search term
- Tampilkan pesan "empty state" jika tidak ada hasil

**Langkah**:
1. Import `useState` di `App.jsx`
2. Buat array `mesinData` dan `karyawanData`
3. Tambahkan state `search` dan fungsi filter
4. Tambahkan `<input type="search">` di header
5. Update render untuk menggunakan data yang difilter
6. Tambahkan styling untuk input dan empty state di CSS

## Ringkasan Langkah Utama
1. Install dependensi: `npm install react react-dom`
2. Rename `main.js` ke `main.jsx` dan update `index.html`
3. Ganti isi `main.jsx` untuk render `<App />`
4. Perbaiki import path di `App.jsx`
5. Buat ulang `style.css` dengan styling modern
6. Tambahkan struktur HTML semantik di `App.jsx`
7. Tambahkan fitur pencarian dengan state dan filter
8. Jalankan `npm run dev` dan buka `http://localhost:5173`