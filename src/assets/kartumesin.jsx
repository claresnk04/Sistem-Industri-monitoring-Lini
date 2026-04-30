import React, { useState } from 'react'; // Import React dan useState untuk local state (Pertemuan 10: State, Hooks)

function KartuMesin({ nama, status, produksi = 0 }) { // Komponen fungsi dengan destructuring props dan default props (Pertemuan 9) - Props dengan nilai default untuk produksi
  const [statusLokal, setStatusLokal] = useState(status); // State lokal untuk status agar dapat diedit (Pertemuan 10: useState)

  // Logika conditional untuk menentukan warna badge berdasarkan status lokal (Pertemuan 4: JavaScript Dasar - Control Flow)
  const badgeColor = statusLokal === 'Running'
    ? 'bg-success' // Warna hijau untuk status Running
    : statusLokal === 'Stop'
    ? 'bg-danger' // Warna merah untuk status Stop
    : statusLokal === 'Maintenance'
    ? 'bg-warning' // Warna kuning untuk status Maintenance
    : 'bg-secondary'; // Default abu-abu jika status lain

  return (
    <div className="card shadow-sm p-3 mb-3"> {/* Card Bootstrap dengan shadow (Pertemuan 3: Bootstrap) - Komponen card dengan efek shadow */}
      <div className="card-body"> {/* Body card Bootstrap (Pertemuan 3) - Container isi card */}
        <div className="title-wrapper">
          <h5 className="card-title">{nama}</h5> {/* Judul card dengan props nama (Pertemuan 9) - Menampilkan nama mesin dari props */}
        </div>
        <div className="status-wrapper">
          <span className={`badge ${badgeColor}`}>{statusLokal}</span> {/* Badge dengan conditional class (Pertemuan 10: Conditional Rendering) */}
        </div>

        <div className="mb-3"> {/* Form select untuk mengubah status lokal (Pertemuan 10: State dan Controlled Input) */}
          <label className="form-label">Status Mesin:</label>
          <select
            className="form-select"
            value={statusLokal}
            onChange={(e) => setStatusLokal(e.target.value)}
          >
            <option value="Running">Running</option>
            <option value="Stop">Stop</option>
            <option value="Maintenance">Maintenance</option>
          </select>
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
