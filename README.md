# Érica Silva Estética - Landing Page

Landing Page moderna e de alta conversão desenvolvida para a clínica de estética Érica Silva. O projeto foca em oferecer uma experiência visual elegante, performance otimizada e integração direta com WhatsApp para agendamentos.

## 🚀 Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica e acessível.
*   **CSS3:** Estilização avançada com Flexbox, Grid, Animações (Keyframes), Glassmorphism e Responsividade.
*   **JavaScript (Vanilla):** Lógica de interação sem dependências externas (Menu Mobile, Accordion, Parallax, Partículas).
*   **FontAwesome:** Ícones vetoriais.
*   **Google Fonts:** Tipografia (Poppins).

## ✨ Funcionalidades

*   **Design Responsivo:** Layout adaptável para Desktop, Tablets e Celulares.
*   **Header Dinâmico:** Efeito de vidro (Glassmorphism) e mudança de estilo ao rolar a página.
*   **Hero Section Interativa:**
    *   Animação de entrada em cascata (Staggered Animation).
    *   Efeito Parallax suave no fundo.
    *   Card flutuante com efeito de brilho animado.
*   **Carrossel de Serviços:** Navegação horizontal suave (Scroll Snap) em dispositivos móveis.
*   **FAQ Interativo:** Seção de perguntas frequentes com efeito sanfona (Accordion).
*   **Formulário Inteligente:** Captura os dados do cliente e gera uma mensagem formatada para envio automático via WhatsApp.
*   **Efeitos Visuais:**
    *   "Magic Touch": Rastro de partículas (estrelas) ao mover o mouse.
    *   Lazy Loading em imagens para alta performance.
*   **SEO & Analytics:**
    *   Meta tags configuradas.
    *   Sitemap.xml e Robots.txt.
    *   Integração com Google Tag Manager.
*   **Páginas Extras:** Política de Privacidade e Página de Agradecimento (Pós-conversão).

## 📂 Estrutura do Projeto

```text
/
├── index.html                # Página Principal
├── obrigado.html             # Página de Agradecimento
├── politica-privacidade.html # Página Legal
├── style.css                 # Estilos Globais
├── script.js                 # Lógica e Animações
├── sitemap.xml               # Mapa do site para SEO
├── robots.txt                # Diretrizes para buscadores
└── imagens/                  # Pasta de ativos (Logos, Fotos)
```

## 🔧 Como Executar

Este é um projeto estático, não requer instalação de dependências ou servidor backend.

1.  Faça o download ou clone este repositório.
2.  Abra o arquivo `index.html` em seu navegador preferido.

## 🎨 Destaques de Código

O projeto utiliza JavaScript puro para garantir leveza. Exemplo da lógica de envio para WhatsApp:

```javascript
// Captura e formatação de mensagem para API do WhatsApp
const text = `*Novo Contato pelo Site*\n\n*Nome:* ${name}\n*WhatsApp:* ${phone}\n*Mensagem:* ${message}`;
const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
window.open(url, '_blank');
```

Exemplo de otimização de performance no Scroll (Throttling):

```javascript
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Lógica de alteração do header
            ticking = false;
        });
        ticking = true;
    }
});
```

---
Desenvolvido como projeto de portfólio focado em Front-end Development.