import React from 'react';

function KartuMesin({ nama, status, produksi = 0 }) {
  const badgeColor = status === 'Running'
    ? 'bg-success'
    : status === 'Stop'
    ? 'bg-danger'
    : status === 'Maintenance'
    ? 'bg-warning'
    : 'bg-secondary';

  return (
    <div className="card shadow-sm p-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">{nama}</h5>
        <span className={`badge ${badgeColor}`}>{status}</span>
        <hr />
        <p>
          Produksi Saat Ini: <strong>{produksi}</strong> Unit
        </p>
      </div>
    </div>
  );
}

export default KartuMesin;
