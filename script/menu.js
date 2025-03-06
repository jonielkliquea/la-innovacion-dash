const haveMenu = document.getElementById('menu-bar');

function showMenu() {
    if (!haveMenu) {
        const menuBarcontainer = document.getElementById('menu-container');
        menuBarcontainer.innerHTML = `
            <div class="menu-bar" id="menu-bar">
                <span class="material-icons main-menu-icon" id="menu-icon">menu</span>
                <div class="menu-items" id="menu-items" style="display: none;">
                    <a class="menu-item" href="../dashboard.html">
                        <span class="material-icons">dashboard</span>
                        <span class="item-label">Dashboard</span>
                    </a>
                    <a class="menu-item" href="../cashback.html">
                        <span class="material-icons">monetization_on</span>
                        <span class="item-label">CashBack</span>
                    </a>
                    <a class="menu-item" href="../new.html">
                        <span class="material-icons">new_releases</span>
                        <span class="item-label">Nuevos</span>
                    </a>
                    <a class="menu-item" href="../offert-icon.html">
                        <span class="material-icons">local_offer</span>
                        <span class="item-label">Ofertas</span>
                    </a>
                    <!-- <a class="menu-item" href="../onlyon-local.html">
                        <span class="material-icons">store</span>
                        <span class="item-label">Tienda Física</span>
                    </a> -->
                    <a class="menu-item" href="../tools/qr-code.html">
                       <span class="material-icons">qr_code</span>
                        <span class="item-label">Generar QR</span>
                    </a>
                   <a class="menu-item" href="../tools/imagen-converter.html">
                       <span class="material-icons">image</span>
                       <span class="item-label">Web to JPEG</span>
                   </a>
                </div>

                </div>
            </div>`;

        const menuIcon = document.getElementById('menu-icon');
        const menuItems = document.getElementById('menu-items');


        menuIcon.addEventListener('click', () => {
            menuItems.style.display = menuItems.style.display === 'none' ? 'block' : 'none';
        });
    }
}


showMenu();


function footer() {

    const body = document.querySelector('body');


    const footerContainer = document.createElement('footer');
    footerContainer.classList.add('bg-dark', 'text-light', 'text-center', 'py-4', 'footer');


    footerContainer.innerHTML = `
        <div class="container mt-4">
            <p class="mb-1 fs-9">Joniel Martinez © All Rights Reserved 2024</p>
            <p class="mb-1 fs-9">Teléfono: <a href="tel:+18298637111" class="text-light">829-863-7111</a></p>
            <p class="mb-1 fs-9">Correo: <a href="mailto:ventasjmfotos@gmail.com" class="text-light">ventasjmfotos@gmail.com</a></p>
            <div class="mt-2">
                <a href="https://wa.me/18298637111" target="_blank" class="text-light me-3">
                <i class="material-icons fs-3" style="color: white;">chat</i>
                </a>
                <a href="mailto:ventasjmfotos@gmail.com" class="text-light">
                <i class="material-icons fs-3" style="color: white;">email</i>
                </a>
            </div>
        </div>
    `;


    body.appendChild(footerContainer);
}

footer();