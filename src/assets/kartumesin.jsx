import React from 'react'; // Import React untuk JSX (Pertemuan 9: React.js Component, JSX, Props) - Library utama untuk komponen

function KartuMesin({ nama, status, produksi = 0 }) { // Komponen fungsi dengan destructuring props dan default props (Pertemuan 9) - Props dengan nilai default untuk produksi
  // Logika conditional untuk menentukan warna badge berdasarkan status (Pertemuan 4: JavaScript Dasar - Control Flow) - Ternary operator untuk logika kondisional
  const badgeColor = status === 'Running'
    ? 'bg-success' // Bootstrap class untuk hijau (Pertemuan 3: Bootstrap) - Class Bootstrap untuk warna hijau
    : status === 'Stop'
    ? 'bg-danger' // Bootstrap class untuk merah (Pertemuan 3) - Class Bootstrap untuk warna merah
    : status === 'Maintenance'
    ? 'bg-warning' // Bootstrap class untuk kuning (Pertemuan 3) - Class Bootstrap untuk warna kuning
    : 'bg-secondary'; // Default abu-abu (Pertemuan 3) - Class default jika status tidak cocok

  return (
    <div className="card shadow-sm p-3 mb-3"> {/* Card Bootstrap dengan shadow (Pertemuan 3: Bootstrap) - Komponen card dengan efek shadow */}
      <div className="card-body"> {/* Body card Bootstrap (Pertemuan 3) - Container isi card */}
        <div className="title-wrapper">
          <h5 className="card-title">{nama}</h5> {/* Judul card dengan props nama (Pertemuan 9) - Menampilkan nama mesin dari props */}
        </div>
        <div className="status-wrapper">
          <span className={`badge ${badgeColor}`}>{status}</span> {/* Badge dengan conditional class (Pertemuan 10: Conditional Rendering) - Badge dengan warna dinamis */}
        </div>
        <hr /> {/* Garis pemisah HTML (Pertemuan 1: HTML Dasar) - Elemen horizontal rule */}
        <div className="production-wrapper">
          <p> {/* Paragraf HTML (Pertemuan 1) - Elemen paragraf */}
            Produksi Saat Ini: <strong>{produksi}</strong> Unit {/* Strong untuk tebal, props produksi (Pertemuan 9) - Menampilkan produksi dengan format tebal */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default KartuMesin; // Export komponen untuk digunakan di App.jsx (Pertemuan 9) - Export default untuk import
