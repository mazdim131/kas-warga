const navbar = document.getElementById("navbar");
navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div class="container-sm">
            <a class="navbar-brand fw-bold" href="/index.html" style="font-size: 20px;">KasWarga</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/index.html" style="font-size: 15px;">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/src/page/about.html" style="font-size: 15px;">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/src/page/contact.html" style="font-size: 15px;">Contact</a>
                    </li>
                </ul>

                <div class="d-flex gap-2">
                    <a href="/src/page/guide.html" class="btn btn-light rounded-5 btn-lg">Guide</a>
                </div>
            </div>
        </div>
    </nav>
`