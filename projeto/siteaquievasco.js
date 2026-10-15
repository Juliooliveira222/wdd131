document.addEventListener('DOMContentLoaded', () => {

    const hamburguerBtn = document.getElementById('hamburguerBtn');
    const navMenu = document.getElementById('navMenu');
    const linksDoMenu = document.querySelectorAll('nav a');
    const botaoTopo = document.getElementById('btnTopo');
    const anoAtual = document.getElementById('anoatual');
    const ultimaModificacao = document.getElementById('ultimaModificacao');

    if (hamburguerBtn && navMenu) {
        hamburguerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    linksDoMenu.forEach(link => {
        link.addEventListener('click', function (event) {

            const destinoId = this.getAttribute('href');

            if (destinoId && destinoId.startsWith('#')) {

                event.preventDefault();

                const secaoDestino = document.querySelector(destinoId);

                if (secaoDestino) {
                    secaoDestino.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }

            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    if (botaoTopo) {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 300) {
                botaoTopo.style.display = 'block';
            } else {
                botaoTopo.style.display = 'none';
            }

        });

        botaoTopo.addEventListener('click', () => {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        });
    }

    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }

    if (ultimaModificacao) {
        ultimaModificacao.textContent =
            `Última atualização: ${document.lastModified}`;
    }

});

const imagensGaleria = document.querySelectorAll('.item-galeria img');
const modal = document.getElementById('modalImagem');
const imagemAmpliada = document.getElementById('imagemAmpliada');
const legendaModal = document.getElementById('legendaModal');
const fecharModal = document.querySelector('.fechar');

if (imagensGaleria.length > 0) {

    imagensGaleria.forEach(imagem => {

        imagem.addEventListener('click', () => {

            modal.style.display = 'flex';

            imagemAmpliada.src = imagem.src;
            imagemAmpliada.alt = imagem.alt;

            legendaModal.textContent = imagem.alt;

        });

    });

}

if (fecharModal) {

    fecharModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

}

if (modal) {

    modal.addEventListener('click', (e) => {

        if (e.target === modal) {
            modal.style.display = 'none';
        }

    });

}

document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape' && modal) {
        modal.style.display = 'none';
    }

});
