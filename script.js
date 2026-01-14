// ==========================================
// 1. Mock Data (Mantido original)
// ==========================================
const projectsData = [
    {
        id: 1,
        title: "Residencia unipe",
        category: "residencial",
        description: "projeto residencial da faculdade",
fullDescription: "a ideia era ser um flet mais vivo moderno e unico com cada ambiente tendo algo totalmente novo e harmonico com a casa inteira.", // Texto longo pro detalhes
        image: "img/quarto, projeto segunda unidade.jpg", // Foto principal
        gallery: [
            "img/cozinha rendeer vista 3.jpg",
            "img/image (2).png",
        ], 
        year: "2023",
        area: "280m²"
    },
    {
        id: 2,
        title: "Projeto Richards",
        category: "comercial",
        description: "Projeto da faculdade sobre a loja Richards", 
        fullDescription: "esse projeto usamos a loja Richards e ao longo dos nossos estudos e entendimentos da marca usamos sua identidade visual e conceito como pontos fortes do projeto, uma autentica grife carioca",
        image: "img/loja.jpg", // Foto principal
        gallery: [
            "img/render caixa.png",
            "img/render vitrina provador 2.png",
            "img/render provador.png"
        ], // Array com as fotos extras
        year: "2024",
        area: "150m²"
    },
    {
        id: 3,
        title: "Residência Em portugal",
        category: "residencial",
        description: "Casa contemporânea com design limpo.",
        fullDescription: "Esta residência em Portugal foi projetada focando na integração total com a luz natural. Utilizamos materiais nobres e uma paleta neutra para criar um refúgio urbano sereno", // Texto longo pro detalhes
        image: "img/sala 2.png", // Foto principal
        gallery: [
            "img/quarto 2.png",
            "img/cozinha 3.png",
        ], // Array com as fotos extras
        year: "2023",
        area: "300m²"
    },
    {
        id: 4,
        title: "Interior Contemporâneo",
        category: "interior",
        description: "Design de interiores com móveis sob medida e iluminação especial alguns Renders de Interiores Projetados por mim.",
        fullDescription: "Esta residência em Portugal foi projetada focando na integração total com a luz natural. Utilizamos materiais nobres e uma paleta neutra para criar um refúgio urbano sereno", // Texto longo pro detalhes
        image: "img/render sala 2.png", // Foto principal
        gallery: [
            "img/renderizaçao grande.jpg",
            "img/banheiro2.jpg",
            "img/render 7.png",
        ], // Array com as fotos extras
        year: "2023",
        area: "300m²"
    },
    {
        id: 5,
        title: "EVA unipe",
        category: "publico",
        description: "Projeto educacional da faculdade Onde trazia uma Reforma do nosso Espaço de Vivência Acadêmica",
        fullDescription: "Esta residência em Portugal foi projetada focando na integração total com a luz natural. Utilizamos materiais nobres e uma paleta neutra para criar um refúgio urbano sereno", // Texto longo pro detalhes
        image: "img/render eva pessoas 6.png", // Foto principal
        gallery: [
            "img/eva4.png",
            "img/eva render 2.png",
            "img/render eva pessoas 2.png",
            "img/render eva pessoas 5.png",
        ], // Array com as fotos extras
        year: "2023",
        area: "300m²"
    },
    {
        id: 6,
        title: "Cozinhas Gourmet Premium",
        category: "interior",
        description: "Cozinhas de alto padrão com acabamentos Premium",
        fullDescription: "cozinhas projetadas e renderizadas por mim", // Texto longo pro detalhes
        image: "https://images.unsplash.com/photo-1581783458534-001a466b5487?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NTgzMTMwNzJ8MA&ixlib=rb-4.1.0&q=85",
        gallery: [
            "img/COZINHA EDIT GRANDE.jpg",
            "img/render 8.png",
            "img/4.2.jpg",
        ], // Array com as fotos extras
        year: "2025",
        area: "300m²"
    },
     {
        id: 7,
        title: "zoeys petshop",
        category: "comercial",
        description: "Primeira unidade fisica de um petshop na califórnia, Zoeys paw friends",
      fullDescription: "o cliente quis algo simples e compacto com o pouco espaço mais que fosse aconchegante e instagramável", // Texto longo pro detalhes
        image: "img/render 1.png", // Foto principal
        gallery: [
            "img/render 4.png",
            "img/image (1).png",
        ], 
        year: "2023",
        area: "150m²"
    },
];

const servicesData = [
    {
        id: 1,
        title: "Projetos Arquitetônicos",
        description: "Desenvolvimento completo de projetos residenciais, comerciais e institucionais",
        icon: "pencil-ruler" // Ícone de precisão técnica
    },
    {
        id: 2,
        title: "Design de Interiores",
        description: "Criação de ambientes únicos e funcionais com foco na experiência do usuário",
        icon: "palette" // Ícone de cores e texturas
    },
    {
        id: 3,
        title: "Renders 3D",
        description: "Visualizações fotorrealísticas para apresentação de projetos",
        icon: "box" // Ícone que remete a volume e modelagem 3D
    },
    {
        id: 4,
        title: "Consultoria",
        description: "Assessoria técnica e consultoria especializada em arquitetura",
        icon: "messages-square" // Ícone de diálogo e assessoria
    }
];

// ==========================================
// 2. DOM Elements
// ==========================================
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
const header = document.getElementById('header');
const portfolioGrid = document.getElementById('portfolioGrid');
const servicesGrid = document.getElementById('servicesGrid');
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');

// ==========================================
// 3. Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializePortfolio();
    initializeServices();
    initializeContactForm();
    initializeAnimations();
    
    // Novas implementações
    initializeCustomFeatures();
});

// ==========================================
// 4. Implementação de Novas Funcionalidades
// ==========================================

function initializeCustomFeatures() {
    // Inicializa ícones Lucide (caso use para as setas do PDF)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Duplicar conteúdo do Marquee para loop infinito sem falhas
    const marquee = document.getElementById('marqueeContent');
    if (marquee) {
        marquee.innerHTML += marquee.innerHTML;
    }
}

// Função para mudar página do PDF (Navegação do Catálogo)
window.changePDFPage = function(direction) {
    const imgElement = document.getElementById('pdfPage');
    const indicator = document.getElementById('pageIndicator');
    
    if (!imgElement) return;

    // Atualiza o índice da página
    currentPdfPage = (currentPdfPage + direction + pdfPages.length) % pdfPages.length;
    
    // Efeito de transição suave (Fade)
    imgElement.style.opacity = '0';
    
    setTimeout(() => {
        imgElement.src = pdfPages[currentPdfPage];
        if (indicator) {
            indicator.innerText = `PÁGINA ${(currentPdfPage + 1).toString().padStart(2, '0')} / ${pdfPages.length.toString().padStart(2, '0')}`;
        }
        imgElement.style.opacity = '1';
    }, 300);
};

// ==========================================
// 5. Original Functions (Mantidas intactas)
// ==========================================

function initializeNavigation() {
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

function initializePortfolio() {
    renderPortfolio(projectsData);
    initializePortfolioFilters();
}

function renderPortfolio(projects) {
    if(!portfolioGrid) return;
    portfolioGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectElement = createProjectElement(project, index);
        portfolioGrid.appendChild(projectElement);
    });
}

function createProjectElement(project, index) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'portfolio-item';
    projectDiv.style.animationDelay = `${index * 0.1}s`;
    
    // O link agora aponta para projeto.html passando o ID via URL
    projectDiv.innerHTML = `
        <div class="portfolio-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="portfolio-overlay">
                <a href="projeto.html?id=${project.id}" class="view-project-link">
                    VER PROJETO <i data-lucide="arrow-right"></i>
                </a>
            </div>
        </div>
        <div class="portfolio-info">
            <div class="portfolio-meta">
                <span class="portfolio-category">${project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                ${project.featured ? '<span class="portfolio-featured">Destaque</span>' : ''}
            </div>
            <h3 class="portfolio-title">${project.title}</h3>
            <p class="portfolio-description">${project.description}</p>
            <div class="portfolio-details">
                <span><i data-lucide="calendar" class="icon-small"></i> ${project.year}</span>
                <span><i data-lucide="maximize" class="icon-small"></i> ${project.area}</span>
            </div>
        </div>
    `;
    
    // Inicializa os ícones após a criação do elemento
    setTimeout(() => {
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 0);
    
    return projectDiv;
}

function initializePortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            const filteredProjects = filter === 'todos' 
                ? projectsData 
                : projectsData.filter(project => project.category === filter);
            
            renderPortfolio(filteredProjects);
        });
    });
}

function initializeServices() {
    if(!servicesGrid) return;
    servicesData.forEach((service, index) => {
        const serviceElement = createServiceElement(service, index);
        servicesGrid.appendChild(serviceElement);
    });
}

function createServiceElement(service, index) {
    const serviceDiv = document.createElement('div');
    serviceDiv.className = 'service-item';
    serviceDiv.style.animationDelay = `${index * 0.1}s`;
    
    serviceDiv.innerHTML = `
        <div class="service-icon">
            <i data-lucide="${service.icon}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
        <a href="#contact" class="service-link">
            Saiba Mais <i data-lucide="move-right" class="icon-small"></i>
        </a>
    `;
    
    // Força a renderização do ícone Lucide após criar o HTML
    setTimeout(() => {
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 0);
    
    return serviceDiv;
}

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if(!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Impede o recarregamento da página
        
        const button = this.querySelector('.form-submit');
        const originalText = button.innerHTML;
        
        // Feedback visual de "Enviando"
        button.innerHTML = 'ENVIANDO... <i data-lucide="loader-2" class="animate-spin"></i>';
        button.disabled = true;
        if(window.lucide) lucide.createIcons();

        const formData = new FormData(this);
        
        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                showSuccessModal(); // Mostra o check verde ✅
                this.reset();       // Limpa os campos
            } else {
                alert('Erro ao enviar. Tente novamente ou use o WhatsApp.');
            }
        } catch (error) {
            alert('Erro de conexão. Verifique sua internet.');
        } finally {
            button.innerHTML = originalText;
            button.disabled = false;
            if(window.lucide) lucide.createIcons();
        }
    });
}

function showSuccessModal() {
    successModal.classList.add('show');
    setTimeout(() => {
        successModal.classList.remove('show');
    }, 3000);
    
    successModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
        }
    });
}

function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.hero-content, .section-header, .portfolio-item, .service-item, .about-content, .contact-content');
    
    const animationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        animationObserver.observe(element);
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScrollHandler = debounce(function() {}, 10);
window.addEventListener('scroll', debouncedScrollHandler);

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {}
});

document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW0gbsOjbyBlbmNvbnRyYWRhPC90ZXh0Pjwvc3ZnPg==';
    }
}, true);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if(navLinks) navLinks.classList.remove('active');
        if(successModal) successModal.classList.remove('show');
    }
});