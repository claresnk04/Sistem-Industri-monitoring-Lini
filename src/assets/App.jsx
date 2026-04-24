import React, { useState } from 'react';
import KartuMesin from './kartumesin';
import KartuKaryawan from './KartuKaryawan';

const mesinData = [
  { nama: 'CNC-Turning-01', status: 'Running', produksi: 150 },
  { nama: 'CNC-Milling-02', status: 'Maintenance', produksi: 0 },
  { nama: 'Press-Hydraulic-05', status: 'Stop', produksi: 85 },
];

const karyawanData = [
  { nama: 'Ari Prakoso', jabatan: 'Manager', bagian: 'Produksi' },
  { nama: 'Sinta Dewi', jabatan: 'Operator', bagian: 'Lini A' },
  { nama: 'Dedi Susanto', jabatan: 'QC', bagian: 'Kontrol Kualitas' },
];

function App() {
  const [search, setSearch] = useState('');

  const filteredMesin = mesinData.filter((mesin) =>
    [mesin.nama, mesin.status].some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  const filteredKaryawan = karyawanData.filter((karyawan) =>
    [karyawan.nama, karyawan.jabatan, karyawan.bagian].some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="container">
      <header>
        <h1 className="text-center">Monitoring Lini Produksi A</h1>
        <p className="intro text-center">
          Ringkasan status mesin dan informasi karyawan untuk mendukung operasional pabrik.
        </p>
        <div className="search-row">
          <input
            type="search"
            className="search-input"
            placeholder="Cari mesin, status, atau karyawan..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </header>

      <section className="section">
        <h2 className="section-title">Status Mesin</h2>
        <div className="row">
          {filteredMesin.length > 0 ? (
            filteredMesin.map((mesin) => (
              <div key={mesin.nama} className="col-md-4">
                <KartuMesin {...mesin} />
              </div>
            ))
          ) : (
            <p className="empty-state">Tidak ada mesin yang cocok.</p>
          )}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Kartu Karyawan</h2>
        <div className="row">
          {filteredKaryawan.length > 0 ? (
            filteredKaryawan.map((karyawan) => (
              <div key={karyawan.nama} className="col-md-4">
                <KartuKaryawan {...karyawan} />
              </div>
            ))
          ) : (
            <p className="empty-state">Tidak ada karyawan yang cocok.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
