import React from 'react'; // Import React untuk JSX (Pertemuan 9: React.js) - Library utama untuk membuat komponen UI
import ReactDOM from 'react-dom/client'; // Import ReactDOM untuk rendering (Pertemuan 9) - API untuk me-render React ke DOM browser
import App from './assets/App'; // Import komponen App utama (Pertemuan 9) - Komponen root yang berisi seluruh aplikasi
import './style.css'; // Import file CSS untuk styling global (Pertemuan 2: CSS Dasar) - Styling untuk seluruh aplikasi

const rootElement = document.getElementById('app'); // Seleksi elemen root dari HTML (Pertemuan 6: DOM Manipulation) - Mengambil div dengan id 'app' dari index.html
const root = ReactDOM.createRoot(rootElement); // Membuat root React (Pertemuan 9) - Inisialisasi root untuk React 18+

root.render( // Render aplikasi ke DOM (Pertemuan 9) - Memulai proses rendering komponen React
  <React.StrictMode> {/* StrictMode untuk development warnings (Pertemuan 9) - Mode yang membantu mendeteksi masalah di development */}
    <App /> {/* Komponen utama aplikasi (Pertemuan 9) - Entry point komponen yang akan dirender */}
  </React.StrictMode>
);
