const content = document.getElementById('content');
content.innerHTML = `
    <div class="d-flex justify-content-center animate__animated animate__fadeInDown gap-1" style="margin-top: 10%;">
        <a href="#ourTeam" class="text-decoration-none">
            <img src="/src/assets/images/profilDimas.png" class="img-thumbnail rounded-circle" alt="..." style="height: 60px;">
            <img src="/src/assets/images/profilAdara.png" class="img-thumbnail rounded-circle" alt="..." style="height: 60px;">
            <img src="/src/assets/images/profilHaidar.png" class="img-thumbnail rounded-circle" alt="..." style="height: 60px;">
        <a class="mt-3 text-decoration-none text-black">Lihat<br> Pengembangan</a>
        </a>
    </div>

    <div class="text-center animate__animated animate__fadeInDown">
        <h1 class="title" style="font-size: 80px;">ABOUT US</h1>
        <p class="subTitle" style="font-size: 14px;">Satu dasbord terpadu untuk transparansi dana sosial. Seluruh transaksi penggalangan <br> dana tercatat secara otomatis dan dapat dipantau oleh semua anggota secara real-time.</p>
    </div>

    <div class="container d-flex justify-content-center animate__animated animate__fadeInDown" style="margin-top: 10%;">
    <div class="row">
        <div class="col">
            <div class="card border border-0 rounded-5 text-white" style="width: 100%; background-color: #1A202C; padding: 30px 50px;">
            <div class="card-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
                </svg>
                <h2 class="mt-3">Sumbangan</h2>
                <p class="card-text">Kelola penggalangan donasi sukarela dengan sistem pencatatan yang transparan dan real-time.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card border border-0 rounded-5 text-white" style="width: 100%; background-color: #1A202C; padding: 30px 50px;">
            <div class="card-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-calendar-event-fill" viewBox="0 0 16 16">
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
                </svg>
                <h2 class="mt-3">Iuran</h2>
                <p class="card-text">Kelola penggalangan dana sosial sukarela dengan sistem pencatatan yang transparan dan real-time.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card border border-0 rounded-5 text-white" style="width: 100%; background-color: #1A202C; padding: 30px 50px;">
            <div class="card-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cake2-fill" viewBox="0 0 16 16">
                    <path d="m2.899.804.595-.792.598.79A.747.747 0 0 1 4 1.806v4.886q-.532-.09-1-.201V1.813a.747.747 0 0 1-.1-1.01ZM13 1.806v4.685a15 15 0 0 1-1 .201v-4.88a.747.747 0 0 1-.1-1.007l.595-.792.598.79A.746.746 0 0 1 13 1.806m-3 0a.746.746 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v5.17q.512-.02 1-.055zm-3 0v5.176q-.512-.018-1-.054V1.813a.747.747 0 0 1-.1-1.01l.595-.79.598.789A.747.747 0 0 1 7 1.806"/>
                    <path d="M4.5 6.988V4.226a23 23 0 0 1 1-.114V7.16c0 .131.101.24.232.25l.231.017q.498.037 1.02.055l.258.01a.25.25 0 0 0 .26-.25V4.003a29 29 0 0 1 1 0V7.24a.25.25 0 0 0 .258.25l.259-.009q.52-.018 1.019-.055l.231-.017a.25.25 0 0 0 .232-.25V4.112q.518.047 1 .114v2.762a.25.25 0 0 0 .292.246l.291-.049q.547-.091 1.033-.208l.192-.046a.25.25 0 0 0 .192-.243V4.621c.672.184 1.251.409 1.677.678.415.261.823.655.823 1.2V13.5c0 .546-.408.94-.823 1.201-.44.278-1.043.51-1.745.696-1.41.376-3.33.603-5.432.603s-4.022-.227-5.432-.603c-.702-.187-1.305-.418-1.745-.696C.408 14.44 0 14.046 0 13.5v-7c0-.546.408-.94.823-1.201.426-.269 1.005-.494 1.677-.678v2.067c0 .116.08.216.192.243l.192.046q.486.116 1.033.208l.292.05a.25.25 0 0 0 .291-.247M1 8.82v1.659a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426V8.833l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277z"/>
                </svg>
                <h2 class="mt-3">Event</h2>
                <p class="card-text">Kelola penggalangan dana untuk event dengan sistem pencatatan yang transparan dan real-time.</p>
            </div>
        </div>
        </div>
    </div>
    </div>

    <div class="text-center" style="margin-top: 20%;">
        <a id="ourTeam"></a>
        <h1 class="title" style="font-size: 80px;">OUR TEAM</h1>

        <div class="container text-center" style="margin-top: 5%;">
            <div class="row">
                <div class="col">
                    <div class="" style="width: 100%; padding: 30px 60px;">
  <img src="/src/assets/images/profilDimas.png" class="card-img-top rounded-4" alt="foto profil dimas">
  <div class="card-body">
    <h2 class="card-title mt-4">Dimas Hadi Syandana</h2>
    <p class="card-text" style="font-size: 14px;">Fullstack, Projeck management</p>
  </div>
</div>
                </div>
                <div class="col">
                    <div class="" style="width: 100%; padding: 30px 60px;">
  <img src="/src/assets/images/profilAdara.png" class="card-img-top rounded-4" alt="foto profil adara">
  <div class="card-body">
    <h2 class="card-title mt-4">Adara Nisha Qanita</h2>
    <p class="card-text" style="font-size: 14px;">UI & UX, Assistant Developer</p>
  </div>
</div>
                </div>
                <div class="col">
                    <div class="" style="width: 100%; padding: 30px 60px;">
  <img src="/src/assets/images/profilHaidar.png" class="card-img-top rounded-4" alt="foto profil haidar">
  <div class="card-body">
    <h2 class="card-title mt-4">Muhamad Haidar Ali Irawan</h2>
    <p class="card-text" style="font-size: 14px;">Front-End, Assistant Developer</p>
  </div>
</div>
                </div>
            </div>
        </div>
    </div>
`
