const content = document.getElementById('content');

content.innerHTML = `
<div class="container px-4">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3 animate__animated animate__fadeInDown" style="margin-top: 10px;">
        <h1 style="font-size: 70px;"><b>Digitalisasi</b> Segala<br> Pencatatan Iuran</h1>
        <p style="font-size: 15px;">Media untuk menulis setiap iuran yang ditulis oleh pengelola melalui
          platform Pendataan digital guna meningkatkan efisiensi pendataan.
        </p>

        <div class="d-flex gap-3 mt-5">
          <button class="text-decoration-none btn btn-light btn-lg rounded-5 text-white" style="padding: 20px 40px; background: #2563EB;" onclick="getStarted()">Get started</button>
          <div class="d-flex gap-0">
            <button id="btnLink" class="rounded-circle btn btn-light text-white" style="height: 60px; width: 60px; background: #1A202C;" onclick="navigator.clipboard.writeText('https://rumah-pay.vercel.app/'); validationCopy()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
              </svg>
            </button>
            <a href="/src/page/guide.html">
            <button class="rounded-circle btn btn-light text-white" style="height: 60px; width: 60px; background: #1A202C;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
                <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
              </svg>            
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="p-3">
        <img src="/src/assets/images/peopleWrite.jpg" class="img-fluid rounded-5 animate__animated animate__fadeInDown" alt="...">
      </div>
      
      <div class="d-flex justify-content-center mt-4" style="gap: 90px;">
        <div class="container text-center">
          <div class="row row-cols-4">
            <div class="col animate__animated animate__fadeInDown">
              <h2>2026</h2>
              <p>Project done</p>
            </div>

            <div class="col animate__animated animate__fadeInDown">
              <h2>3</h2>
              <p>Developer</p>
            </div>

            <div class="col animate__animated animate__fadeInDown">
              <h2>3+</h2>
              <p>Lives Impacted</p>
            </div>

            <div class="col animate__animated animate__fadeInDown">
              <h2>Wikrama</h2>
              <p>Development Place</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container text-center" style="margin-top: 5%;">
  <div class="row">
    <div class="col">
      <div class="card card1 border border-0 text-white animate__animated animate__fadeInDown rounded-5" style="width: 100%; padding: 60px 30px; background: #1A202C;">
  <div class="card-body">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-database-fill" viewBox="0 0 16 16">
      <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223"/>
      <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
      <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
      <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
    </svg>

    <h3 class="card-subtitle mb-2 mt-4">Efisiensi Data</h3>
    <p class="card-text">Tinggalkan cara lama dengan buku kas manual. Catat semua iuran warga secara digital dengan sistem yang rapi dan terstruktur.</p>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card card2 border border-0 text-white animate__animated animate__fadeInDown rounded-5" style="width: 100%; padding: 60px 30px; background: #1A202C;">
  <div class="card-body">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"/>
    </svg>    
    
    <h3 class="card-subtitle mb-2 mt-4">Cloud Based</h3>
    <p class="card-text">Pantau semua laporan keuangan di lingkungan anda kapan saja dan di mana saja hanya melalui smartphone atau laptop Anda.</p>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card card3 border border-0 text-white animate__animated animate__fadeInDown rounded-5" style="width: 100%; padding: 60px 30px; background: #1A202C;">
  <div class="card-body">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
    </svg>

    <h3 class="card-subtitle mb-2 mt-4">Local Storage System</h3>
    <p class="card-text">Nikmati akses data super cepat tanpa bergantung pada koneksi internet server. Semua data iuran tersimpan secara privat di perangkat Anda</p>
  </div>
</div>
    </div>
  </div>
</div>
`;

function getStarted() {
  window.location.href = '/src/page/admin.html';
}

function validationCopy() {
  alert('Link berhasil disalin!')
}