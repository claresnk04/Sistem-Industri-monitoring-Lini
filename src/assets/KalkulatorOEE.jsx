import React, { useState, useEffect } from 'react'; // Import React, useState, useEffect (Pertemuan 10)

function KalkulatorOEE() { // Komponen untuk menghitung OEE (Tugas Proyek Mini: Kalkulator OEE)
  // State untuk Plan Time (Pertemuan 10: useState)
  const [planTime, setPlanTime] = useState(397); // Plan Time dalam menit (contoh data)
  
  // State untuk Run Time (Waktu produksi aktual)
  const [runTime, setRunTime] = useState(188); // Run Time dalam menit
  
  // State untuk Total Parts (Total produk yang diproduksi)
  const [totalParts, setTotalParts] = useState(792); // Total parts
  
  // State untuk Good Parts (Produk yang lolos kualitas)
  const [goodParts, setGoodParts] = useState(650); // Good parts
  
  // State untuk hasil perhitungan OEE (Pertemuan 10: useState)
  const [oee, setOee] = useState(0); // Nilai OEE dalam persen
  const [availability, setAvailability] = useState(0); // Nilai Availability
  const [performance, setPerformance] = useState(0); // Nilai Performance
  const [quality, setQuality] = useState(0); // Nilai Quality

  // useEffect untuk menghitung OEE secara real-time (Latihan 2: useEffect)
  useEffect(() => {
    // Perhitungan Availability = Run Time / Plan Time (Pertemuan 10: Calculated State)
    const availabilityCalc = planTime > 0 ? (runTime / planTime) * 100 : 0;
    setAvailability(availabilityCalc);

    // Perhitungan Performance = Total Parts / (Run Time / ideal time per part)
    // Diasumsikan ideal time = 0.5 menit per part
    const idealTime = (totalParts * 0.5); // Waktu ideal untuk memproduksi total parts
    const performanceCalc = runTime > 0 ? (idealTime / runTime) * 100 : 0;
    setPerformance(performanceCalc);

    // Perhitungan Quality = Good Parts / Total Parts (Pertemuan 5: Function Logic)
    const qualityCalc = totalParts > 0 ? (goodParts / totalParts) * 100 : 0;
    setQuality(qualityCalc);

    // Perhitungan OEE = Availability x Performance x Quality / 10000
    // (Dibagi 10000 karena ketiga komponen dalam persen, maka persen x persen x persen)
    const oeeCalc = (availabilityCalc * performanceCalc * qualityCalc) / 10000;
    setOee(oeeCalc);
  }, [planTime, runTime, totalParts, goodParts]); // Dependency array: hitung ulang saat input berubah

  // Fungsi untuk menentukan warna status OEE (Pertemuan 4: Control Flow)
  const getOeeColor = () => {
    if (oee < 50) return 'text-danger'; // Merah jika OEE < 50% (Latihan 2: Conditional Rendering)
    if (oee < 85) return 'text-warning'; // Kuning jika 50% <= OEE < 85%
    return 'text-success'; // Hijau jika OEE >= 85% (Latihan 2)
  };

  // Fungsi untuk menentukan background color (Pertemuan 4: Conditional Logic)
  const getBackgroundColor = () => {
    if (oee < 50) return 'bg-danger-light'; // Background light red
    if (oee < 85) return 'bg-warning-light'; // Background light yellow
    return 'bg-success-light'; // Background light green
  };

  return (
    <div className="card shadow-sm p-4 mb-3 oee-card"> {/* Card Bootstrap */}
      <div className="card-body">
        <div className="oee-header">
          <h3 className="card-title mb-1">Kalkulator OEE</h3>
          <p className="text-muted">Overall Equipment Effectiveness dengan input produksi real-time.</p>
        </div>

        {/* Section: Input Form (Tugas Proyek Mini: a. Form input) */}
        <div className="oee-input-grid mb-4">
          <div className="oee-input-box">
            <label className="form-label"><strong>Plan Time (menit)</strong></label>
            <input
              type="number"
              className="form-control"
              value={planTime}
              onChange={(e) => setPlanTime(parseFloat(e.target.value))}
              placeholder="Masukkan plan time..."
            />
            <small className="text-muted">Waktu yang direncanakan untuk produksi</small>
          </div>

          <div className="oee-input-box">
            <label className="form-label"><strong>Run Time (menit)</strong></label>
            <input
              type="number"
              className="form-control"
              value={runTime}
              onChange={(e) => setRunTime(parseFloat(e.target.value))}
              placeholder="Masukkan run time..."
            />
            <small className="text-muted">Waktu produksi aktual</small>
          </div>

          <div className="oee-input-box">
            <label className="form-label"><strong>Total Parts (unit)</strong></label>
            <input
              type="number"
              className="form-control"
              value={totalParts}
              onChange={(e) => setTotalParts(parseFloat(e.target.value))}
              placeholder="Masukkan total parts..."
            />
            <small className="text-muted">Total produk yang diproduksi</small>
          </div>

          <div className="oee-input-box">
            <label className="form-label"><strong>Good Parts (unit)</strong></label>
            <input
              type="number"
              className="form-control"
              value={goodParts}
              onChange={(e) => setGoodParts(parseFloat(e.target.value))}
              placeholder="Masukkan good parts..."
            />
            <small className="text-muted">Produk yang lolos kualitas</small>
          </div>
        </div>

        {/* Section: Detail Perhitungan (Menampilkan komponen OEE) */}
        <hr />
        <h5 className="mb-3 text-center">Detail Perhitungan:</h5>

        <div className="oee-stat-grid">
          {/* Availability Card */}
          <div className="oee-stat-card border-info mb-3">
            <div className="card-body">
              <h6 className="card-title">Availability</h6>
              <p className="display-6 text-info text-center">{availability.toFixed(2)}%</p>
              <small className="text-muted d-block text-center">Run Time / Plan Time</small>
            </div>
          </div>

          {/* Performance Card */}
          <div className="oee-stat-card border-warning mb-3">
            <div className="card-body">
              <h6 className="card-title">Performance</h6>
              <p className="display-6 text-warning text-center">{performance.toFixed(2)}%</p>
              <small className="text-muted d-block text-center">Kecepatan produksi aktual</small>
            </div>
          </div>

          {/* Quality Card */}
          <div className="oee-stat-card border-success mb-3">
            <div className="card-body">
              <h6 className="card-title">Quality</h6>
              <p className="display-6 text-success text-center">{quality.toFixed(2)}%</p>
              <small className="text-muted d-block text-center">Good Parts / Total Parts</small>
            </div>
          </div>
        </div>

        {/* Section: Hasil OEE (Tugas Proyek Mini: c, d, e. Hitung dan tampilkan OEE) */}
        <hr />
        <div className={`alert ${getBackgroundColor()} border-2 text-center`}>
          <h4 className={`${getOeeColor()} fw-bold mb-2`}>
            Overall Equipment Effectiveness (OEE)
          </h4>
          <h1 className={`display-2 ${getOeeColor()} fw-bold`}>
            {oee.toFixed(2)}%
          </h1>
          
          {/* Status dan Rekomendasi (Pertemuan 10: Conditional Rendering) */}
          <p className="mt-2 oee-status-text">
            {oee < 50 ? (
              <span className="text-danger fw-bold">
                BURUK - Butuh perbaikan signifikan! <small className="text-muted">Target industri modern: &gt; 85%</small>
              </span>
            ) : oee < 85 ? (
              <span className="text-warning fw-bold">
                SEDANG - Ada ruang untuk peningkatan <small className="text-muted">Target: tingkatkan ke &gt; 85%</small>
              </span>
            ) : (
              <span className="text-success fw-bold">
                EXCELLENT - Performa mesin optimal! <small className="text-muted">Pertahankan tingkat efisiensi ini</small>
              </span>
            )}
          </p>

          {/* Formula (Tugas Proyek Mini: d. Rumus OEE) */}
          <hr />
          <p className="text-muted small mb-0">
            <strong>Rumus:</strong> OEE = (Availability × Performance × Quality) ÷ 10000<br />
            OEE = ({availability.toFixed(2)}% × {performance.toFixed(2)}% × {quality.toFixed(2)}%) ÷ 10000
          </p>
        </div>

        {/* Informasi Standar Industri */}
        <div className="mt-3">
          <small className="text-muted d-block">
            <strong>Standar Industri OEE:</strong><br />
            • 0-50%: Poor (Buruk)<br />
            • 50-85%: Acceptable (Sedang)<br />
            • &gt;85%: World Class (Sangat Baik)
          </small>
        </div>
      </div>
    </div>
  );
}

export default KalkulatorOEE; // Export komponen (Pertemuan 9: Export)
