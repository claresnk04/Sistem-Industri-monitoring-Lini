// Fungsi setupCounter untuk membuat counter interaktif (Pertemuan 4: JavaScript Dasar)
export function setupCounter(element) { // Export function agar bisa diimport di file lain (Pertemuan 5: Function)
  let counter = 0 // Variabel counter dengan let (bisa diubah) (Pertemuan 4)
  const setCounter = (count) => { // Arrow function untuk update counter (Pertemuan 5)
    counter = count // Update nilai counter
    element.innerHTML = `Count is ${counter}` // Manipulasi DOM innerHTML (Pertemuan 6: DOM Manipulation)
  }
  element.addEventListener('click', () => setCounter(counter + 1)) // Event listener untuk klik (Pertemuan 6)
  setCounter(0) // Inisialisasi counter awal
}
