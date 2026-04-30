import React from 'react'; // Import React untuk JSX (Pertemuan 9) - Komponen utama
import KartuMesin from './kartumesin'; // Import komponen KartuMesin (Pertemuan 9: React.js Component, JSX, Props)
import KartuKaryawan from './KartuKaryawan'; // Import komponen KartuKaryawan
import CounterProduksi from './CounterProduksi'; // Import komponen CounterProduksi (Praktik E1)
import JamDigital from './JamDigital'; // Import komponen JamDigital (Praktik E2)
import KalkulatorOEE from './KalkulatorOEE'; // Import komponen KalkulatorOEE

// Data mock untuk mesin produksi (Pertemuan 9: Props) - Array objek sebagai data statis untuk demonstrasi
const mesinData = [
  { nama: 'CNC-Turning-01', status: 'Running', produksi: 150 },
  { nama: 'CNC-Milling-02', status: 'Maintenance', produksi: 0 },
  { nama: 'Press-Hydraulic-05', status: 'Stop', produksi: 85 },
];

// Data mock untuk karyawan (Pertemuan 9: Props) - Array objek untuk data karyawan
const karyawanData = [
  { nama: 'Ari Prakoso', jabatan: 'Manager', bagian: 'Produksi' },
  { nama: 'Sinta Dewi', jabatan: 'Operator', bagian: 'Lini A' },
  { nama: 'Dedi Susanto', jabatan: 'QC', bagian: 'Kontrol Kualitas' },
];

function App() { // Komponen utama App (Pertemuan 9) - Fungsi komponen React
  const filteredMesin = mesinData; // Menampilkan semua mesin tanpa pencarian
  const filteredKaryawan = karyawanData; // Menampilkan semua karyawan tanpa pencarian

  return (
    <div className="container"> {/* Container bootstrap-like untuk layout responsif */}
      <header className="hero"> {/* Bagian hero untuk nama mahasiswa */}
        <div className="hero-card">
          <p className="student-name">Nailah Azka Iftinah</p>
          <p className="student-nim">NIM 23051430026</p>
        </div>
      </header>

{/* Section: Praktik Jam Digital */}
      <section className="section mb-4">
        <div className="card practice-card border-0 mb-4">
          <div className="card-body p-4 text-center">
<h3 className="fw-semibold mb-3">Praktik 1 useState untuk Counter Produksi</h3>
<div className="practice-inner">
              <CounterProduksi kota="Jakarta" />
            </div>
          </div>
        </div>
      </section>

{/* Section: Praktik Counter Produksi */}
      <section className="section mb-4">
        <div className="card practice-card border-0 mb-4">
          <div className="card-body p-4">
            <h3 className="fw-semibold mb-3 text-center">Praktik 2 useEffect untuk Real-time Clock</h3>
<div className="practice-inner">
              <JamDigital kota="Yogykarta" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Praktik Kalkulator OEE */}
      <section className="section mb-4">
        <h2 className="section-title">Praktik Kalkulator OEE</h2>
        <KalkulatorOEE />
      </section>

      {/* Section: Monitoring Mesin */}
      <section className="section"> {/* Semantic HTML: section untuk grup komponen (Pertemuan 1) - Grouping untuk section mesin */}
        <h2 className="section-title">Monitoring Lini Produksi A</h2> {/* Heading untuk section (Pertemuan 1) - Subjudul untuk section */}
        <div className="row"> {/* Row Bootstrap untuk grid layout (Pertemuan 3) - Grid system Bootstrap */}
          {filteredMesin.length > 0 ? ( // Conditional rendering jika ada data (Pertemuan 10) - Render kondisional berdasarkan data
            filteredMesin.map((mesin) => ( // Mapping array untuk render komponen (Pertemuan 5: Array, Object) - Iterasi array untuk render
              <div key={mesin.nama} className="col-md-4"> {/* Key untuk list rendering, col untuk grid (Pertemuan 3) - Key unik untuk React, kolom grid */}
                <KartuMesin {...mesin} /> {/* Spread operator untuk props (Pertemuan 9) - Passing props dengan spread */}
              </div>
            ))
          ) : (
            <p className="empty-state">Tidak ada mesin yang cocok.</p> // Empty state (Pertemuan 10) - Pesan jika tidak ada data
          )}
        </div>
      </section>

      <section className="section"> {/* Semantic HTML: section untuk grup komponen (Pertemuan 1) - Grouping untuk section karyawan */}
        <h2 className="section-title">Kartu Karyawan</h2> {/* Heading untuk section (Pertemuan 1) - Subjudul untuk section */}
        <div className="row"> {/* Row Bootstrap untuk grid layout (Pertemuan 3) - Grid system Bootstrap */}
          {filteredKaryawan.length > 0 ? ( // Conditional rendering jika ada data (Pertemuan 10) - Render kondisional
            filteredKaryawan.map((karyawan) => ( // Mapping array untuk render komponen (Pertemuan 5) - Iterasi array
              <div key={karyawan.nama} className="col-md-4"> {/* Key untuk list rendering, col untuk grid (Pertemuan 3) - Key unik dan kolom grid */}
                <KartuKaryawan {...karyawan} /> {/* Spread operator untuk props (Pertemuan 9) - Passing props */}
              </div>
            ))
          ) : (
            <p className="empty-state">Tidak ada karyawan yang cocok.</p> // Empty state (Pertemuan 10) - Pesan empty state
          )}
        </div>
      </section>
    </div>
  );
}

export default App; // Export komponen untuk digunakan di main.jsx (Pertemuan 9) - Export default untuk import
