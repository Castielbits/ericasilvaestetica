document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. Header Dinâmico (Sombra ao rolar) --- */
    const header = document.querySelector('header');
    
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    header.classList.add('header-scrolled');
                } else {
                    header.classList.remove('header-scrolled');
                }

                /* --- Parallax Suave (Atualiza variável CSS) --- */
                // Move o fundo a 50% da velocidade do scroll
                document.body.style.setProperty('--scroll-y', `${window.scrollY * 0.5}px`);

                ticking = false;
            });
            ticking = true;
        }
    });

    /* --- 2. Animação de Scroll (Aparecer suavemente) --- */
    const observerOptions = {
        threshold: 0.15, // Ativa quando 15% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
                observer.unobserve(entry.target); // Para de observar após animar (anima só uma vez)
            }
        });
    }, observerOptions);

    // Seleciona o que vamos animar (títulos, cards, benefícios)
    const hiddenElements = document.querySelectorAll('.service-card, .benefit-card, .testimonial-card, .section-header, .cta-content');
    
    hiddenElements.forEach(el => {
        el.classList.add('hidden-element'); // Adiciona classe inicial
        observer.observe(el);
    });

    /* --- 3. Menu Mobile (Hambúrguer) --- */
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('.navmenu');
    const iconElement = menuIcon.querySelector('i');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Alterna o ícone entre Barras e X
        iconElement.classList.toggle('fa-bars');
        iconElement.classList.toggle('fa-xmark');
    });

    /* --- 4. Fechar Menu ao Clicar em Link --- */
    const navLinks = document.querySelectorAll('.navmenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            iconElement.classList.add('fa-bars');
            iconElement.classList.remove('fa-xmark');
        });
    });

    /* --- 5. FAQ Accordion --- */
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = item.querySelector('.faq-answer');
            
            // Fecha outros itens abertos (efeito sanfona único)
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            // Alterna o atual
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    /* --- 6. Formulário de Contato (Simulação) --- */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 1. Captura os dados digitados
            const name = contactForm.querySelector('input[type="text"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;
            const message = contactForm.querySelector('textarea').value;

            // 2. Formata a mensagem (usando \n para pular linha)
            const whatsappNumber = "5531993479306";
            const text = `*Novo Contato pelo Site*\n\n*Nome:* ${name}\n*WhatsApp:* ${phone}\n*Mensagem:* ${message}`;
            
            // 3. Cria o link codificado e abre em nova aba
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
            
            // Redireciona para a página de obrigado na aba atual
            window.location.href = 'obrigado.html';
            
            contactForm.reset();
        });
    }

    /* --- 7. Efeito "Toque Mágico" (Magic Touch) --- */
    // Cria um rastro de brilho/beleza onde o mouse passa
    let sparkleThrottle = 0;
    
    document.addEventListener('mousemove', (e) => {
        // Limita a criação de partículas para não pesar o site (cria a cada 3 movimentos)
        sparkleThrottle++;
        if (sparkleThrottle % 3 !== 0) return;

        const sparkle = document.createElement('div');
        sparkle.classList.add('aesthetic-sparkle');
        sparkle.innerHTML = '★';

        // Posição do mouse
        sparkle.style.left = `${e.pageX}px`;
        sparkle.style.top = `${e.pageY}px`;

        // Tamanho aleatório (entre 10px e 20px)
        const size = Math.random() * 10 + 10;
        sparkle.style.fontSize = `${size}px`;

        // Cor aleatória: 80% Roxo (#8c52ff), 20% Dourado (#FFD700) para dar luxo
        if (Math.random() > 0.8) {
            sparkle.style.color = '#FFD700';
        }

        document.body.appendChild(sparkle);

        // Remove o elemento do HTML após a animação terminar (1 segundo)
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });

    /* --- 8. Banner de Cookies --- */
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Verifica se já aceitou
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'flex'; // Mostra o banner
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true'); // Salva a preferência
        cookieBanner.style.display = 'none'; // Esconde o banner
    });
}); 