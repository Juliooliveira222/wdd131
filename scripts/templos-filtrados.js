
const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });
}

document.querySelector('#currentYear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Última modificação: ${document.lastModified}`;

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
  }
];

const containerGrid = document.querySelector('.res-grid');
const tituloPagina = document.querySelector('main h2');

function renderizarTemplos(lista) {
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
  const ano = dataString.split(',')[0];
  return parseInt(ano, 10);
}

document.querySelector('#all').addEventListener('click', (e) => {
  e.preventDefault();
  tituloPagina.textContent = "Página Inicial";
  renderizarTemplos(templos);
});

document.querySelector('#old').addEventListener('click', (e) => {
  e.preventDefault();
  tituloPagina.textContent = "Templos Antigos (Construídos antes de 1900)";
  const antigos = templos.filter(t => obterAnoConsagracao(t.consagracao) < 1900);
  renderizarTemplos(antigos);
});

document.querySelector('#new').addEventListener('click', (e) => {
  e.preventDefault();
  tituloPagina.textContent = "Templos Novos (Construídos após 2000)";
  const novos = templos.filter(t => obterAnoConsagracao(t.consagracao) > 2000);
  renderizarTemplos(novos);
});

document.querySelector('#large').addEventListener('click', (e) => {
  e.preventDefault();
  tituloPagina.textContent = "Templos Grandes (Mais de 90.000 sq ft)";
  const grandes = templos.filter(t => t.area > 90000);
  renderizarTemplos(grandes);
});

document.querySelector('#small').addEventListener('click', (e) => {
  e.preventDefault();
  tituloPagina.textContent = "Templos Pequenos (Menos de 10.000 sq ft)";
  const pequenos = templos.filter(t => t.area < 10000);
  renderizarTemplos(pequenos);
});

renderizarTemplos(templos);