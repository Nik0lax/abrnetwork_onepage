document.addEventListener('DOMContentLoaded', function() {
        // Seleciona o contêiner dos cards e o bloco de texto
        const containerCards = document.querySelector('.container-cards');
        const heroContent = document.querySelector('.hero-content');
        
        // Seleciona os elementos para animar
        const planos = document.querySelectorAll('.plano-card');
        const elementosTexto = heroContent.querySelectorAll('h2, h1');
        
        // Configura o Intersection Observer
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // Se a seção estiver visível
                if (entry.isIntersecting) {
                    
                    // --- ANIMAÇÃO DO TEXTO ---
                    elementosTexto.forEach((el, index) => {
                        el.classList.add('animar-texto');
                        // Atraso de 0s e 0.2s para o h2 e o h1
                        el.style.animationDelay = `${index * 0.2}s`;
                    });

                    // --- ANIMAÇÃO DOS CARDS (Efeito Stagger) ---
                    planos.forEach((card, index) => {
                        card.classList.add('animar-entrada');
                        // Atraso dos cards começa após o texto (ex: 0.5s + delay dos cards)
                        card.style.animationDelay = `${0.5 + index * 0.2}s`; 
                    });
                    
                    // Para a observação depois de animar
                    observer.unobserve(containerCards); 
                }
            });
        }, {
            // A animação dispara quando 20% da seção de planos estiver visível
            threshold: 0.2 
        });

        // Começa a observar o contêiner dos cards/texto (que é a mesma área)
        observer.observe(containerCards);
    });