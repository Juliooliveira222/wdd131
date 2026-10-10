document.addEventListener('DOMContentLoaded', function () {
    const linksDoMenu = document.querySelectorAll('nav a');

    linksDoMenu.forEach(function (link) {
        link.addEventListener('click', function (event) {
            const destinoId = this.getAttribute('href');
            if (destinoId.startsWith('#')) {
                event.preventDefault();
                const secaoDestino = document.querySelector(destinoId);
                if (secaoDestino) {
                    secaoDestino.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    const botaoTopo = document.getElementById('btnTopo');
    if (botaoTopo) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                botaoTopo.style.display = 'block';
            } else {
                botaoTopo.style.display = 'none';
            }
        });

        botaoTopo.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
