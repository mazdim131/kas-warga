const content = document.getElementById('content');

content.innerHTML = `
    <video autoplay muted loop playsinline id="myVideo"
        style="position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; z-index: -1;">
        <source src="/src/assets/videos/bgWhite.mp4" type="video/mp4">
        Video Error!
    </video>

    <div class="animate__animated animate__fadeInDown" style="margin-top: 7%;">
        <img src="/src/assets/images/fav.png" class="mx-auto justify-content-center d-flex" style="height: 50px;">
        <h1 class="text-white text-center title" style="font-size: 4rem; letter-spacing: 3px;">
                Digitalisasi Segala <br> Pencatatan Iuran
        </h1>
        <p class="text-white text-center mt-4" style="letter-spacing: 2px; font-size: 1rem;">
                Media untuk menulis setiap iuran yang ditulis oleh pengelola melalui <br> platform Pendataan digital guna meningkatkan efisiensi
                pendataan.
        </p>

        <div class="d-flex gap-3 mt-4 justify-content-center btnGetStarted">
            <a class="btn btn-light btn-lg" href="/src/page/admin.html">Get Started</a>
            <a class="btn btn-outline-light btn-lg" href="#video">Live Demo</a>
        </div>
    </div>

    <div class="container text-center">
        <div class="row grid justify-content-center" style="padding-top: 10%;">
            <div class="col-6 col-md-auto mb-4 icon">        
                <img src="/src/assets/images/iconBootstrap.png" class="animate__animated animate__fadeInDown" style="height: 200px;">
            </div>
            <div class="col-6 col-md-auto mb-4 icon">
                <img src="/src/assets/images/iconDribbble.png" class="animate__animated animate__fadeInDown" style="height: 200px;">
            </div>
            <div class="col-6 col-md-auto mb-4 icon">
                <img src="/src/assets/images/iconFigma.png" class="animate__animated animate__fadeInDown" style="height: 200px;">
            </div>
        </div>
    </div>

        <div class="modal fade" id="adminRegister" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="password" id="password" class="inputAdminRegister" placeholder="Masukkan password" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-light" onclick="btnAdminRegister()">Log in</button>
      </div>
    </div>
  </div>
</div>
`;