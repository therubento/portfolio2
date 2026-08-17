/* ==========================================================================
   BANCO DE DADOS DE PROJETOS (SISTEMA AUTÓNOMO)
   ========================================================================== */
const projects = [
    {
        id: "proj-1",
        title: "[ADICIONAR TÍTULO DA REPORTAGEM DE TV]",
        category: "TV",
        date: "2024",
        snippet: "Reportagem televisiva de investigação/cobertura nacional.",
        description: "[ADICIONAR DESCRIÇÃO DETALHADA DO PROJETO DE TELEVISÃO]",
        role: "Jornalista / Repórter",
        entity: "RTP / Skills Portugal",
        link: "[ADICIONAR LINK EXTERNO SE EXISTIR]"
    },
    {
        id: "proj-2",
        title: "[ADICIONAR PROGRAMA OU EMISSÃO DE RÁDIO]",
        category: "RADIO",
        date: "2023 - 2024",
        snippet: "Animação de rádio, rubrica de autor e entrevistas em direto.",
        description: "[ADICIONAR DESCRIÇÃO DETALHADA DO PROJETO DE RÁDIO]",
        role: "Jornalista / Animador",
        entity: "RUA - Rádio Universitária do Algarve",
        link: "[ADICIONAR LINK EXTERNO SE EXISTIR]"
    },
    {
        id: "proj-3",
        title: "[ADICIONAR ARTIGO / COBERTURA DIGITAL]",
        category: "JOURNALISM",
        date: "2021 - 2022",
        snippet: "Trabalho de jornalismo digital e cobertura de atualidade regional.",
        description: "[ADICIONAR DESCRIÇÃO DO ARTIGO OU PEÇA DE IMPRENSA]",
        role: "Jornalista",
        entity: "Sul Informação",
        link: "[ADICIONAR LINK EXTERNO SE EXISTIR]"
    },
    {
        id: "proj-4",
        title: "[ADICIONAR CONTEÚDO DIGITAL ENTR PT]",
        category: "COMMUNICATION",
        date: "Maio 2024 - Agosto 2024",
        snippet: "Criação de conteúdos multimédia direcionados ao público jovem europeu.",
        description: "[ADICIONAR DESCRIÇÃO DETALHADA DO CONTEÚDO CREATED FOR ENTR PT]",
        role: "Criador de Conteúdos (Freelancer)",
        entity: "ENTR PT - RTP",
        link: "[ADICIONAR LINK EXTERNO SE EXISTIR]"
    }
];

/* ==========================================================================
   INICIALIZAÇÃO E LÓGICA DE INTERACTION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    renderPortfolio("all");
    initFilters();
    initModal();
});

/* Menu Hamburger Mobile */
function initNavigation() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

/* Renderizar Grelha de Portefólio */
function renderPortfolio(filterCategory) {
    const portfolioGrid = document.getElementById("portfolioGrid");
    portfolioGrid.innerHTML = "";

    const filtered = filterCategory === "all" 
        ? projects 
        : projects.filter(p => p.category === filterCategory);

    filtered.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <div class="project-category">${project.category}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-snippet">${project.snippet}</p>
            <div class="project-date">${project.date} — ${project.entity}</div>
        `;
        card.addEventListener("click", () => openProjectModal(project));
        portfolioGrid.appendChild(card);
    });
}

/* Filtros de Portefólio */
function initFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filterValue = btn.getAttribute("data-filter");
            renderPortfolio(filterValue);
        });
    });
}

/* Modal de Detalhe de Projeto */
function initModal() {
    const modal = document.getElementById("projectModal");
    const closeBtn = document.querySelector(".close-modal");

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

function openProjectModal(project) {
    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
        <div class="project-category" style="margin-top:10px;">${project.category}</div>
        <h2 style="font-family:var(--font-heading); margin-bottom:10px;">${project.title}</h2>
        <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:20px;">
            ${project.date} | ${project.entity} | Função: ${project.role}
        </p>
        <p style="color:var(--text-secondary); margin-bottom:20px; line-height:1.6;">
            ${project.description}
        </p>
        <div style="margin-top:20px;">
            <a href="${project.link}" target="_blank" class="btn btn-primary" style="font-size:0.8rem; padding:10px 20px;">VER CONTEÚDO COMPLETO ↗</a>
        </div>
    `;

    modal.style.display = "block";
}