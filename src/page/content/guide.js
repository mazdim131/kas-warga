const content = document.getElementById('content');
content.innerHTML = `
<video autoplay muted loop playsinline id="myVideo" style="position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; z-index: -1;">
        <source src="/src/assets/videos/bgWhite.mp4" type="video/mp4">
        Video Error!
    </video>

    <h1 class="text-white">Panduan Penggunaan KasWarga</h1>

    <h2 class="text-white">1. Memantau Ringkasan Kas</h2>
    <p class="text-white">Data Warga: Semua riwayat pembayaran akan muncul secara rapi di dalam tabel utama.</p>

    <h2 class="text-white">2. Mencari & Menyaring Data (Fitur Cerdas)</h2>
    <p class="text-white">Fitur Pencarian: Ketik nama warga pada kolom pencarian untuk menemukan data dengan cepat. Tabel akan otomatis menyaring hasil sesuai input Anda.</p>

    <h2 class="text-white">3. Mengelola Data (Khusus Admin)</h2>
    <p class="text-white">Tambah Data: Klik tombol "Get Started" untuk membuka formulir input. Masukkan nama, kegiatan, kategori, dan nominal untuk menambahkan transaksi baru.</p>

    <h2 class="text-white">4. Sinkronisasi Otomatis</h2>
    <p class="text-white">Setiap perubahan data akan langsung ter-update di Google Sheets, memastikan semua informasi selalu akurat dan real-time.</p>

    <h2 class="text-white">5. Keamanan Data</h2>
    <p class="text-white">Data Anda aman dengan sistem autentikasi yang kuat dan enkripsi untuk melindungi informasi sensitif.</p>

    <h2 class="text-white">6. Dukungan Pelanggan</h2>
    <p class="text-white">Jika Anda mengalami kesulitan atau memiliki pertanyaan, jangan ragu untuk menghubungi tim dukungan kami melalui halaman Contact.</p>
    `
