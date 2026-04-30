import React, { useState, useEffect } from 'react'; // Import React, useState, useEffect (Pertemuan 10: State, Hooks)

function JamDigital({ kota = 'Yogykarta' }) { // Komponen untuk menampilkan jam digital dengan kota (Latihan 1: useEffect Dependency Array)
  // State untuk waktu (Pertemuan 10: useState)
  const [waktu, setWaktu] = useState(new Date()); // State waktu yang update setiap detik
  
  // State untuk nama kota (Pertemuan 10: useState) - menggunakan props dari parent
  const [kotaState, setKotaState] = useState(kota); // State kota dengan default value dari props

  // useEffect untuk update waktu setiap detik (Pertemuan 10: useEffect)
  useEffect(() => {
    // Membuat interval timer yang update setiap 1 detik
    const timerID = setInterval(() => {
      setWaktu(new Date()); // Update state waktu dengan waktu terbaru
    }, 1000);

    // Cleanup function: Dijalankan saat komponen dihapus untuk mencegah memory leak
    return () => {
      clearInterval(timerID); // Stop interval saat komponen unmount
    };
  }, []); // Array kosong [] artinya useEffect hanya dijalankan sekali saat komponen mount

  // useEffect untuk mengubah document.title berdasarkan nama kota (Latihan 1: Dependency Array)
  useEffect(() => {
    // Mengubah title browser sesuai nama kota yang diinput
    document.title = `Jam ${kota}`; // Title akan berubah saat state kota berubah
    
    return () => {
      document.title = 'Sistem Industri | Monitoring Produksi'; // Restore title saat cleanup
    };
  }, [kota]); // Dependency array: useEffect hanya dijalankan saat kota berubah

  return (
    <div className="card shadow-sm p-4 mb-3 bg-info text-white"> {/* Card dengan styling Bootstrap */}
      <div className="card-body">
        <h4 className="card-title">Jam Sistem Server</h4>

        {/* Input untuk memasukkan nama kota (Latihan 1) */}
        <div className="mb-3">
          <label className="form-label">Nama Kota:</label>
          <input
            type="text"
            className="form-control"
            value={kota}
            onChange={(e) => setKota(e.target.value)} // Update state kota saat input berubah (Pertemuan 6: Event Handling)
            placeholder="Masukkan nama kota..."
          />
        </div>

        {/* Menampilkan jam digital */}
        <h1 className="display-4 text-center">{waktu.toLocaleTimeString()}</h1> {/* Jam dalam format HH:MM:SS */}
        
        {/* Menampilkan tanggal dan kota */}
        <p className="text-center mb-0">
          <strong>{waktu.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
          <br />
          Kota: <strong>{kota}</strong>
        </p>
      </div>
    </div>
  );
}

export default JamDigital; // Export komponen (Pertemuan 9: Export)
