const projetos = [
  {
    id: 1,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Festival MED (RUA)",
    mesAno: "Junho | 2023 - 2026",
    cargo: "Radialista",
    local: "Loulé",
    capa: "https://i.imgur.com/yr869TR.jpeg",
    resumo: "Cobertura radiofónica e acompanhamento dos concertos, entrevistas e bastidores do Festival MED na zona histórica de Loulé para a RUA FM.",
    links: [
      { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
    ],
    media: [
      { tipo: "foto", url: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80", titulo: "Estúdio" },
      { tipo: "foto", url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80", titulo: "Emissão" }
    ]
  },
  {
    id: 2,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Festival F (RUA)",
    mesAno: "Setembro | 2022 - 2026",
    cargo: "Radialista",
    local: "Faro",
    capa: "https://i.imgur.com/1LQ3hJW.jpeg",
    resumo: "Emissão em direto, entrevistas a artistas e acompanhamento contínuo no Vila Adentro da cidade de Faro para a RUA FM.",
    links: [
      { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
    ],
    media: [
      { tipo: "foto", url: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80", titulo: "Estúdio" },
      { tipo: "foto", url: "https://i.imgur.com/awy632I.jpeg", titulo: "Entrevista - Dino d'Santiago (2025)" }
    ]
  },
  {
    id: 3,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#semanaacademica #radio",
    titulo: "Semana Académica do Algarve (RUA)",
    mesAno: "Maio | 2022 - 2026",
    cargo: "Radialista / Repórter",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    resumo: "Cobertura integral do recinto da Semana Académica do Algarve com entrevistas a artistas, reação do público e pontos de reportagem para a rádio.",
    links: [
      { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
    ],
    media: []
  },
  {
    id: 4,
    destaque: true,
    categoria: "AUDIOVISUAL",
    hashtag: "#documentario",
    titulo: "Sala 31",
    mesAno: "Maio | 2026",
    cargo: "Realizador / Pós-Produção",
    local: "ESEC (UAlg)",
    capa: "https://i.imgur.com/iFBnsa2.jpeg",
    resumo: "Documentário de investigação e memória visual sobre os bastidores da criação e expansão das Ciências da Comunicação.",
    links: [
      { texto: "Ver no IMDB", url: "https://www.imdb.com/title/tt42718524", icone: "palette" }
    ],
    media: [
      { tipo: "foto", url: "https://i.imgur.com/W8ckrH6.jpeg", titulo: "Mesa Redonda" },
      { tipo: "foto", url: "https://i.imgur.com/JLEdyLY.jpeg", titulo: "Docentes" }
    ]
  },
  {
    id: 5,
    destaque: true,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#digital #radio",
    titulo: "Confissões de Um Universitário (RUA)",
    mesAno: "Março | 2026",
    cargo: "Realizador / Pós-Produção",
    local: "Universidade do Algarve",
    capa: "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY",
    resumo: "“Confissões de um Universitário” leva-te a conhecer, em cada episódio, um curso da Universidade do Algarve através dos próprios estudantes da UAlg.",
    links: [
      { texto: "Ouvir no Spotify", url: "https://open.spotify.com/show/4bEgJLERqSEwgND78lAXAH?si=58fbe642bf604167", icone: "book-headphones" },
      { texto: "Ver no Youtube", url: "https://youtube.com/playlist?list=PLysOGAXKuGrC_rRX-zF5B62f1aauseKbn&si=JC5Qt6ZthPNCATCF", icone: "video" }
    ],
    media: [
      { tipo: "foto", url: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80", titulo: "Estúdio" },
      { tipo: "foto", url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80", titulo: "Emissão" }
    ]
  },
  {
    id: 6,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Albufeira Sounds (RUA)",
    mesAno: "Agosto | 2025",
    cargo: "Radialista",
    local: "Albufeira",
    capa: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    resumo: "Cobertura informativa e gravação de peças de áudio durante o evento Albufeira Sounds, focando no panorama musical da região.",
    links: [],
    media: []
  },
  {
    id: 7,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Albufeira Sea Fest (RUA)",
    mesAno: "Abril | 2025",
    cargo: "Radialista",
    local: "Albufeira",
    capa: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    resumo: "Acompanhamento do festival juvenil à beira-mar, articulando entrevistas com desportistas, artistas urbanos e o público jovem.",
    links: [],
    media: []
  },
  {
    id: 8,
    destaque: true,
    categoria: "OUTROS",
    hashtag: "#worldskillsportugal",
    titulo: "Medalha de Ouro — Skills Portugal 2024",
    mesAno: "Novembro | 2024",
    cargo: "Jornalista / Repórter TV",
    local: "Santa Maria da Feira",
    capa: "https://i.imgur.com/MP66E2x.jpeg",
    resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) na categoria de Reportagem de TV.",
    links: [
      { texto: "Ver Portfólio no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
    ],
    media: [
      { tipo: "foto", url: "https://i.imgur.com/im5oPxA.jpeg", titulo: "Reportagem Skills Portugal 2024 — Santa Maria da Feira" }
    ]
  },
  {
    id: 9,
    destaque: false,
    categoria: "DIGITAL & COMUNICAÇÃO",
    hashtag: "#digital",
    titulo: "Projeto ENTR PT (RTP)",
    mesAno: "Agosto | 2024",
    cargo: "Criador de Conteúdos (Freelancer)",
    local: "RTP — Lisboa",
    capa: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    resumo: "Criação, captação e edição de formatos curtos de vídeo dinâmicos orientados para o público jovem no âmbito do projeto europeu ENTR PT.",
    links: [
      { texto: "Ver no Behance", url: "https://behance.net/rmdaqb243", icone: "palette" }
    ],
    media: []
  },
  {
    id: 10,
    destaque: false,
    categoria: "JORNALISMO & MEDIA",
    hashtag: "#congressojornalistas",
    titulo: "5º Congresso dos Jornalistas",
    mesAno: "Janeiro | 2024",
    cargo: "Jornalista Redator (Redação)",
    local: "ESCS / Lisboa",
    capa: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=600&q=80",
    resumo: "Integração na equipa de redação responsável pela cobertura jornalística do 5º Congresso dos Jornalistas Portugueses.",
    links: [],
    media: []
  },
  {
    id: 11,
    destaque: false,
    categoria: "OUTROS",
    hashtag: "#investigacao",
    titulo: "Dissertação de Mestrado (ESCS)",
    mesAno: "Julho | 2024",
    cargo: "Investigador",
    local: "Escola Superior de Comunicação Social",
    capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    resumo: "Trabalho de investigação final do Mestrado em Jornalismo: 'Nos Bastidores do Jornalismo Televisivo (o caso da RTP, SIC e TVI)'.",
    links: [],
    media: []
  },
  {
    id: 12,
    destaque: false,
    categoria: "OUTROS",
    hashtag: "#worldskillsportugal",
    titulo: "Medalha de Excelência — Skills Portugal 2023",
    mesAno: "Março | 2023",
    cargo: "Editor de Vídeo",
    local: "Portimão",
    capa: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
    resumo: "Trabalho premiado com a Medalha de Excelência no Skills Portugal 2023, desempenhando as funções de Editor de Vídeo na produção de Reportagem de Televisão.",
    links: [
      { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
    ],
    media: [
      { tipo: "foto", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80", titulo: "..." }
    ]
  },
  {
    id: 13,
    destaque: false,
    categoria: "DIGITAL & COMUNICAÇÃO",
    hashtag: "#cienciasdacomunicacao #esec #ualg",
    titulo: "Núcleo de Ciências da Comunicação (NECICom) – UAlg",
    mesAno: "Fevereiro | 2023",
    cargo: "Coordenador do Mercado de Trabalho",
    local: "Universidade do Algarve",
    capa: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    resumo: "Coordenação das pontes entre os estudantes de Ciências da Comunicação da UAlg e o mercado laboral, promovendo redes de contacto e parcerias.",
    links: [],
    media: []
  },
  {
    id: 14,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#radio",
    titulo: "RUA - Rádio Universitária do Algarve",
    mesAno: "Março | 2022",
    cargo: "Jornalista e Animador de Rádio",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
    resumo: "Conceção, apresentação e produção técnica de conteúdos radiofónicos, informação diária e rubricas temáticas na rádio universitária regional.",
    links: [],
    media: []
  },
  {
    id: 15,
    destaque: false,
    categoria: "DIGITAL & COMUNICAÇÃO",
    hashtag: "#comunicacao",
    titulo: "Projeto \"Política (NÃO) Importa\"",
    mesAno: "Novembro | 2022",
    cargo: "Coordenador de Comunicação",
    local: "Projeto Independente",
    capa: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=600&q=80",
    resumo: "Coordenação de comunicação e estratégias digitais de desmistificação do envolvimento político para a comunidade jovem.",
    links: [],
    media: []
  },
  {
    id: 16,
    destaque: false,
    categoria: "JORNALISMO & MEDIA",
    hashtag: "#imprensa",
    titulo: "Sul Informação",
    mesAno: "Fevereiro | 2022",
    cargo: "Jornalista (Estágio Profissional)",
    local: "Sul Informação (Faro)",
    capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
    resumo: "Escrita diária de notícias, breves e entrevistas, acompanhada pela produção integral de peças jornalísticas em vídeo.",
    links: [
      { texto: "Visitar Sul Informação", url: "https://www.sulinformacao.pt", icone: "globe" }
    ],
    media: []
  },
  {
    id: 17,
    destaque: false,
    categoria: "JORNALISMO & MEDIA",
    hashtag: "#imprensa",
    titulo: "Revista Rotary Portugal",
    mesAno: "Março | 2021",
    cargo: "Editor e Jornalista (Colaborador)",
    local: "Portugal",
    capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
    resumo: "Redação de artigos jornalísticos, entrevistas e revisão editorial de edições periódicas da publicação Rotary em Portugal.",
    links: [],
    media: []
  },
  {
    id: 18,
    destaque: false,
    categoria: "JORNALISMO & MEDIA",
    hashtag: "#televisao",
    titulo: "Rádio e Televisão de Portugal (RTP)",
    mesAno: "Julho | 2020",
    cargo: "Jornalista (Estágio Curricular)",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
    resumo: "Escrita e edição de reportagens jornalísticas sobre variados temas. Acompanhamento do trabalho de vários jornalistas. Colaboração na edição de peças jornalísticas. Escrita e edição da Grande Reportagem \"E agora, Algarve?\"",
    links: [],
    media: []
  },
  {
    id: 19,
    destaque: false,
    categoria: "AUDIOVISUAL",
    hashtag: "#cinema",
    titulo: "Segunda Opção (Curta-Metragem)",
    mesAno: "Junho | 2019",
    cargo: "Realizador, Editor, Cameraman",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
    resumo: "Curta-metragem académica independente onde assumi a realização, captação de imagem e montagem final.",
    links: [
      { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
    ],
    media: []
  },
  {
    id: 20,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#radio",
    titulo: "+Jovem - Rádio Gilão",
    mesAno: "Setembro | 2019",
    cargo: "Locutor (Colaborador)",
    local: "Tavira",
    capa: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
    resumo: "Apresentação e animação do programa jovem de verão na Rádio Gilão em Tavira, articulando música, agenda local e entrevistas.",
    links: [],
    media: []
  }
];

// FUNÇÃO AUXILIAR DE ORDENAÇÃO CRONOLÓGICA (MAIS RECENTE PARA MAIS ANTIGO)
function extrairData(mesAnoStr) {
    const meses = {
        "janeiro": 1, "fevereiro": 2, "março": 3, "abril": 4, "maio": 5, "junho": 6,
        "julho": 7, "agosto": 8, "setembro": 9, "outubro": 10, "novembro": 11, "dezembro": 12
    };
    
    const partesAnos = mesAnoStr.match(/\b(20\d{2})\b/g);
    const ano = partesAnos ? Math.max(...partesAnos.map(Number)) : 2000;
    
    let mes = 1;
    const strLower = mesAnoStr.toLowerCase();
    for (let m in meses) {
        if (strLower.includes(m)) {
            mes = meses[m];
            break;
        }
    }
    return ano * 100 + mes;
}

let carouselAutoTimer = null;

document.addEventListener("DOMContentLoaded", () => {
    // 1. SCROLL REVEAL SUAVE
    const reveals = document.querySelectorAll(".reveal");
    function handleScrollReveal() {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < windowHeight - 80) {
                el.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", handleScrollReveal);
    handleScrollReveal();

    // 2. LOGÓTIPO VOLTA AO TOPO
    document.getElementById("brand-logo")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 3. NÍVEIS DE SOFTWARE
    document.querySelectorAll('.level-bar').forEach(bar => {
        const level = parseInt(bar.getAttribute('data-level'), 10) || 0;
        bar.innerHTML = ''; 
        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.className = `level-dot ${i <= level ? 'active' : ''}`;
            bar.appendChild(dot);
        }
    });

    // 4. CONSTRUÇÃO DOS DESTAQUES COMO SLIDESHOW AUTOMÁTICO E MANUAL
    const containerDestaque = document.getElementById("grid-destaques-trio");
    const drawerDestaque = document.getElementById("drawer-destaque");
    const itensDestaque = projetos.filter(p => p.destaque);
    let slideIndex = 0;
    let slideTimer = null;

    function renderDestaquesSlideshow() {
        if (!containerDestaque) return;
        
        containerDestaque.innerHTML = `
            <div class="slideshow-wrapper">
                <div class="slideshow-slides-container">
                    ${itensDestaque.map((proj, idx) => `
                        <div class="destaque-card-prime slide-item ${idx === 0 ? 'active-slide' : ''}" data-id="${proj.id}">
                            <img src="${proj.capa}" alt="${proj.titulo}" class="destaque-prime-bg">
                            <div class="destaque-prime-overlay">
                                <span class="card-category">${proj.hashtag}</span>
                                <h3 class="card-title-highlight">${proj.titulo}</h3>
                                <div class="card-sub-info">${proj.local} • ${proj.mesAno}</div>
                            </div>
                            <button class="destaque-arrow-btn" title="Expandir"><i data-lucide="chevron-down"></i></button>
                        </div>
                    `).join('')}
                </div>
                <button class="slideshow-nav-btn prev" id="btn-slide-prev"><i data-lucide="chevron-left"></i></button>
                <button class="slideshow-nav-btn next" id="btn-slide-next"><i data-lucide="chevron-right"></i></button>
                <div class="slideshow-dots">
                    ${itensDestaque.map((_, idx) => `
                        <span class="slide-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
                    `).join('')}
                </div>
            </div>
        `;

        const slides = containerDestaque.querySelectorAll('.slide-item');
        const dots = containerDestaque.querySelectorAll('.slide-dot');

        function showSlide(index) {
            slides.forEach((s, i) => s.classList.toggle('active-slide', i === index));
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
            slideIndex = index;
        }

        function nextSlide() {
            let next = (slideIndex + 1) % itensDestaque.length;
            showSlide(next);
        }

        function prevSlide() {
            let prev = (slideIndex - 1 + itensDestaque.length) % itensDestaque.length;
            showSlide(prev);
        }

        function startTimer() {
            stopTimer();
            slideTimer = setInterval(nextSlide, 5000);
        }

        function stopTimer() {
            if (slideTimer) clearInterval(slideTimer);
        }

        containerDestaque.querySelector('#btn-slide-next')?.addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide();
            startTimer();
        });

        containerDestaque.querySelector('#btn-slide-prev')?.addEventListener('click', (e) => {
            e.stopPropagation();
            prevSlide();
            startTimer();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(dot.getAttribute('data-index'), 10);
                showSlide(idx);
                startTimer();
            });
        });

        slides.forEach(slide => {
            slide.addEventListener('click', () => {
                const id = parseInt(slide.getAttribute('data-id'), 10);
                const proj = projetos.find(p => p.id === id);
                if (proj) openNetflixDrawer(drawerDestaque, proj, slide);
            });
        });

        startTimer();
    }

    // 5. CARROSSEIS POR CATEGORIA (REMOVIDO DISSERTAÇÃO E ORDENADO DO MAIS RECENTE AO MAIS ANTIGO)
    const categoriasMap = {
        "JORNALISMO & MEDIA": { slider: "slider-jornalismo", drawer: "drawer-jornalismo", btnL: "btn-left-jornalismo", btnR: "btn-right-jornalismo" },
        "AUDIOVISUAL": { slider: "slider-audiovisual", drawer: "drawer-audiovisual", btnL: "btn-left-audiovisual", btnR: "btn-right-audiovisual" },
        "RÁDIO & ÁUDIO": { slider: "slider-radio", drawer: "drawer-radio", btnL: "btn-left-radio", btnR: "btn-right-radio" },
        "DIGITAL & COMUNICAÇÃO": { slider: "slider-digital", drawer: "drawer-digital", btnL: "btn-left-digital", btnR: "btn-right-digital" },
        "OUTROS": { slider: "slider-outros", drawer: "drawer-outros", btnL: "btn-left-outros", btnR: "btn-right-outros" }
    };

    function renderCategorias() {
        Object.keys(categoriasMap).forEach(catName => {
            const config = categoriasMap[catName];
            const slider = document.getElementById(config.slider);
            const drawer = document.getElementById(config.drawer);
            if (!slider) return;

            // Filtra e ordena do mais recente ao mais antigo. Remove id 11 (Dissertação) dos conteúdos.
            const items = projetos
                .filter(p => p.categoria === catName && p.id !== 11)
                .sort((a, b) => extrairData(b.mesAno) - extrairData(a.mesAno));

            slider.innerHTML = "";

            items.forEach(proj => {
                const card = document.createElement("div");
                card.className = "netflix-card-16-9";
                card.id = `card-proj-${proj.id}`;
                card.innerHTML = `
                    <img src="${proj.capa}" alt="${proj.titulo}" class="card-bg-img">
                    <div class="card-gradient-overlay">
                        <span class="card-category">${proj.hashtag}</span>
                        <h4 class="card-title">${proj.titulo}</h4>
                        <div class="card-sub-info">${proj.local} • ${proj.mesAno}</div>
                    </div>
                    <button class="destaque-arrow-btn" title="Expandir"><i data-lucide="chevron-down"></i></button>
                `;
                card.addEventListener("click", () => openNetflixDrawer(drawer, proj, card));
                slider.appendChild(card);
            });

            setupCarouselButtons(config.slider, config.btnL, config.btnR);
        });
    }

    // 6. POP-UP / DRAWER FULLSCREEN 100% LARGURA COM IMAGENS A OCUPAR 1/3 E PASSAGEM AUTOMÁTICA
    function openNetflixDrawer(targetDrawer, proj, triggerElement) {
        if (carouselAutoTimer) clearInterval(carouselAutoTimer);

        document.querySelectorAll('.netflix-drawer').forEach(d => {
            d.classList.remove('active');
            d.innerHTML = '';
        });

        document.querySelectorAll('.destaque-card-prime, .netflix-card-16-9').forEach(c => c.classList.remove('active-card'));
        if (triggerElement) triggerElement.classList.add('active-card');

        let linksHTML = "";
        if (proj.links && proj.links.length > 0) {
            linksHTML = proj.links.map(l => `
                <a href="${l.url}" target="_blank" class="drawer-action-btn">
                    <i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}
                </a>
            `).join('');
        }

        const allPhotos = [{ url: proj.capa, titulo: "" }, ...(proj.media || [])];

        targetDrawer.innerHTML = `
            <div class="drawer-content-wrapper full-width-drawer">
                <button class="close-drawer-btn" title="Fechar"><i data-lucide="x"></i></button>
                <div class="drawer-flex-container">
                    
                    <!-- LADO ESQUERDO: 1/3 PARA IMAGENS -->
                    <div class="drawer-left-media-third">
                        <div class="drawer-carousel-main">
                            ${allPhotos.map((m, idx) => `
                                <img src="${m.url}" alt="${proj.titulo}" class="drawer-full-img ${idx === 0 ? 'active-img' : ''}" data-idx="${idx}">
                            `).join('')}
                            <div class="drawer-img-gradient-bottom"></div>
                        </div>
                        ${allPhotos.length > 1 ? `
                            <div class="drawer-media-grid">
                                ${allPhotos.map((m, idx) => `
                                    <div class="media-mini-card ${idx === 0 ? 'selected-thumb' : ''}" data-index="${idx}">
                                        <img src="${m.url}" alt="Miniatura">
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>

                    <!-- LADO DIREITO: 2/3 PARA DETALHES -->
                    <div class="drawer-right-details-twothirds">
                        <span class="card-category">${proj.hashtag}</span>
                        <h2>${proj.titulo}</h2>
                        
                        <div class="drawer-meta-boxes">
                            <div class="meta-box">
                                <span class="meta-title">Data / Período</span>
                                <span class="meta-value">${proj.mesAno}</span>
                            </div>
                            <div class="meta-box">
                                <span class="meta-title">Cargo / Função</span>
                                <span class="meta-value">${proj.cargo}</span>
                            </div>
                            <div class="meta-box">
                                <span class="meta-title">Local</span>
                                <span class="meta-value">${proj.local}</span>
                            </div>
                        </div>

                        <p class="drawer-description">${proj.resumo}</p>
                        ${linksHTML ? `<div class="drawer-actions">${linksHTML}</div>` : ''}
                    </div>
                </div>
            </div>
        `;

        targetDrawer.classList.add('active');
        if (window.lucide) window.lucide.createIcons();

        // Passagem automática das fotos no cartão (3.5 segundos)
        const imgs = targetDrawer.querySelectorAll('.drawer-full-img');
        const thumbs = targetDrawer.querySelectorAll('.media-mini-card');
        let currentImgIdx = 0;

        function setFoto(idx) {
            imgs.forEach((img, i) => img.classList.toggle('active-img', i === idx));
            thumbs.forEach((t, i) => t.classList.toggle('selected-thumb', i === idx));
            currentImgIdx = idx;
        }

        if (allPhotos.length > 1) {
            carouselAutoTimer = setInterval(() => {
                let nextIdx = (currentImgIdx + 1) % allPhotos.length;
                setFoto(nextIdx);
            }, 3500);

            thumbs.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    const idx = parseInt(thumb.getAttribute('data-index'), 10);
                    setFoto(idx);
                });
            });
        }

        targetDrawer.querySelector('.close-drawer-btn')?.addEventListener('click', () => {
            if (carouselAutoTimer) clearInterval(carouselAutoTimer);
            targetDrawer.classList.remove('active');
            if (triggerElement) triggerElement.classList.remove('active-card');
        });

        setTimeout(() => {
            targetDrawer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }

    // 7. BOTÕES DOS CARROSSEIS
    function setupCarouselButtons(sliderId, btnLeftId, btnRightId) {
        const slider = document.getElementById(sliderId);
        const btnL = document.getElementById(btnLeftId);
        const btnR = document.getElementById(btnRightId);

        if (!slider) return;

        const updateVisibility = () => {
            const scrollLeft = slider.scrollLeft;
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            if (btnL) btnL.classList.toggle('visible', scrollLeft > 10);
            if (btnR) btnR.classList.toggle('visible', maxScroll - scrollLeft > 10);
        };

        btnL?.addEventListener('click', () => slider.scrollBy({ left: -320, behavior: 'smooth' }));
        btnR?.addEventListener('click', () => slider.scrollBy({ left: 320, behavior: 'smooth' }));

        slider.addEventListener('scroll', updateVisibility);
        window.addEventListener('resize', updateVisibility);
        setTimeout(updateVisibility, 200);
    }

    // 8. MINICARDS DE CONTEÚDOS NAS EXPERIÊNCIAS E FORMAÇÕES
    function setupAssociatedProjects() {
        document.querySelectorAll('.associated-project-wrapper').forEach(wrapper => {
            const projId = parseInt(wrapper.getAttribute('data-project-id'), 10);
            const proj = projetos.find(p => p.id === projId);
            if (!proj) return;

            wrapper.innerHTML = `
                <div class="mini-project-chip" title="Ver cartão expandido">
                    <img src="${proj.capa}" alt="${proj.titulo}" class="mini-project-img">
                    <span class="mini-project-title">${proj.titulo}</span>
                    <i data-lucide="arrow-right" class="mini-chevron"></i>
                </div>
            `;

            wrapper.querySelector('.mini-project-chip').addEventListener('click', (e) => {
                e.stopPropagation();
                
                let targetDrawer = null;
                const catConfig = categoriasMap[proj.categoria];
                if (catConfig) {
                    targetDrawer = document.getElementById(catConfig.drawer);
                } else if (proj.destaque) {
                    targetDrawer = document.getElementById("drawer-destaque");
                }
                
                if (targetDrawer) {
                    openNetflixDrawer(targetDrawer, proj, null);
                }
            });
        });
    }

    // 9. SETAS DE HIPERLIGAÇÃO CONDICIONAIS
    function setupConditionalArrows() {
        document.querySelectorAll('.card-item-with-logo[data-link]').forEach(item => {
            const linkUrl = item.getAttribute('data-link');
            if (linkUrl && linkUrl.trim() !== "") {
                const arrowBtn = document.createElement("a");
                arrowBtn.href = linkUrl;
                arrowBtn.target = "_blank";
                arrowBtn.className = "course-link-arrow";
                arrowBtn.title = "Visitar Website";
                arrowBtn.innerHTML = `<i data-lucide="arrow-up-right"></i>`;
                item.appendChild(arrowBtn);
            }
        });
    }

    renderDestaquesSlideshow();
    renderCategorias();
    setupAssociatedProjects();
    setupConditionalArrows();
    if (window.lucide) window.lucide.createIcons();
});
