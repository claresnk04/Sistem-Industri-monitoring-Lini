Aplikasi Web dan Mobile
Manual Praktikum
Semester Genap 2025/2026
Mata Kuliah : Aplikasi Web dan Mobile
Dosen Pengampu : Dr. Eng. Ir. Aji Ery Burhandenny, S.T., M.AIT.
Program Studi Teknik Industri
Fakultas Teknik
Universitas Negeri Yogyakarta

Kata Pengantar
Selamat datang di mata kuliah Aplikasi Web dan Mobile. Sebagai calon insinyur industri,
kemampuan Anda tidak hanya cukup pada perancangan sistem pabrik atau manajemen rantai
pasok, tetapi juga pada kemampuan untuk mengotomasi dan memvisualisasikan data tersebut.
Era Industri 4.0 menuntut integrasi sistem (IoT, ERP, MES) yang semuanya berjalan di atas
browser maupun perangkat mobile.
Manual ini disusun dengan pendekatan project-based learning di mana setiap baris kode
yang Anda tulis memiliki tujuan akhir: menyelesaikan masalah nyata di industri, mulai dari
pencatatan produksi hingga monitoring inventori. Siapkan mental Anda, karena dalam 16
pertemuan ini, Anda akan bertransformasi menjadi seorang Industrial Engineer yang melek
teknologi.
Yogyakarta, 25 Januari 2026
Dr. Eng. Ir. Aji Ery Burhandenny, S.T., M.AIT.

DAFTAR ISI
PENDAHULUAN Instalasi Git & Penggunaan Version Control di VS Code ..........................4
PERTEMUAN 1 Pengenalan Pemrograman Web & HTML Dasar...........................................7
PERTEMUAN 2 CSS Dasar & Styling .................................................................................. 11
PERTEMUAN 3 Layout CSS Lanjutan (Flexbox & Grid) + Bootstrap.................................15
PERTEMUAN 4 JavaScript Dasar (Variabel, Tipe Data, Operator, Control Flow) ...............19
PERTEMUAN 5 Function, Array, Object di JavaScript.........................................................22
PERTEMUAN 6 DOM Manipulation & Event Handling ......................................................25
PERTEMUAN 7 Form Validation & Local Storage...............................................................29
PERTEMUAN 8 Asynchronous JavaScript (Fetch API, JSON, REST API Sederhana)........34
PERTEMUAN 9 Pengenalan React.js (Component, JSX, Props)..........................................38
PERTEMUAN 10 State, Hooks (useState, useEffect), dan Conditional Rendering...............42
PERTEMUAN 11 React Routing & Multi-Page App + Integrasi API ...................................46
PERTEMUAN 12 Proyek Web: Dashboard Monitoring Produksi (React + Chart.js) ...........50
PERTEMUAN 13 Ujian Tengah Semester (UTS)...................................................................54
PERTEMUAN 14 Pengenalan React Native & Setup Expo ..................................................57
PERTEMUAN 15 Component, Navigation, dan Styling di React Native + Proyek Mobile.62
PERTEMUAN 16 Ujian Akhir Semester (UAS)....................................................................67
PENUTUP................................................................................................................................69

PENDAHULUAN
Instalasi Git & Penggunaan Version Control di VS Code
Tujuan: Mempersiapkan lingkungan kerja profesional dengan sistem kontrol versi (Git) untuk
backup kode, manajemen revisi, dan persiapan pengumpulan tugas.
1. Apa itu Git dan GitHub?
Git: Alat pencatat perubahan ("Time Machine") pada kode Anda. Jika Anda salah
menghapus kode hari ini, Git bisa mengembalikannya ke kondisi kemarin.
GitHub: Layanan "Cloud" untuk menyimpan kode Git Anda. Sebagai insinyur, Anda akan
sering berkolaborasi menggunakan Git.
2. Langkah Instalasi
a. Download Git:
Kunjungi git-scm.com dan download versi untuk Windows (atau sesuai OS Anda).
Install dengan klik "Next" terus hingga selesai (gunakan pengaturan default).
b. Konfigurasi Identitas (PENTING):
Buka Terminal di VS Code (`Ctrl + ~`) atau Command Prompt, ketik perintah berikut
dan ganti dengan nama dan email Anda. Ini akan merekam siapa yang membuat kode
tersebut.
git config --global user.name "Nama Lengkap Anda"
git config --global user.email "email@kampus.ac.id"
c. Buat Akun GitHub:
Kunjungi github.com dan daftar akun gratis.
3. Alur Kerja Git di VS Code (GUI)
Untuk mahasiswa Teknik Industri, kita akan menggunakan antarmuka visual (GUI) VS
Code yang lebih mudah daripada mengetik perintah terminal manual.
Alur Dasar:
a. Changes: Anda mengedit kode.
b. Stage: Anda menandai file mana yang akan disimpan (diklik tanda +).
c. Commit: Anda memberi catatan/rekam jejak perubahan tersebut.
d. Push: Anda mengirimkan rekaman tersebut ke Cloud (GitHub).
4. Praktik: Memulai Proyek dengan Git
Skenario: Anda akan mulai membuat folder untuk Praktikum.
a) Buat Repository di GitHub:
 Login ke GitHub. Klik tombol + (pojok kanan atas) → New repository.
 Repository name: `PraktikumWebMob_TekInd_2026`.
 Pilih Public.
 Centang "Add a README file".
 Klik Create repository.
b) Clone ke Komputer Lokal:
 Di halaman repository GitHub yang baru dibuat, klik tombol hijau Code, lalu
copy URL (HTTPS).
 Buka VS Code.
 Pilih menu File → Clone Repository...
 Paste URL tadi. Pilih lokasi di komputer Anda (misal: Desktop) untuk
menyimpan folder project.
 Klik "Open" setelah proses clone selesai.
c) Simpan Perubahan Pertama (Commit):
 Buka folder `PraktikumWebMob_TekInd_2026` di VS Code.
 Buat file baru `belajar.html`, isi dengan `<h1>Halo Dunia</h1>`.
 Lihat menu di sebelah kiri, klik ikon Source Control (ikon dengan lingkaran
bercabang).
 Anda akan melihat `belajar.html` muncul di kolom Changes.
 Hover ke `belajar.html`, klik tanda + (Stage Changes). File pindah ke kolom
Staged Changes.
 Isi kotak "Message": `Menambahkan file pertama`.
 Klik tombol Check (Commit).
 Keterangan: Perubahan kini sudah tersimpan di riwayat Git lokal komputer
Anda.
d) Kirim ke Cloud (Push):
 Klik tombol titik tiga (... ) di menu Source Control.
 Pilih Push.
 VS Code akan meminta login GitHub (Gunakan akun yang sudah dibuat).
 Setelah sukses, cek halaman GitHub Anda. File `belajar.html` akan muncul di
sana.
5. Istilah Penting yang Sering Muncul
Istilah Arti
Untracked File baru yang belum dikenal Git.
Modified File yang sudah di-Commit sebelumnya, tapi isinya berubah.
Staged Siap untuk disimpan (ada di antrian).
Commit Snapshot (foto) dari kode Anda pada saat itu.
Pull Mengambil update terbaru dari GitHub ke komputer (selalu lakukan ini
sebelum kerja jika kolaborasi).
6. Troubleshooting Git Umum
 Masalah: Error "Failed to push" atau "Authentication failed".Solusi: GitHub sudah tidak mendukung login password biasa. Anda perlu menggunakan
Personal Access Token (PAT) atau login melalui pop-up browser yang diizinkan VS
Code.
 Masalah: VS Code tidak merespon perubahan.
Solusi: Cek apakah file tersimpan (`Ctrl+S`). Git hanya memantau file yang tersimpan
di disk.
Catatan untuk Mahasiswa:
Pada setiap akhir pertemuan praktikum, disarankan Anda melakukan Commit & Push ke
repository GitHub pribadi Anda. Ini berfungsi sebagai backup otomatis agar pekerjaan/tugas
Anda tidak hilang jika komputer error.

PERTEMUAN 1
Pengenalan Pemrograman Web & HTML Dasar
Durasi: 340 Menit
Topik: Struktur halaman web, elemen HTML semantik, dan formulir dasar.
1. Tujuan Pembelajaran
a. Memahami peran penting web application dalam sistem informasi industri.
b. Mampu menjelaskan struktur dasar HTML dan cara kerjanya di browser.
c. Mampu membuat halaman web statis dengan elemen teks, gambar, dan tabel.
d. Mampu menyusun formulir input data sederhana (misal: data produksi).
2. Kompetensi yang Dicapai
a. Mahasiswa dapat mengoperasikan kode editor (VS Code) untuk membuat file HTML.
b. Mahasiswa memahami penggunaan tag HTML untuk menyajikan data teknis industri.
3. Persiapan (Instalasi)
a. Visual Studio Code (VS Code): Download dan install dari code.visualstudio.com.
b. Google Chrome: Sebagai browser utama untuk pengujian.
c. Ekstensi VS Code: Install "Live Server" (oleh Ritwick Dey) untuk melihat perubahan
web secara real-time.
4. Materi Singkat
Mengapa HTML untuk Teknik Industri?
HTML (HyperText Markup Language) adalah kerangka dasar dari sebuah halaman web.
Bayangkan Anda ingin membuat digital checklist atau sistem pelaporan kerusakan mesin.
HTML adalah tempat di mana Anda menyusun tata letak input data tersebut.
Struktur Dasar HTML:
HTML menggunakan "tag" untuk menandai elemen. Struktur utamanya adalah:
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Judul Halaman</title>
</head>
<body>
<!-- Konten Visible di sini -->
</body>
</html>
Tag Penting:
`<h1>` hingga `<h6>` : Judul (Heading).
`<p>` : Paragraf teks.
`<table>`, `<tr>`, `<th>`, `<td>`: Tabel (sangat penting untuk data laporan).
`<form>`, `<input>`, `<label>` : Formulir input data.`<div>` : Kontainer pembungkus (block).
`<span>` : Pembungkus teks (inline).
5. Langkah-langkah Praktikum
a. Langkah 1: Membuat File HTML
1) Buka VS Code.
2) Buat folder baru di desktop bernama `PraktikumWeb_TekInd`.
3) Di dalam VS Code, pilih File > Open Folder dan pilih folder tersebut.
4) Buat file baru bernama `index.html`.
5) Ketik `!` lalu tekan Tab (atau Enter). VS Code akan otomatis membuatkan kerangka
HTML dasar.
b. Langkah 2: Menyusun Profil Lini Produksi
Kita akan membuat halaman profil sebuah mesin produksi. Hapus isi `<body>` dan
ganti dengan kode berikut:
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Data Mesin Produksi - Lini A</title>
</head>
<body>
<h1>Profil Mesin CNC-01</h1>
<hr>
<h2>Spesifikasi Teknis</h2>
<ul>
<li><strong>Merk:</strong> Yamazaki Mazak</li>
<li><strong>Kapasitas:</strong> 500 unit/hari</li>
<li><strong>Status:</strong> <span style="color: green;">Operasional</span></li>
</ul>
<h2>Jadwal Pemeliharaan</h2>
<table border="1" cellpadding="10">
<thead>
<tr>
<th>Tanggal</th>
<th>Jenis Perawatan</th>
<th>Penanggung Jawab</th>
</tr>
</thead>
<tbody>
<tr>
<td>12 Jan 2024</td>
<td>Penggantian Oli</td>
<td>Teknisi A</td>
</tr>
<tr>
<td>15 Feb 2024</td>
<td>Kalibrasi Presisi</td>
<td>Teknisi B</td>
</tr>
</tbody>
</table>
</body>
</html>c. Langkah 3: Membuat Form Input Data Produksi
Di bawah tabel pada Langkah 2, tambahkan kode berikut untuk membuat formulir input
harian:
<hr>
<h2>Input Data Harian</h2>
<form action="">
<label for="tanggal">Tanggal:</label><br>
<input type="date" id="tanggal" name="tanggal" required><br><br>
<label for="shift">Shift Kerja:</label><br>
<select id="shift" name="shift">
<option value="Pagi">Pagi (08:00 - 16:00)</option>
<option value="Siang">Siang (16:00 - 24:00)</option>
<option value="Malam">Malam (00:00 - 08:00)</option>
</select><br><br>
<label for="jumlah">Jumlah Produksi (Unit):</label><br>
<input type="number" id="jumlah" name="jumlah" min="0" placeholder="Masukkan
jumlah..."><br><br>
<label for="catatan">Catatan Kerusakan:</label><br>
<textarea id="catatan" name="catatan" rows="4" cols="50"
placeholder="Deskripsikan jika ada kendala..."></textarea><br><br>
<button type="submit">Simpan Data</button>
</form>
d. Langkah 4: Menjalankan File
1) Klik kanan pada area kode `index.html`.
2) Pilih "Open with Live Server".
3) Browser akan terbuka otomatis menampilkan halaman yang Anda buat.
6. Latihan/Tugas Mandiri
1) Latihan 1 (Pengayaan Tabel): Tambahkan satu kolom baru di tabel "Jadwal
Pemeliharaan" bernama "Status" dan isi datanya secara manual (Selesai/Pending).
2) Latihan 2 (Validasi Dasar): Pada input "Jumlah Produksi", tambahkan atribut `max`
dengan nilai 600 (maksimal kapasitas mesin).
3) Latihan 3 (Semantic HTML): Bungkus judul "Profil Mesin" dan spesifikasinya
menggunakan tag `<header>` dan `<section>` agar kode lebih rapi dan semantik.
4) Tugas Proyek Mini (Relevansi Industri):
Buatlah halaman HTML baru bernama `laporan_kualitas.html`. Halaman ini berisi
formulir "Laporan Inspeksi Kualitas" dengan field:
 ID Produk (Text)
 Nama Inspektur (Text)
 Jenis Cacat (Radio Button: Geometri, Permukaan, Fungsional)
 Jumlah Cacat (Number) Foto Produk (Input type file - placeholder saja)
 Tombol Submit
7. Petunjuk Pengumpulan Tugas
a. Simpan seluruh file dalam folder `Pertemuan1_NIM_NamaMahasiswa`.
b. Kompres (zip) folder tersebut.
c. Unggah ke GDrive kelas dan kirim via email dosen dengan subjek: [WebLab1] Nama -
NIM.
8. Troubleshooting Umum
 Masalah: Live Server tidak muncul saat klik kanan.
Solusi: Pastikan ekstensi sudah terinstall dan reload VS Code (`Ctrl+Shift+P` →
"Developer: Reload Window").
 Masalah: Tabel terlihat berantakan.
Solusi: Nanti kita akan rapikan dengan CSS. Untuk sekarang, pastikan tag `</table>`
sudah ditutup dengan benar.

PERTEMUAN 2
CSS Dasar & Styling
Durasi: 340 Menit
Topik: Pengenalan CSS, Selectors, Box Model, dan Styling Form.
1. Tujuan Pembelajaran
a. Memahami cara kerja CSS untuk mempercantik antarmuka pengguna (UI).
b. Mampu memanipulasi warna, font, dan ukuran elemen.
c. Menguasai konsep Box Model (Margin, Border, Padding) untuk tata letak.
d. Menerapkan CSS pada formulir agar terlihat profesional dan mudah digunakan.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat mengubah tampilan HTML standar menjadi desain yang lebih
menarik.
b. Mahasiswa memahami prioritas selektor CSS (Inline vs Internal vs External).
3. Persiapan
a. File `index.html` dari pertemuan sebelumnya.
b. Koneksi internet (untuk referensi font Google Fonts jika diperlukan).
4. Materi Singkat
Mengapa UI itu Penting?
Seorang insinyur industri merancang sistem yang digunakan oleh operator. Sistem yang
sulit dibaca (kontras rendah) atau tombol yang terlalu kecil akan menyebabkan human error
dan menurunkan produktivitas. CSS mengatasi masalah ini.
Cara Menanamkan CSS:
1) Inline: `<h1 style="color:red">` (Tidak disarankan, kode berantakan).
2) Internal: `<style>` di dalam `<head>` (Cocok untuk halaman kecil).
3) External: File `.css` terpisah (Standar industri - praktikum ini menggunakan cara ini).
Box Model:
Setiap elemen HTML dianggap kotak.
- `content`: Teks/gambar.
- `padding`: Jarak isi ke garis tepi (dalam).
- `border`: Garis tepi.
- `margin`: Jarak elemen ke elemen lain (luar).5. Langkah-langkah Praktikum
a. Langkah 1: Membuat File CSS Eksternal
1) Buka folder `PraktikumWeb_TekInd`.
2) Buat file baru bernama `style.css`.
3) Buka `index.html`, dan hubungkan ke file CSS dengan menambahkan kode ini di
dalam `<head>`:
<link rel="stylesheet" href="style.css">
b. Langkah 2: Styling Body dan Tipografi
Buka `style.css` dan masukkan kode berikut untuk memberikan settingan global:
/* Import Font dari Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
body {
font-family: 'Roboto', sans-serif;
background-color: #f4f4f4; /* Warna abu-abu muda untuk background */
color: #333;
margin: 0;
padding: 20px;
}
h1 {
color: #2c3e50; /* Biru tua gelap */
text-align: center;
border-bottom: 2px solid #2c3e50;
padding-bottom: 10px;
}
h2 {
color: #34495e;
margin-top: 30px;
}
c. Langkah 3: Styling Tabel Data
Kita akan membuat tabel agar lebih mudah dibaca (readability) operator lantai produksi.
table {
width: 100%;
border-collapse: collapse; /* Menggabungkan border ganda menjadi satu */
margin-top: 20px;
box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Efek bayangan halus */
}
th, td {
padding: 12px;
text-align: left;
border-bottom: 1px solid #ddd;
}
th {
background-color: #2980b9; /* Biru profesional */
color: white;
}
tr:hover {
background-color: #f1f1f1; /* Highlight baris saat mouse diarahkan */
}d. Langkah 4: Styling Formulir (Fokus pada UX)
Agar formulir mudah diisi, kita buat input field lebih lebar dan jelas.
form {
background-color: white;
padding: 20px;
border-radius: 8px; /* Sudut melengkung */
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
max-width: 600px;
margin: 0 auto; /* Formulir berada di tengah */
}
label {
display: block;
margin-bottom: 5px;
font-weight: bold;
}
input[type="text"],
input[type="number"],
input[type="date"],
select,
textarea {
width: 100%; /* Lebar penuh */
padding: 10px;
margin-bottom: 15px;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box; /* Padding tidak menambah lebar total */
} /
* Styling khusus tombol */
button {
background-color: #27ae60; /* Hijau */
color: white;
padding: 12px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
width: 100%;
font-size: 16px;
}
button:hover {
background-color: #219150; /* Hijau lebih gelap saat hover */
}
e. Langkah 5: Melihat Hasil
Simpan semua file. Browser (jika Live Server aktif) akan otomatis refresh. Lihat
perubahan drastis dari tampilan sebelumnya.
6. Latihan/Tugas Mandiri
1) Latihan 1 (Class Selector): Berikan kelas `status-ok` pada teks status operasional di
HTML, dan berikan warna hijau tebal di CSS. Berikan kelas `status-down` dan berikan
warna merah.
2) Latihan 2 (Layout Container): Buat sebuah `<div>` dengan id `container` di HTML
yang membungkus seluruh konten. Di CSS, berikan `max-width: 800px`, `margin: 0
auto`, dan `background: white` agar konten terlihat seperti kertas di tengah layar.
3) Tugas Proyek Mini (Industri):
Terapkan styling CSS yang sama ke file `laporan_kualitas.html` yang Anda buat di
pertemuan 1.a. Tambahkan aturan CSS agar tombol "Reset" (jika ada) berwarna merah
(`#c0392b`).
b. Pastikan form responsif (tetap rapi saat di-zoom).
7. Petunjuk Pengumpulan Tugas
a. Simpan seluruh file dalam folder `Pertemuan2_NIM_NamaMahasiswa`.
b. Pastikan menyertakan file `style.css`.
c. Unggah sesuai format ketentuan.
8. Troubleshooting Umum
 Masalah: Style tidak berubah.
Solusi: Cek apakah link `<link>` di `index.html` sudah benar filenamanya. Cek apakah
ada typo di nama class/id. Clear cache browser (`Ctrl+F5`).
 Masalah: Input form melebar keluar layar.
Solusi: Pastikan properti `box-sizing: border-box` diterapkan pada elemen input (seperti
di contoh).

PERTEMUAN 3
Layout CSS Lanjutan (Flexbox & Grid) + Bootstrap
Durasi: 340 Menit
Topik: CSS Flexbox, CSS Grid, dan Framework CSS (Bootstrap 5) untuk prototyping cepat.
1. Tujuan Pembelajaran
a. Memahami konsep layout modern menggunakan Flexbox dan Grid.
b. Mengenal dan menggunakan Framework CSS (Bootstrap) untuk mempercepat
pengembangan UI.
c. Mampu membuat layout dashboard responsif (Sidebar + Main Content).
d. Menerapkan komponen Bootstrap (Card, Navbar, Button) pada konteks industri.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat menyusun elemen halaman web secara otomatis (ralat) tanpa harus
mengatur margin/padding satu per satu.
b. Mahasiswa mampu membuat halaman web yang responsif (tampilan menyesuaikan
layar HP/Desktop).
3. Persiapan
Pastikan terkoneksi internet untuk mengunduh library Bootstrap via CDN.
4. Materi Singkat
Mengapa Framework & Layout System?
Sebagai insinyur, Anda tidak ingin membuat ulang baut dan mur setiap kali merancang
mesin. Sama halnya dengan coding, kita menggunakan framework seperti Bootstrap agar
tidak perlu menulis CSS dari nol.
 Flexbox: Idealisasi layout 1 dimensi (baris atau kolom). Sangat baik untuk menyusun
item di dalam navbar.
 CSS Grid: Idealisasi layout 2 dimensi (baris dan kolom sekaligus). Sangat cocok untuk
Dashboard KPI di mana Anda perlu membagi layar menjadi kotak-kotak informasi.
 Bootstrap: Framework CSS populer yang menyediakan kelas-kelas siap pakai (misal:
`.btn-primary`, `.row`, `.col`).
5. Langkah-langkah Praktikum
a. Langkah 1: Integrasi Bootstrap 5
Buka file `index.html` dari pertemuan sebelumnya. Hapus link ke `style.css` sementara
(atau biarkan di bawah agar bisa melakukan custom override). Tambahkan CDN
Bootstrap di dalam `<head>`:
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sistem Monitoring Produksi</title>
<!-- Bootstrap CSS CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
rel="stylesheet">
<!-- Custom CSS kita tetap di bawah agar bisa menimpa style bootstrap jika perlu -->
<link rel="stylesheet" href="style.css">
</head>
<body>
<!-- Konten akan kita masukkan di sini -->
<!-- Bootstrap JS Bundle (diperlukan untuk komponen interaktif seperti dropdown) -->
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js">
</script>
</body>
</html>
b. Langkah 2: Membuat Navigasi Bar (Navbar)
Hapus konten lama di dalam `<body>`, ganti dengan Navbar industri:
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
<a class="navbar-brand" href="">TekInd Systems</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
data-bs-target="#navbarNav">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link active" href="">Dashboard</a>
</li>
<li class="nav-item">
<a class="nav-link" href="">Input Produksi</a>
</li>
<li class="nav-item">
<a class="nav-link" href="">Inventori</a>
</li>
</ul>
</div>
</div>
</nav>
c. Langkah 3: Layout Grid Dashboard (Sistem Grid)
Di bawah navbar, kita buat sistem Grid 12 kolom khas Bootstrap. Kita akan buat
dashboard dengan 3 kartu di atas (KPI Utama) dan tabel di bawah.
<div class="container mt-4">
<!-- Row 1: KPI Cards (Menggunakan Grid System) -->
<div class="row mb-4">
<!-- Kolom lebar 4 (dari 12) -->
<div class="col-md-4">
<div class="card text-white bg-primary mb-3">
<div class="card-header">Total Produksi</div>
<div class="card-body">
<h5 class="card-title">1,250 Unit</h5>
<p class="card-text">Target Harian: 1,200 Unit</p>
</div></div>
</div>
<!-- Kolom lebar 4 -->
<div class="col-md-4">
<div class="card text-white bg-success mb-3">
<div class="card-header">Efisiensi Mesin</div>
<div class="card-body">
<h5 class="card-title">92%</h5>
<p class="card-text">Status: Optimal</p>
</div>
</div>
</div>
<!-- Kolom lebar 4 -->
<div class="col-md-4">
<div class="card text-white bg-warning mb-3">
<div class="card-header">Reject Rate</div>
<div class="card-body">
<h5 class="card-title">1.5%</h5>
<p class="card-text">Perlu perhatian shift malam</p>
</div>
</div>
</div>
</div>
<!-- Row 2: Tabel Data -->
<div class="row">
<div class="col-12">
<h3>Data Log Produksi Real-time</h3>
<table class="table table-striped table-hover">
<thead class="table-dark">
<tr>
<th>Waktu</th>
<th>Mesin</th>
<th>Produk</th>
<th>Jumlah</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td>08:00</td>
<td>CNC-01</td>
<td>Part A-12</td>
<td>50</td>
<td><span class="badge bg-success">OK</span></td>
</tr>
<tr>
<td>08:15</td>
<td>CNC-02</td>
<td>Part B-05</td>
<td>45</td>
<td><span class="badge bg-danger">Error</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
d. Langkah 4: Styling Form dengan Bootstrap Classes
Kita ubah form manual tadi menjadi form rapi Bootstrap. Tambahkan di bawah tabel
atau di halaman terpisah.
<div class="container mt-5">
<h2>Form Input Produksi Manual</h2><form>
<div class="mb-3">
<label for="kodeMesin" class="form-label">Kode Mesin</label>
<input type="text" class="form-control" id="kodeMesin" placeholder="Contoh:
CNC-01">
</div>
<div class="mb-3">
<label for="shiftSelect" class="form-label">Pilih Shift</label>
<select class="form-select" id="shiftSelect">
<option selected>Pilih...</option>
<option value="1">Shift 1 (Pagi)</option>
<option value="2">Shift 2 (Siang)</option>
<option value="3">Shift 3 (Malam)</option>
</select>
</div>
<div class="mb-3">
<label for="jumlahProduksi" class="form-label">Jumlah Produksi</label>
<input type="number" class="form-control" id="jumlahProduksi">
</div>
<button type="submit" class="btn btn-primary">Kirim Data</button>
</form>
</div>
6. Latihan/Tugas Mandiri
1) Latihan 1 (Grid Responsif): Coba ubah ukuran layar browser Anda. Perhatikan
bagaimana kartu KPI yang tadinya sejajar (3 kolom) akan menumpuk ke bawah (1
kolom) di layar HP. Ini adalah kekuatan Grid System (`col-md-4` artinya 4 kolom di
layar medium ke atas, otomatis 12 kolom/1 baris di layar kecil).
2) Latihan 2 (Modifikasi Card): Ubah kartu "Efisiensi Mesin" menjadi warna merah
(`bg-danger`) jika angkanya diubah menjadi di bawah 80%.
3) Tugas Proyek Mini (Dashboard Layout):
Buatlah struktur dashboard baru bernama `dashboard_inventori.html`.
a. Gunakan Bootstrap Grid.
b. Bagian atas: Judul "Gudang Bahan Baku".
c. Bagian kiri (4 kolom): Form Stok Masuk (Input nama barang, qty, supplier).
d. Bagian kanan (8 kolom): Tabel Stok Saat Ini (Gunakan tabel Bootstrap).
7. Petunjuk Pengumpulan Tugas
a. Simpan progress dalam folder `Pertemuan3_NIM_NamaMahasiswa`.
b. Kumpulkan link GitHub repository jika sudah mulai menggunakan Git, atau file zip.
8. Troubleshooting Umum
 Masalah: Tampilan berantakan atau gaya Bootstrap tidak muncul.
Solusi: Pastikan koneksi internet aktif karena kita menggunakan CDN. Cek URL CDNnya.
 Masalah: Navbar tidak bisa diklik (toggle) di HP.
Solusi: Pastikan script `bootstrap.bundle.min.js` disertakan di paling bawah `<body>`.

PERTEMUAN 4
JavaScript Dasar (Variabel, Tipe Data, Operator, Control Flow)
Durasi: 340 Menit
Topik: Logika pemrograman, variabel, tipe data, operator aritmatika/logika, dan percabangan.
1. Tujuan Pembelajaran
a. Memahami peran JavaScript sebagai "otak" dari halaman web.
b. Mampu mendeklarasikan variabel dan memahami aturan penamaannya.
c. Menguasai operator aritmatika untuk perhitungan sederhana.
d. Mampu menggunakan Control Flow (`if/else`, `switch`) untuk pengambilan keputusan
otomatis.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat kalkulasi otomatis di web (misal: hitung total gaji
berdasarkan lembur).
b. Mahasiswa memahami alur logika program.
3. Persiapan
Setting VS Code dengan ekstensi Quokka.js (opsional, untuk melihat hasil JS langsung)
atau menggunakan Console browser.
4. Materi Singkat
Mengapa JavaScript untuk Insinyur Industri?
Web statis (HTML/CSS) hanya menampilkan data. JavaScript memproses data.
Contoh: Operator menginput jumlah jam kerja. JS menghitung apakah jam kerja tersebut
normal atau lembur, lalu menghitung gaji yang harus dibayar secara otomatis. Ini adalah
dasar dari otomasi proses bisnis.
Konsep Dasar:
 Variabel: Tempat menyimpan data. Gunakan `let` (bisa diubah) dan `const` (tetap).
Hindari `var`.
 Tipe Data: Number (angka), String (teks), Boolean (benar/salah).
 Operator: `+`, `-`, `*`, `/`, `%` (sisa bagi), `===` (sama dengan), `>` (lebih besar),
`&&` (dan), `||` (atau).
 If/Else: "Jika kondisi A terjadi, lakukan X. Jika tidak, lakukan Y."
5. Langkah-langkah Praktikum
a. Langkah 1: Hello World & Variabel di Console
Buat file baru `script.js` dan hubungkan ke `index.html` (taruh di atas `</body>`):
`<script src="script.js"></script>`Isi `script.js` dengan kode berikut:
// Komentar single line
// 1. Variabel & Tipe Data
let namaMesin = "CNC-Mazak-01"; // String
let targetHarian = 500; // Number
let isOperational = true; // Boolean
// Menampilkan ke console browser (Tekan F12 -> Console)
console.log("Mesin: " + namaMesin);
console.log("Target: " + targetHarian);
// 2. Operator Aritmatika
let produksiPagi = 200;
let produksiSiang = 150;
let totalProduksi = produksiPagi + produksiSiang;
console.log("Total saat ini: " + totalProduksi);
// Hitung sisa kekurangan target
let kekurangan = targetHarian - totalProduksi;
console.log("Kekurangan target: " + kekurangan);
b. Langkah 2: Control Flow (Pengambilan Keputusan)
Kita akan membuat logika untuk menentukan apakah mesin perlu dimatikan untuk
maintenance atau tidak. Tambahkan kode berikut di `script.js`:
// Simulasi data pembacaan sensor (jam operasional)
let jamOperasional = 1250; // dalam jam
let batasMaksimal = 1200; // batas sebelum maintenance wajib
console.log("--- Cek Status Maintenance ---");
// Logika If/Else
if (jamOperasional >= batasMaksimal) {
console.log("PERINGATAN: Mesin mencapai batas maksimal!");
console.log("Status: MAINTENANCE WAJIB (Stop Produksi)");
} else if (jamOperasional > 1000) {
console.log("Status: SIAP HATI-HATI (Segera jadwalkan maintenance)");
} else {
console.log("Status: BERJALAN NORMAL");
}
c. Langkah 3: Studi Kasus Industri (Perhitungan OEE Sederhana)
Kita buat fungsi sederhana untuk menghitung efisiensi berdasarkan Availability.
// Data Input
let jamKerjaPlanned = 8; // Jam
let jamKerjaAktual = 6.5; // Jam (Ada 1.5 jam breakdown)
// Perhitungan
let availability = (jamKerjaAktual / jamKerjaPlanned) * 100;
// Pembulatan 2 angka di belakang koma
availability = availability.toFixed(2);
console.log("Planned Time: " + jamKerjaPlanned + " Jam");
console.log("Actual Time: " + jamKerjaAktual + " Jam");
console.log("Availability: " + availability + "%");
// Logika Penilaian Kualitas Availability
if (availability >= 90) {
console.log("Kategori: WORLD CLASS");} else if (availability >= 80) {
console.log("Kategori: BAIK (Tetap monitor)");
} else {
console.log("Kategori: BURUK (Perlu investigasi penyebab breakdown)");
}
d. Langkah 4: Interaksi DOM Sederhana (Alert & Prompt)
Ubah `script.js` agar berinteraksi dengan user via browser popup (hanya untuk latihan
logika, nanti kita gunakan form yang lebih baik).
let namaOperator = prompt("Masukkan Nama Operator:");
let shiftKerja = prompt("Masukkan Shift (Pagi/Siang/Malam):");
if (shiftKerja === "Malam") {
alert("Halo " + namaOperator + ", Shift malam memiliki tambahan uang makan sebesar Rp
20.000.");
} else {
alert("Halo " + namaOperator + ", Selamat bekerja. Tetap semangat!");
}
6. Latihan/Tugas Mandiri
1) Latihan 1 (Matematika): Buat variabel `gajiPokok` dan `jamLembur`. Hitung
`totalGaji` dengan asumsi upah lembur per jam adalah 1.5x dari gaji pokok dibagi 173
(jam kerja bulanan). Tampilkan hasilnya di console.
2) Latihan 2 (Logika Switch): Gunakan `switch` untuk mengkonversi kode shift angka (1,
2, 3) menjadi nama shift (Pagi, Siang, Malam). Jika input selain 1-3, tampilkan "Shift
Tidak Valid".
3) Tugas Proyek Mini (Kalkulator Biaya Produksi):
Buat program di `script.js` yang menghitung biaya produksi total per unit.
 Variabel: `biayaBahanBaku`, `biayaTenagaKerja`, `biayaOverhead`,
`jumlahProduksi`.
 Rumus: `totalPerUnit = (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) /
// jumlahProduksi`.
 Gunakan `if/else` untuk mengecek: jika `jumlahProduksi` < 100, tampilkan "Biaya
Tinggi (Ekonomi Skala Kecil)". Jika >= 100, tampilkan "Biaya Efisien".
7. Petunjuk Pengumpulan Tugas
a. Screenshot hasil Console (F12) yang menampilkan logika perhitungan biaya produksi.
b. Simpan kode di `Pertemuan4_NIM_NamaMahasiswa/script.js`.
8. Troubleshooting Umum
 Masalah: Hasil perhitungan menjadi penggabungan string (misal: "5" + 5 = "55") bukan
penjumlahan.
Solusi: Pastikan input dari `prompt` dikonversi ke number menggunakan
`Number(prompt(...))` atau `parseInt()`.
 Masalah: Logika `if` tidak berjalan sesuai harapan.
Solusi: Cek penggunaan `==` vs `===`. Di JS modern, gunakan selalu `===` (identik)
untuk membandingkan nilai dan tipe data.

PERTEMUAN 5
Function, Array, Object di JavaScript
Durasi: 340 Menit
Topik: Modularitas kode (Function), pengelolaan data list (Array), dan struktur data kompleks
(Object).
1. Tujuan Pembelajaran
a. Memahami konsep Function untuk menghindari pengulangan kode (DRY - Don't
Repeat Yourself).
b. Menguasai penggunaan Array untuk menyimpan sekumpulan data (misal: daftar cacat
produksi).
c. Memahami Object untuk merepresentasikan entitas nyata (misal: Spesifikasi Mesin)
dalam bentuk data.
d. Mampu melakukan iterasi (perulangan) terhadap Array dan Object.
2. Kompetensi yang Dicapai
1. Mahasiswa dapat menyusun kode JavaScript yang lebih terstruktur dan rapi.
2. Mahasiswa dapat memanipulasi data list seperti database sederhana di memori browser.
3. Persiapan
File `script.js` dan `index.html`.
4. Materi Singkat
Analogi Teknik Industri:
 Function: Seperti SOP (Standard Operating Procedure). Anda menulis instruksi sekali,
lalu bisa dipanggil/dijalankan berulang kali oleh operator berbeda tanpa menulis ulang
instruksi dari awal.
 Array: Seperti lemari arsip atau Excel sheet berisi baris data.
 Object: Seperti Kartu Identitas (KTP) atau Form Spesifikasi Teknis yang berisi banyak
detail tentang satu item.
Struktur:
 `function namaFungsi(param) { ... }`
 `let array = [1, 2, 3];`
 `let object = { properti1: nilai1, properti2: nilai2 };`
5. Langkah-langkah Praktikum
a. Langkah 1: Membuat Function Perhitungan
Buat file baru `pertemuan5.html` dan `pertemuan5.js`. Kita akan membuat kalkulator
energi listrik mesin.Di `pertemuan5.js`:
// 1. FUNCTION Declaration
// Fungsi untuk menghitung konsumsi daya (P = V x I)
function hitungDaya(tegangan, arus) {
let daya = tegangan * arus;
return daya; // Mengembalikan hasil
}
// Pemanggilan Function
let teganganMesin = 220; // Volt
let arusMesin = 10; // Ampere
let totalDaya = hitungDaya(teganganMesin, arusMesin);
console.log("Daya Mesin: " + totalDaya + " Watt");
b. Langkah 2: Array dan Looping (Daftar Produk Cacat)
Kita akan menyimpan daftar kode produk yang cacat dalam satu shift.
// 2. ARRAY
let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"]; // C-001 terjadi 2 kali
console.log("Jumlah Cacat: " + daftarCacat.length);
// Looping (Perulangan) untuk menampilkan setiap cacat
console.log("--- Laporan Detail Cacat ---");
for (let i = 0; i < daftarCacat.length; i++) {
console.log("Item ke-" + (i + 1) + " : " + daftarCacat[i]);
}
// Menambahkan data baru ke array
daftarCacat.push("C-099");
console.log("Setelah penambahan: " + daftarCacat);
c. Langkah 3: Object (Rekaman Data Mesin)
Representasi data mesin yang lebih kompleks.
// 3. OBJECT
let mesinA = {
id: "M-01",
nama: "Injection Molding 50 Ton",
merk: "Toshiba",
tahunBeli: 2018,
status: "Running",
spesifikasi: {
kecepatanMax: 200, // mm/s
tekananMax: 150 // bar
}
};
// Mengakses data object
console.log("Nama Mesin: " + mesinA.nama);
console.log("Status: " + mesinA.status);
console.log("Tekanan Max: " + mesinA.spesifikasi.tekananMax + " bar");
// Mengubah data object (Simulasi mesin rusak)
mesinA.status = "Breakdown";
console.log("Status Baru: " + mesinA.status);d. Langkah 4: Gabungan (Array of Objects)
Ini adalah cara data biasanya disimpan di aplikasi nyata (mirip JSON)..
// Array berisi beberapa object
let gudangMaterial = [
{ kode: "MAT-01", nama: "Baja Ringan", stok: 50, satuan: "Batang" },
{ kode: "MAT-02", nama: "Plastik ABS", stok: 120, satuan: "Kg" },
{ kode: "MAT-03", nama: "Oli Mesin", stok: 10, satuan: "Liter" }
];
console.log("--- Cek Stok Gudang ---");
// Menggunakan forEach untuk iterasi array object
gudangMaterial.forEach(function(item) {
console.log(item.kode + " - " + item.nama + " : " + item.stok + " " + item.satuan);
// Logika Re-order
if (item.stok < 20) {
console.log(" >>> PERINGATAN: Stok " + item.nama + " menipis! Segera PO.");
}
});
6. Latihan/Tugas Mandiri
1) Latihan 1 (Function): Buat function `hitungLingkaran(jariJari)` yang mengembalikan
nilai Luas dan Keliling. Tampilkan kedua nilai tersebut.
2) Latihan 2 (Array Manipulation): Dari array `daftarCacat` di atas, carilah berapa kali
cacat "C-001" muncul (Gunakan loop dan if/counter).
3) Tugas Proyek Mini (Sistem Antrian Job Shop):
Buat program simulasi antrian 3 pekerjaan mesin.
a. Buat Array of Objects bernama `antrianMesin`. Isi dengan 3 object job: `{idJob:
"J01", namaProses: "Drilling", durasi: 30}`.
b. Buat function `prosesAntrian(antrian)` yang menerima parameter array tersebut.
c. Di dalam function, tampilkan pesan: "Memproses Job [ID] - [Nama] selama [durasi]
menit" untuk setiap job dalam antrian.
d. Tambahkan 1 job baru ke array dan panggil function lagi.
7. Petunjuk Pengumpulan Tugas
a. Kumpulkan file `pertemuan5.js` di folder `Pertemuan5_NIM_NamaMahasiswa`
b. Pastikan memberikan komentar di kode yang menjelaskan fungsi dari setiap bagian.
8. Troubleshooting Umum
 Masalah: Lupa menulis kata kunci `return` di dalam function.
Solusi: Function yang tanpa `return` akan menghasilkan nilai `undefined`.
 Masalah: Error "Cannot read property of undefined".
Solusi: Terjadi saat Anda mencoba mengakses properti object atau index array yang
tidak ada. Cek kembali penulisan nama properti (case sensitive).

PERTEMUAN 6
DOM Manipulation & Event Handling
Durasi: 340 Menit
Topik: Document Object Model (DOM), Seleksi Elemen, dan Event Listeners.
1. Tujuan Pembelajaran
a. Memahami struktur DOM dan cara JavaScript melihat halaman web.
b. Mampu memanipulasi elemen HTML (mengubah teks, warna, kelas) secara dinamis
menggunakan JavaScript.
c. Mampu menangani interaksi pengguna (klik tombol, ketik keyboard) menggunakan
Event Listeners.
d. Menerapkan konsep ini untuk membuat simulasi Control Panel mesin industri.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat halaman web yang interaktif (tidak statis).
b. Mahasiswa memahami alur User Action → Event→ JS Logic → UI Update.
3. Persiapan
File `index.html`, `style.css`, dan `script.js` dari pertemuan sebelumnya.
4. Materi Singkat
Mengapa DOM & Event?
Bayangkan Anda mengontrol lampu di rumah. Saklar adalah Event (tindakan klik), kabel
listrik adalah Logic (JavaScript), dan lampu yang menyala/mati adalah perubahan DOM
(tampilan). Di industri, ini digunakan untuk tombol "Start/Stop" mesin pada dashboard
digital, atau peringatan visual yang berubah warna saat suhu mesin naik.
Konsep Kunci:
 DOM: Representasi terstruktur dari halaman web. JS bisa mengakses elemen seperti
`document.getElementById('id-elemen')`.
 Event: "Kejadian" yang terjadi di elemen, seperti `click`, `submit`, `input`, `change`.
 Manipulasi: Mengubah properti seperti `innerText`, `innerHTML`, `style.color`, atau
`classList`.
5. Langkah-langkah Praktikum
a. Langkah 1: Membuat UI Panel Kontrol di HTML
Buka `index.html`, tambahkan struktur HTML berikut di dalam container:
<!-- Simulasi Panel Kontrol Mesin (Meeting 6) -->
<div class="card mt-4">
<div class="card-header bg-dark text-white">Panel Kontrol Mesin-01</div>
<div class="card-body text-center">
<!-- Indikator Status -->
<div id="statusIndicator" class="alert alert-secondary" role="alert">Status: <strong>UNKNOWN</strong>
</div>
<h2 id="suhuMesin">25 °C</h2>
<p>Suhu Operasional Saat Ini</p>
<div class="d-grid gap-2 d-md-block">
<button id="btnStart" class="btn btn-success btn-lg">START</button>
<button id="btnStop" class="btn btn-danger btn-lg">STOP</button>
<button id="btnReset" class="btn btn-warning btn-lg">RESET</button>
</div>
</div>
</div>
b. Langkah 2: Seleksi Elemen di JavaScript
Buka `script.js` (atau buat file baru dan link-kan). Kita akan mengambil elemen yang
kita buat di atas.
// 1. Seleksi Elemen DOM
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const statusIndicator = document.getElementById('statusIndicator');
const suhuMesin = document.getElementById('suhuMesin');
const teksStatus = statusIndicator.querySelector('strong'); // Mengambil elemen <strong>
di dalam alert
// Variabel State
let suhu = 25;
let intervalId = null; // Untuk menyimpan ID timer
c. Langkah 3: Menambahkan Event Listener (Click)
Sekarang kita berikan "nyawa" pada tombol.
// Event Listener Tombol START
btnStart.addEventListener('click', function() {
// Ubah UI Status
statusIndicator.className = 'alert alert-success'; // Ganti class Bootstrap (Hijau)
teksStatus.innerText = 'RUNNING';
 // Logika simulasi kenaikan suhu
intervalId = setInterval(function() {
suhu += 1;
suhuMesin.innerText = suhu + " °C";
// Peringatan jika suhu overheat
if (suhu > 80) {
statusIndicator.className = 'alert alert-danger';
teksStatus.innerText = 'OVERHEAT WARNING';
suhuMesin.style.color = 'red';
}
}, 1000); // Jalankan setiap 1 detik
// Matikan tombol Start agar tidak double click
btnStart.disabled = true;
btnStop.disabled = false;
});
// Event Listener Tombol STOP
btnStop.addEventListener('click', function() {
clearInterval(intervalId); // Hentikan timer kenaikan suhu
statusIndicator.className = 'alert alert-secondary';
teksStatus.innerText = 'STOPPED';
// Reset tombol
btnStart.disabled = false;
btnStop.disabled = true;
});
// Event Listener Tombol RESET
btnReset.addEventListener('click', function() {
clearInterval(intervalId);
suhu = 25;
suhuMesin.innerText = suhu + " °C";
suhuMesin.style.color = 'black';
statusIndicator.className = 'alert alert-secondary';
teksStatus.innerText = 'UNKNOWN';
btnStart.disabled = false;
btnStop.disabled = true;
});
d. Langkah 4: Event Input (Validasi Real-time)
Tambahkan elemen input baru di HTML:
<div class="mt-3">
<label>Set Target Kecepatan (RPM):</label>
<input type="number" id="inputRPM" class="form-control" placeholder="Max 2000 RPM">
<small id="pesanError" class="text-danger d-none">RPM melebihi batas aman!</small>
</div>
Tambahkan di JS:
const inputRPM = document.getElementById('inputRPM');
const pesanError = document.getElementById('pesanError');
inputRPM.addEventListener('input', function() {
let val = parseInt(this.value);
if (val > 2000) {
pesanError.classList.remove('d-none'); // Tampilkan pesan error
this.classList.add('is-invalid'); // Berikan border merah Bootstrap
} else {
pesanError.classList.add('d-none'); // Sembunyikan pesan
this.classList.remove('is-invalid');
}
});
6. Latihan/Tugas Mandiri
1) Latihan 1 (DOM Styling): Buatlah tombol tambahan bernama "Maintenance Mode".
Saat diklik, background dari card menjadi abu-abu (`bg-light`), dan teks status berubah
menjadi "MAINTENANCE".
2) Latihan 2 (Mouse Events): Tambahkan efek saat mouse diarahkan (`mouseover`) ke
teks suhu mesin, suhu tersebut menjadi tebal dan berwarna biru. Saat mouse keluar
(`mouseout`), kembali normal.
3) Tugas Proyek Mini (Kalkulator Tagihan Listrik):a. Buat UI dengan 2 input: "Daya (Watt)" dan "Jam Pemakaian".
b. Saat user mengetik di salah satu input, secara real-time (tanpa tombol submit)
tampilkan hasil "Total kWh" dan "Estimasi Biaya (Rp 1.500/kWh)" di elemen
`<h3>` di bawahnya.
7. Petunjuk Pengumpulan Tugas
a. Screenshot hasil praktikum Panel Kontrol mesin dalam keadaan "Running" dan
"Overheat".
b. Kumpulkan kode HTML dan JS yang sudah dimodifikasi di folder
`Pertemuan6_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: Suhu terus naik walaupun tombol stop ditekan.
Solusi: Pastikan `clearInterval` dipanggil dengan variabel yang tepat. Jika Anda
membuat variabel baru di dalam event listener `click`, `clearInterval` di luar tidak akan
mengenainya (variabel harus global/scope luar).
 Masalah: `querySelector` mengembalikan null.
Solusi: Pastikan script dijalankan setelah HTML selesai dimuat (taruh `<script>` di
paling bawah `<body>` atau gunakan `defer`).

PERTEMUAN 7
Form Validation & Local Storage
Durasi: 340 Menit
Topik: Validasi form tingkat lanjut dan penyimpanan data persisten di browser (Client-side
Storage).
1. Tujuan Pembelajaran
a. Menerapkan validasi form sebelum data dikirim untuk mencegah data kotor.
b. Memahami cara kerja Web Storage API (LocalStorage).
c. Mampu menyimpan, mengambil, mengupdate, dan menghapus (CRUD sederhana) data
di LocalStorage.
d. Membuat aplikasi "Buku Harian Produksi" sederhana yang datanya tidak hilang saat
browser direfresh.
2. Kompetensi yang Dicapai
a. Mahasiswa mampu membuat aplikasi web yang memiliki "memori" (persistensi data
sederhana).
b. Mahasiswa paham konversi data Object JavaScript menjadi String JSON.
3. Persiapan
Browser modern (Chrome/Firefox/Edge).
4. Materi Singkat
Mengapa LocalStorage?
Tanpa database (MySQL/MongoDB), data di web akan hilang saat halaman direfresh.
Namun, untuk keperluan logging sementara, cache, atau prototipe aplikasi offline-first,
LocalStorage sangat berguna.
 Kapasitas: Sekitar 5-10MB.
 Format Data: Hanya menyimpan String (Key-Value).
 JSON: Karena hanya bisa String, kita harus mengubah Object/Data Array menjadi
JSON String (`JSON.stringify`) saat simpan, dan mengembalikannya menjadi Object
(`JSON.parse`) saat ambil.
5. Langkah-langkah Praktikum
a. Langkah 1: Membuat Form Input Produksi
Buat file baru `log_produksi.html`. Kita buat form sederhana.
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Log Produksi Harian</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
rel="stylesheet"></head>
<body class="container mt-5">
<div class="row">
<!-- Kolom Kiri: Form Input -->
<div class="col-md-4">
<div class="card">
<div class="card-header">Input Data</div>
<div class="card-body">
<form id="formProduksi">
<div class="mb-3">
<label>Tanggal</label>
<input type="date" id="tanggal" class="form-control"
required>
</div>
<div class="mb-3">
<label>Nama Operator</label>
<input type="text" id="operator" class="form-control"
placeholder="Nama Lengkap" required>
</div>
<div class="mb-3">
<label>Shift</label>
<select id="shift" class="form-select" required>
<option value="Pagi">Pagi</option>
<option value="Siang">Siang</option>
<option value="Malam">Malam</option>
</select>
</div>
<div class="mb-3">
<label>Jumlah Produksi (Unit)</label>
<input type="number" id="jumlah" class="form-control" min="1"
required>
</div>
<button type="submit" class="btn btn-primary w-100">Simpan
Log</button>
<button type="button" id="btnHapusSemua" class="btn btn-danger
w-100 mt-2">Hapus Semua Data</button>
</form>
</div>
</div>
</div>
<!-- Kolom Kanan: Tabel Data -->
<div class="col-md-8">
<h3>Riwayat Produksi</h3>
<table class="table table-bordered table-striped">
<thead class="table-dark">
<tr>
<th>Tanggal</th>
<th>Operator</th>
<th>Shift</th>
<th>Jumlah</th>
<th>Aksi</th>
</tr>
</thead>
<tbody id="tabelBody">
<!-- Data akan masuk di sini lewat JS -->
</tbody>
</table>
</div>
</div>
<script src="script_log.js"></script>
</body>
</html>b. Langkah 2: Logika JavaScript (Simpan & Baca)
Buat file `script_log.js`.
// 1. Seleksi Elemen
const formProduksi = document.getElementById('formProduksi');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');
// Kunci untuk LocalStorage
const STORAGE_KEY = 'DATA_PRODUKSI_INDUSTRI';
// Fungsi Load Data saat halaman dibuka
document.addEventListener('DOMContentLoaded', function() {
loadDataFromStorage();
});
// 2. Event Listener: Submit Form
formProduksi.addEventListener('submit', function(event) {
event.preventDefault(); // Mencegah refresh halaman
// Ambil Value dari Form
const tanggal = document.getElementById('tanggal').value;
const operator = document.getElementById('operator').value;
const shift = document.getElementById('shift').value;
const jumlah = document.getElementById('jumlah').value;
// Validasi Sederhana (JavaScript)
if (jumlah <= 0) {
alert("Jumlah produksi harus lebih dari 0!");
return;
}
// Buat Object Data
const dataBaru = {
id: Date.now(), // ID unik berdasarkan waktu
tanggal: tanggal,
operator: operator,
shift: shift,
jumlah: parseInt(jumlah)
};
// Simpan ke LocalStorage
saveData(dataBaru);
// Reset Form
formProduksi.reset();
// Refresh Tampilan Tabel
loadDataFromStorage();
});
// 3. Fungsi Simpan ke LocalStorage
function saveData(data) {
// Ambil data lama (jika ada), jika tidak ada array kosong
let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// Tambah data baru ke array
dataLama.push(data);
// Simpan kembali ke LocalStorage (Convert ke JSON String)
localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}
// 4. Fungsi Baca & Render Tabel
function loadDataFromStorage() {
// Ambil data
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// Kosongkan tabel dulutabelBody.innerHTML = '';
// Loop data dan buat baris tabel
data.forEach(function(item) {
const row = document.createElement('tr');
row.innerHTML = `
<td>${item.tanggal}</td>
<td>${item.operator}</td>
<td>${item.shift}</td>
<td>${item.jumlah}</td>
<td>
<button class="btn btn-sm btn-danger"
onclick="hapusData(${item.id})">Hapus</button>
</td>
`;
tabelBody.appendChild(row);
});
}
// 5. Fungsi Hapus Data Spesifik
// Kita pasang di window agar bisa dipanggil dari inline HTML onclick
window.hapusData = function(id) {
if(confirm('Yakin ingin menghapus log ini?')) {
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// Filter data: hapus item yang id-nya cocok
let dataBaru = data.filter(item => item.id !== id);
// Simpan ulang
localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
// Refresh tampilan
loadDataFromStorage();
}
}
// 6. Event Hapus Semua
btnHapusSemua.addEventListener('click', function() {
if(confirm('PERINGATAN: Semua data akan dihapus permanen!')) {
localStorage.removeItem(STORAGE_KEY);
loadDataFromStorage();
}
});
6. Latihan/Tugas Mandiri
1) Latihan 1 (Filter Data): Tambahkan fitur filter atau pencarian. Buat input "Cari Nama
Operator". Saat user mengetik, tabel hanya menampilkan data operator yang namanya
cocok (Gunakan `filter` array).
2) Latihan 2 (Sortir): Tambahkan tombol "Sortir berdasarkan Jumlah (Terbesar)" yang
mengurutkan tabel dari jumlah produksi terbanyak ke terkecil.
3) Tugas Proyek Mini (Aplikasi Checklist 5S):
Buat aplikasi checklist sederhana audit 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke).
a. Form berisi 5 checkbox (boolean) dan input nama auditor.
b. Saat disimpan, hitung skor (jumlah checklist dicentang / 5 * 100).
c. Simpan riwayat audit ke LocalStorage dan tampilkan di tabel (Tanggal, Auditor,
Skor).7. Petunjuk Pengumpulan Tugas
a. Rekaman layar (screencast) singkat max 1 menit yang menunjukkan: Input data ->
Refresh Browser (data tetap ada) -> Hapus data.
b. File `log_produksi.html` dan `script_log.js`.
c. Simpan seluruh file dalam folder `Pertemuan7_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: Data tidak muncul setelah refresh.
Solusi: Cek Console (F12) untuk error JSON. Pastikan tidak ada data lama yang rusak
(corrupted) di localStorage. Anda bisa membersihkannya dengan Application tab ->
Local Storage -> Clear.
 Masalah: `filter` atau `forEach` error.
Solusi: Pastikan data yang diambil dari `JSON.parse` benar-benar bertipe Array. Jika
user pertama kali buka, hasilnya `null`, jadi gunakan `|| []` (default empty array).

PERTEMUAN 8
Asynchronous JavaScript (Fetch API, JSON, REST API Sederhana)
Durasi: 340 Menit
Topik: Konsep Asynchronous, Fetch API, Promise, Async/Await, dan integrasi REST API
eksternal.
1. Tujuan Pembelajaran
a. Memahami perbedaan kode sinkronus dan asinkronus.
b. Mampu menggunakan `fetch()` untuk mengambil data dari server eksternal (API).
c. Memahami format data JSON (JavaScript Object Notation).
d. Menerapkan penanganan error saat request API gagal.
2. Kompetensi yang Dicapai
Mahasiswa dapat menghubungkan aplikasi web mereka dengan sumber data eksternal
(dalam praktik nyata: Sensor IoT, Database Server, atau API ERP Perusahaan).
3. Persiapan
a. Koneksi internet aktif (wajib untuk mengakses API publik).
b. Postman (opsional, untuk testing API).
4. Materi Singkat
Mengapa Asynchronous & API?
Di dunia industri, data tidak selalu ada di komputer lokal. Data stok gudang mungkin ada
di server pusat Jakarta, sementara Anda membuka dashboard di pabrik Surabaya.
 Synchronous: Antrian satu per satu. Jika Anda meminta data ke server dan server
lambat, seluruh web akan "macet" (freeze). Ini buruk untuk UX.
 Asynchronous: Kode jalan terus tanpa menunggu balasan server. Saat data balas, baru
dijalankan fungsi khusus (callback atau promise).
 Fetch API: Cara modern browser untuk melakukan HTTP Request (GET, POST, PUT,
DELETE).
5. Langkah-langkah Praktikum
a. Langkah 1: Mengenal JSONPlaceholder
Kita akan menggunakan layanan gratis `https://jsonplaceholder.typicode.com/users`
sebagai simulasi database "Karyawan" atau "Agen Supplier".
b. Langkah 2: Membuat HTML untuk Menampilkan Data
Buat file `api_demo.html`.<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Integrasi API Data Karyawan</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
rel="stylesheet">
</head>
<body class="container mt-5">
<h2 class="mb-4">Data Karyawan (Dari Server)</h2>
<div class="mb-3">
<button id="btnLoad" class="btn btn-primary">Muat Data dari API</button>
<div id="loading" class="spinner-border text-primary d-none" role="status"></div>
</div>
<div class="row" id="containerKaryawan">
<!-- Card karyawan akan muncul di sini -->
</div>
<script src="api_script.js"></script>
</body>
</html>
c. Langkah 3: Fetch Data dengan .then() (Promise)
Buat `api_script.js`.
const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');
// Endpoint API (Simulasi Database)
const API_URL = 'https://jsonplaceholder.typicode.com/users';
btnLoad.addEventListener('click', function() {
// Tampilkan loading
loading.classList.remove('d-none');
container.innerHTML = ''; // Bersihkan konten lama
// Fetch Data
fetch(API_URL)
.then(function(response) {
// Cek jika response sukses (kode 200-299)
if (!response.ok) {
throw new Error('Gagal mengambil data');
}
// Parsing data JSON
return response.json();
})
.then(function(dataKaryawan) {
// Data berhasil didapat
console.log(dataKaryawan); // Cek di console browser
renderData(dataKaryawan);
})
.catch(function(error) {
// Jika ada error (misal putus internet)
container.innerHTML = `<div class="alert alert-danger">Error:
${error.message}</div>`;
})
.finally(function() {
// Sembunyikan loading (baik sukses maupun gagal)
loading.classList.add('d-none');
});
});function renderData(data) {
data.forEach(function(karyawan) {
// Buat elemen card Bootstrap
const col = document.createElement('div');
col.className = 'col-md-4 mb-3';
col.innerHTML = `
<div class="card h-100 shadow-sm">
<div class="card-body">
<h5 class="card-title">${karyawan.name}</h5>
<p class="card-text text-muted">Email: ${karyawan.email}</p>
<p class="card-text">Perusahaan: ${karyawan.company.name}</p>
<p class="card-text"><small>Kota:
${karyawan.address.city}</small></p>
<a href="" class="btn btn-sm btn-outline-primary">Detail Profil</a>
</div>
</div>
`;
container.appendChild(col);
});
}
d. Langkah 4: Fetch dengan Async/Await (Modern Style)
Async/Await membuat kode asinkron terlihat seperti sinkron (lebih mudah dibaca).
Mari kita buat fungsi baru untuk mencari karyawan berdasarkan ID.
Tambahkan di `api_script.js`:
// Fungsi Async untuk mencari data spesifik
async function cariKaryawan(id) {
try {
console.log(`Mencari data ID: ${id}...`);
const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
if (!response.ok) {
throw new Error('Data tidak ditemukan');
}
const data = await response.json();
console.log("Ditemukan:", data);
alert(`Ditemukan: ${data.name} - bekerja di ${data.company.name}`);
} catch (error) {
console.error(error);
alert(error.message);
}
}
// Contoh pemanggilan: cariKaryawan(2);
// Anda bisa memanggil fungsi ini lewat console browser untuk tes.
6. Latihan/Tugas Mandiri
1) Latihan 1 (Posting Data): Buat tombol "Tambah Karyawan Baru". Gunakan method
`fetch` dengan opsi `{ method: 'POST', body: ... }` untuk mengirim data dummy ke API.
Cek response di console.
2) Latihan 2 (Filter Array): Sebelum data dirender ke layar dengan `forEach`, lakukan
filter terlebih dahulu. Tampilkan HANYA karyawan yang tinggal di kota yangmengandung huruf "s" (misal: "Southside", "London"). Petunjuk: Gunakan
`data.filter(...)` sebelum `data.forEach(...)`.
3) Tugas Proyek Mini (Integrasi Data Produksi):
Anggap API `https://jsonplaceholder.typicode.com/posts` adalah database "Laporan
Insiden".
a. Tampilkan daftar 10 laporan insiden terbaru (Title = Judul Insiden, Body =
Deskripsi).
b. Di setiap card, tambahkan tombol "Tindak Lanjut". Saat diklik, `alert()`
menampilkan "Tiket ID sedang diproses oleh Tim Maintenance".
7. Petunjuk Pengumpulan Tugas
a. Screenshot hasil di Console (Network Tab) yang menampilkan request ke
`jsonplaceholder`.
b. File `api_demo.html` dan `api_script.js`.
c. Simpan seluruh file dalam folder `Pertemuan8_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: Error "CORS Policy" atau "Network Error".
Solusi: Gunakan JSONPlaceholder karena mereka mengizinkan CORS. Jika
menggunakan API lain yang memblokir, Anda mungkin perlu ekstensi browser atau
proxy. Untuk praktikum ini, tetap gunakan JSONPlaceholder.
 Masalah: Data tidak muncul, tapi tidak ada error di Console.
Solusi: Cek apakah Anda melakukan `appendChild` dengan benar. Pastikan variabel
container tidak bernilai `null` (script berjalan sebelum HTML siap).

PERTEMUAN 9
Pengenalan React.js (Component, JSX, Props)
Durasi: 340 Menit
Topik: Setup Lingkungan React, Konsep Component, JSX Syntax, dan Props (Data Passing).
1. Tujuan Pembelajaran
a. Memahami konsep Library vs Framework dan mengapa React dipilih untuk aplikasi
skala besar.
b. Mampu menyiapkan environment pengembangan React menggunakan Vite.
c. Menguasai sintaks JSX (JavaScript XML).
d. Mampu membuat Functional Component yang menerima dan menampilkan data
melalui Props.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat menginstal dan menjalankan proyek React.
b. Mahasiswa mampu memecah antarmuka pengguna menjadi komponen-komponen
kecil yang dapat digunakan kembali (reusable).
3. Persiapan
a. Node.js & npm sudah terinstal (cek dengan `node -v` dan `npm -v` di terminal).
b. Pastikan koneksi internet stabil untuk pertama kali download dependensi.
4. Materi Singkat
Mengapa React di Industri?
Seiring bertambah kompleksnya sistem (misal: Dashboard pabrik dengan ratusan sensor),
menulis kode Vanilla JS menjadi sangat sulit dirawat (maintain). React memungkinkan kita
membuat "Komponen" seperti blok LEGO. Misalnya, kita buat satu komponen
`<KartuMesin />`, lalu kita gunakan 100 kali di halaman web dengan data berbeda tanpa
menulis ulang kodenya.
Konsep Dasar:
 JSX: Ekstensi sintaks JavaScript yang memungkinkan kita menulis HTML di dalam
JavaScript. `<div>Halo {namaVariable}</div>`.
 Component: Potongan kode yang mengembalikan elemen UI.
 Props: Cara mengirim data dari Parent (Induk) ke Child (Anak). Seperti memberikan
parameter pada fungsi.
5. Langkah-langkah Praktikum
a. Langkah 1: Setup Project dengan Vite
Buka Terminal (VS Code: `Ctrl + ~` atau Terminal > New Terminal). Ketik perintah
berikut (tunggu prosesnya):
1) Membuat project baru bernama 'sistem-industri'
npm create vite@latest sistem-industri -- --template react
2) Masuk ke folder project
cd sistem-industri
3) Install dependensi library
npm install
4) Jalankan development server
npm run dev
Buka link yang muncul (biasanya `http://localhost:5173`).
b. Langkah 2: Membersihkan Project
Buka folder project di VS Code. Masuk ke `src/App.jsx`. Hapus semua konten di dalam
`return (...)` dan biarkan kosong atau ganti dengan `<h1>Halo Industri</h1>`. Hapus
juga `import css` yang tidak perlu untuk sementara agar fokus pada logika.
c. Langkah 3: Membuat Komponen Pertama: KartuMesin
Buat file baru di folder `src` bernama `Komponen/KartuMesin.jsx`.
Struktur folder:
- src
- Komponen
- KartuMesin.jsx
Isi `KartuMesin.jsx`:
// 1. Import React
import React from 'react';
// 2. Membuat Komponen Fungsi yang menerima 'props'
function KartuMesin(props) {
// Menerima data dari props
const namaMesin = props.nama;
const status = props.status;
const produksi = props.produksi;
// Logika penentuan warna badge berdasarkan statuslet badgeColor = 'bg-secondary';
if (status === 'Running') badgeColor = 'bg-success';
if (status === 'Stop') badgeColor = 'bg-danger';
if (status === 'Maintenance') badgeColor = 'bg-warning';
return (
// Menggunakan class -> className di JSX
<div className="card shadow-sm p-3 mb-3">
<div className="card-body">
<h5 className="card-title">{namaMesin}</h5>
<span className={`badge ${badgeColor}`}>{status}</span>
<hr />
<p>Produksi Saat Ini: <strong>{produksi}</strong> Unit</p>
</div>
</div>
);
}
// 3. Export agar bisa dipakai di file lain
export default KartuMesin;
d. Langkah 4: Menggunakan Komponen di App.jsx
Sekarang kita akan memanggil `KartuMesin` di file utama dan mengirim data lewat
props.
Buka dan lakukan edit `src/App.jsx`:
import React from 'react';
// Import komponen yang sudah dibuat
import KartuMesin from './Komponen/KartuMesin';
function App() {
return (
<div className="container mt-4">
<h1 className="text-center mb-4">Monitoring Lini Produksi A</h1>
<div className="row">
{/* Kolom 1: Menggunakan komponen dengan data berbeda */}
<div className="col-md-4">
<KartuMesin
nama="CNC-Turning-01"
status="Running"
produksi={150}
/>
</div>
{/* Kolom 2 */}
<div className="col-md-4">
<KartuMesin
nama="CNC-Milling-02"
status="Maintenance"
produksi={0}
/>
</div>
{/* Kolom 3 */}
<div className="col-md-4">
<KartuMesin
nama="Press-Hydraulic-05"
status="Stop"
produksi={85}
/>
</div>
</div></div>
);
}
export default App;
Catatan: Tambahkan link Bootstrap CSS di `index.html` (folder public) agar class card
berfungsi.
6. Latihan/Tugas Mandiri
1) Latihan 1 (Destructuring Props): Ubah cara deklarasi props di `KartuMesin.jsx`
menggunakan destructuring: `function KartuMesin({ nama, status, produksi }) { ... }`.
Sesuaikan kode di dalamnya.
2) Latihan 2 (Default Props): Berikan nilai default pada prop `produksi` menjadi 0, jika
user lupa mengirim prop tersebut.
3) Tugas Proyek Mini (Kartu Karyawan):
 Buat komponen baru bernama `KartuKaryawan.jsx`. Komponen ini menerima
props: `nama`, `jabatan`, `bagian`.
 Tampilkan komponen ini 3 kali di `App.jsx` dengan data karyawan berbeda
(Manager, Operator, QC).
7. Petunjuk Pengumpulan Tugas
a. Screenshot tampilan browser yang menampilkan 3 kartu mesin.
b. Kumpulkan file `KartuMesin.jsx` dan `App.jsx`.
c. Simpan seluruh file dalam folder `Pertemuan9_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: `npm create vite` lambat sekali.
Solusi: Gunakan registry mirror Indonesia jika koneksi lambat, atau gunakan jaringan
kampus. `npm config set registry https://registry.npmjs.org/`.
 Masalah: Error "Module not found".
Solusi: Cek lagi path pada `import`. Huruf besar/kecil (case-sensitive) sangat
berpengaruh. Pastikan `export default` ada di file komponen.

PERTEMUAN 10
State, Hooks (useState, useEffect), dan Conditional Rendering
Durasi: 340 Menit
Topik: State Management, Lifecycle Hooks, dan Rendering Bersyarat.
1. Tujuan Pembelajaran
a. Memahami apa itu State dan perbedaannya dengan Props.
b. Menguasai penggunaan `useState` untuk menyimpan data yang berubah-ubah.
c. Memahami `useEffect` untuk menangani side effects (seperti timer atau API call).
d. Mampu melakukan Conditional Rendering (menyembunyikan/menampilkan elemen
berdasarkan kondisi).
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat aplikasi React yang dinamis (interaktif).
b. Mahasiswa memahami siklus hidup komponen React.
3. Persiapan
Project React dari pertemuan 9.
4. Materi Singkat
Konsep State:
Jika Props adalah data yang dibaca (read-only), State adalah data yang ditulis dan diubah
oleh komponen itu sendiri (read-write). State adalah "memori" sementara komponen.
Ketika State berubah, React akan otomatis me-render ulang (re-render) tampilan untuk
mencerminkan perubahan tersebut.
Hooks:
 `useState`: Untuk membuat state variable. `const [nilai, setNilai] = useState(0)`.
 `useEffect`: Untuk menjalankan kode saat komponen pertama kali dimuat (`mount`),
saat update, atau saat akan dihancurkan (`unmount`).
5. Langkah-langkah Praktikum
a. Langkah 1: Membuat Komponen Counter Produksi
Buat file baru `src/Komponen/CounterProduksi.jsx`.
import React, { useState } from 'react';
function CounterProduksi() {
// Deklarasi State: 'jumlah' bernilai awal 0, 'setJumlah' fungsi untuk mengubahnya
const [jumlah, setJumlah] = useState(0);
const [target, setTarget] = useState(100);
// Fungsi menambah produksiconst tambahProduksi = () => {
setJumlah(jumlah + 1);
};
// Fungsi reset
const reset = () => {
setJumlah(0);
};
return (
<div className="text-center p-4 border rounded bg-light">
<h3>Simulasi Hitung Produk</h3>
<h1 className="display-4">{jumlah}</h1>
<p>Target: {target} Unit</p>
{/* Conditional Rendering: Tampilkan pesan jika target tercapai */}
{jumlah >= target ? (
<div className="alert alert-success d-inline-block">Target Tercapai!</div>
) : (
<div className="alert alert-secondary d-inline-block">Produksi Berjalan...</div>
)}
<div className="mt-3">
<button className="btn btn-primary me-2" onClick={tambahProduksi}>
+1 Unit (Sensor OK)
</button>
<button className="btn btn-danger" onClick={reset}>
Reset Shift
</button>
</div>
</div>
);
}
export default CounterProduksi;
Panggil komponen ini di `App.jsx`.
b. Langkah 2: Menggunakan useEffect untuk Real-time Clock
Kita akan membuat jam digital yang berjalan otomatis. Ini mensimulasikan
pengambilan data live dari sensor tiap detik.
Tambahkan kode di dalam `CounterProduksi.jsx` (atau buat komponen baru
`JamDigital.jsx`):
import React, { useState, useEffect } from 'react';
function JamDigital() {
const [waktu, setWaktu] = useState(new Date());
// useEffect berjalan sekali setelah komponen dirender pertama kali
useEffect(() => {
// Membuat interval timer
const timerID = setInterval(() => {
setWaktu(new Date()); // Update state waktu setiap detik
}, 1000);
// Cleanup function: Dijalankan saat komponen dihapus/hancur
// Penting untuk mencegah memory leak
return () => {
clearInterval(timerID);
};
}, []); // Array kosong [] artinya hanya dijalankan sekali saat mount
return (
<div className="alert alert-info text-center"><h4>Waktu Sistem Server: {waktu.toLocaleTimeString()}</h4>
</div>
);
}
export default JamDigital;
c. Langkah 3: Contoh Form Input State
Ubah komponen `KartuMesin.jsx` dari pertemuan 9 agar statusnya bisa diedit secara
lokal (opsional latihan):
// Di dalam KartuMesin.jsx
const [statusLokal, setStatusLokal] = useState(status);
return (
// ... kode HTML sebelumnya ...
<div className="mt-2">
<select
className="form-select form-select-sm"
value={statusLokal}
onChange={(e) => setStatusLokal(e.target.value)}
>
<option value="Running">Running</option>
<option value="Stop">Stop</option>
<option value="Maintenance">Maintenance</option>
</select>
</div>
// ...
)
6. Latihan/Tugas Mandiri
1) Latihan 1 (Dependency Array useEffect): Modifikasi `JamDigital`. Tambahkan input
text untuk memasukkan nama kota. Gunakan `useEffect` untuk mengubah
`document.title` menjadi "Jam [Nama Kota]". Gunakan state kota sebagai dependency
array `[kota]`.
2) Latihan 2 (Conditional Rendering): Pada `CounterProduksi`, buat tombol "Emergency
Stop". Saat diklik, ubah state status menjadi "EMERGENCY", tombol "+1" menjadi
disabled (`disabled`), dan tampilkan pesan merah.
3) Tugas Proyek Mini (Kalkulator OEE Sederhana):
a. Buat komponen form input: `Plan Time`, `Run Time`, `Total Parts`, `Good Parts`.
b. Gunakan State untuk menyimpan nilai-nilai ini.
c. Hitung OEE secara otomatis (Real-time) setiap kali input berubah.
d. Rumus OEE = (Availability x Performance x Quality).
e. Tampilkan hasil OEE dalam persen. Jika OEE < 50%, warnanya merah. Jika > 85%,
warnanya hijau.
7. Petunjuk Pengumpulan Tugas
a. Screenshot saat kondisi OEE merah dan hijau.
b. File `CounterProduksi.jsx` dan komponen OEE.
c. Simpan seluruh file dalam folder `Pertemuan10_NIM_NamaMahasiswa`.8. Troubleshooting Umum
 Masalah: Infinite loop (Browser hang).
Solusi: Cek `useEffect`. Pastikan Anda tidak mengupdate state di dalam `useEffect`
tanpa kondisi berhenti, atau lupa memberikan dependency array `[]`.
 Masalah: State tidak berupdate langsung.
Solusi: Ingat bahwa setState di React adalah asynchronous. Jika nilai baru bergantung
pada nilai lama, gunakan functional update: `setCount(prev => prev + 1)`.

PERTEMUAN 11
React Routing & Multi-Page App + Integrasi API
Durasi: 340 Menit
Topik: Single Page Application (SPA) Navigation, React Router DOM, dan Fetch API dalam
React.
1. Tujuan Pembelajaran
a. Memahami konsep SPA (Single Page Application).
b. Mampu mengatur navigasi antar halaman tanpa reload browser menggunakan `reactrouter-dom`.
c. Menerapkan `fetch` API di dalam `useEffect` untuk mengambil data eksternal.
d. Membuat struktur aplikasi multi-halaman (Dashboard, Inventori, Settings).
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat aplikasi web yang terasa seperti aplikasi native (cepat, tidak
flicker saat pindah menu).
b. Mahasiswa menguasai integrasi data backend (mock API) ke frontend React.
3. Persiapan
a. Project React sebelumnya.
b. Install library router: `npm install react-router-dom`.
4. Materi Singkat
Mengapa Routing?
Aplikasi industri biasanya memiliki banyak modul. Kita tidak bisa menaruh semua kode di
satu halaman (`App.jsx`). Kita perlu memisahkannya menjadi:
 `/dashboard` (Halaman Utama)
 `/inventori` (Halaman Stok)
 `/laporan` (Halaporan Laporan)
`react-router-dom` menangani URL ini.
5. Langkah-langkah Praktikum
a. Langkah 1: Setup Router
Buka file utama `src/main.jsx` (atau `index.jsx` tergantung versi Vite). Bungkus
aplikasi dengan `BrowserRouter`.
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>,
)
b. Langkah 2: Membuat Halaman (Pages)
Buat folder `src/Halaman`. Buat 3 file:
1. `Dashboard.jsx` (Halaman Utama)
2. `Inventori.jsx` (Halaman Stok)
3. `NotFound.jsx` (Halaman error)
Isi `src/Halaman/Dashboard.jsx`:
import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard() {
return (
<div className="p-5">
<h1>Dashboard Utama Pabrik</h1>
<p>Selamat datang di sistem monitoring terpadu.</p>
<Link to="/inventori" className="btn btn-primary">
Ke Halaman Inventori
</Link>
</div>
);
}
export default Dashboard;
Isi `src/Halaman/Inventori.jsx`:
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Inventori() {
const [products, setProducts] = useState([]);
// Fetch Data saat komponen mount
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
// Ambil hanya 5 data pertama untuk contoh
setProducts(data.slice(0, 5));
})
.catch(err => console.log(err));
}, []);
return (
<div className="container mt-4">
<h1>Data Inventori Bahan Baku</h1>
<Link to="/" className="btn btn-secondary mb-3">Kembali ke Dashboard</Link>
<table className="table table-striped">
<thead>
<tr>
<th>ID Item</th><th>Nama Bahan</th>
<th>Status Supplier</th>
</tr>
</thead>
<tbody>
{products.map((item) => (
<tr key={item.id}>
<td>{item.id}</td>
<td>{item.title}</td> {/* Menggunakan title sebagai simulasi nama bahan */}
<td><span className="badge bg-success">Available</span></td>
</tr>
))}
</tbody>
</table>
</div>
);
}
export default Inventori;
Isi `src/Halaman/NotFound.jsx`:
import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
return (
<div className="text-center mt-5">
<h1 className="display-1">404</h1>
<p>Halaman tidak ditemukan dalam sistem pabrik.</p>
<Link to="/" className="btn btn-dark">Kembali ke Home</Link>
</div>
);
}
export default NotFound;
c. Langkah 3: Mengatur Route di App.jsx
Sekarang kita tentukan kapan komponen mana yang muncul berdasarkan URL.
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';
import Navbar from './Komponen/Navbar'; // Anda bisa buat navbar sendiri
// Buat Navbar.jsx sederhana untuk navigasi
function Navbar() {
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
<div className="container">
<a className="navbar-brand" href="/">Sistem Pabrik</a>
<div className="navbar-nav">
<a className="nav-link" href="/">Dashboard</a>
<a className="nav-link" href="/inventori">Inventori</a>
</div>
</div>
</nav>
)
}
function App() {
return (<div>
<Navbar />
<Routes>
{/* Route yang tepat akan di-render */}
<Route path="/" element={<Dashboard />} />
<Route path="/inventori" element={<Inventori />} />
{/* Route untuk semua path lainnya (404) */}
<Route path="" element={<NotFound />} />
</Routes>
</div>
);
}
export default App;
6. Latihan/Tugas Mandiri
1) Latihan 1 (Dynamic Route): Tambahkan Route untuk detail item. Misal path
`/inventori/:id`. Di halaman Inventori, ubah "Nama Bahan" menjadi Link ke halaman
detail.
2) Latihan 2 (Loading State): Di halaman `Inventori.jsx`, tambahkan state `loading`
(boolean). Set `loading = true` sebelum fetch, dan `false` setelah data masuk. Tampilkan
teks "Memuat data..." jika loading true.
3) Tugas Proyek Mini (Navigasi Modular):
a. Buat halaman baru bernama `LaporanKualitas.jsx`. Halaman ini menampilkan data
"Cacat" (mock data array manual).
b. Tambahkan link di Navbar untuk menuju halaman ini.
c. Pastikan transisi antar halaman berjalan mulus tanpa reload browser.
7. Petunjuk Pengumpulan Tugas
a. Rekaman layar singkat berpindah dari Dashboard ke Inventori, lalu ke link yang salah
(untuk tes 404).
b. File `App.jsx` dan folder `Halaman`.
c. Simpan seluruh file dalam folder `Pertemuan11_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: `useEffect` loop terus menerus.
Solusi: Pastikan dependency array `[]` diisi dengan benar. Jika dikosongkan, hanya
jalan sekali. Jika diisi state, dia akan jalan saat state berubah.
 Masalah: Layar Detail kosong (data tidak muncul).
Solusi: Cek di `DetailScreen`, pastikan destructuring `route.params` benar. Cek di
`HomeScreen`, pastikan `navigation.navigate('Detail', { itemData: item })` mengirim
nama properti yang sama.

PERTEMUAN 12
Proyek Web: Dashboard Monitoring Produksi (React + Chart.js)
Durasi: 340 Menit
Topik: Integrasi Library Visualisasi Data (Chart.js) dan Finalisasi Layout Dashboard.
1. Tujuan Pembelajaran
a. Mampu mengintegrasikan library pihak ketiga (`react-chartjs-2`) ke dalam React.
b. Mampu mengubah data mentah menjadi visualisasi grafik yang informatif.
c. Menyelesaikan proyek mini dashboard lengkap dari pertemuan 1-12.
2. Kompetensi yang Dicapai
a. Mahasiswa mampu membuat dashboard monitoring produksi profesional.
b. Mahasiswa memahami transformasi data array menjadi format data grafik.
3. Persiapan
a. Install library chart:
npm install chart.js react-chartjs-2
b. Install icon (opsional, biar cantik):
npm install react-icons
4. Materi Singkat
Dashboard Visualisasi
Dalam Teknik Industri, data angka saja (tabel) seringkali sulit dipahami trennya secara
cepat. Grafik membantu manager melihat pola produksi jam-ke-jam, tingkat defect, atau
utilisasi mesin.
5. Langkah-langkah Praktikum
a. Langkah 1: Persiapan Data Grafik
Kita akan memvisualisasikan data produksi per jam. Misal data array:
`[120, 150, 180, 170, 200, 210]` (Jam 8 sampai Jam 13).
b. Langkah 2: Membuat Komponen Grafik
Buat file `src/Komponen/GrafikProduksi.jsx`.
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
} from 'chart.js';
// Mendaftarkan komponen ChartJS
ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);
function GrafikProduksi() {
// Data untuk Grafik
const data = {
labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
datasets: [
{
label: 'Jumlah Produksi (Unit)',
data: [120, 150, 180, 170, 200, 210], // Data statis, bisa diganti state/dinamis
backgroundColor: 'rgba(54, 162, 235, 0.5)',
borderColor: 'rgba(54, 162, 235, 1)',
borderWidth: 1,
},
{
label: 'Target',
data: [150, 150, 150, 150, 150, 150], // Garis target konstan
type: 'line', // Tipe campuran (Bar + Line)
borderColor: 'rgb(255, 99, 132)',
borderWidth: 2,
},
],
};
// Opsi Tampilan Grafik
const options = {
responsive: true,
plugins: {
legend: {
position: 'top',
},
title: {
display: true,
text: 'Grafik Produksi Harian - Lini 1',
},
},
scales: {
y: {
beginAtZero: true,
},
},
};
return <Bar data={data} options={options} />;
}
export default GrafikProduksi;
c. Langkah 3: Menggabungkan ke Dashboard UtamaUpdate `src/Halaman/Dashboard.jsx` agar memuat grafik ini.
import React from 'react';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import KartuMesin from '../Komponen/KartuMesin';
function Dashboard() {
return (
<div className="container-fluid mt-4">
<div className="row mb-4">
<div className="col-12">
<h2>Dashboard Pintar 4.0</h2>
<hr/>
</div>
</div>
{/* Bagian Grafik */}
<div className="row mb-4">
<div className="col-md-8">
<div className="card shadow-sm">
<div className="card-body">
<GrafikProduksi />
</div>
</div>
</div>
{/* Bagian Ringkasan KPI */}
<div className="col-md-4">
<div className="card bg-primary text-white mb-3">
<div className="card-body">
<h5>Total Output Hari Ini</h5>
<h2>1,030 Unit</h2>
<small>Update terakhir: 13:00</small>
</div>
</div>
<div className="card bg-success text-white">
<div className="card-body">
<h5>Efficiency Rate</h5>
<h2>92.4%</h2>
<small>+1.2% dari kemarin</small>
</div>
</div>
</div>
</div>
{/* Bagian Daftar Mesin */}
<div className="row">
<div className="col-12">
<h4>Status Mesin Aktif</h4>
</div>
<div className="col-md-3">
<KartuMesin nama="CNC-01" status="Running" produksi={320} />
</div>
<div className="col-md-3">
<KartuMesin nama="CNC-02" status="Running" produksi={310} />
</div>
<div className="col-md-3">
<KartuMesin nama="Press-01" status="Stop" produksi={150} />
</div>
<div className="col-md-3">
<KartuMesin nama="Weld-04" status="Maintenance" produksi={0} />
</div>
</div>
</div>
);
}
export default Dashboard;6. Latihan/Tugas Mandiri (Final Project Web)
Ini adalah puncak dari materi Web. Anda harus menyelesaikan Dashboard lengkap.
1) Integrasi Data Realistik: Ubah data statis di `GrafikProduksi` menjadi data yang
diambil dari `fetch` API (gunakan mock data dari internet atau buat generator acak).
2) Tambahkan Grafik Donat: Buat grafik "Proporsi Cacat" (Misal: Scratch 50%, Dent
30%, Lainnya 20%) menggunakan komponen `Doughnut` dari chart.js.
3) Tugas Akhir Web:
Susun ulang halaman `Dashboard` agar memiliki Sidebar (kiri) dan Main Content
(kanan).
a. Sidebar: Logo, Menu Dashboard, Menu Inventori, Menu Laporan.
b. Main Content: Header (User Profile), Grafik, dan Tabel Data.
c. Pastikan desain responsif (Sidebar bisa collapse di HP).
7. Petunjuk Pengumpulan Tugas
a. Deploy aplikasi React Anda (opsional, bonus poin) atau rekam layar fitur lengkap
dashboard.
b. Kumpulkan seluruh source code project React dalam folder
`Pertemuan12_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: Grafik tidak muncul atau error "Canvas is already in use".
Solusi: Pastikan setiap grafik dibungkus dalam komponen terpisah dan memiliki `key`
yang unik jika dirender dalam list (looping).
 Masalah: Ukuran grafik tidak responsif (melebar tak terbatas).
Solusi: Pastikan elemen parent (div) memiliki style positioning yang jelas atau lebar
terdefinisi (`container` Bootstrap biasanya cukup).

PERTEMUAN 13
Ujian Tengah Semester (UTS)
Topik: Aplikasi Web Lengkap (React.js)
Durasi: 340 Menit
1. Deskripsi Tugas Ujian
Anda diminta untuk membangun "Sistem Manajemen Jadwal Shift & Laporan Produksi
Harian".
Aplikasi ini harus memungkinkan manager produksi untuk melihat jadwal shift operator
dan menginput laporan produksi.
2. Kriteria Penilaian (Rubrik)
Aspek Bobot Kriteria
Fungsionalitas
(Code Logic)
40%  Form input berfungsi dan menyimpan data ke
LocalStorage.
 Data di tabel/dashboard terupdate real-time tanpa
refresh.
 Routing antar halaman (Jadwal → Input → Beranda)
berjalan lancar.
UI/UX & Desain 25%  Menggunakan Bootstrap dengan rapi
 Tampilan responsif (bagus di HP dan Desktop).
 Penggunaan warna dan tipografi yang sesuai (formal
industri).
Kode & Struktur 20%  Pemecahan komponen yang baik (tidak semua kode
di App.jsx).
 Penamaan variabel yang jelas (camelCase).
 Tidak ada error di Console.
Relevansi
Industri
15%  Input field relevan (Tanggal, Shift, Nama Mesin,
Jumlah, Cacat).
 Ada kalkulasi otomatis (misal: Efisiensi = Output /
Target).
3. Spesifikasi Teknis Minimal
a. Halaman Utama (Dashboard): Menampilkan ringkasan total produksi hari ini (diambil
dari LocalStorage).
b. Halaman Input Laporan: Form berisi:
 Tanggal (Date Picker)
 Shift (Dropdown: Pagi, Siang, Malam)
 Nama Mesin (Text/Select)
 Jumlah Produksi (Number)
 Jumlah Reject (Number)
Sistem harus otomatis menghitung: Netto = Total - Reject.
c. Halaman Riwayat Data: Tabel yang menampilkan semua data yang sudah diinput
(CRUD Read). Data tidak boleh hilang saat direfresh (LocalStorage).4. Contoh Output yang Diharapkan
 Tampilan Dashboard: Kartu statistik (Total Produksi: 1200, Total Reject: 15, Yield:
98.75%).
 Interaksi: User mengisi form → Klik Simpan → Diarahkan ke Halaman Riwayat
→ Data baru muncul di baris paling atas.
5. Instruksi Pengumpulan UTS
Untuk memastikan penilaian berjalan objektif dan sistematis, mahasiswa wajib mengikuti
aturan pengumpulan berikut:
a. Format Berkas
 Source Code:
Seluruh folder proyek React harus dikompres menjadi satu file ZIP atau RAR.
Pastikan tidak menyertakan folder `node_modules` (ukuran terlalu besar). Hapus
folder ini sebelum mengompres (jika dinilai dari file zip), atau pastikan
`package.json` tersedia agar dosen bisa menginstall ulang (`npm install`).
 Dokumentasi Video:
Buat video rekaman layar (screencast) dengan durasi maksimal 3 menit.
Video harus menunjukkan:
1) Menjalankan aplikasi (`npm start`).
2) Pengisian form laporan produksi (Input Shift, Jumlah, dll).
3) Bukti perhitungan otomatis muncul di UI.
4) Bukti data tersimpan dan muncul di halaman Riwayat Data (LocalStorage).
5) Format video: MP4.
b. Penamaan Berkas (Wajib)
Gunakan format standar berikut untuk memudahkan administrasi penilaian:
Nama File ZIP: `UTS_Web_NIM_NamaLengkap.zip`
Contoh: `UTS_Web_12320001_AhmadDhani.zip`
Nama File Video: `Demo_UTS_Web_NIM_NamaLengkap.mp4`
Contoh: `Demo_UTS_Web_12320001_AhmadDhani.mp4`
c. Isi README.md (Wajib Ada di dalam ZIP)
Buat file bernama `README.md` di dalam proyek Anda yang berisi:
1) Nama & NIM: Identitas mahasiswa.
2) Cara Menjalankan (`npm install`, `npm run dev`,dll)
3) Fitur Unggulan: Jelaskan fitur tambahan apa saja yang Anda buat (jika ada) untuk
mendapatkan poin kreativitas.
d. Lokasi dan Batas Waktu Pengumpulan
Unggah kedua file (ZIP & MP4) ke Folder GDrive kelas yang ditetapkan dosen
pengampu paling lambat H+3 UTS Pukul 10.00 WIB. Keterlambatan akan dikenakanpengurangan nilai sebesar 10% per hari, maksimum 50% lebih dari itu dianggap NOL
(Tidak mengikuti UTS).

PERTEMUAN 14
Pengenalan React Native & Setup Expo
Durasi: 340 Menit
Topik: Konsep Cross-Platform, Setup Lingkungan Expo, Komponen Dasar (View, Text,
Image), dan Styling di Mobile.
1. Tujuan Pembelajaran
a. Memahami perbedaan antara Web Development (React.js) dan Mobile Development
(React Native).
b. Mampu menyiapkan lingkungan kerja React Native menggunakan Expo.
c. Menguasai komponen dasar pengganti HTML: `View` (div), `Text` (p/h1),
`ScrollView`.
d. Mampu menata tampilan mobile menggunakan `StyleSheet`.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat aplikasi seluler "Hello World" yang berjalan di
Android/iOS.
b. Mahasiswa memahami struktur direktori proyek React Native.
3. Persiapan (Wajib)
a. Node.js (sudah terinstal dari pertemuan sebelumnya).
b. Aplikasi Expo Go (Download di Google Play Store untuk Android, atau App Store
untuk iOS). HP mahasiswa akan bertindak sebagai emulator.
c. Visual Studio Code.
d. Akun GitHub (opsional untuk login Expo).
4. Materi Singkat
Mengapa React Native?
Sebagai Insinyur Industri, Anda membutuhkan aplikasi yang bisa dibawa operator ke lantai
pabrik (tablet genggam/PDA). Aplikasi web terkadang berat jika dibuka di browser HP.
React Native memungkinkan kita membuat aplikasi native (nyata) untuk Android dan iOS
sekaligus hanya menggunakan satu bahasa pemrograman: JavaScript.
Perbedaan Kunci (Web vs Native):
Web (HTML) Mobile (React Native)
`<div>` `<View>`
`<p>`, `<h1>`, `<span>` `<Text>`
`<img>` `<Image>`
`onclick` `onPress`
`class="container"` `style={styles.container}`
CSS file / Bootstrap `StyleSheet` (JavaScript object)`5. Langkah-langkah Praktikum
a. Langkah 1: Membuat Project Expo
Buka Terminal/Command Prompt di komputer. Jalankan perintah berikut (tunggu
proses instalasi sekitar 2-5 menit):
1) Membuat project baru bernama 'SistemGudangMobile'
`npx create-expo-app SistemGudangMobile`
2) Masuk ke folder
`cd SistemGudangMobile`
3) Menjalankan server development
`npx expo start`
Setelah muncul QR Code di terminal:
1) Buka aplikasi Expo Go di HP Android/iOS Anda.
2) Scan QR Code tersebut (Pastikan HP dan Laptop terhubung ke jaringan WiFi yang
sama).
3) Aplikasi akan terbuka di HP dan menampilkan tulisan "Open up App.js to start
working on your app!".
b. Langkah 2: Memodifikasi App.js (UI Dashboard Sederhana)
Buka file `App.js` di folder project menggunakan VS Code. Hapus semua isinya, dan
ganti dengan kode berikut. Kita akan membuat tampilan Header sederhana.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
export default function App() {
return (
<SafeAreaView style={styles.container}>
<StatusBar style="auto" />
{/* Bagian Header */}
<View style={styles.header}>
<Text style={styles.headerTitle}>PT. Manufaktur Maju</Text>
<Text style={styles.headerSubtitle}>Aplikasi Monitoring Gudang</Text>
</View>
{/* Bagian Konten Utama */}
<View style={styles.content}>
<Text style={styles.welcomeText}>Selamat Datang, Operator!</Text>
<View style={styles.card}>
<Text style={styles.cardTitle}>Status Gudang A</Text>
<Text style={styles.cardValue}>Kapasitas: 85%</Text>
<Text style={styles.cardStatus}>TERSEDIA</Text>
</View>
<View style={[styles.card, styles.cardWarning]}>
<Text style={styles.cardTitle}>Status Gudang B</Text><Text style={styles.cardValue}>Kapasitas: 95%</Text>
<Text style={styles.cardStatus}>PENUH</Text>
</View>
</View>
</SafeAreaView>
);
}
// Styling menggunakan StyleSheet (seperti CSS tapi object JS)
const styles = StyleSheet.create({
container: {
flex: 1, // Artinya layar penuh
backgroundColor: '#f0f2f5',
paddingTop: Platform.OS === 'android' ? 25 : 0, // Padding khusus Android status bar
},
header: {
backgroundColor: '#2c3e50',
padding: 20,
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,
marginBottom: 20,
elevation: 5, // Shadow di Android
},
headerTitle: {
color: 'white',
fontSize: 24,
fontWeight: 'bold',
},
headerSubtitle: {
color: '#bdc3c7',
fontSize: 14,
},
content: {
padding: 20,
},
welcomeText: {
fontSize: 18,
marginBottom: 15,
color: '#333',
},
card: {
backgroundColor: 'white',
padding: 20,
borderRadius: 10,
marginBottom: 15,
// Shadow khusus iOS dan Android
shadowColor: "#000",
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
},
cardWarning: {
borderLeftWidth: 5,
borderLeftColor: '#e74c3c',
},
cardTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
cardValue: {
fontSize: 14,
color: '#7f8c8d',
},
cardStatus: {
fontSize: 12,
fontWeight: 'bold',
color: '#27ae60',marginTop: 5,
textAlign: 'right'
}
});
Simpan file. Tampilan di HP Anda akan otomatis ter-refresh (Fast Refresh).
c. Langkah 3: Menambahkan Interaksi (Button & Alert)
React Native tidak punya tag `<button>`, kita menggunakan komponen `Button` atau
`TouchableOpacity`. Kita akan coba menampilkan pesan alert saat kartu ditekan.
Ubah import di paling atas:
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, Alert } from
'react-native';
Ubah salah satu kartu (Gudang A) menjadi bisa diklik:
// Di dalam return(...), ganti View Card Gudang A dengan:
<TouchableOpacity
style={styles.card}
onPress={() => Alert.alert("Info", "Membuka Detail Stok Gudang A...")}
>
<Text style={styles.cardTitle}>Status Gudang A</Text>
<Text style={styles.cardValue}>Kapasitas: 85%</Text>
<Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
</TouchableOpacity>
6. Latihan/Tugas Mandiri
1) Latihan 1 (Gambar/Ikon):
Cari gambar logo perusahaan (atau gunakan placeholder), taruh di folder project, lalu
tampilkan menggunakan `<Image source={require('./logo.png')} style={styles.logo}
/>`.
2) Latihan 2 (ScrollView):
Jika konten melebihi tinggi layar, gunakan `<ScrollView>` untuk membungkus konten
agar bisa digulir ke bawah.
3) Tugas Proyek Mini (Profil Mesin Mobile):
a. Buat halaman profil mesin yang menampilkan: Foto Mesin (gunakan placeholder),
Nama Mesin, Tahun Pembuatan, dan Status.
b. Gunakan Layout Flexbox (`flexDirection: 'row'`) untuk menyusun Foto di kiri dan
Teks di kanan.
7. Petunjuk Pengumpulan Tugas
a. Screenshot/Screencast tampilan aplikasi di HP.
b. Kumpulkan kode `App.js`.
8. Troubleshooting Umum
 Masalah: Metro bundler (terminal) error "Port 19000/19001 already in use".
Solusi: Matikan terminal yang lama, atau kill process port tersebut. Bisa juga jalankan
`npx expo start --clear`. Masalah: Tidak bisa connect via WiFi (Network Error).
Solusi: Gunakan koneksi "Tunnel" (ketik `t` di terminal expo) atau gunakan kabel USB
(adb connection).

PERTEMUAN 15
Component, Navigation, dan Styling di React Native +
Proyek Mobile
Durasi: 340 Menit
Topik: React Navigation (Stack Navigator), Passing Data Antar Layar, dan Proyek Inventori
Sederhana.
1. Tujuan Pembelajaran
a. Memahami konsep navigasi layar di aplikasi mobile (Stack).
b. Mampu menginstall dan mengonfigurasi `react-navigation`.
c. Membuat aplikasi multi-halaman: Beranda (List) → Detail Item.
d. Meneruskan data (params) dari satu layar ke layar lain.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat alur navigasi aplikasi mobile yang kompleks.
b. Mahasiswa mampu menghubungkan daftar item dengan halaman detailnya.
3. Persiapan
a. Project Expo dari pertemuan 14.
b. Instalasi library navigasi (jalankan di terminal project):
Install library navigasi dan dependensinya
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
4. Materi Singkat
Navigasi di Mobile
Berbeda dengan web yang menggunakan URL (`/about`), mobile menggunakan Screen
Stack (Tumpukan Layar). Layar baru ditumpuk di atas layar lama. Untuk kembali, kita
melakukan pop pada history stack.
5. Langkah-langkah Praktikum
a. Langkah 1: Struktur Folder
Buat folder baru di dalam project bernama `screens`. Di dalamnya buat dua file:
1. `HomeScreen.js` (Daftar Inventori)
2. `DetailScreen.js` (Detail Barang)
b. Langkah 2: Membuat HomeScreen (Daftar Inventori)
Buka `screens/HomeScreen.js`.
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';// Data Mock Inventori
const DATA_INVENTORI = [
{ id: '1', nama: 'Baut M10', stok: 500, lokasi: 'Rak A-1' },
{ id: '2', nama: 'Oli Mesin 20L', stok: 12, lokasi: 'Rak B-3' },
{ id: '3', nama: 'Packing Kayu', stok: 100, lokasi: 'Gudang Luar' },
{ id: '4', nama: 'Mur Ring 12', stok: 0, lokasi: 'Rak A-2' }, // Stok Habis
];
function HomeScreen({ navigation }) {
// Fungsi Render Item untuk FlatList
const renderItem = ({ item }) => (
<TouchableOpacity
style={styles.itemContainer}
onPress={() => navigation.navigate('Detail', { itemData: item })}
>
<Text style={styles.itemTitle}>{item.nama}</Text>
<View style={styles.itemInfo}>
<Text style={styles.itemSub}>Stok: {item.stok}</Text>
<Text style={styles.itemSub}>{item.lokasi}</Text>
</View>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<Text style={styles.header}>Daftar Inventori Gudang</Text>
<FlatList
data={DATA_INVENTORI}
renderItem={renderItem}
keyExtractor={item => item.id}
/>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
paddingTop: 20,
},
header: {
fontSize: 22,
fontWeight: 'bold',
marginBottom: 15,
paddingHorizontal: 15,
},
itemContainer: {
backgroundColor: '#f9f9f9',
padding: 15,
marginVertical: 8,
marginHorizontal: 15,
borderRadius: 8,
borderWidth: 1,
borderColor: '#ddd',
},
itemTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#333',
},
itemInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 5,
},
itemSub: {
color: '#666',},
});
export default HomeScreen;
c. Langkah 3: Membuat DetailScreen
Buka `screens/DetailScreen.js`.
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
function DetailScreen({ route, navigation }) {
// Menerima data yang dikirim dari HomeScreen
const { itemData } = route.params;
return (
<View style={styles.container}>
<View style={styles.card}>
<Text style={styles.label}>Nama Barang:</Text>
<Text style={styles.value}>{itemData.nama}</Text>
<Text style={styles.label}>Stok Saat Ini:</Text>
<Text style={[styles.value, itemData.stok < 20 ? styles.dangerText :
styles.successText]}>
{itemData.stok} Unit
</Text>
<Text style={styles.label}>Lokasi Penyimpanan:</Text>
<Text style={styles.value}>{itemData.lokasi}</Text>
</View>
<Button title="Kembali ke Daftar" onPress={() => navigation.goBack()} />
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
padding: 20,
backgroundColor: '#f0f0f0',
},
card: {
backgroundColor: 'white',
padding: 20,
borderRadius: 10,
marginBottom: 20,
elevation: 3,
},
label: {
fontSize: 14,
color: '#7f8c8d',
marginTop: 10,
},
value: {
fontSize: 20,
fontWeight: 'bold',
color: '#2c3e50',
},
dangerText: {
color: 'red',
},
successText: {
color: 'green',}
});
export default DetailScreen;
d. Langkah 4: Menghubungkan Navigation di App.js
Buka file utama `App.js` dan modifikasi menjadi sebagai berikut:
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import Screens
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
// Membukan Stack Navigator
const Stack = createNativeStackNavigator();
export default function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Home"
component={HomeScreen}
options={{ title: 'Gudang Ind. v1.0' }}
/>
<Stack.Screen
name="Detail"
component={DetailScreen}
options={({ route }) => ({ title: route.params?.itemData.nama || 'Detail' })}
/
>
</Stack.Navigator>
</NavigationContainer>
);
}
6. Latihan/Tugas Mandiri
1) Latihan 1 (Conditional Rendering): Pada `DetailScreen`, jika stok = 0, munculkan
tombol "Request Stok Darurat" (gunakan Button tambahan).
2) Latihan 2 (Passing Data): Di `HomeScreen`, tambahkan tombol FAB (Floating Action
Button) atau Button di bawah untuk "Tambah Barang". Saat ditekan, navigasi ke layar
(screen baru bernama `TambahScreen`) yang berisi form kosong.
3) Tugas Proyek Mini (Aplikasi Inspeksi QC):
Buat aplikasi inspeksi sederhana.
a. Home: Daftar item yang perlu diinspeksi.
b. Detail: Foto item, standar kualitas, dan dropdown status (Lolos/Gagal).
c. Simulasi: Saat user memilih "Gagal" di layar detail dan kembali, ubah warna teks
di Home menjadi merah (memerlukan sedikit logika state management sederhana).
7. Petunjuk Pengumpulan Tugas
a. Video demo alur aplikasi: Klik Item -> Tampil Detail -> Kembali.
b. Source code folder `screens`.8. Troubleshooting Umum
 Masalah: Error "Object is not a function" pada navigation.
Solusi: Pastikan versi `react-navigation` konsisten. Biasanya versi 6+ menggunakan
cara export seperti di atas.
 Masalah: Layar Detail kosong (data tidak muncul).
Solusi: Cek di `DetailScreen`, pastikan destructuring `route.params` benar. Cek di
`HomeScreen`, pastikan `navigation.navigate('Detail', { itemData: item })` mengirim
nama properti yang sama.

PERTEMUAN 16
Ujian Akhir Semester (UAS)
Topik: Aplikasi Mobile Lengkap & Integrasi
Durasi: 340 Menit
1. Deskripsi Tugas Ujian
Anda diminta untuk membangun "Aplikasi Mobile Pencarian Barang di Gudang
(Warehouse Locator)".
Aplikasi ini akan digunakan oleh operator gudang untuk mengetahui posisi barang dan
status stoknya secara cepat melalui PDA/HP.
2. Kriteria Penilaian (Rubrik)
Aspek Bobot Kriteria
Fungsionalitas
Mobile
40%  Aplikasi berjalan lancar di HP (via Expo Go).
 Pencarian berfungsi (Filter data array).
 Navigasi antar layar (List → Detail) berjalan
tanpa crash.
 Input stok (tambah/kurang) memperbarui
tampilan.
User Interface
(Mobile)
25%  Komponen UI bersih dan mudah dibaca (font size
cukup besar).
 Layout menggunakan Flexbox dengan benar
(tidak overlapping).
 Feedback visual (warna berubah jika stok kritis).
Kode React Native 20%  Penggunaan `FlatList` untuk performa rendering
list panjang.
 StyleSheet` terorganisir.
 Tidak ada warning "Yellow Box" di aplikasi.
Kreativitas & Fitur
Tambahan
15%  Menambahkan fitur Scan Barcode (simulasi
saja/tombol scan yang menampilkan dummy
input).
 Menambahkan fitur "Sort" berdasarkan nama
barang.
3. Spesifikasi Teknis Minimal
a. Database (Local): Gunakan Array of Objects yang berisi minimal 10 data barang
dummy (ID, Nama Barang, Kategori, Stok, Lokasi Rak).
b. Halaman Search/List:
 Menampilkan daftar barang.
 Memiliki Search Bar di bagian atas. Saat user mengetik nama barang, daftar terfilter
secara real-time.c. Halaman Detail:
 Menampilkan detail lengkap barang.
 Terdapat tombol `+` dan `-` untuk update stok secara lokal (sederhana).
 Jika stok < 5, tampilkan peringatan visual (teks merah/background merah).
4. Instruksi Pengumpulan UAS
a. Repo GitHub: Wajib mengunggah seluruh source code (Web React & Mobile Expo) ke
repository GitHub pribadi.
b. README.md: Buat file README yang menjelaskan cara menjalankan aplikasi (`npm
install`, `npm start`, dll) dan screenshot hasil akhir.
c. Link Submission: Submit link Repository ke spreadsheet yang ditetapkan dosen
pengampu.

PENUTUP
Selamat telah menyelesaikan mata kuliah praktik Aplikasi Web dan Mobile ini. Keterampilan
yang Anda peroleh mulai dari dasar HTML hingga membangun aplikasi React Native adalah
fondasi yang kuat untuk era Industri 4.0.
Teruslah berlatih, eksplorasi teknologi baru, dan jangan ragu untuk menerapkan inovasi Anda
dalam memecahkan masalah nyata di industri.
Selamat Bekerja, Calon Insinyur Masa Depan!
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
- Filter array `mesinData` dan `karyawanData` berdasarkan input
- Render hasil filter

**Langkah**:
1. Tambahkan `useState` untuk search
2. Buat fungsi filter
3. Update render untuk menampilkan hasil filter

# Manual Praktikum Aplikasi Web dan Mobile
Semester Genap 2025/2026
Mata Kuliah : Aplikasi Web dan Mobile
Dosen Pengampu : Dr. Eng. Ir. Aji Ery Burhandenny, S.T., M.AIT.
Program Studi Teknik Industri
Fakultas Teknik
Universitas Negeri Yogyakarta

## Kata Pengantar
Selamat datang di mata kuliah Aplikasi Web dan Mobile. Sebagai calon insinyur industri,
kemampuan Anda tidak hanya cukup pada perancangan sistem pabrik atau manajemen rantai
pasok, tetapi juga pada kemampuan untuk mengotomasi dan memvisualisasikan data tersebut.
Era Industri 4.0 menuntut integrasi sistem (IoT, ERP, MES) yang semanya berjalan di atas
browser maupun perangkat mobile.
Manual ini disusun dengan pendekatan project-based learning di mana setiap baris kode
yang Anda tulis memiliki tujuan akhir: menyelesaikan masalah nyata di industri, mulai dari
pencatatan produksi hingga monitoring inventori. Siapkan mental Anda, karena dalam 16
pertemuan ini, Anda akan bertransformasi menjadi seorang Industrial Engineer yang melek
teknologi.
Yogyakarta, 25 Januari 2026
Dr. Eng. Ir. Aji Ery Burhandenny, S.T., M.AIT.

## DAFTAR ISI
PENDAHULUAN Instalasi Git & Penggunaan Version Control di VS Code ..........................4
PERTEMUAN 1 Pengenalan Pemrograman Web & HTML Dasar...........................................7
PERTEMUAN 2 CSS Dasar & Styling .................................................................................. 11
PERTEMUAN 3 Layout CSS Lanjutan (Flexbox & Grid) + Bootstrap.................................15
PERTEMUAN 4 JavaScript Dasar (Variabel, Tipe Data, Operator, Control Flow) ...............19
PERTEMUAN 5 Function, Array, Object di JavaScript.........................................................22
PERTEMUAN 6 DOM Manipulation & Event Handling ......................................................25
PERTEMUAN 7 Form Validation & Local Storage...............................................................29
PERTEMUAN 8 Asynchronous JavaScript (Fetch API, JSON, REST API Sederhana)........34
PERTEMUAN 9 Pengenalan React.js (Component, JSX, Props)..........................................38
PERTEMUAN 10 State, Hooks (useState, useEffect), dan Conditional Rendering...............42
PERTEMUAN 11 React Routing & Multi-Page App + Integrasi API ...................................46
PERTEMUAN 12 Proyek Web: Dashboard Monitoring Produksi (React + Chart.js) ...........50
PERTEMUAN 13 Ujian Tengah Semester (UTS)...................................................................54
PERTEMUAN 14 Pengenalan React Native & Setup Expo ..................................................57
PERTEMUAN 15 Component, Navigation, dan Styling di React Native + Proyek Mobile.62
PERTEMUAN 16 Ujian Akhir Semester (UAS)....................................................................67
PENUTUP................................................................................................................................69

## PENDAHULUAN
Instalasi Git & Penggunaan Version Control di VS Code
Tujuan: Mempersiapkan lingkungan kerja profesional dengan sistem kontrol versi (Git) untuk
backup kode, manajemen revisi, dan persiapan pengumpulan tugas.
1. Apa itu Git dan GitHub?
Git: Alat pencatat perubahan ("Time Machine") pada kode Anda. Jika Anda salah
menghapus kode hari ini, Git bisa mengembalikannya ke kondisi kemarin.
GitHub: Layanan "Cloud" untuk menyimpan kode Git Anda. Sebagai insinyur, Anda akan
sering berkolaborasi menggunakan Git.
2. Langkah Instalasi
a. Download Git:
Kunjungi git-scm.com dan download versi untuk Windows (atau sesuai OS Anda).
Install dengan klik "Next" terus hingga selesai (gunakan pengaturan default).
b. Konfigurasi Identitas (PENTING):
Buka Terminal di VS Code (`Ctrl + ~`) atau Command Prompt, ketik perintah berikut
dan ganti dengan nama dan email Anda. Ini akan merekam siapa yang membuat kode
tersebut.
git config --global user.name "Nama Lengkap Anda"
git config --global user.email "email@kampus.ac.id"
c. Buat Akun GitHub:
Kunjungi github.com dan daftar akun gratis.
3. Alur Kerja Git di VS Code (GUI)
Untuk mahasiswa Teknik Industri, kita akan menggunakan antarmuka visual (GUI) VS
Code yang lebih mudah daripada mengetik perintah terminal manual.
Alur Dasar:
a. Changes: Anda mengedit kode.
b. Stage: Anda menandai file mana yang akan disimpan (diklik tanda +).
c. Commit: Anda memberi catatan/rekam jejak perubahan tersebut.
d. Push: Anda mengirimkan rekaman tersebut ke Cloud (GitHub).
4. Praktik: Memulai Proyek dengan Git
Skenario: Anda akan mulai membuat folder untuk Praktikum.
a) Buat Repository di GitHub:
 Login ke GitHub. Klik tombol + (pojok kanan atas) → New repository.
 Repository name: `PraktikumWebMob_TekInd_2026`.
 Pilih Public.
 Centang "Add a README file".
 Klik Create repository.
b) Clone ke Komputer Lokal:
 Di halaman repository GitHub yang baru dibuat, klik tombol hijau Code, lalu
copy URL (HTTPS).
 Buka VS Code.
 Pilih menu File → Clone Repository...
 Paste URL tadi. Pilih lokasi di komputer Anda (misal: Desktop) untuk
menyimpan folder project.
 Klik "Open" setelah proses clone selesai.
c) Simpan Perubahan Pertama (Commit):
 Buka folder `PraktikumWebMob_TekInd_2026` di VS Code.
 Buat file baru `belajar.html`, isi dengan `<h1>Halo Dunia</h1>`.
 Lihat menu di sebelah kiri, klik ikon Source Control (ikon dengan lingkaran
bercabang).
 Anda akan melihat `belajar.html` muncul di kolom Changes.
 Hover ke `belajar.html`, klik tanda + (Stage Changes). File pindah ke kolom
Staged Changes.
 Isi kotak "Message": `Menambahkan file pertama`.
 Klik tombol Check (Commit).
 Keterangan: Perubahan kini sudah tersimpan di riwayat Git lokal komputer
Anda.
d) Kirim ke Cloud (Push):
 Klik tombol titik tiga (... ) di menu Source Control.
 Pilih Push.
 VS Code akan meminta login GitHub (Gunakan akun yang sudah dibuat).
 Setelah sukses, cek halaman GitHub Anda. File `belajar.html` akan muncul di
sana.
5. Istilah Penting yang Sering Muncul
Istilah Arti
Untracked File baru yang belum dikenal Git.
Modified File yang sudah di-Commit sebelumnya, tapi isinya berubah.
Staged Siap untuk disimpan (ada di antrian).
Commit Snapshot (foto) dari kode Anda pada saat itu.
Pull Mengambil update terbaru dari GitHub ke komputer (selalu lakukan ini
sebelum kerja jika kolaborasi).
6. Troubleshooting Git Umum
 Masalah: Error "Failed to push" atau "Authentication failed".Solusi: GitHub sudah tidak mendukung login password biasa. Anda perlu menggunakan
Personal Access Token (PAT) atau login melalui pop-up browser yang diizinkan VS
Code.
 Masalah: VS Code tidak merespon perubahan.
Solusi: Cek apakah file tersimpan (`Ctrl+S`). Git hanya memantau file yang tersimpan
di disk.
Catatan untuk Mahasiswa:
Pada setiap akhir pertemuan praktikum, disarankan Anda melakukan Commit & Push ke
repository GitHub pribadi Anda. Ini berfungsi sebagai backup otomatis agar pekerjaan/tugas
Anda tidak hilang jika komputer error.

## PERTEMUAN 1
Pengenalan Pemrograman Web & HTML Dasar
Durasi: 340 Menit
Topik: Struktur halaman web, elemen HTML semantik, dan formulir dasar.
1. Tujuan Pembelajaran
a. Memahami peran penting web application dalam sistem informasi industri.
b. Mampu menjelaskan struktur dasar HTML dan cara kerjanya di browser.
c. Mampu membuat halaman web statis dengan elemen teks, gambar, dan tabel.
d. Mampu menyusun formulir input data sederhana (misal: data produksi).
2. Kompetensi yang Dicapai
a. Mahasiswa dapat mengoperasikan kode editor (VS Code) untuk membuat file HTML.
b. Mahasiswa memahami penggunaan tag HTML untuk menyajikan data teknis industri.
3. Persiapan (Instalasi)
a. Visual Studio Code (VS Code): Download dan install dari code.visualstudio.com.
b. Google Chrome: Sebagai browser utama untuk pengujian.
c. Ekstensi VS Code: Install "Live Server" (oleh Ritwick Dey) untuk melihat perubahan
web secara real-time.
4. Materi Singkat
Mengapa HTML untuk Teknik Industri?
HTML (HyperText Markup Language) adalah kerangka dasar dari sebuah halaman web.
Bayangkan Anda ingin membuat digital checklist atau sistem pelaporan kerusakan mesin.
HTML adalah tempat di mana Anda menyusun tata letak input data tersebut.
Struktur Dasar HTML:
HTML menggunakan "tag" untuk menandai elemen. Struktur utamanya adalah:
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Judul Halaman</title>
</head>
<body>
<!-- Konten Visible di sini -->
</body>
</html>
Tag Penting:
`<h1>` hingga `<h6>` : Judul (Heading).
`<p>` : Paragraf teks.
`<table>`, `<tr>`, `<th>`, `<td>`: Tabel (sangat penting untuk data laporan).
`<form>`, `<input>`, `<label>` : Formulir input data.`<div>` : Kontainer pembungkus (block).
`<span>` : Pembungkus teks (inline).
5. Langkah-langkah Praktikum
a. Langkah 1: Membuat File HTML
1) Buka VS Code.
2) Buat folder baru di desktop bernama `PraktikumWeb_TekInd`.
3) Di dalam VS Code, pilih File > Open Folder dan pilih folder tersebut.
4) Buat file baru bernama `index.html`.
5) Ketik `!` lalu tekan Tab (atau Enter). VS Code akan otomatis membuatkan kerangka
HTML dasar.
b. Langkah 2: Menyusun Profil Lini Produksi
Kita akan membuat halaman profil sebuah mesin produksi. Hapus isi `<body>` dan
ganti dengan kode berikut:
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Data Mesin Produksi - Lini A</title>
</head>
<body>
<h1>Profil Mesin CNC-01</h1>
<hr>
<h2>Spesifikasi Teknis</h2>
<ul>
<li><strong>Merk:</strong> Yamazaki Mazak</li>
<li><strong>Kapasitas:</strong> 500 unit/hari</li>
<li><strong>Status:</strong> <span style="color: green;">Operasional</span></li>
</ul>
<h2>Jadwal Pemeliharaan</h2>
<table border="1" cellpadding="10">
<thead>
<tr>
<th>Tanggal</th>
<th>Jenis Perawatan</th>
<th>Penanggung Jawab</th>
</tr>
</thead>
<tbody>
<tr>
<td>12 Jan 2024</td>
<td>Penggantian Oli</td>
<td>Teknisi A</td>
</tr>
<tr>
<td>15 Feb 2024</td>
<td>Kalibrasi Presisi</td>
<td>Teknisi B</td>
</tr>
</tbody>
</table>
</body>
</html>c. Langkah 3: Membuat Form Input Data Produksi
Di bawah tabel pada Langkah 2, tambahkan kode berikut untuk membuat formulir input
harian:
<hr>
<h2>Input Data Harian</h2>
<form action="">
<label for="tanggal">Tanggal:</label><br>
<input type="date" id="tanggal" name="tanggal" required><br><br>
<label for="shift">Shift Kerja:</label><br>
<select id="shift" name="shift">
<option value="Pagi">Pagi (08:00 - 16:00)</option>
<option value="Siang">Siang (16:00 - 24:00)</option>
<option value="Malam">Malam (00:00 - 08:00)</option>
</select><br><br>
<label for="jumlah">Jumlah Produksi (Unit):</label><br>
<input type="number" id="jumlah" name="jumlah" min="0" placeholder="Masukkan
jumlah..."><br><br>
<label for="catatan">Catatan Kerusakan:</label><br>
<textarea id="catatan" name="catatan" rows="4" cols="50"
placeholder="Deskripsikan jika ada kendala..."></textarea><br><br>
<button type="submit">Simpan Data</button>
</form>
d. Langkah 4: Menjalankan File
1) Klik kanan pada area kode `index.html`.
2) Pilih "Open with Live Server".
3) Browser akan terbuka otomatis menampilkan halaman yang Anda buat.
6. Latihan/Tugas Mandiri
1) Latihan 1 (Pengayaan Tabel): Tambahkan satu kolom baru di tabel "Jadwal
Pemeliharaan" bernama "Status" dan isi datanya secara manual (Selesai/Pending).
2) Latihan 2 (Validasi Dasar): Pada input "Jumlah Produksi", tambahkan atribut `max`
dengan nilai 600 (maksimal kapasitas mesin).
3) Latihan 3 (Semantic HTML): Bungkus judul "Profil Mesin" dan spesifikasinya
menggunakan tag `<header>` dan `<section>` agar kode lebih rapi dan semantik.
4) Tugas Proyek Mini (Relevansi Industri):
Buatlah halaman HTML baru bernama `laporan_kualitas.html`. Halaman ini berisi
formulir "Laporan Inspeksi Kualitas" dengan field:
 ID Produk (Text)
 Nama Inspektur (Text)
 Jenis Cacat (Radio Button: Geometri, Permukaan, Fungsional)
 Jumlah Cacat (Number) Foto Produk (Input type file - placeholder saja)
 Tombol Submit
7. Petunjuk Pengumpulan Tugas
a. Simpan seluruh file dalam folder `Pertemuan1_NIM_NamaMahasiswa`.
b. Kompres (zip) folder tersebut.
c. Unggah ke GDrive kelas dan kirim via email dosen dengan subjek: [WebLab1] Nama -
NIM.
8. Troubleshooting Umum
 Masalah: Live Server tidak muncul saat klik kanan.
Solusi: Pastikan ekstensi sudah terinstall dan reload VS Code (`Ctrl+Shift+P` →
"Developer: Reload Window").
 Masalah: Tabel terlihat berantakan.
Solusi: Nanti kita akan rapikan dengan CSS. Untuk sekarang, pastikan tag `</table>`
sudah ditutup dengan benar.

## PERTEMUAN 2
CSS Dasar & Styling
Durasi: 340 Menit
Topik: Pengenalan CSS, Selectors, Box Model, dan Styling Form.
1. Tujuan Pembelajaran
a. Memahami cara kerja CSS untuk mempercantik antarmuka pengguna (UI).
b. Mampu memanipulasi warna, font, dan ukuran elemen.
c. Menguasai konsep Box Model (Margin, Border, Padding) untuk tata letak.
d. Menerapkan CSS pada formulir agar terlihat profesional dan mudah digunakan.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat mengubah tampilan HTML standar menjadi desain yang lebih
menarik.
b. Mahasiswa memahami prioritas selektor CSS (Inline vs Internal vs External).
3. Persiapan
a. File `index.html` dari pertemuan sebelumnya.
b. Koneksi internet (untuk referensi font Google Fonts jika diperlukan).
4. Materi Singkat
Mengapa UI itu Penting?
Seorang insinyur industri merancang sistem yang digunakan oleh operator. Sistem yang
sulit dibaca (kontras rendah) atau tombol yang terlalu kecil akan menyebabkan human error
dan menurunkan produktivitas. CSS mengatasi masalah ini.
Cara Menanamkan CSS:
1) Inline: `<h1 style="color:red">` (Tidak disarankan, kode berantakan).
2) Internal: `<style>` di dalam `<head>` (Cocok untuk halaman kecil).
3) External: File `.css` terpisah (Standar industri - praktikum ini menggunakan cara ini).
Box Model:
Setiap elemen HTML dianggap kotak.
- `content`: Teks/gambar.
- `padding`: Jarak isi ke garis tepi (dalam).
- `border`: Garis tepi.
- `margin`: Jarak elemen ke elemen lain (luar).5. Langkah-langkah Praktikum
a. Langkah 1: Membuat File CSS Eksternal
1) Buka folder `PraktikumWeb_TekInd`.
2) Buat file baru bernama `style.css`.
3) Buka `index.html`, dan hubungkan ke file CSS dengan menambahkan kode ini di
dalam `<head>`:
<link rel="stylesheet" href="style.css">
b. Langkah 2: Styling Body dan Tipografi
Buka `style.css` dan masukkan kode berikut untuk memberikan settingan global:
/* Import Font dari Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
body {
font-family: 'Roboto', sans-serif;
background-color: #f4f4f4; /* Warna abu-abu muda untuk background */
color: #333;
margin: 0;
padding: 20px;
}
h1 {
color: #2c3e50; /* Biru tua gelap */
text-align: center;
border-bottom: 2px solid #2c3e50;
padding-bottom: 10px;
}
h2 {
color: #34495e;
margin-top: 30px;
}
c. Langkah 3: Styling Tabel Data
Kita akan membuat tabel agar lebih mudah dibaca (readability) operator lantai produksi.
table {
width: 100%;
border-collapse: collapse; /* Menggabungkan border ganda menjadi satu */
margin-top: 20px;
box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Efek bayangan halus */
}
th, td {
padding: 12px;
text-align: left;
border-bottom: 1px solid #ddd;
}
th {
background-color: #2980b9; /* Biru profesional */
color: white;
}
tr:hover {
background-color: #f1f1f1; /* Highlight baris saat mouse diarahkan */
}d. Langkah 4: Styling Formulir (Fokus pada UX)
Agar formulir mudah diisi, kita buat input field lebih lebar dan jelas.
form {
background-color: white;
padding: 20px;
border-radius: 8px; /* Sudut melengkung */
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
max-width: 600px;
margin: 0 auto; /* Formulir berada di tengah */
}
label {
display: block;
margin-bottom: 5px;
font-weight: bold;
}
input[type="text"],
input[type="number"],
input[type="date"],
select,
textarea {
width: 100%; /* Lebar penuh */
padding: 10px;
margin-bottom: 15px;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box; /* Padding tidak menambah lebar total */
} /
* Styling khusus tombol */
button {
background-color: #27ae60; /* Hijau */
color: white;
padding: 12px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
width: 100%;
font-size: 16px;
}
button:hover {
background-color: #219150; /* Hijau lebih gelap saat hover */
}
e. Langkah 5: Melihat Hasil
Simpan semua file. Browser (jika Live Server aktif) akan otomatis refresh. Lihat
perubahan drastis dari tampilan sebelumnya.
6. Latihan/Tugas Mandiri
1) Latihan 1 (Class Selector): Berikan kelas `status-ok` pada teks status operasional di
HTML, dan berikan warna hijau tebal di CSS. Berikan kelas `status-down` dan berikan
warna merah.
2) Latihan 2 (Layout Container): Buat sebuah `<div>` dengan id `container` di HTML
yang membungkus seluruh konten. Di CSS, berikan `max-width: 800px`, `margin: 0
auto`, dan `background: white` agar konten terlihat seperti kertas di tengah layar.
3) Tugas Proyek Mini (Industri):
Terapkan styling CSS yang sama ke file `laporan_kualitas.html` yang Anda buat di
pertemuan 1.a. Tambahkan aturan CSS agar tombol "Reset" (jika ada) berwarna merah
(`#c0392b`).
b. Pastikan form responsif (tetap rapi saat di-zoom).
7. Petunjuk Pengumpulan Tugas
a. Simpan seluruh file dalam folder `Pertemuan2_NIM_NamaMahasiswa`.
b. Pastikan menyertakan file `style.css`.
c. Unggah sesuai format ketentuan.
8. Troubleshooting Umum
 Masalah: Style tidak berubah.
Solusi: Cek apakah link `<link>` di `index.html` sudah benar filenamanya. Cek apakah
ada typo di nama class/id. Clear cache browser (`Ctrl+F5`).
 Masalah: Input form melebar keluar layar.
Solusi: Pastikan properti `box-sizing: border-box` diterapkan pada elemen input (seperti
di contoh).

## PERTEMUAN 3
Layout CSS Lanjutan (Flexbox & Grid) + Bootstrap
Durasi: 340 Menit
Topik: CSS Flexbox, CSS Grid, dan Framework CSS (Bootstrap 5) untuk prototyping cepat.
1. Tujuan Pembelajaran
a. Memahami konsep layout modern menggunakan Flexbox dan Grid.
b. Mengenal dan menggunakan Framework CSS (Bootstrap) untuk mempercepat
pengembangan UI.
c. Mampu membuat layout dashboard responsif (Sidebar + Main Content).
d. Menerapkan komponen Bootstrap (Card, Navbar, Button) pada konteks industri.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat menyusun elemen halaman web secara otomatis (ralat) tanpa harus
mengatur margin/padding satu per satu.
b. Mahasiswa mampu membuat halaman web yang responsif (tampilan menyesuaikan
layar HP/Desktop).
3. Persiapan
Pastikan terkoneksi internet untuk mengunduh library Bootstrap via CDN.
4. Materi Singkat
Mengapa Framework & Layout System?
Sebagai insinyur, Anda tidak ingin membuat ulang baut dan mur setiap kali merancang
mesin. Sama halnya dengan coding, kita menggunakan framework seperti Bootstrap agar
tidak perlu menulis CSS dari nol.
 Flexbox: Idealisasi layout 1 dimensi (baris atau kolom). Sangat baik untuk menyusun
item di dalam navbar.
 CSS Grid: Idealisasi layout 2 dimensi (baris dan kolom sekaligus). Sangat cocok untuk
Dashboard KPI di mana Anda perlu membagi layar menjadi kotak-kotak informasi.
 Bootstrap: Framework CSS populer yang menyediakan kelas-kelas siap pakai (misal:
`.btn-primary`, `.row`, `.col`).
5. Langkah-langkah Praktikum
a. Langkah 1: Integrasi Bootstrap 5
Buka file `index.html` dari pertemuan sebelumnya. Hapus link ke `style.css` sementara
(atau biarkan di bawah agar bisa melakukan custom override). Tambahkan CDN
Bootstrap di dalam `<head>`:
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sistem Monitoring Produksi</title>
<!-- Bootstrap CSS CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
rel="stylesheet">
<!-- Custom CSS kita tetap di bawah agar bisa menimpa style bootstrap jika perlu -->
<link rel="stylesheet" href="style.css">
</head>
<body>
<!-- Konten akan kita masukkan di sini -->
<!-- Bootstrap JS Bundle (diperlukan untuk komponen interaktif seperti dropdown) -->
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js">
</script>
</body>
</html>
b. Langkah 2: Membuat Navigasi Bar (Navbar)
Hapus konten lama di dalam `<body>`, ganti dengan Navbar industri:
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
<a class="navbar-brand" href="">TekInd Systems</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
data-bs-target="#navbarNav">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link active" href="">Dashboard</a>
</li>
<li class="nav-item">
<a class="nav-link" href="">Input Produksi</a>
</li>
<li class="nav-item">
<a class="nav-link" href="">Inventori</a>
</li>
</ul>
</div>
</div>
</nav>
c. Langkah 3: Layout Grid Dashboard (Sistem Grid)
Di bawah navbar, kita buat sistem Grid 12 kolom khas Bootstrap. Kita akan buat
dashboard dengan 3 kartu di atas (KPI Utama) dan tabel di bawah.
<div class="container mt-4">
<!-- Row 1: KPI Cards (Menggunakan Grid System) -->
<div class="row mb-4">
<!-- Kolom lebar 4 (dari 12) -->
<div class="col-md-4">
<div class="card text-white bg-primary mb-3">
<div class="card-header">Total Produksi</div>
<div class="card-body">
<h5 class="card-title">1,250 Unit</h5>
<p class="card-text">Target Harian: 1,200 Unit</p>
</div></div>
</div>
<!-- Kolom lebar 4 -->
<div class="col-md-4">
<div class="card text-white bg-success mb-3">
<div class="card-header">Efisiensi Mesin</div>
<div class="card-body">
<h5 class="card-title">92%</h5>
<p class="card-text">Status: Optimal</p>
</div>
</div>
</div>
<!-- Kolom lebar 4 -->
<div class="col-md-4">
<div class="card text-white bg-warning mb-3">
<div class="card-header">Reject Rate</div>
<div class="card-body">
<h5 class="card-title">1.5%</h5>
<p class="card-text">Perlu perhatian shift malam</p>
</div>
</div>
</div>
</div>
<!-- Row 2: Tabel Data -->
<div class="row">
<div class="col-12">
<h3>Data Log Produksi Real-time</h3>
<table class="table table-striped table-hover">
<thead class="table-dark">
<tr>
<th>Waktu</th>
<th>Mesin</th>
<th>Produk</th>
<th>Jumlah</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td>08:00</td>
<td>CNC-01</td>
<td>Part A-12</td>
<td>50</td>
<td><span class="badge bg-success">OK</span></td>
</tr>
<tr>
<td>08:15</td>
<td>CNC-02</td>
<td>Part B-05</td>
<td>45</td>
<td><span class="badge bg-danger">Error</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
d. Langkah 4: Styling Form dengan Bootstrap Classes
Kita ubah form manual tadi menjadi form rapi Bootstrap. Tambahkan di bawah tabel
atau di halaman terpisah.
<div class="container mt-5">
<h2>Form Input Produksi Manual</h2><form>
<div class="mb-3">
<label for="kodeMesin" class="form-label">Kode Mesin</label>
<input type="text" class="form-control" id="kodeMesin" placeholder="Contoh:
CNC-01">
</div>
<div class="mb-3">
<label for="shiftSelect" class="form-label">Pilih Shift</label>
<select class="form-select" id="shiftSelect">
<option selected>Pilih...</option>
<option value="1">Shift 1 (Pagi)</option>
<option value="2">Shift 2 (Siang)</option>
<option value="3">Shift 3 (Malam)</option>
</select>
</div>
<div class="mb-3">
<label for="jumlahProduksi" class="form-label">Jumlah Produksi</label>
<input type="number" class="form-control" id="jumlahProduksi">
</div>
<button type="submit" class="btn btn-primary">Kirim Data</button>
</form>
</div>
6. Latihan/Tugas Mandiri
1) Latihan 1 (Grid Responsif): Coba ubah ukuran layar browser Anda. Perhatikan
bagaimana kartu KPI yang tadinya sejajar (3 kolom) akan menumpuk ke bawah (1
kolom) di layar HP. Ini adalah kekuatan Grid System (`col-md-4` artinya 4 kolom di
layar medium ke atas, otomatis 12 kolom/1 baris di layar kecil).
2) Latihan 2 (Modifikasi Card): Ubah kartu "Efisiensi Mesin" menjadi warna merah
(`bg-danger`) jika angkanya diubah menjadi di bawah 80%.
3) Tugas Proyek Mini (Dashboard Layout):
Buatlah struktur dashboard baru bernama `dashboard_inventori.html`.
a. Gunakan Bootstrap Grid.
b. Bagian atas: Judul "Gudang Bahan Baku".
c. Bagian kiri (4 kolom): Form Stok Masuk (Input nama barang, qty, supplier).
d. Bagian kanan (8 kolom): Tabel Stok Saat Ini (Gunakan tabel Bootstrap).
7. Petunjuk Pengumpulan Tugas
a. Simpan progress dalam folder `Pertemuan3_NIM_NamaMahasiswa`.
b. Kumpulkan link GitHub repository jika sudah mulai menggunakan Git, atau file zip.
8. Troubleshooting Umum
 Masalah: Tampilan berantakan atau gaya Bootstrap tidak muncul.
Solusi: Pastikan koneksi internet aktif karena kita menggunakan CDN. Cek URL CDNnya.
 Masalah: Navbar tidak bisa diklik (toggle) di HP.
Solusi: Pastikan script `bootstrap.bundle.min.js` disertakan di paling bawah `<body>`.

## PERTEMUAN 4
JavaScript Dasar (Variabel, Tipe Data, Operator, Control Flow)
Durasi: 340 Menit
Topik: Logika pemrograman, variabel, tipe data, operator aritmatika/logika, dan percabangan.
1. Tujuan Pembelajaran
a. Memahami peran JavaScript sebagai "otak" dari halaman web.
b. Mampu mendeklarasikan variabel dan memahami aturan penamaannya.
c. Menguasai operator aritmatika untuk perhitungan sederhana.
d. Mampu menggunakan Control Flow (`if/else`, `switch`) untuk pengambilan keputusan
otomatis.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat kalkulasi otomatis di web (misal: hitung total gaji
berdasarkan lembur).
b. Mahasiswa memahami alur logika program.
3. Persiapan
Setting VS Code dengan ekstensi Quokka.js (opsional, untuk melihat hasil JS langsung)
atau menggunakan Console browser.
4. Materi Singkat
Mengapa JavaScript untuk Insinyur Industri?
Web statis (HTML/CSS) hanya menampilkan data. JavaScript memproses data.
Contoh: Operator menginput jumlah jam kerja. JS menghitung apakah jam kerja tersebut
normal atau lembur, lalu menghitung gaji yang harus dibayar secara otomatis. Ini adalah
dasar dari otomasi proses bisnis.
Konsep Dasar:
 Variabel: Tempat menyimpan data. Gunakan `let` (bisa diubah) dan `const` (tetap).
Hindari `var`.
 Tipe Data: Number (angka), String (teks), Boolean (benar/salah).
 Operator: `+`, `-`, `*`, `/`, `%` (sisa bagi), `===` (sama dengan), `>` (lebih besar),
`&&` (dan), `||` (atau).
 If/Else: "Jika kondisi A terjadi, lakukan X. Jika tidak, lakukan Y."
5. Langkah-langkah Praktikum
a. Langkah 1: Hello World & Variabel di Console
Buat file baru `script.js` dan hubungkan ke `index.html` (taruh di atas `</body>`):
`<script src="script.js"></script>`Isi `script.js` dengan kode berikut:
// Komentar single line
// 1. Variabel & Tipe Data
let namaMesin = "CNC-Mazak-01"; // String
let targetHarian = 500; // Number
let isOperational = true; // Boolean
// Menampilkan ke console browser (Tekan F12 -> Console)
console.log("Mesin: " + namaMesin);
console.log("Target: " + targetHarian);
// 2. Operator Aritmatika
let produksiPagi = 200;
let produksiSiang = 150;
let totalProduksi = produksiPagi + produksiSiang;
console.log("Total saat ini: " + totalProduksi);
// Hitung sisa kekurangan target
let kekurangan = targetHarian - totalProduksi;
console.log("Kekurangan target: " + kekurangan);
b. Langkah 2: Control Flow (Pengambilan Keputusan)
Kita akan membuat logika untuk menentukan apakah mesin perlu dimatikan untuk
maintenance atau tidak. Tambahkan kode berikut di `script.js`:
// Simulasi data pembacaan sensor (jam operasional)
let jamOperasional = 1250; // dalam jam
let batasMaksimal = 1200; // batas sebelum maintenance wajib
console.log("--- Cek Status Maintenance ---");
// Logika If/Else
if (jamOperasional >= batasMaksimal) {
console.log("PERINGATAN: Mesin mencapai batas maksimal!");
console.log("Status: MAINTENANCE WAJIB (Stop Produksi)");
} else if (jamOperasional > 1000) {
console.log("Status: SIAP HATI-HATI (Segera jadwalkan maintenance)");
} else {
console.log("Status: BERJALAN NORMAL");
}
c. Langkah 3: Studi Kasus Industri (Perhitungan OEE Sederhana)
Kita buat fungsi sederhana untuk menghitung efisiensi berdasarkan Availability.
// Data Input
let jamKerjaPlanned = 8; // Jam
let jamKerjaAktual = 6.5; // Jam (Ada 1.5 jam breakdown)
// Perhitungan
let availability = (jamKerjaAktual / jamKerjaPlanned) * 100;
// Pembulatan 2 angka di belakang koma
availability = availability.toFixed(2);
console.log("Planned Time: " + jamKerjaPlanned + " Jam");
console.log("Actual Time: " + jamKerjaAktual + " Jam");
console.log("Availability: " + availability + "%");
// Logika Penilaian Kualitas Availability
if (availability >= 90) {
console.log("Kategori: WORLD CLASS");} else if (availability >= 80) {
console.log("Kategori: BAIK (Tetap monitor)");
} else {
console.log("Kategori: BURUK (Perlu investigasi penyebab breakdown)");
}
d. Langkah 4: Interaksi DOM Sederhana (Alert & Prompt)
Ubah `script.js` agar berinteraksi dengan user via browser popup (hanya untuk latihan
logika, nanti kita gunakan form yang lebih baik).
let namaOperator = prompt("Masukkan Nama Operator:");
let shiftKerja = prompt("Masukkan Shift (Pagi/Siang/Malam):");
if (shiftKerja === "Malam") {
alert("Halo " + namaOperator + ", Shift malam memiliki tambahan uang makan sebesar Rp
20.000.");
} else {
alert("Halo " + namaOperator + ", Selamat bekerja. Tetap semangat!");
}
6. Latihan/Tugas Mandiri
1) Latihan 1 (Matematika): Buat variabel `gajiPokok` dan `jamLembur`. Hitung
`totalGaji` dengan asumsi upah lembur per jam adalah 1.5x dari gaji pokok dibagi 173
(jam kerja bulanan). Tampilkan hasilnya di console.
2) Latihan 2 (Logika Switch): Gunakan `switch` untuk mengkonversi kode shift angka (1,
2, 3) menjadi nama shift (Pagi, Siang, Malam). Jika input selain 1-3, tampilkan "Shift
Tidak Valid".
3) Tugas Proyek Mini (Kalkulator Biaya Produksi):
Buat program di `script.js` yang menghitung biaya produksi total per unit.
 Variabel: `biayaBahanBaku`, `biayaTenagaKerja`, `biayaOverhead`,
`jumlahProduksi`.
 Rumus: `totalPerUnit = (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) /
// jumlahProduksi`.
 Gunakan `if/else` untuk mengecek: jika `jumlahProduksi` < 100, tampilkan "Biaya
Tinggi (Ekonomi Skala Kecil)". Jika >= 100, tampilkan "Biaya Efisien".
7. Petunjuk Pengumpulan Tugas
a. Screenshot hasil Console (F12) yang menampilkan logika perhitungan biaya produksi.
b. Simpan kode di `Pertemuan4_NIM_NamaMahasiswa/script.js`.
8. Troubleshooting Umum
 Masalah: Hasil perhitungan menjadi penggabungan string (misal: "5" + 5 = "55") bukan
penjumlahan.
Solusi: Pastikan input dari `prompt` dikonversi ke number menggunakan
`Number(prompt(...))` atau `parseInt()`.
 Masalah: Logika `if` tidak berjalan sesuai harapan.
Solusi: Cek penggunaan `==` vs `===`. Di JS modern, gunakan selalu `===` (identik)
untuk membandingkan nilai dan tipe data.

## PERTEMUAN 5
Function, Array, Object di JavaScript
Durasi: 340 Menit
Topik: Modularitas kode (Function), pengelolaan data list (Array), dan struktur data kompleks
(Object).
1. Tujuan Pembelajaran
a. Memahami konsep Function untuk menghindari pengulangan kode (DRY - Don't
Repeat Yourself).
b. Menguasai penggunaan Array untuk menyimpan sekumpulan data (misal: daftar cacat
produksi).
c. Memahami Object untuk merepresentasikan entitas nyata (misal: Spesifikasi Mesin)
dalam bentuk data.
d. Mampu melakukan iterasi (perulangan) terhadap Array dan Object.
2. Kompetensi yang Dicapai
1. Mahasiswa dapat menyusun kode JavaScript yang lebih terstruktur dan rapi.
2. Mahasiswa dapat memanipulasi data list seperti database sederhana di memori browser.
3. Persiapan
File `script.js` dan `index.html`.
4. Materi Singkat
Analogi Teknik Industri:
 Function: Seperti SOP (Standard Operating Procedure). Anda menulis instruksi sekali,
lalu bisa dipanggil/dijalankan berulang kali oleh operator berbeda tanpa menulis ulang
instruksi dari awal.
 Array: Seperti lemari arsip atau Excel sheet berisi baris data.
 Object: Seperti Kartu Identitas (KTP) atau Form Spesifikasi Teknis yang berisi banyak
detail tentang satu item.
Struktur:
 `function namaFungsi(param) { ... }`
 `let array = [1, 2, 3];`
 `let object = { properti1: nilai1, properti2: nilai2 };`
5. Langkah-langkah Praktikum
a. Langkah 1: Membuat Function Perhitungan
Buat file baru `pertemuan5.html` dan `pertemuan5.js`. Kita akan membuat kalkulator
energi listrik mesin.Di `pertemuan5.js`:
// 1. FUNCTION Declaration
// Fungsi untuk menghitung konsumsi daya (P = V x I)
function hitungDaya(tegangan, arus) {
let daya = tegangan * arus;
return daya; // Mengembalikan hasil
}
// Pemanggilan Function
let teganganMesin = 220; // Volt
let arusMesin = 10; // Ampere
let totalDaya = hitungDaya(teganganMesin, arusMesin);
console.log("Daya Mesin: " + totalDaya + " Watt");
b. Langkah 2: Array dan Looping (Daftar Produk Cacat)
Kita akan menyimpan daftar kode produk yang cacat dalam satu shift.
// 2. ARRAY
let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"]; // C-001 terjadi 2 kali
console.log("Jumlah Cacat: " + daftarCacat.length);
// Looping (Perulangan) untuk menampilkan setiap cacat
console.log("--- Laporan Detail Cacat ---");
for (let i = 0; i < daftarCacat.length; i++) {
console.log("Item ke-" + (i + 1) + " : " + daftarCacat[i]);
}
// Menambahkan data baru ke array
daftarCacat.push("C-099");
console.log("Setelah penambahan: " + daftarCacat);
c. Langkah 3: Object (Rekaman Data Mesin)
Representasi data mesin yang lebih kompleks.
// 3. OBJECT
let mesinA = {
id: "M-01",
nama: "Injection Molding 50 Ton",
merk: "Toshiba",
tahunBeli: 2018,
status: "Running",
spesifikasi: {
kecepatanMax: 200, // mm/s
tekananMax: 150 // bar
}
};
// Mengakses data object
console.log("Nama Mesin: " + mesinA.nama);
console.log("Status: " + mesinA.status);
console.log("Tekanan Max: " + mesinA.spesifikasi.tekananMax + " bar");
// Mengubah data object (Simulasi mesin rusak)
mesinA.status = "Breakdown";
console.log("Status Baru: " + mesinA.status);d. Langkah 4: Gabungan (Array of Objects)
Ini adalah cara data biasanya disimpan di aplikasi nyata (mirip JSON)..
// Array berisi beberapa object
let gudangMaterial = [
{ kode: "MAT-01", nama: "Baja Ringan", stok: 50, satuan: "Batang" },
{ kode: "MAT-02", nama: "Plastik ABS", stok: 120, satuan: "Kg" },
{ kode: "MAT-03", nama: "Oli Mesin", stok: 10, satuan: "Liter" }
];
console.log("--- Cek Stok Gudang ---");
// Menggunakan forEach untuk iterasi array object
gudangMaterial.forEach(function(item) {
console.log(item.kode + " - " + item.nama + " : " + item.stok + " " + item.satuan);
// Logika Re-order
if (item.stok < 20) {
console.log(" >>> PERINGATAN: Stok " + item.nama + " menipis! Segera PO.");
}
});
6. Latihan/Tugas Mandiri
1) Latihan 1 (Function): Buat function `hitungLingkaran(jariJari)` yang mengembalikan
nilai Luas dan Keliling. Tampilkan kedua nilai tersebut.
2) Latihan 2 (Array Manipulation): Dari array `daftarCacat` di atas, carilah berapa kali
cacat "C-001" muncul (Gunakan loop dan if/counter).
3) Tugas Proyek Mini (Sistem Antrian Job Shop):
Buat program simulasi antrian 3 pekerjaan mesin.
a. Buat Array of Objects bernama `antrianMesin`. Isi dengan 3 object job: `{idJob:
"J01", namaProses: "Drilling", durasi: 30}`.
b. Buat function `prosesAntrian(antrian)` yang menerima parameter array tersebut.
c. Di dalam function, tampilkan pesan: "Memproses Job [ID] - [Nama] selama [durasi]
menit" untuk setiap job dalam antrian.
d. Tambahkan 1 job baru ke array dan panggil function lagi.
7. Petunjuk Pengumpulan Tugas
a. Kumpulkan file `pertemuan5.js` di folder `Pertemuan5_NIM_NamaMahasiswa`
b. Pastikan memberikan komentar di kode yang menjelaskan fungsi dari setiap bagian.
8. Troubleshooting Umum
 Masalah: Lupa menulis kata kunci `return` di dalam function.
Solusi: Function yang tanpa `return` akan menghasilkan nilai `undefined`.
 Masalah: Error "Cannot read property of undefined".
Solusi: Terjadi saat Anda mencoba mengakses properti object atau index array yang
tidak ada. Cek kembali penulisan nama properti (case sensitive).

## PERTEMUAN 6
DOM Manipulation & Event Handling
Durasi: 340 Menit
Topik: Document Object Model (DOM), Seleksi Elemen, dan Event Listeners.
1. Tujuan Pembelajaran
a. Memahami struktur DOM dan bagaimana JavaScript melihat halaman web.
b. Mampu memanipulasi elemen HTML (mengubah teks, warna, kelas) secara dinamis
menggunakan JavaScript.
c. Mampu menangani interaksi pengguna (klik tombol, ketik keyboard) menggunakan
Event Listeners.
d. Menerapkan konsep ini untuk membuat simulasi Control Panel mesin industri.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat halaman web yang interaktif (tidak statis).
b. Mahasiswa memahami alur User Action → Event→ JS Logic → UI Update.
3. Persiapan
File `index.html`, `style.css`, dan `script.js` dari pertemuan sebelumnya.
4. Materi Singkat
Mengapa DOM & Event?
Bayangkan Anda mengontrol lampu di rumah. Saklar adalah Event (tindakan klik), kabel
listrik adalah Logic (JavaScript), dan lampu yang menyala/mati adalah perubahan DOM
(tampilan). Di industri, ini digunakan untuk tombol "Start/Stop" mesin pada dashboard
digital, atau peringatan visual yang berubah warna saat suhu mesin naik.
Konsep Kunci:
 DOM: Representasi terstruktur dari halaman web. JS bisa mengakses elemen seperti
`document.getElementById('id-elemen')`.
 Event: "Kejadian" yang terjadi di elemen, seperti `click`, `submit`, `input`, `change`.
 Manipulasi: Mengubah properti seperti `innerText`, `innerHTML`, `style.color`, atau
`classList`.
5. Langkah-langkah Praktikum
a. Langkah 1: Membuat UI Panel Kontrol di HTML
Buka `index.html`, tambahkan struktur HTML berikut di dalam container:
<!-- Simulasi Panel Kontrol Mesin (Meeting 6) -->
<div class="card mt-4">
<div class="card-header bg-dark text-white">Panel Kontrol Mesin-01</div>
<div class="card-body text-center">
<!-- Indikator Status -->
<div id="statusIndicator" class="alert alert-secondary" role="alert">Status: <strong>UNKNOWN</strong>
</div>
<h2 id="suhuMesin">25 °C</h2>
<p>Suhu Operasional Saat Ini</p>
<div class="d-grid gap-2 d-md-block">
<button id="btnStart" class="btn btn-success btn-lg">START</button>
<button id="btnStop" class="btn btn-danger btn-lg">STOP</button>
<button id="btnReset" class="btn btn-warning btn-lg">RESET</button>
</div>
</div>
</div>
b. Langkah 2: Seleksi Elemen di JavaScript
Buka `script.js` (atau buat file baru dan link-kan). Kita akan mengambil elemen yang
kita buat di atas.
// 1. Seleksi Elemen DOM
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const statusIndicator = document.getElementById('statusIndicator');
const suhuMesin = document.getElementById('suhuMesin');
const teksStatus = statusIndicator.querySelector('strong'); // Mengambil elemen <strong>
di dalam alert
// Variabel State
let suhu = 25;
let intervalId = null; // Untuk menyimpan ID timer
c. Langkah 3: Menambahkan Event Listener (Click)
Sekarang kita berikan "nyawa" pada tombol.
// Event Listener Tombol START
btnStart.addEventListener('click', function() {
// Ubah UI Status
statusIndicator.className = 'alert alert-success'; // Ganti class Bootstrap (Hijau)
teksStatus.innerText = 'RUNNING';
 // Logika simulasi kenaikan suhu
intervalId = setInterval(function() {
suhu += 1;
suhuMesin.innerText = suhu + " °C";
 // Peringatan jika suhu overheat
if (suhu > 80) {
statusIndicator.className = 'alert alert-danger';
teksStatus.innerText = 'OVERHEAT WARNING';
suhuMesin.style.color = 'red';
}
}, 1000); // Jalankan setiap 1 detik
// Matikan tombol Start agar tidak double click
btnStart.disabled = true;
btnStop.disabled = false;
});
// Event Listener Tombol STOP
btnStop.addEventListener('click', function() {
clearInterval(intervalId); // Hentikan timer kenaikan suhu
statusIndicator.className = 'alert alert-secondary';
teksStatus.innerText = 'STOPPED';
// Reset tombol
btnStart.disabled = false;
btnStop.disabled = true;
});
// Event Listener Tombol RESET
btnReset.addEventListener('click', function() {
clearInterval(intervalId);
suhu = 25;
suhuMesin.innerText = suhu + " °C";
suhuMesin.style.color = 'black';
statusIndicator.className = 'alert alert-secondary';
teksStatus.innerText = 'UNKNOWN';
btnStart.disabled = false;
btnStop.disabled = true;
});
d. Langkah 4: Event Input (Validasi Real-time)
Tambahkan elemen input baru di HTML:
<div class="mt-3">
<label>Set Target Kecepatan (RPM):</label>
<input type="number" id="inputRPM" class="form-control" placeholder="Max 2000 RPM">
<small id="pesanError" class="text-danger d-none">RPM melebihi batas aman!</small>
</div>
Tambahkan di JS:
const inputRPM = document.getElementById('inputRPM');
const pesanError = document.getElementById('pesanError');
inputRPM.addEventListener('input', function() {
let val = parseInt(this.value);
if (val > 2000) {
pesanError.classList.remove('d-none'); // Tampilkan pesan error
this.classList.add('is-invalid'); // Berikan border merah Bootstrap
} else {
pesanError.classList.add('d-none'); // Sembunyikan pesan
this.classList.remove('is-invalid');
}
});
6. Latihan/Tugas Mandiri
1) Latihan 1 (DOM Styling): Buatlah tombol tambahan bernama "Maintenance Mode".
Saat diklik, background dari card menjadi abu-abu (`bg-light`), dan teks status berubah
menjadi "MAINTENANCE".
2) Latihan 2 (Mouse Events): Tambahkan efek saat mouse diarahkan (`mouseover`) ke
teks suhu mesin, suhu tersebut menjadi tebal dan berwarna biru. Saat mouse keluar
(`mouseout`), kembali normal.
3) Tugas Proyek Mini (Kalkulator Tagihan Listrik):a. Buat UI dengan 2 input: "Daya (Watt)" dan "Jam Pemakaian".
b. Saat user mengetik di salah satu input, secara real-time (tanpa tombol submit)
tampilkan hasil "Total kWh" dan "Estimasi Biaya (Rp 1.500/kWh)" di elemen
`<h3>` di bawahnya.
7. Petunjuk Pengumpulan Tugas
a. Screenshot hasil praktikum Panel Kontrol mesin dalam keadaan "Running" dan
"Overheat".
b. Kumpulkan kode HTML dan JS yang sudah dimodifikasi di folder
`Pertemuan6_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: Suhu terus naik walaupun tombol stop ditekan.
Solusi: Pastikan `clearInterval` dipanggil dengan variabel yang tepat. Jika Anda
membuat variabel baru di dalam event listener `click`, `clearInterval` di luar tidak akan
mengenainya (variabel harus global/scope luar).
 Masalah: `querySelector` mengembalikan null.
Solusi: Pastikan script dijalankan setelah HTML selesai dimuat (taruh `<script>` di
paling bawah `<body>` atau gunakan `defer`).

## PERTEMUAN 7
Form Validation & Local Storage
Durasi: 340 Menit
Topik: Validasi form tingkat lanjut dan penyimpanan data persisten di browser (Client-side
Storage).
1. Tujuan Pembelajaran
a. Menerapkan validasi form sebelum data dikirim untuk mencegah data kotor.
b. Memahami cara kerja Web Storage API (LocalStorage).
c. Mampu menyimpan, mengambil, mengupdate, dan menghapus (CRUD sederhana) data
di LocalStorage.
d. Membuat aplikasi "Buku Harian Produksi" sederhana yang datanya tidak hilang saat
browser direfresh.
2. Kompetensi yang Dicapai
a. Mahasiswa mampu membuat aplikasi web yang memiliki "memori" (persistensi data
sederhana).
b. Mahasiswa paham konversi data Object JavaScript menjadi String JSON.
3. Persiapan
Browser modern (Chrome/Firefox/Edge).
4. Materi Singkat
Mengapa LocalStorage?
Tanpa database (MySQL/MongoDB), data di web akan hilang saat halaman direfresh.
Namun, untuk keperluan logging sementara, cache, atau prototipe aplikasi offline-first,
LocalStorage sangat berguna.
 Kapasitas: Sekitar 5-10MB.
 Format Data: Hanya menyimpan String (Key-Value).
 JSON: Karena hanya bisa String, kita harus mengubah Object/Data Array menjadi
JSON String (`JSON.stringify`) saat simpan, dan mengembalikannya menjadi Object
(`JSON.parse`) saat ambil.
5. Langkah-langkah Praktikum
a. Langkah 1: Membuat Form Input Produksi
Buat file baru `log_produksi.html`. Kita buat form sederhana.
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Log Produksi Harian</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
rel="stylesheet"></head>
<body class="container mt-5">
<div class="row">
<!-- Kolom Kiri: Form Input -->
<div class="col-md-4">
<div class="card">
<div class="card-header">Input Data</div>
<div class="card-body">
<form id="formProduksi">
<div class="mb-3">
<label>Tanggal</label>
<input type="date" id="tanggal" class="form-control"
required>
</div>
<div class="mb-3">
<label>Nama Operator</label>
<input type="text" id="operator" class="form-control"
placeholder="Nama Lengkap" required>
</div>
<div class="mb-3">
<label>Shift</label>
<select id="shift" class="form-select" required>
<option value="Pagi">Pagi</option>
<option value="Siang">Siang</option>
<option value="Malam">Malam</option>
</select>
</div>
<div class="mb-3">
<label>Jumlah Produksi (Unit)</label>
<input type="number" id="jumlah" class="form-control" min="1"
required>
</div>
<button type="submit" class="btn btn-primary w-100">Simpan
Log</button>
<button type="button" id="btnHapusSemua" class="btn btn-danger
w-100 mt-2">Hapus Semua Data</button>
</form>
</div>
</div>
</div>
<!-- Kolom Kanan: Tabel Data -->
<div class="col-md-8">
<h3>Riwayat Produksi</h3>
<table class="table table-bordered table-striped">
<thead class="table-dark">
<tr>
<th>Tanggal</th>
<th>Operator</th>
<th>Shift</th>
<th>Jumlah</th>
<th>Aksi</th>
</tr>
</thead>
<tbody id="tabelBody">
<!-- Data akan masuk di sini lewat JS -->
</tbody>
</table>
</div>
</div>
<script src="script_log.js"></script>
</body>
</html>b. Langkah 2: Logika JavaScript (Simpan & Baca)
Buat file `script_log.js`.
// 1. Seleksi Elemen
const formProduksi = document.getElementById('formProduksi');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');
// Kunci untuk LocalStorage
const STORAGE_KEY = 'DATA_PRODUKSI_INDUSTRI';
// Fungsi Load Data saat halaman dibuka
document.addEventListener('DOMContentLoaded', function() {
loadDataFromStorage();
});
// 2. Event Listener: Submit Form
formProduksi.addEventListener('submit', function(event) {
event.preventDefault(); // Mencegah refresh halaman
// Ambil Value dari Form
const tanggal = document.getElementById('tanggal').value;
const operator = document.getElementById('operator').value;
const shift = document.getElementById('shift').value;
const jumlah = document.getElementById('jumlah').value;
// Validasi Sederhana (JavaScript)
if (jumlah <= 0) {
alert("Jumlah produksi harus lebih dari 0!");
return;
}
// Buat Object Data
const dataBaru = {
id: Date.now(), // ID unik berdasarkan waktu
tanggal: tanggal,
operator: operator,
shift: shift,
jumlah: parseInt(jumlah)
};
// Simpan ke LocalStorage
saveData(dataBaru);
// Reset Form
formProduksi.reset();
// Refresh Tampilan Tabel
loadDataFromStorage();
});
// 3. Fungsi Simpan ke LocalStorage
function saveData(data) {
// Ambil data lama (jika ada), jika tidak ada array kosong
let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// Tambah data baru ke array
dataLama.push(data);
// Simpan kembali ke LocalStorage (Convert ke JSON String)
localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}
// 4. Fungsi Baca & Render Tabel
function loadDataFromStorage() {
// Ambil data
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// Kosongkan tabel dulutabelBody.innerHTML = '';
// Loop data dan buat baris tabel
data.forEach(function(item) {
const row = document.createElement('tr');
row.innerHTML = `
<td>${item.tanggal}</td>
<td>${item.operator}</td>
<td>${item.shift}</td>
<td>${item.jumlah}</td>
<td>
<button class="btn btn-sm btn-danger"
onclick="hapusData(${item.id})">Hapus</button>
</td>
`;
tabelBody.appendChild(row);
});
}
// 5. Fungsi Hapus Data Spesifik
// Kita pasang di window agar bisa dipanggil dari inline HTML onclick
window.hapusData = function(id) {
if(confirm('Yakin ingin menghapus log ini?')) {
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// Filter data: hapus item yang id-nya cocok
let dataBaru = data.filter(item => item.id !== id);
// Simpan ulang
localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
// Refresh tampilan
loadDataFromStorage();
}
}
// 6. Event Hapus Semua
btnHapusSemua.addEventListener('click', function() {
if(confirm('PERINGATAN: Semua data akan dihapus permanen!')) {
localStorage.removeItem(STORAGE_KEY);
loadDataFromStorage();
}
});
6. Latihan/Tugas Mandiri
1) Latihan 1 (Filter Data): Tambahkan fitur filter atau pencarian. Buat input "Cari Nama
Operator". Saat user mengetik, tabel hanya menampilkan data operator yang namanya
cocok (Gunakan `filter` array).
2) Latihan 2 (Sortir): Tambahkan tombol "Sortir berdasarkan Jumlah (Terbesar)" yang
mengurutkan tabel dari jumlah produksi terbanyak ke terkecil.
3) Tugas Proyek Mini (Aplikasi Checklist 5S):
Buat aplikasi checklist sederhana audit 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke).
a. Form berisi 5 checkbox (boolean) dan input nama auditor.
b. Saat disimpan, hitung skor (jumlah checklist dicentang / 5 * 100).
c. Simpan riwayat audit ke LocalStorage dan tampilkan di tabel (Tanggal, Auditor,
Skor).7. Petunjuk Pengumpulan Tugas
a. Rekaman layar (screencast) singkat max 1 menit yang menunjukkan: Input data ->
Refresh Browser (data tetap ada) -> Hapus data.
b. File `log_produksi.html` dan `script_log.js`.
c. Simpan seluruh file dalam folder `Pertemuan7_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: Data tidak muncul setelah refresh.
Solusi: Cek Console (F12) untuk error JSON. Pastikan tidak ada data lama yang rusak
(corrupted) di localStorage. Anda bisa membersihkannya dengan Application tab ->
Local Storage -> Clear.
 Masalah: `filter` atau `forEach` error.
Solusi: Pastikan data yang diambil dari `JSON.parse` benar-benar bertipe Array. Jika
user pertama kali buka, hasilnya `null`, jadi gunakan `|| []` (default empty array).

## PERTEMUAN 8
Asynchronous JavaScript (Fetch API, JSON, REST API Sederhana)
Durasi: 340 Menit
Topik: Konsep Asynchronous, Fetch API, Promise, Async/Await, dan integrasi REST API
eksternal.
1. Tujuan Pembelajaran
a. Memahami perbedaan kode sinkronus dan asinkronus.
b. Mampu menggunakan `fetch()` untuk mengambil data dari server eksternal (API).
c. Memahami format data JSON (JavaScript Object Notation).
d. Menerapkan penanganan error saat request API gagal.
2. Kompetensi yang Dicapai
Mahasiswa dapat menghubungkan aplikasi web mereka dengan sumber data eksternal
(dalam praktik nyata: Sensor IoT, Database Server, atau API ERP Perusahaan).
3. Persiapan
a. Koneksi internet aktif (wajib untuk mengakses API publik).
b. Postman (opsional, untuk testing API).
4. Materi Singkat
Mengapa Asynchronous & API?
Di dunia industri, data tidak selalu ada di komputer lokal. Data stok gudang mungkin ada
di server pusat Jakarta, sementara Anda membuka dashboard di pabrik Surabaya.
 Synchronous: Antrian satu per satu. Jika Anda meminta data ke server dan server
lambat, seluruh web akan "macet" (freeze). Ini buruk untuk UX.
 Asynchronous: Kode jalan terus tanpa menunggu balasan server. Saat data balas, baru
dijalankan fungsi khusus (callback atau promise).
 Fetch API: Cara modern browser untuk melakukan HTTP Request (GET, POST, PUT,
DELETE).
5. Langkah-langkah Praktikum
a. Langkah 1: Mengenal JSONPlaceholder
Kita akan menggunakan layanan gratis `https://jsonplaceholder.typicode.com/users`
sebagai simulasi database "Karyawan" atau "Agen Supplier".
b. Langkah 2: Membuat HTML untuk Menampilkan Data
Buat file `api_demo.html`.<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Integrasi API Data Karyawan</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
rel="stylesheet">
</head>
<body class="container mt-5">
<h2 class="mb-4">Data Karyawan (Dari Server)</h2>
<div class="mb-3">
<button id="btnLoad" class="btn btn-primary">Muat Data dari API</button>
<div id="loading" class="spinner-border text-primary d-none" role="status"></div>
</div>
<div class="row" id="containerKaryawan">
<!-- Card karyawan akan muncul di sini -->
</div>
<script src="api_script.js"></script>
</body>
</html>
c. Langkah 3: Fetch Data dengan .then() (Promise)
Buat `api_script.js`.
const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');
// Endpoint API (Simulasi Database)
const API_URL = 'https://jsonplaceholder.typicode.com/users';
btnLoad.addEventListener('click', function() {
// Tampilkan loading
loading.classList.remove('d-none');
container.innerHTML = ''; // Bersihkan konten lama
// Fetch Data
fetch(API_URL)
.then(function(response) {
// Cek jika response sukses (kode 200-299)
if (!response.ok) {
throw new Error('Gagal mengambil data');
}
// Parsing data JSON
return response.json();
})
.then(function(dataKaryawan) {
// Data berhasil didapat
console.log(dataKaryawan); // Cek di console browser
renderData(dataKaryawan);
})
.catch(function(error) {
// Jika ada error (misal putus internet)
container.innerHTML = `<div class="alert alert-danger">Error:
${error.message}</div>`;
})
.finally(function() {
// Sembunyikan loading (baik sukses maupun gagal)
loading.classList.add('d-none');
});
});function renderData(data) {
data.forEach(function(karyawan) {
// Buat elemen card Bootstrap
const col = document.createElement('div');
col.className = 'col-md-4 mb-3';
col.innerHTML = `
<div class="card h-100 shadow-sm">
<div class="card-body">
<h5 class="card-title">${karyawan.name}</h5>
<p class="card-text text-muted">Email: ${karyawan.email}</p>
<p class="card-text">Perusahaan: ${karyawan.company.name}</p>
<p class="card-text"><small>Kota:
${karyawan.address.city}</small></p>
<a href="" class="btn btn-sm btn-outline-primary">Detail Profil</a>
</div>
</div>
`;
container.appendChild(col);
});
}
d. Langkah 4: Fetch dengan Async/Await (Modern Style)
Async/Await membuat kode asinkron terlihat seperti sinkron (lebih mudah dibaca).
Mari kita buat fungsi baru untuk mencari karyawan berdasarkan ID.
Tambahkan di `api_script.js`:
// Fungsi Async untuk mencari data spesifik
async function cariKaryawan(id) {
try {
console.log(`Mencari data ID: ${id}...`);
const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
if (!response.ok) {
throw new Error('Data tidak ditemukan');
}
const data = await response.json();
console.log("Ditemukan:", data);
alert(`Ditemukan: ${data.name} - bekerja di ${data.company.name}`);
} catch (error) {
console.error(error);
alert(error.message);
}
}
// Contoh pemanggilan: cariKaryawan(2);
// Anda bisa memanggil fungsi ini lewat console browser untuk tes.
6. Latihan/Tugas Mandiri
1) Latihan 1 (Posting Data): Buat tombol "Tambah Karyawan Baru". Gunakan method
`fetch` dengan opsi `{ method: 'POST', body: ... }` untuk mengirim data dummy ke API.
Cek response di console.
2) Latihan 2 (Filter Array): Sebelum data dirender ke layar dengan `forEach`, lakukan
filter terlebih dahulu. Tampilkan HANYA karyawan yang tinggal di kota yangmengandung huruf "s" (misal: "Southside", "London"). Petunjuk: Gunakan
`data.filter(...)` sebelum `data.forEach(...)`.
3) Tugas Proyek Mini (Integrasi Data Produksi):
Anggap API `https://jsonplaceholder.typicode.com/posts` adalah database "Laporan
Insiden".
a. Tampilkan daftar 10 laporan insiden terbaru (Title = Judul Insiden, Body =
Deskripsi).
b. Di setiap card, tambahkan tombol "Tindak Lanjut". Saat diklik, `alert()`
menampilkan "Tiket ID sedang diproses oleh Tim Maintenance".
7. Petunjuk Pengumpulan Tugas
a. Screenshot hasil di Console (Network Tab) yang menampilkan request ke
`jsonplaceholder`.
b. File `api_demo.html` dan `api_script.js`.
c. Simpan seluruh file dalam folder `Pertemuan8_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: Error "CORS Policy" atau "Network Error".
Solusi: Gunakan JSONPlaceholder karena mereka mengizinkan CORS. Jika
menggunakan API lain yang memblokir, Anda mungkin perlu ekstensi browser atau
proxy. Untuk praktikum ini, tetap gunakan JSONPlaceholder.
 Masalah: Data tidak muncul, tapi tidak ada error di Console.
Solusi: Cek apakah Anda melakukan `appendChild` dengan benar. Pastikan variabel
container tidak bernilai `null` (script berjalan sebelum HTML siap).

## PERTEMUAN 9
Pengenalan React.js (Component, JSX, Props)
Durasi: 340 Menit
Topik: Setup Lingkungan React, Konsep Component, JSX Syntax, dan Props (Data Passing).
1. Tujuan Pembelajaran
a. Memahami konsep Library vs Framework dan mengapa React dipilih untuk aplikasi
skala besar.
b. Mampu menyiapkan environment pengembangan React menggunakan Vite.
c. Menguasai sintaks JSX (JavaScript XML).
d. Mampu membuat Functional Component yang menerima dan menampilkan data
melalui Props.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat menginstal dan menjalankan proyek React.
b. Mahasiswa mampu memecah antarmuka pengguna menjadi komponen-komponen
kecil yang dapat digunakan kembali (reusable).
3. Persiapan
a. Node.js & npm sudah terinstal (cek dengan `node -v` dan `npm -v` di terminal).
b. Pastikan koneksi internet stabil untuk pertama kali download dependensi.
4. Materi Singkat
Mengapa React di Industri?
Seiring bertambah kompleksnya sistem (misal: Dashboard pabrik dengan ratusan sensor),
menulis kode Vanilla JS menjadi sangat sulit dirawat (maintain). React memungkinkan kita
membuat "Komponen" seperti blok LEGO. Misalnya, kita buat satu komponen
`<KartuMesin />`, lalu kita gunakan 100 kali di halaman web dengan data berbeda tanpa
menulis ulang kodenya.
Konsep Dasar:
 JSX: Ekstensi sintaks JavaScript yang memungkinkan kita menulis HTML di dalam
JavaScript. `<div>Halo {namaVariable}</div>`.
 Component: Potongan kode yang mengembalikan elemen UI.
 Props: Cara mengirim data dari Parent (Induk) ke Child (Anak). Seperti memberikan
parameter pada fungsi.
5. Langkah-langkah Praktikum
a. Langkah 1: Setup Project dengan Vite
Buka Terminal (VS Code: `Ctrl + ~` atau Terminal > New Terminal). Ketik perintah
berikut (tunggu prosesnya):
1) Membuat project baru bernama 'sistem-industri'
npm create vite@latest sistem-industri -- --template react
2) Masuk ke folder project
cd sistem-industri
3) Install dependensi
npm install
4) Jalankan development server
npm run dev
Buka link yang muncul (biasanya `http://localhost:5173`).
b. Langkah 2: Membersihkan Project
Buka folder project di VS Code. Masuk ke `src/App.jsx`. Hapus semua konten di dalam
`return (...)` dan biarkan kosong atau ganti dengan `<h1>Halo Industri</h1>`. Hapus
juga `import css` yang tidak perlu untuk sementara agar fokus pada logika.
c. Langkah 3: Membuat Komponen Pertama: KartuMesin
Buat file baru di folder `src` bernama `Komponen/KartuMesin.jsx`.
Struktur folder:
- src
- Komponen
- KartuMesin.jsx
Isi `KartuMesin.jsx`:
// 1. Import React
import React from 'react';
// 2. Membuat Komponen Fungsi yang menerima 'props'
function KartuMesin(props) {
// Menerima data dari props
const namaMesin = props.nama;
const status = props.status;
const produksi = props.produksi;
// Logika penentuan warna badge berdasarkan statuslet badgeColor = 'bg-secondary';
if (status === 'Running') badgeColor = 'bg-success';
if (status === 'Stop') badgeColor = 'bg-danger';
if (status === 'Maintenance') badgeColor = 'bg-warning';
return (
// Menggunakan class -> className di JSX
<div className="card shadow-sm p-3 mb-3">
<div className="card-body">
<h5 className="card-title">{namaMesin}</h5>
<span className={`badge ${badgeColor}`}>{status}</span>
<hr />
<p>Produksi Saat Ini: <strong>{produksi}</strong> Unit</p>
</div>
</div>
);
}
// 3. Export agar bisa dipakai di file lain
export default KartuMesin;
d. Langkah 4: Menggunakan Komponen di App.jsx
Sekarang kita akan memanggil `KartuMesin` di file utama dan mengirim data lewat
props.
Buka dan lakukan edit `src/App.jsx`:
import React from 'react';
// Import komponen yang sudah dibuat
import KartuMesin from './Komponen/KartuMesin';
function App() {
return (
<div className="container mt-4">
<h1 className="text-center mb-4">Monitoring Lini Produksi A</h1>
<div className="row">
{/* Kolom 1: Menggunakan komponen dengan data berbeda */}
<div className="col-md-4">
<KartuMesin
nama="CNC-Turning-01"
status="Running"
produksi={150}
/>
</div>
{/* Kolom 2 */}
<div className="col-md-4">
<KartuMesin
nama="CNC-Milling-02"
status="Maintenance"
produksi={0}
/>
</div>
{/* Kolom 3 */}
<div className="col-md-4">
<KartuMesin
nama="Press-Hydraulic-05"
status="Stop"
produksi={85}
/>
</div>
</div></div>
);
}
export default App;
Catatan: Tambahkan link Bootstrap CSS di `index.html` (folder public) agar class card
berfungsi.
6. Latihan/Tugas Mandiri
1) Latihan 1 (Destructuring Props): Ubah cara deklarasi props di `KartuMesin.jsx`
menggunakan destructuring: `function KartuMesin({ nama, status, produksi }) { ... }`.
Sesuaikan kode di dalamnya.
2) Latihan 2 (Default Props): Berikan nilai default pada prop `produksi` menjadi 0, jika
user lupa mengirim prop tersebut.
3) Tugas Proyek Mini (Kartu Karyawan):
 Buat komponen baru bernama `KartuKaryawan.jsx`. Komponen ini menerima
props: `nama`, `jabatan`, `bagian`.
 Tampilkan komponen ini 3 kali di `App.jsx` dengan data karyawan berbeda
(Manager, Operator, QC).
7. Petunjuk Pengumpulan Tugas
a. Screenshot tampilan browser yang menampilkan 3 kartu mesin.
b. Kumpulkan file `KartuMesin.jsx` dan `App.jsx`.
c. Simpan seluruh file dalam folder `Pertemuan9_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: `npm create vite` lambat sekali.
Solusi: Gunakan registry mirror Indonesia jika koneksi lambat, atau gunakan jaringan
kampus. `npm config set registry https://registry.npmjs.org/`.
 Masalah: Error "Module not found".
Solusi: Cek lagi path pada `import`. Huruf besar/kecil (case-sensitive) sangat
berpengaruh. Pastikan `export default` ada di file komponen.

## PERTEMUAN 10
State, Hooks (useState, useEffect), dan Conditional Rendering
Durasi: 340 Menit
Topik: State Management, Lifecycle Hooks, dan Rendering Bersyarat.
1. Tujuan Pembelajaran
a. Memahami apa itu State dan perbedaannya dengan Props.
b. Menguasai penggunaan `useState` untuk menyimpan data yang berubah-ubah.
c. Memahami `useEffect` untuk menangani side effects (seperti timer atau API call).
d. Mampu melakukan Conditional Rendering (menyembunyikan/menampilkan elemen
berdasarkan kondisi).
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat aplikasi React yang dinamis (interaktif).
b. Mahasiswa memahami siklus hidup komponen React.
3. Persiapan
Project React dari pertemuan 9.
4. Materi Singkat
Konsep State:
Jika Props adalah data yang dibaca (read-only), State adalah data yang ditulis dan diubah
oleh komponen itu sendiri (read-write). State adalah "memori" sementara komponen.
Ketika State berubah, React akan otomatis me-render ulang (re-render) tampilan untuk
mencerminkan perubahan tersebut.
Hooks:
 `useState`: Untuk membuat state variable. `const [nilai, setNilai] = useState(0)`.
 `useEffect`: Untuk menjalankan kode saat komponen pertama kali dimuat (`mount`),
saat update, atau saat akan dihancurkan (`unmount`).
5. Langkah-langkah Praktikum
a. Langkah 1: Membuat Komponen Counter Produksi
Buat file baru `src/Komponen/CounterProduksi.jsx`.
import React, { useState } from 'react';
function CounterProduksi() {
// Deklarasi State: 'jumlah' bernilai awal 0, 'setJumlah' fungsi untuk mengubahnya
const [jumlah, setJumlah] = useState(0);
const [target, setTarget] = useState(100);
// Fungsi menambah produksi
const tambahProduksi = () => {
setJumlah(jumlah + 1);
};
// Fungsi reset
const reset = () => {
setJumlah(0);
};
return (
<div className="text-center p-4 border rounded bg-light">
<h3>Simulasi Hitung Produk</h3>
<h1 className="display-4">{jumlah}</h1>
<p>Target: {target} Unit</p>
{/* Conditional Rendering: Tampilkan pesan jika target tercapai */}
{jumlah >= target ? (
<div className="alert alert-success d-inline-block">Target Tercapai!</div>
) : (
<div className="alert alert-secondary d-inline-block">Produksi Berjalan...</div>
)}
<div className="mt-3">
<button className="btn btn-primary me-2" onClick={tambahProduksi}>
+1 Unit (Sensor OK)
</button>
<button className="btn btn-danger" onClick={reset}>
Reset Shift
</button>
</div>
</div>
);
}
export default CounterProduksi;
Panggil komponen ini di `App.jsx`.
b. Langkah 2: Menggunakan useEffect untuk Real-time Clock
Kita akan membuat jam digital yang berjalan otomatis. Ini mensimulasikan
pengambilan data live dari sensor tiap detik.
Tambahkan kode di dalam `CounterProduksi.jsx` (atau buat komponen baru
`JamDigital.jsx`):
import React, { useState, useEffect } from 'react';
function JamDigital() {
const [waktu, setWaktu] = useState(new Date());
// useEffect berjalan sekali setelah komponen dirender pertama kali
useEffect(() => {
// Membuat interval timer
const timerID = setInterval(() => {
setWaktu(new Date()); // Update state waktu setiap detik
}, 1000);
// Cleanup function: Dijalankan saat komponen dihapus/hancur
// Penting untuk mencegah memory leak
return () => {
clearInterval(timerID);
};
}, []); // Array kosong [] artinya hanya dijalankan sekali saat mount
return (
<div className="alert alert-info text-center"><h4>Waktu Sistem Server: {waktu.toLocaleTimeString()}</h4>
</div>
);
}
export default JamDigital;
c. Langkah 3: Contoh Form Input State
Ubah komponen `KartuMesin.jsx` dari pertemuan 9 agar statusnya bisa diedit secara
lokal (opsional latihan):
// Di dalam KartuMesin.jsx
const [statusLokal, setStatusLokal] = useState(status);
return (
// ... kode HTML sebelumnya ...
<div className="mt-2">
<select
className="form-select form-select-sm"
value={statusLokal}
onChange={(e) => setStatusLokal(e.target.value)}
>
<option value="Running">Running</option>
<option value="Stop">Stop</option>
<option value="Maintenance">Maintenance</option>
</select>
</div>
// ...
)
6. Latihan/Tugas Mandiri
1) Latihan 1 (Dependency Array useEffect): Modifikasi `JamDigital`. Tambahkan input
text untuk memasukkan nama kota. Gunakan `useEffect` untuk mengubah
`document.title` menjadi "Jam [Nama Kota]". Gunakan state kota sebagai dependency
array `[kota]`.
2) Latihan 2 (Conditional Rendering): Pada `CounterProduksi`, buat tombol "Emergency
Stop". Saat diklik, ubah state status menjadi "EMERGENCY", tombol "+1" menjadi
disabled (`disabled`), dan tampilkan pesan merah.
3) Tugas Proyek Mini (Kalkulator OEE Sederhana):
a. Buat komponen form input: `Plan Time`, `Run Time`, `Total Parts`, `Good Parts`.
b. Gunakan State untuk menyimpan nilai-nilai ini.
c. Hitung OEE secara otomatis (Real-time) setiap kali input berubah.
d. Rumus OEE = (Availability x Performance x Quality).
e. Tampilkan hasil OEE dalam persen. Jika OEE < 50%, warnanya merah. Jika > 85%,
warnanya hijau.
7. Petunjuk Pengumpulan Tugas
a. Screenshot saat kondisi OEE merah dan hijau.
b. File `CounterProduksi.jsx` dan komponen OEE.
c. Simpan seluruh file dalam folder `Pertemuan10_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: Infinite loop (Browser hang).
Solusi: Cek `useEffect`. Pastikan Anda tidak mengupdate state di dalam `useEffect`
tanpa kondisi berhenti, atau lupa memberikan dependency array `[]`.
 Masalah: State tidak berupdate langsung.
Solusi: Ingat bahwa setState di React adalah asynchronous. Jika nilai baru bergantung
pada nilai lama, gunakan functional update: `setCount(prev => prev + 1)`.

## PERTEMUAN 11
React Routing & Multi-Page App + Integrasi API
Durasi: 340 Menit
Topik: Single Page Application (SPA) Navigation, React Router DOM, dan Fetch API dalam
React.
1. Tujuan Pembelajaran
a. Memahami konsep SPA (Single Page Application).
b. Mampu mengatur navigasi antar halaman tanpa reload browser menggunakan `reactrouter-dom`.
c. Menerapkan `fetch` API di dalam `useEffect` untuk mengambil data eksternal.
d. Membuat struktur aplikasi multi-halaman (Dashboard, Inventori, Settings).
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat aplikasi web yang terasa seperti aplikasi native (cepat, tidak
flicker saat pindah menu).
b. Mahasiswa menguasai integrasi data backend (mock API) ke frontend React.
3. Persiapan
a. Project React sebelumnya.
b. Install library router: `npm install react-router-dom`.
4. Materi Singkat
Mengapa Routing?
Aplikasi industri biasanya memiliki banyak modul. Kita tidak bisa menaruh semua kode di
satu halaman (`App.jsx`). Kita perlu memisahkannya menjadi:
 `/dashboard` (Halaman Utama)
 `/inventori` (Halaman Stok)
 `/laporan` (Halaporan Laporan)
`react-router-dom` menangani URL ini.
5. Langkah-langkah Praktikum
a. Langkah 1: Setup Router
Buka file utama `src/main.jsx` (atau `index.jsx` tergantung versi Vite). Bungkus
aplikasi dengan `BrowserRouter`.
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>,
)
b. Langkah 2: Membuat Halaman (Pages)
Buat folder `src/Halaman`. Buat 3 file:
1. `Dashboard.jsx`
2. `Inventori.jsx`
3. `NotFound.jsx` (Halaman error)
Isi `src/Halaman/Dashboard.jsx`:
import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard() {
return (
<div className="p-5">
<h1>Dashboard Utama Pabrik</h1>
<p>Selamat datang di sistem monitoring terpadu.</p>
<Link to="/inventori" className="btn btn-primary">
Ke Halaman Inventori
</Link>
</div>
);
}
export default Dashboard;
Isi `src/Halaman/Inventori.jsx`:
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Inventori() {
const [products, setProducts] = useState([]);
// Fetch Data saat komponen mount
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
// Ambil hanya 5 data pertama untuk contoh
setProducts(data.slice(0, 5));
})
.catch(err => console.log(err));
}, []);
return (
<div className="container mt-4">
<h1>Data Inventori Bahan Baku</h1>
<Link to="/" className="btn btn-secondary mb-3">Kembali ke Dashboard</Link>
<table className="table table-striped">
<thead>
<tr>
<th>ID Item</th>
<th>Nama Bahan</th>
<th>Status Supplier</th>
</tr>
</thead>
<tbody>
{products.map((item) => (
<tr key={item.id}>
<td>{item.id}</td>
<td>{item.title}</td> {/* Menggunakan title sebagai simulasi nama bahan */}
<td><span className="badge bg-success">Available</span></td>
</tr>
))}
</tbody>
</table>
</div>
);
}
export default Inventori;
Isi `src/Halaman/NotFound.jsx`:
import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
return (
<div className="text-center mt-5">
<h1 className="display-1">404</h1>
<p>Halaman tidak ditemukan dalam sistem pabrik.</p>
<Link to="/" className="btn btn-dark">Kembali ke Home</Link>
</div>
);
}
export default NotFound;
c. Langkah 3: Mengatur Route di App.jsx
Sekarang kita tentukan kapan komponen mana yang muncul berdasarkan URL.
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';
import Navbar from './Komponen/Navbar'; // Anda bisa buat navbar sendiri
// Buat Navbar.jsx sederhana untuk navigasi
function Navbar() {
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
<div className="container">
<a className="navbar-brand" href="/">Sistem Pabrik</a>
<div className="navbar-nav">
<a className="nav-link" href="/">Dashboard</a>
<a className="nav-link" href="/inventori">Inventori</a>
</div>
</div>
</nav>
)
}
function App() {
return (
<div>
<Navbar />
<Routes>
{/* Route yang tepat akan di-render */}
<Route path="/" element={<Dashboard />} />
<Route path="/inventori" element={<Inventori />} />
{/* Route untuk semua path lainnya (404) */}
<Route path="" element={<NotFound />} />
</Routes>
</div>
);
}
export default App;
6. Latihan/Tugas Mandiri
1) Latihan 1 (Dynamic Route): Tambahkan Route untuk detail item. Misal path
`/inventori/:id`. Di halaman Inventori, ubah "Nama Bahan" menjadi Link ke halaman
detail.
2) Latihan 2 (Loading State): Di halaman `Inventori.jsx`, tambahkan state `loading`
(boolean). Set `loading = true` sebelum fetch, dan `false` setelah data masuk. Tampilkan
teks "Memuat data..." jika loading true.
3) Tugas Proyek Mini (Navigasi Modular):
a. Buat halaman baru bernama `LaporanKualitas.jsx`. Halaman ini menampilkan data
"Cacat" (mock data array manual).
b. Tambahkan link di Navbar untuk menuju halaman ini.
c. Pastikan transisi antar halaman berjalan mulus tanpa reload browser.
7. Petunjuk Pengumpulan Tugas
a. Rekaman layar singkat berpindah dari Dashboard ke Inventori, lalu ke link yang salah
(untuk tes 404).
b. File `App.jsx` dan folder `Halaman`.
c. Simpan seluruh file dalam folder `Pertemuan11_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: `useEffect` loop terus menerus.
Solusi: Pastikan dependency array `[]` diisi dengan benar. Jika dikosongkan, hanya
jalan sekali. Jika diisi state, dia akan jalan saat state berubah.
 Masalah: Layar Detail kosong (data tidak muncul).
Solusi: Cek di `DetailScreen`, pastikan destructuring `route.params` benar. Cek di
`HomeScreen`, pastikan `navigation.navigate('Detail', { itemData: item })` mengirim
nama properti yang sama.

## PERTEMUAN 12
Proyek Web: Dashboard Monitoring Produksi (React + Chart.js)
Durasi: 340 Menit
Topik: Integrasi Library Visualisasi Data (Chart.js) dan Finalisasi Layout Dashboard.
1. Tujuan Pembelajaran
a. Mampu mengintegrasikan library pihak ketiga (`react-chartjs-2`) ke dalam React.
b. Mampu mengubah data mentah menjadi visualisasi grafik yang informatif.
c. Menyelesaikan proyek mini dashboard lengkap dari pertemuan 1-12.
2. Kompetensi yang Dicapai
a. Mahasiswa mampu membuat dashboard monitoring produksi profesional.
b. Mahasiswa memahami transformasi data array menjadi format data grafik.
3. Persiapan
a. Install library chart:
npm install chart.js react-chartjs-2
b. Install icon (opsional, biar cantik):
npm install react-icons
4. Materi Singkat
Dashboard Visualisasi
Dalam Teknik Industri, data angka saja (tabel) seringkali sulit dipahami trennya secara
cepat. Grafik membantu manager melihat pola produksi jam-ke-jam, tingkat defect, atau
utilisasi mesin.
5. Langkah-langkah Praktikum
a. Langkah 1: Persiapan Data Grafik
Kita akan memvisualisasikan data produksi per jam. Misal data array:
`[120, 150, 180, 170, 200, 210]` (Jam 8 sampai Jam 13).
b. Langkah 2: Membuat Komponen Grafik
Buat file `src/Komponen/GrafikProduksi.jsx`.
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
} from 'chart.js';
// Mendaftarkan komponen ChartJS
ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);
function GrafikProduksi() {
// Data untuk Grafik
const data = {
labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
datasets: [
{
label: 'Jumlah Produksi (Unit)',
data: [120, 150, 180, 170, 200, 210], // Data statis, bisa diganti state/dinamis
backgroundColor: 'rgba(54, 162, 235, 0.5)',
borderColor: 'rgba(54, 162, 235, 1)',
borderWidth: 1,
},
{
label: 'Target',
data: [150, 150, 150, 150, 150, 150], // Garis target konstan
type: 'line', // Tipe campuran (Bar + Line)
borderColor: 'rgb(255, 99, 132)',
borderWidth: 2,
},
],
};
// Opsi Tampilan Grafik
const options = {
responsive: true,
plugins: {
legend: {
position: 'top',
},
title: {
display: true,
text: 'Grafik Produksi Harian - Lini 1',
},
},
scales: {
y: {
beginAtZero: true,
},
},
};
return <Bar data={data} options={options} />;
}
export default GrafikProduksi;
c. Langkah 3: Menggabungkan ke Dashboard Utama
Update `src/Halaman/Dashboard.jsx` agar memuat grafik ini.
import React from 'react';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import KartuMesin from '../Komponen/KartuMesin';
function Dashboard() {
return (
<div className="container-fluid mt-4">
<div className="row mb-4">
<div className="col-12">
<h2>Dashboard Pintar 4.0</h2>
<hr/>
</div>
</div>
{/* Bagian Grafik */}
<div className="row mb-4">
<div className="col-md-8">
<div className="card shadow-sm">
<div className="card-body">
<GrafikProduksi />
</div>
</div>
</div>
{/* Bagian Ringkasan KPI */}
<div className="col-md-4">
<div className="card bg-primary text-white mb-3">
<div className="card-body">
<h5>Total Output Hari Ini</h5>
<h2>1,030 Unit</h2>
<small>Update terakhir: 13:00</small>
</div>
</div>
<div className="card bg-success text-white">
<div className="card-body">
<h5>Efficiency Rate</h5>
<h2>92.4%</h2>
<small>+1.2% dari kemarin</small>
</div>
</div>
</div>
</div>
{/* Bagian Daftar Mesin */}
<div className="row">
<div className="col-12">
<h4>Status Mesin Aktif</h4>
</div>
<div className="col-md-3">
<KartuMesin nama="CNC-01" status="Running" produksi={320} />
</div>
<div className="col-md-3">
<KartuMesin nama="CNC-02" status="Running" produksi={310} />
</div>
<div className="col-md-3">
<KartuMesin nama="Press-01" status="Stop" produksi={150} />
</div>
<div className="col-md-3">
<KartuMesin nama="Weld-04" status="Maintenance" produksi={0} />
</div>
</div>
</div>
);
}
export default Dashboard;
6. Latihan/Tugas Mandiri (Final Project Web)
Ini adalah puncak dari materi Web. Anda harus menyelesaikan Dashboard lengkap.
1) Integrasi Data Realistik: Ubah data statis di `GrafikProduksi` menjadi data yang
diambil dari `fetch` API (gunakan mock data dari internet atau buat generator acak).
2) Tambahkan Grafik Donat: Buat grafik "Proporsi Cacat" (Misal: Scratch 50%, Dent
30%, Lainnya 20%) menggunakan komponen `Doughnut` dari chart.js.
3) Tugas Akhir Web:
Susun ulang halaman `Dashboard` agar memiliki Sidebar (kiri) dan Main Content
(kanan).
a. Sidebar: Logo, Menu Dashboard, Menu Inventori, Menu Laporan.
b. Main Content: Header (User Profile), Grafik, dan Tabel Data.
c. Pastikan desain responsif (Sidebar bisa collapse di HP).
7. Petunjuk Pengumpulan Tugas
a. Deploy aplikasi React Anda (opsional, bonus poin) atau rekam layar fitur lengkap
dashboard.
b. Kumpulkan seluruh source code project React dalam folder
`Pertemuan12_NIM_NamaMahasiswa`.
8. Troubleshooting Umum
 Masalah: Grafik tidak muncul atau error "Canvas is already in use".
Solusi: Pastikan setiap grafik dibungkus dalam komponen terpisah dan memiliki `key`
yang unik jika dirender dalam list (looping).
 Masalah: Ukuran grafik tidak responsif (melebar tak terbatas).
Solusi: Pastikan elemen parent (div) memiliki style positioning yang jelas atau lebar
terdefinisi (`container` Bootstrap biasanya cukup).

## PERTEMUAN 13
Ujian Tengah Semester (UTS)
Topik: Aplikasi Web Lengkap (React.js)
Durasi: 340 Menit
1. Deskripsi Tugas Ujian
Anda diminta untuk membangun "Sistem Manajemen Jadwal Shift & Laporan Produksi
Harian".
Aplikasi ini harus memungkinkan manager produksi untuk melihat jadwal shift operator
dan menginput laporan produksi.
2. Kriteria Penilaian (Rubrik)
Aspek Bobot Kriteria
Fungsionalitas
(Code Logic)
40%  Form input berfungsi dan menyimpan data ke
LocalStorage.
 Data di tabel/dashboard terupdate real-time tanpa
refresh.
 Routing antar halaman (Jadwal → Input → Beranda)
berjalan lancar.
UI/UX & Desain 25%  Menggunakan Bootstrap dengan rapi
 Tampilan responsif (bagus di HP dan Desktop).
 Penggunaan warna dan tipografi yang sesuai (formal
industri).
Kode & Struktur 20%  Pemecahan komponen yang baik (tidak semua kode
di App.jsx).
 Penamaan variabel yang jelas (camelCase).
 Tidak ada error di Console.
Relevansi
Industri
15%  Input field relevan (Tanggal, Shift, Nama Mesin,
Jumlah, Cacat).
 Ada kalkulasi otomatis (misal: Efisiensi = Output /
Target).
3. Spesifikasi Teknis Minimal
a. Halaman Utama (Dashboard): Menampilkan ringkasan total produksi hari ini (diambil
dari LocalStorage).
b. Halaman Input Laporan: Form berisi:
 Tanggal (Date Picker)
 Shift (Dropdown: Pagi, Siang, Malam)
 Nama Mesin (Text/Select)
 Jumlah Produksi (Number)
 Jumlah Reject (Number)
Sistem harus otomatis menghitung: Netto = Total - Reject.
c. Halaman Riwayat Data: Tabel yang menampilkan semua data yang sudah diinput
(CRUD Read). Data tidak boleh hilang saat direfresh (LocalStorage).
4. Contoh Output yang Diharapkan
 Tampilan Dashboard: Kartu statistik (Total Produksi: 1200, Total Reject: 15, Yield:
98.75%).
 Interaksi: User mengisi form → Klik Simpan → Diarahkan ke Halaman Riwayat
→ Data baru muncul di baris paling atas.
5. Instruksi Pengumpulan UTS
Untuk memastikan penilaian berjalan objektif dan sistematis, mahasiswa wajib mengikuti
aturan pengumpulan berikut:
a. Format Berkas
 Source Code:
Seluruh folder proyek React harus dikompres menjadi satu file ZIP atau RAR.
Pastikan tidak menyertakan folder `node_modules` (ukuran terlalu besar). Hapus
folder ini sebelum mengompres (jika dinilai dari file zip), atau pastikan
`package.json` tersedia agar dosen bisa menginstall ulang (`npm install`).
 Dokumentasi Video:
Buat video rekaman layar (screencast) dengan durasi maksimal 3 menit.
Video harus menunjukkan:
1) Menjalankan aplikasi (`npm start`).
2) Pengisian form laporan produksi (Input Shift, Jumlah, dll).
3) Bukti perhitungan otomatis muncul di UI.
4) Bukti data tersimpan dan muncul di halaman Riwayat Data (LocalStorage).
5) Format video: MP4.
b. Penamaan Berkas (Wajib)
Gunakan format standar berikut untuk memudahkan administrasi penilaian:
Nama File ZIP: `UTS_Web_NIM_NamaLengkap.zip`
Contoh: `UTS_Web_12320001_AhmadDhani.zip`
Nama File Video: `Demo_UTS_Web_NIM_NamaLengkap.mp4`
Contoh: `Demo_UTS_Web_12320001_AhmadDhani.mp4`
c. Isi README.md (Wajib Ada di dalam ZIP)
Buat file bernama `README.md` di dalam proyek Anda yang berisi:
1) Nama & NIM: Identitas mahasiswa.
2) Cara Menjalankan (`npm install`, `npm run dev`,dll)
3) Fitur Unggulan: Jelaskan fitur tambahan apa saja yang Anda buat (jika ada) untuk
mendapatkan poin kreativitas.
d. Lokasi dan Batas Waktu Pengumpulan
Unggah kedua file (ZIP & MP4) ke Folder GDrive kelas yang ditetapkan dosen
pengampu paling lambat H+3 UTS Pukul 10.00 WIB. Keterlambatan akan dikenakan
pengurangan nilai sebesar 10% per hari, maksimum 50% lebih dari itu dianggap NOL
(Tidak mengikuti UTS).

## PERTEMUAN 14
Pengenalan React Native & Setup Expo
Durasi: 340 Menit
Topik: Konsep Cross-Platform, Setup Lingkungan Expo, Komponen Dasar (View, Text,
Image), dan Styling di Mobile.
1. Tujuan Pembelajaran
a. Memahami perbedaan antara Web Development (React.js) dan Mobile Development
(React Native).
b. Mampu menyiapkan lingkungan kerja React Native menggunakan Expo.
c. Menguasai komponen dasar pengganti HTML: `View` (div), `Text` (p/h1),
`ScrollView`.
d. Mampu menata tampilan mobile menggunakan `StyleSheet`.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat aplikasi seluler "Hello World" yang berjalan di
Android/iOS.
b. Mahasiswa memahami struktur direktori proyek React Native.
3. Persiapan (Wajib)
a. Node.js (sudah terinstal dari pertemuan sebelumnya).
b. Aplikasi Expo Go (Download di Google Play Store untuk Android, atau App Store
untuk iOS). HP mahasiswa akan bertindak sebagai emulator.
c. Visual Studio Code.
d. Akun GitHub (opsional untuk login Expo).
4. Materi Singkat
Mengapa React Native?
Sebagai Insinyur Industri, Anda membutuhkan aplikasi yang bisa dibawa operator ke lantai
pabrik (tablet genggam/PDA). Aplikasi web terkadang berat jika dibuka di browser HP.
React Native memungkinkan kita membuat aplikasi native (nyata) untuk Android dan iOS
sekaligus hanya menggunakan satu bahasa pemrograman: JavaScript.
Perbedaan Kunci (Web vs Native):
Web (HTML) Mobile (React Native)
`<div>` `<View>`
`<p>`, `<h1>`, `<span>` `<Text>`
`<img>` `<Image>`
`onclick` `onPress`
`class="container"` `style={styles.container}`
CSS file / Bootstrap `StyleSheet` (JavaScript object)
5. Langkah-langkah Praktikum
a. Langkah 1: Membuat Project Expo
Buka Terminal/Command Prompt di komputer. Jalankan perintah berikut (tunggu
proses instalasi sekitar 2-5 menit):
1) Membuat project baru bernama 'SistemGudangMobile'
`npx create-expo-app SistemGudangMobile`
2) Masuk ke folder
`cd SistemGudangMobile`
3) Menjalankan server development
`npx expo start`
Setelah muncul QR Code di terminal:
1) Buka aplikasi Expo Go di HP Android/iOS Anda.
2) Scan QR Code tersebut (Pastikan HP dan Laptop terhubung ke jaringan WiFi yang
sama).
3) Aplikasi akan terbuka di HP dan menampilkan tulisan "Open up App.js to start
working on your app!".
b. Langkah 2: Memodifikasi App.js (UI Dashboard Sederhana)
Buka file `App.js` di folder project menggunakan VS Code. Hapus semua konten di dalam
`return (...)` dan ganti dengan kode berikut. Kita akan membuat tampilan Header sederhana.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
export default function App() {
return (
<SafeAreaView style={styles.container}>
<StatusBar style="auto" />
{/* Bagian Header */}
<View style={styles.header}>
<Text style={styles.headerTitle}>PT. Manufaktur Maju</Text>
<Text style={styles.headerSubtitle}>Aplikasi Monitoring Gudang</Text>
</View>
{/* Bagian Konten Utama */}
<View style={styles.content}>
<Text style={styles.welcomeText}>Selamat Datang, Operator!</Text>
<View style={styles.card}>
<Text style={styles.cardTitle}>Status Gudang A</Text>
<Text style={styles.cardValue}>Kapasitas: 85%</Text>
<Text style={styles.cardStatus}>TERSEDIA</Text>
</View>
<View style={[styles.card, styles.cardWarning]}>
<Text style={styles.cardTitle}>Status Gudang B</Text>
<Text style={styles.cardValue}>Kapasitas: 95%</Text>
<Text style={styles.cardStatus}>PENUH</Text>
</View>
</View>
</SafeAreaView>
);
}
// Styling menggunakan StyleSheet (seperti CSS tapi object JS)
const styles = StyleSheet.create({
container: {
flex: 1, // Artinya layar penuh
backgroundColor: '#f0f2f5',
paddingTop: Platform.OS === 'android' ? 25 : 0, // Padding khusus Android status bar
},
header: {
backgroundColor: '#2c3e50',
padding: 20,
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,
marginBottom: 20,
elevation: 5, // Shadow di Android
},
headerTitle: {
color: 'white',
fontSize: 24,
fontWeight: 'bold',
},
headerSubtitle: {
color: '#bdc3c7',
fontSize: 14,
},
content: {
padding: 20,
},
welcomeText: {
fontSize: 18,
marginBottom: 15,
color: '#333',
},
card: {
backgroundColor: 'white',
padding: 20,
borderRadius: 10,
marginBottom: 15,
// Shadow khusus iOS dan Android
shadowColor: "#000",
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
},
cardWarning: {
borderLeftWidth: 5,
borderLeftColor: '#e74c3c',
},
cardTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
cardValue: {
fontSize: 14,
color: '#7f8c8d',
},
cardStatus: {
fontSize: 12,
fontWeight: 'bold',
color: '#27ae60',
marginTop: 5,
textAlign: 'right'
}
});
Simpan file. Tampilan di HP Anda akan otomatis ter-refresh (Fast Refresh).
c. Langkah 3: Menambahkan Interaksi (Button & Alert)
React Native tidak punya tag `<button>`, kita menggunakan komponen `Button` atau
`TouchableOpacity`. Kita akan coba menampilkan pesan alert saat kartu ditekan.
Ubah import di paling atas:
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, Alert } from
'react-native';
Ubah salah satu kartu (Gudang A) menjadi bisa diklik:
// Di dalam return(...), ganti View Card Gudang A dengan:
<TouchableOpacity
style={styles.card}
onPress={() => Alert.alert("Info", "Membuka Detail Stok Gudang A...")}
>
<Text style={styles.cardTitle}>Status Gudang A</Text>
<Text style={styles.cardValue}>Kapasitas: 85%</Text>
<Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
</TouchableOpacity>
6. Latihan/Tugas Mandiri
1) Latihan 1 (Gambar/Ikon):
Cari gambar logo perusahaan (atau gunakan placeholder), taruh di folder project, lalu
tampilkan menggunakan `<Image source={require('./logo.png')} style={styles.logo}
/>`.
2) Latihan 2 (ScrollView):
Jika konten melebihi tinggi layar, gunakan `<ScrollView>` untuk membungkus konten
agar bisa digulir ke bawah.
3) Tugas Proyek Mini (Profil Mesin Mobile):
a. Buat halaman profil mesin yang menampilkan: Foto Mesin (gunakan placeholder),
Nama Mesin, Tahun Pembuatan, dan Status.
b. Gunakan Layout Flexbox (`flexDirection: 'row'`) untuk menyusun Foto di kiri dan
Teks di kanan.
7. Petunjuk Pengumpulan Tugas
a. Screenshot/Screencast tampilan aplikasi di HP.
b. Kumpulkan kode `App.js`.
8. Troubleshooting Umum
 Masalah: Metro bundler (terminal) error "Port 19000/19001 already in use".
Solusi: Matikan terminal yang lama, atau kill process port tersebut. Bisa juga jalankan
`npx expo start --clear`.
 Masalah: Tidak bisa connect via WiFi (Network Error).
Solusi: Gunakan koneksi "Tunnel" (ketik `t` di terminal expo) atau gunakan kabel USB
(adb connection).

## PERTEMUAN 15
Component, Navigation, dan Styling di React Native +
Proyek Mobile
Durasi: 340 Menit
Topik: React Navigation (Stack Navigator), Passing Data Antar Layar, dan Proyek Inventori
Sederhana.
1. Tujuan Pembelajaran
a. Memahami konsep navigasi layar di aplikasi mobile (Stack).
b. Mampu menginstall dan mengonfigurasi `react-navigation`.
c. Membuat aplikasi multi-halaman: Beranda (List) → Detail Item.
d. Meneruskan data (params) dari satu layar ke layar lain.
2. Kompetensi yang Dicapai
a. Mahasiswa dapat membuat alur navigasi aplikasi mobile yang kompleks.
b. Mahasiswa mampu menghubungkan daftar item dengan halaman detailnya.
3. Persiapan
a. Project Expo dari pertemuan 14.
b. Instalasi library navigasi (jalankan di terminal project):
Install library navigasi dan dependensinya
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
4. Materi Singkat
Navigasi di Mobile
Berbeda dengan web yang menggunakan URL (`/about`), mobile menggunakan Screen
Stack (Tumpukan Layar). Layar baru ditumpuk di atas layar lama. Untuk kembali, kita
melakukan pop pada history stack.
5. Langkah-langkah Praktikum
a. Langkah 1: Struktur Folder
Buat folder baru di dalam project bernama `screens`. Di dalamnya buat dua file:
1. `HomeScreen.js` (Daftar Inventori)
2. `DetailScreen.js` (Detail Barang)
b. Langkah 2: Membuat HomeScreen (Daftar Inventori)
Buka `screens/HomeScreen.js`.
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// Data Mock Inventori
const DATA_INVENTORI = [
{ id: '1', nama: 'Baut M10', stok: 500, lokasi: 'Rak A-1' },
{ id: '2', nama: 'Oli Mesin 20L', stok: 12, lokasi: 'Rak B-3' },
{ id: '3', nama: 'Packing Kayu', stok: 100, lokasi: 'Gudang Luar' },
{ id: '4', nama: 'Mur Ring 12', stok: 0, lokasi: 'Rak A-2' }, // Stok Habis
];
function HomeScreen({ navigation }) {
// Fungsi Render Item untuk FlatList
const renderItem = ({ item }) => (
<TouchableOpacity
style={styles.itemContainer}
onPress={() => navigation.navigate('Detail', { itemData: item })}
>
<Text style={styles.itemTitle}>{item.nama}</Text>
<View style={styles.itemInfo}>
<Text style={styles.itemSub}>Stok: {item.stok}</Text>
<Text style={styles.itemSub}>{item.lokasi}</Text>
</View>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<Text style={styles.header}>Daftar Inventori Gudang</Text>
<FlatList
data={DATA_INVENTORI}
renderItem={renderItem}
keyExtractor={item => item.id}
/>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
paddingTop: 20,
},
header: {
fontSize: 22,
fontWeight: 'bold',
marginBottom: 15,
paddingHorizontal: 15,
},
itemContainer: {
backgroundColor: '#f9f9f9',
padding: 15,
marginVertical: 8,
marginHorizontal: 15,
borderRadius: 8,
borderWidth: 1,
borderColor: '#ddd',
},
itemTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#333',
},
itemInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 5,
},
itemSub: {
color: '#666',
},
});
export default HomeScreen;
c. Langkah 3: Membuat DetailScreen
Buka `screens/DetailScreen.js`.
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
function DetailScreen({ route, navigation }) {
// Menerima data yang dikirim dari HomeScreen
const { itemData } = route.params;
return (
<View style={styles.container}>
<View style={styles.card}>
<Text style={styles.label}>Nama Barang:</Text>
<Text style={styles.value}>{itemData.nama}</Text>
<Text style={styles.label}>Stok Saat Ini:</Text>
<Text style={[styles.value, itemData.stok < 20 ? styles.dangerText :
styles.successText]}>
{itemData.stok} Unit
</Text>
<Text style={styles.label}>Lokasi Penyimpanan:</Text>
<Text style={styles.value}>{itemData.lokasi}</Text>
</View>
<Button title="Kembali ke Daftar" onPress={() => navigation.goBack()} />
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
padding: 20,
backgroundColor: '#f0f0f0',
},
card: {
backgroundColor: 'white',
padding: 20,
borderRadius: 10,
marginBottom: 20,
elevation: 3,
},
label: {
fontSize: 14,
color: '#7f8c8d',
marginTop: 10,
},
value: {
fontSize: 20,
fontWeight: 'bold',
color: '#2c3e50',
},
dangerText: {
color: 'red',
},
successText: {
color: 'green',
}
});
export default DetailScreen;
d. Langkah 4: Menghubungkan Navigation di App.js
Buka file utama `App.js` dan modifikasi menjadi sebagai berikut:
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import Screens
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
// Membukan Stack Navigator
const Stack = createNativeStackNavigator();
export default function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Home"
component={HomeScreen}
options={{ title: 'Gudang Ind. v1.0' }}
/>
<Stack.Screen
name="Detail"
component={DetailScreen}
options={({ route }) => ({ title: route.params?.itemData.nama || 'Detail' })}
/
/>
</Stack.Navigator>
</NavigationContainer>
);
}
6. Latihan/Tugas Mandiri
1) Latihan 1 (Conditional Rendering): Pada `DetailScreen`, jika stok = 0, munculkan
tombol "Request Stok Darurat" (gunakan Button tambahan).
2) Latihan 2 (Passing Data): Di `HomeScreen`, tambahkan tombol FAB (Floating Action
Button) atau Button di bawah untuk "Tambah Barang". Saat ditekan, navigasi ke layar
(screen baru bernama `TambahScreen`) yang berisi form kosong.
3) Tugas Proyek Mini (Aplikasi Inspeksi QC):
Buat aplikasi inspeksi sederhana.
a. Home: Daftar item yang perlu diinspeksi.
b. Detail: Foto item, standar kualitas, dan dropdown status (Lolos/Gagal).
c. Simulasi: Saat user memilih "Gagal" di layar detail dan kembali, ubah warna teks
di Home menjadi merah (memerlukan sedikit logika state management sederhana).
7. Petunjuk Pengumpulan Tugas
a. Video demo alur aplikasi: Klik Item -> Tampil Detail -> Kembali.
b. Source code folder `screens`.
8. Troubleshooting Umum
 Masalah: Error "Object is not a function" pada navigation.
Solusi: Pastikan versi `react-navigation` konsisten. Biasanya versi 6+ menggunakan
cara export seperti di atas.
 Masalah: Layar Detail kosong (data tidak muncul).
Solusi: Cek di `DetailScreen`, pastikan destructuring `route.params` benar. Cek di
`HomeScreen`, pastikan `navigation.navigate('Detail', { itemData: item })` mengirim
nama properti yang sama.

## PERTEMUAN 16
Ujian Akhir Semester (UAS)
Topik: Aplikasi Mobile Lengkap & Integrasi
Durasi: 340 Menit
1. Deskripsi Tugas Ujian
Anda diminta untuk membangun "Aplikasi Mobile Pencarian Barang di Gudang
(Warehouse Locator)".
Aplikasi ini akan digunakan oleh operator gudang untuk mengetahui posisi barang dan
status stoknya secara cepat melalui PDA/HP.
2. Kriteria Penilaian (Rubrik)
Aspek Bobot Kriteria
Fungsionalitas
Mobile
40%  Aplikasi berjalan lancar di HP (via Expo Go).
 Pencarian berfungsi (Filter data array).
 Navigasi antar layar (List → Detail) berjalan
tanpa crash.
 Input stok (tambah/kurang) memperbarui
tampilan.
User Interface
(Mobile)
25%  Komponen UI bersih dan mudah dibaca (font size
cukup besar).
 Layout menggunakan Flexbox dengan benar
(tidak overlapping).
 Feedback visual (warna berubah jika stok kritis).
Kode React Native 20%  Penggunaan `FlatList` untuk performa rendering
list panjang.
 StyleSheet` terorganisir.
 Tidak ada warning "Yellow Box" di aplikasi.
Kreativitas & Fitur
Tambahan
15%  Menambahkan fitur Scan Barcode (simulasi
saja/tombol scan yang menampilkan dummy
input).
 Menambahkan fitur "Sort" berdasarkan nama
barang.
3. Spesifikasi Teknis Minimal
a. Database (Local): Gunakan Array of Objects yang berisi minimal 10 data barang
dummy (ID, Nama Barang, Kategori, Stok, Lokasi Rak).
b. Halaman Search/List:
 Menampilkan daftar barang.
 Memiliki Search Bar di bagian atas. Saat user mengetik nama barang, daftar terfilter
secara real-time.
c. Halaman Detail:
 Menampilkan detail lengkap barang.
 Terdapat tombol `+` dan `-` untuk update stok secara lokal (sederhana).
 Jika stok < 5, tampilkan peringatan visual (teks merah/background merah).
4. Instruksi Pengumpulan UAS
a. Repo GitHub: Wajib mengunggah seluruh source code (Web React & Mobile Expo) ke
repository GitHub pribadi.
b. README.md: Buat file README yang menjelaskan cara menjalankan aplikasi (`npm
install`, `npm start`, dll) dan screenshot hasil akhir.
c. Link Submission: Submit link Repository ke spreadsheet yang ditetapkan dosen
pengampu.

## PENUTUP
Selamat telah menyelesaikan mata kuliah praktik Aplikasi Web dan Mobile ini. Keterampilan
yang Anda peroleh mulai dari dasar HTML hingga membangun aplikasi React Native adalah
fondasi yang kuat untuk era Industri 4.0.
Teruslah berlatih, eksplorasi teknologi baru, dan jangan ragu untuk menerapkan inovasi Anda
dalam memecahkan masalah nyata di industri.
Selamat Bekerja, Calon Insinyur Masa Depan!

---

## Penjelasan Tambahan untuk Pertemuan 10: State, Hooks (useState, useEffect), dan Conditional Rendering

### Pengantar
Pertemuan 10 membahas konsep fundamental React yang membuat aplikasi menjadi interaktif dan dinamis. Tanpa state management, aplikasi React hanya akan statis seperti halaman HTML biasa. Mari kita bahas lebih detail setiap konsepnya.

### 1. Apa itu State?
State adalah data yang bisa berubah dalam komponen React. Bayangkan state sebagai "memori" komponen yang menyimpan informasi sementara.

**Perbedaan Props vs State:**
- **Props**: Data yang dikirim dari parent ke child. Tidak bisa diubah oleh child.
- **State**: Data internal komponen. Bisa diubah oleh komponen itu sendiri.

**Contoh dalam Kode:**
```jsx
function CounterProduksi() {
  const [jumlah, setJumlah] = useState(0); // State: jumlah produksi
  // jumlah = nilai saat ini, setJumlah = fungsi untuk mengubah
}
```

### 2. useState Hook
useState adalah hook (fungsi khusus) untuk membuat state di functional component.

**Sintaks:**
```jsx
const [stateVariable, setStateFunction] = useState(initialValue);
```

**Parameter:**
- `initialValue`: Nilai awal state (bisa number, string, array, object, dll.)

**Contoh Lengkap:**
```jsx
import React, { useState } from 'react';

function CounterProduksi() {
  // State untuk jumlah produksi
  const [jumlah, setJumlah] = useState(0);
  
  // State untuk target harian
  const [target, setTarget] = useState(100);
  
  // Fungsi untuk menambah produksi
  const tambahProduksi = () => {
    setJumlah(jumlah + 1); // Mengubah state dengan setJumlah
  };
  
  // Fungsi reset
  const reset = () => {
    setJumlah(0);
  };
  
  return (
    <div>
      <h1>Jumlah Produksi: {jumlah}</h1>
      <button onClick={tambahProduksi}>Tambah</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

**Penting:** State adalah asynchronous. Jika Anda perlu menggunakan nilai state baru segera setelah setState, gunakan callback:
```jsx
setJumlah(prevJumlah => prevJumlah + 1); // Functional update
```

### 3. useEffect Hook
useEffect digunakan untuk menjalankan kode saat komponen "hidup" (mount), update, atau "mati" (unmount). Berguna untuk:
- Fetch data dari API
- Setup timer/subscription
- Cleanup resources

**Sintaks:**
```jsx
useEffect(() => {
  // Kode yang dijalankan
  return () => {
    // Cleanup function (opsional)
  };
}, [dependencies]); // Array dependency
```

**Contoh Timer Real-time:**
```jsx
import React, { useState, useEffect } from 'react';

function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());
  
  useEffect(() => {
    const timerID = setInterval(() => {
      setWaktu(new Date());
    }, 1000);
    
    // Cleanup saat komponen unmount
    return () => {
      clearInterval(timerID);
    };
  }, []); // Empty array = hanya jalankan sekali saat mount
  
  return <h2>Waktu: {waktu.toLocaleTimeString()}</h2>;
}
```

**Dependency Array:**
- `[]`: Jalankan sekali saat mount
- `[variable]`: Jalankan saat variable berubah
- Tanpa array: Jalankan setiap render (hindari!)

### 4. Conditional Rendering
Menampilkan atau menyembunyikan elemen berdasarkan kondisi. Menggunakan operator ternary atau &&.

**Contoh dengan Ternary:**
```jsx
{jumlah >= target ? (
  <div className="alert alert-success">Target Tercapai!</div>
) : (
  <div className="alert alert-secondary">Produksi Berjalan...</div>
)}
```

**Contoh dengan && (untuk satu kondisi):**
```jsx
{error && <div className="alert alert-danger">{error}</div>}
```

### 5. Studi Kasus Industri: Dashboard Monitoring
Dalam aplikasi monitoring produksi, state digunakan untuk:
- Menyimpan data sensor real-time
- Status mesin (Running/Stop/Maintenance)
- Counter produksi
- Alert ketika target tidak tercapai

**Contoh Implementasi:**
```jsx
function Dashboard() {
  const [mesinStatus, setMesinStatus] = useState('Running');
  const [produksiHarian, setProduksiHarian] = useState(0);
  const [alertAktif, setAlertAktif] = useState(false);
  
  useEffect(() => {
    // Simulasi monitoring sensor
    const interval = setInterval(() => {
      if (produksiHarian < 100) {
        setAlertAktif(true);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [produksiHarian]);
  
  return (
    <div>
      <h1>Status Mesin: {mesinStatus}</h1>
      <p>Produksi: {produksiHarian}/100 unit</p>
      {alertAktif && (
        <div className="alert alert-warning">
          Produksi di bawah target!
        </div>
      )}
    </div>
  );
}
```

### 6. Best Practices
1. **Jangan Update State Secara Langsung:**
   ```jsx
   // Salah
   jumlah = 5;
   
   // Benar
   setJumlah(5);
   ```

2. **Gunakan Functional Update untuk State yang Bergantung pada Nilai Lama:**
   ```jsx
   setCount(prevCount => prevCount + 1);
   ```

3. **Cleanup useEffect:**
   Selalu cleanup timer, subscription, atau event listener untuk mencegah memory leak.

4. **Pisahkan State yang Berbeda:**
   ```jsx
   // Baik
   const [nama, setNama] = useState('');
   const [email, setEmail] = useState('');
   
   // Kurang baik
   const [user, setUser] = useState({nama: '', email: ''});
   ```

### 7. Troubleshooting Umum
- **Infinite Loop:** useEffect tanpa dependency array yang benar
- **State Tidak Update:** Mengubah state secara synchronous, padahal asynchronous
- **Component Tidak Re-render:** Mengubah nested object tanpa spread operator

### Kesimpulan
Pertemuan 10 mengajarkan dasar interaktivitas di React. Dengan state dan hooks, aplikasi bisa merespons input user dan data real-time. Ini adalah fondasi untuk aplikasi industri yang dinamis seperti monitoring produksi, inventory management, dan dashboard KPI.

**Catatan:** Tidak ada pertemuan 19 dalam manual praktikum ini. Pertemuan terakhir adalah 16 (UAS). Jika Anda maksud pertemuan 9 atau 11, silakan beri tahu untuk penjelasan tambahan.

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