import React, { useState } from 'react'; // Import React dan useState hook untuk state management (Pertemuan 10: State, Hooks, Conditional Rendering) - Hook untuk menyimpan state pencarian
import KartuMesin from './kartumesin'; // Import komponen KartuMesin (Pertemuan 9: React.js Component, JSX, Props) - Komponen untuk menampilkan kartu mesin
import KartuKaryawan from './KartuKaryawan'; // Import komponen KartuKaryawan - Komponen untuk menampilkan kartu karyawan
import JamDigital from './JamDigital'; // Import komponen JamDigital (Latihan 1: useEffect Dependency Array)
import CounterProduksi from './CounterProduksi'; // Import komponen CounterProduksi (Latihan 2: Conditional Rendering & Emergency Stop)
import KalkulatorOEE from './KalkulatorOEE'; // Import komponen KalkulatorOEE (Tugas Proyek Mini)

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
  // State untuk pencarian (Pertemuan 10: useState) - State untuk menyimpan input pencarian
  const [search, setSearch] = useState('');

  // Filter data mesin berdasarkan input search (Pertemuan 10: Conditional Rendering) - Logika filter menggunakan array method
  const filteredMesin = mesinData.filter((mesin) =>
    [mesin.nama, mesin.status].some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  // Filter data karyawan berdasarkan input search - Filter serupa untuk data karyawan
  const filteredKaryawan = karyawanData.filter((karyawan) =>
    [karyawan.nama, karyawan.jabatan, karyawan.bagian].some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="container"> {/* Container Bootstrap untuk layout responsif (Pertemuan 3: Bootstrap) - Wrapper utama dengan grid system */}
      <header> {/* Semantic HTML: header untuk judul dan deskripsi (Pertemuan 1: HTML Dasar) - Elemen semantik untuk header */}
        <h1 className="text-center">Monitoring Lini Produksi A</h1> {/* Heading HTML (Pertemuan 1) - Judul utama aplikasi */}
        <p className="intro text-center">
          Ringkasan status mesin dan informasi karyawan untuk mendukung operasional pabrik.
        </p>
        <div className="search-row"> {/* Div untuk pencarian (Pertemuan 7: Form Validation) - Container untuk input search */}
          <input
            type="search" // Input type search untuk pencarian (Pertemuan 7) - Type input khusus untuk search
            className="search-input" // Class CSS untuk styling (Pertemuan 2: CSS Dasar) - Styling dari style.css
            placeholder="Cari mesin, status, atau karyawan..." // Placeholder untuk UX (Pertemuan 2) - Petunjuk untuk user
            value={search} // Controlled input dengan state (Pertemuan 10) - Value terikat dengan state
            onChange={(event) => setSearch(event.target.value)} // Event handler (Pertemuan 6: DOM Manipulation) - Handler untuk perubahan input
          />
        </div>
      </header>

      {/* Section: Latihan 1 - JamDigital dengan useEffect Dependency Array */}
      <section className="section mb-4">
        <h2 className="section-title">⏰ Latihan 1: Jam Digital (useEffect Dependency Array)</h2>
        <JamDigital />
      </section>

      {/* Section: Latihan 2 - CounterProduksi dengan Emergency Stop */}
      <section className="section mb-4">
        <h2 className="section-title">📊 Latihan 2: Counter Produksi (Conditional Rendering & Emergency Stop)</h2>
        <CounterProduksi />
      </section>

      {/* Section: Tugas Proyek Mini - Kalkulator OEE */}
      <section className="section mb-4">
        <h2 className="section-title">📈 Tugas Proyek Mini: Kalkulator OEE Sederhana</h2>
        <KalkulatorOEE />
      </section>

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
