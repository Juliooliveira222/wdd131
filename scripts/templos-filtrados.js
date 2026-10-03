document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('#menu');
  const nav = document.querySelector('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuBtn.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
  }

  const yearSpan = document.querySelector('#currentYear');
  const lastModSpan = document.querySelector('#lastModified');

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (lastModSpan) lastModSpan.textContent = `Última modificação: ${document.lastModified}`;
  const templos = [
    {
      nomeDoTemplo: "Aba Nigeria",
      localizacao: "Aba, Nigéria",
      consagracao: "2005, 7 de agosto",
      area: 11500,
      urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      nomeDoTemplo: "Manti Utah",
      localizacao: "Manti, Utah, Estados Unidos",
      consagracao: "1888, 21 de maio",
      area: 74792,
      urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      nomeDoTemplo: "Payson Utah",
      localizacao: "Payson, Utah, Estados Unidos",
      consagracao: "2015, 7 de junho",
      area: 96630,
      urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      nomeDoTemplo: "Yigo Guam",
      localizacao: "Yigo, Guam",
      consagracao: "2020, 2 de maio",
      area: 6861,
      urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      nomeDoTemplo: "Washington D.C.",
      localizacao: "Kensington, Maryland, Estados Unidos",
      consagracao: "1974, 19 de novembro",
      area: 156558,
      urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      nomeDoTemplo: "Lima Peru",
      localizacao: "Lima, Peru",
      consagracao: "1986, 10 de janeiro",
      area: 9600,
      urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      nomeDoTemplo: "Cidade do México, México",
      localizacao: "Cidade do México, México",
      consagracao: "1983, 2 de dezembro",
      area: 116642,
      urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      nomeDoTemplo: "Salt Lake City Utah",
      localizacao: "Salt Lake City, Utah, Estados Unidos",
      consagracao: "1893, 6 de abril",
      area: 253015,
      urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-75001.jpg"
    }, 
    {
      nomeDoTemplo: "Roma Itália",
      localizacao: "Roma, Itália",
      consagracao: "2019, 10 de março",
      area: 58000,
      urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642.jpg"
    },
    {
      nomeDoTemplo: "Tijuana México",
      localizacao: "Tijuana, México",
      consagracao: "2015, 18 de dezembro",
      area: 10000,
      urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-3660.jpg"
    }
  ];

  const containerGrid = document.querySelector('.res-grid');
  const tituloPagina = document.querySelector('main h1');

  function renderizarTemplos(lista) {
    if (!containerGrid) return;
    containerGrid.innerHTML = ''; 

    lista.forEach(templo => {
      const card = document.createElement('figure');
      card.classList.add('temple-card');

      card.innerHTML = `
        <h3>${templo.nomeDoTemplo}</h3>
        <p><span>Localização:</span> ${templo.localizacao}</p>
        <p><span>Consagração:</span> ${templo.consagracao}</p>
        <p><span>Área:</span> ${templo.area.toLocaleString('pt-BR')} sq ft</p>
        <img src="${templo.urlDaImagem}" alt="Templo de ${templo.nomeDoTemplo}" loading="lazy" width="400" height="250">
      `;

      containerGrid.appendChild(card);
    });
  }

  function obterAnoConsagracao(dataString) {
    const ano = dataString.split(',')[0].trim();
    return parseInt(ano, 10);
  }

  const linkAll = document.querySelector('#all');
  if (linkAll) {
    linkAll.addEventListener('click', (e) => {
      e.preventDefault();
      if (tituloPagina) tituloPagina.textContent = "Página Inicial";
      renderizarTemplos(templos);
    });
  }

  const linkOld = document.querySelector('#old');
  if (linkOld) {
    linkOld.addEventListener('click', (e) => {
      e.preventDefault();
      if (tituloPagina) tituloPagina.textContent = "Templos Antigos (Construídos antes de 1900)";
      const antigos = templos.filter(t => obterAnoConsagracao(t.consagracao) < 1900);
      renderizarTemplos(antigos);
    });
  }

  const linkNew = document.querySelector('#new');
  if (linkNew) {
    linkNew.addEventListener('click', (e) => {
      e.preventDefault();
      if (tituloPagina) tituloPagina.textContent = "Templos Novos (Construídos após 2000)";
      const novos = templos.filter(t => obterAnoConsagracao(t.consagracao) > 2000);
      renderizarTemplos(novos);
    });
  }

  const linkLarge = document.querySelector('#large');
  if (linkLarge) {
    linkLarge.addEventListener('click', (e) => {
      e.preventDefault();
      if (tituloPagina) tituloPagina.textContent = "Templos Grandes (Mais de 90.000 sq ft)";
      const grandes = templos.filter(t => t.area > 90000);
      renderizarTemplos(grandes);
    });
  }

  const linkSmall = document.querySelector('#small');
  if (linkSmall) {
    linkSmall.addEventListener('click', (e) => {
      e.preventDefault();
      if (tituloPagina) tituloPagina.textContent = "Templos Pequenos (Menos de 10.000 sq ft)";
      const pequenos = templos.filter(t => t.area <= 10000);
      renderizarTemplos(pequenos);
    });
  }

  renderizarTemplos(templos);
});