import React from 'react'; // Import React untuk JSX (Pertemuan 9: React.js Component, JSX, Props) - Library utama untuk membuat komponen

function KartuKaryawan({ nama, jabatan, bagian }) { // Komponen fungsi dengan destructuring props (Pertemuan 9) - Parameter props di-destructure langsung
  return (
    <div className="card shadow-sm p-3 mb-3"> {/* Card Bootstrap dengan shadow (Pertemuan 3: Bootstrap) - Komponen card dengan efek shadow dan padding */}
      <div className="card-body"> {/* Body card Bootstrap (Pertemuan 3) - Container isi card */}
        <h5 className="card-title">{nama}</h5> {/* Judul card dengan props nama (Pertemuan 9) - Menampilkan nama karyawan dari props */}
        <p className="mb-1"> {/* Paragraf dengan margin bottom kecil (Pertemuan 2: CSS Dasar) - Styling margin untuk spacing */}
          <strong>Jabatan:</strong> {jabatan} {/* Strong untuk tebal, props jabatan (Pertemuan 9) - Menampilkan jabatan dengan format tebal */}
        </p>
        <p className="mb-0"> {/* Paragraf tanpa margin bottom (Pertemuan 2: CSS Dasar) - Margin 0 untuk spacing akhir */}
          <strong>Bagian:</strong> {bagian} {/* Strong untuk tebal, props bagian (Pertemuan 9) - Menampilkan bagian dengan format tebal */}
        </p>
      </div>
    </div>
  );
}

export default KartuKaryawan; // Export komponen untuk digunakan di App.jsx (Pertemuan 9) - Export default untuk import
