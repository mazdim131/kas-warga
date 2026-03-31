const content = document.getElementById('content');
content.innerHTML = `
    <video autoplay muted loop playsinline id="myVideo" style="position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; z-index: -1;">
        <source src="/src/assets/videos/bgWhite.mp4" type="video/mp4">
        Video Error!
    </video>

            <div class="container-sm fade animate__animated animate__fadeInDown">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-white">
                        <h1 class="text-white" style="margin-top: 15%;">Contact Us</h1>
                        <p class="text-white">Jika and memiliki pertanyaan atau ingin memberikan saran, anda bisa menghubungi kami
                        melewati email dan nomor telepon yang tertera, saran dan masukan anda merupakan penyemangat kami untuk
                        mengembangkan platform ini!</p>

                        <div class="d-flex align-items-start mb-3">
                            <div class="me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </div>
                            <div>
                                <h6 class="mb-0 fw-bold">Phone</h6>
                                <p class="mb-0 text-white-50">+62 857 1027 6264</p>
                            </div>
                        </div>

                        <div class="d-flex align-items-start mb-3">
                            <div class="me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                            </div>
                            <div>
                                <h6 class="mb-0 fw-bold">Email</h6>
                                <p class="mb-0 text-white-50">mazdimdimashs@gmail.com</p>
                            </div>
                        </div>

                        <div class="d-flex align-items-start mb-3">
                            <div class="me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                            </div>
                            <div>
                                <h6 class="mb-0 fw-bold">Location</h6>
                                <p class="mb-0 text-white-50">Jl. Wangun Tajur, Kec. Sindang Sari<br>Kab. Bogor, Jawa
                                    Barat</p>
                            </div>
                        </div>

                        <div class="d-flex align-items-start mb-3">
                            <div class="me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    class="bi bi-clock-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                </svg>
                            </div>
                            <div>
                                <h6 class="mb-0 fw-bold">Open Hours</h6>
                                <p class="mb-0 text-white-50">Senin - Jum'at: 08.00 - 12.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
`
