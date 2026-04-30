import React, { useState } from 'react'; // Import React, useState (Pertemuan 10: State, Hooks)

function CounterProduksi({ kota = 'Jakarta' }) { // Komponen untuk menghitung produksi dengan emergency stop (Latihan 2: Conditional Rendering)
  // State untuk jumlah produksi (Pertemuan 10: useState)
  const [jumlah, setJumlah] = useState(0); // Counter produksi awal 0
  
  // State untuk target harian (Pertemuan 10: useState)
  const [target, setTarget] = useState(100); // Target default 100 unit
  
  // State untuk nama kota (Pertemuan 10: useState) - menggunakan props dari parent
  const [kotaState, setKotaState] = useState(kota); // State kota dengan default value dari props
  
  // State untuk status mesin (Latihan 2: Emergency Stop)
  const [status, setStatus] = useState('NORMAL'); // Status: NORMAL atau EMERGENCY

  // Fungsi menambah produksi (hanya jika status NORMAL) (Pertemuan 5: Function)
  const tambahProduksi = () => {
    if (status === 'NORMAL') { // Pertemuan 4: Control Flow (if statement)
      setJumlah(jumlah + 1); // Tambah 1 unit
    }
  };

  // Fungsi reset counter (Pertemuan 5: Function)
  const reset = () => {
    setJumlah(0); // Reset ke 0
    setStatus('NORMAL'); // Reset status ke NORMAL
  };

  // Fungsi emergency stop (Latihan 2: Conditional Rendering)
  const emergencyStop = () => {
    setStatus('EMERGENCY'); // Ubah status ke EMERGENCY
  };

  return (
    <div className="card shadow-sm p-4 mb-3"> {/* Card Bootstrap dengan padding */}
      <div className="card-body text-center">
        <h3 className="card-title">Simulasi Hitung Produk</h3>
        
        {/* Display angka produksi dengan ukuran besar */}
        <div className="display-3 fw-bold mb-2">{jumlah}</div> {/* Menampilkan jumlah produksi */}
        
        <p className="text-muted">Target Harian: {target} Unit</p> {/* Menampilkan target */}

        {/* Conditional Rendering: Pesan berdasarkan status (Pertemuan 10: Conditional Rendering) */}
        {status === 'EMERGENCY' ? (
          // Jika status EMERGENCY, tampilkan pesan merah (Latihan 2)
          <div className="alert alert-danger fw-bold">
            EMERGENCY STOP AKTIF - Produksi Terhenti!
          </div>
        ) : jumlah >= target ? (
          // Jika jumlah >= target, tampilkan pesan sukses
          <div className="alert alert-success fw-bold">
            Target Tercapai! ({jumlah}/{target} Unit)
          </div>
        ) : (
          // Default: pesan produksi berjalan
          <div className="alert alert-secondary">
            Produksi Berjalan... ({jumlah}/{target} Unit)
          </div>
        )}

        {/* Buttons untuk kontrol (Pertemuan 6: Event Handling) */}
        <div className="mt-3 d-flex gap-2 justify-content-center flex-wrap">
          {/* Tombol +1 Unit - disabled jika emergency stop aktif (Latihan 2) */}
          <button
            className="btn btn-success btn-lg"
            onClick={tambahProduksi}
            disabled={status === 'EMERGENCY'} // Disabled saat EMERGENCY (Latihan 2)
          >
            +1 Unit
          </button>

          {/* Tombol Reset */}
          <button className="btn btn-warning btn-lg" onClick={reset}>
            Reset Shift
          </button>

          {/* Tombol Emergency Stop (Latihan 2: Conditional Rendering) */}
          <button
            className="btn btn-danger btn-lg"
            onClick={emergencyStop}
            disabled={status === 'EMERGENCY'} // Disabled jika sudah dalam status EMERGENCY
          >
            Emergency Stop
          </button>
        </div>

{/* Informasi status tambahan (Latihan 2) */}
        <div className="mt-3">
          <small className="text-muted">
            Kota: <strong>{kota}</strong> | Status Mesin: <strong className={status === 'EMERGENCY' ? 'text-danger' : 'text-success'}>
              {status}
            </strong>
          </small>
        </div>
      </div>
    </div>
  );
}

export default CounterProduksi; // Export komponen (Pertemuan 9: Export)
