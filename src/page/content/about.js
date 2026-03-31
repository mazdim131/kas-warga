const content = document.getElementById('content');
content.innerHTML = `
    <video autoplay muted loop playsinline id="myVideo" style="position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; z-index: -1;">
        <source src="/src/assets/videos/bgWhite.mp4" type="video/mp4">
        Video Error!
    </video>

            <div class="d-flex justify-content-center fade animate__animated animate__fadeInDown" style="margin-top: 15%;">
                <a href="" class="d-flex text-decoration-none text-white gap-2">
                    <img src="/src/assets/images/profilDimas.png" alt="Profil Dimas" class="rounded-circle"
                        style="height: 50px;">
                    <img src="/src/assets/images/profilAdara.png" alt="Profil Adara" class="rounded-circle"
                        style="height: 50px;">
                    <img src="/src/assets/images/profilHaidar.png" alt="Profil Haidar" class="rounded-circle"
                        style="height: 50px;">
                    <p>Profil <br>Pengembang</p>
                </a>
            </div>

            <div class="container text-center mt-5 fade animate__animated animate__fadeInDown">
                <div class="row g-4 justify-content-center">
                    <div class="col-12 col-md-4">
                        <div class="card h-100 mx-auto text-start" style="width: 20rem;">
                            <div class="card-body">
                                <div class="mb-3 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                        class="bi bi-box-seam-fill text-white" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z" />
                                    </svg>
                                </div>
                                <h5 class="card-title mt-4">Sumbangan</h5>
                                <p class="card-text mt-4">Kelola penggalangan donasi sukarela dengan
                                    sistem pencatatan yang transparan dan real-time.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <div class="card h-100 mx-auto text-start" style="width: 20rem;">
                            <div class="card-body">
                                <div class="mb-3 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                        class="bi bi-calendar2-fill text-white" viewBox="0 0 16 16">
                                        <path
                                            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5" />
                                    </svg>
                                </div>
                                <h5 class="card-title mt-4">Iuran Bulanan</h5>
                                <p class="card-text mt-4">Kelola penggalangan dana sosial sukarela dengan
                                    sistem pencatatan yang transparan dan real-time.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <div class="card h-100 mx-auto text-start" style="width: 20rem;">
                            <div class="card-body">
                                <div class="mb-3 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cake-fill text-white" viewBox="0 0 16 16">
                                        <path d="m7.399.804.595-.792.598.79A.747.747 0 0 1 8.5 1.806V4H11a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-4a2 2 0 0 1 2-2h1V6a2 2 0 0 1 2-2h2.5V1.813a.747.747 0 0 1-.101-1.01ZM12 6.414a.9.9 0 0 1-.646-.268 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0A.9.9 0 0 1 4 6.414v1c.49 0 .98-.187 1.354-.56a.914.914 0 0 1 1.292 0c.748.747 1.96.747 2.708 0a.914.914 0 0 1 1.292 0c.374.373.864.56 1.354.56zm2.646 5.732a.914.914 0 0 1-1.293 0 1.914 1.914 0 0 0-2.707 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0L1 11.793v1.34c.737.452 1.715.36 2.354-.28a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.708 0a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.707 0a.914.914 0 0 1 1.293 0 1.915 1.915 0 0 0 2.354.28v-1.34z"/>
                                    </svg>
                                </div>
                                <h5 class="card-title mt-4">Event</h5>
                                <p class="card-text mt-4">Kelola penggalangan dana untuk event dengan sistem pencatatan yang transparan dan real-time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-center text-white" style="margin-top: 5%;">Satu dasbord terpadu untuk transparansi dana
                    sosial. Seluruh transaksi penggalangan dana tercatat secara otomatis dan dapat dipantau oleh semua anggota secara
                    real-time.</p>
            </div>
`
