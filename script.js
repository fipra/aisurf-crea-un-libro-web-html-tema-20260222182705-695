const data = [
    {
        type: "cover",
        title: { en: "Vibe Coding & Agentic Engineering", it: "Vibe Coding e Ingegneria Agentica" },
        content: { en: "THE NEW ERA OF SOFTWARE", it: "LA NUOVA ERA DEL SOFTWARE" }
    },
    {
        title: { en: "The Dawn of Vibe Coding", it: "L'Alba del Vibe Coding" },
        content: {
            en: "Vibe Coding is the paradigm shift where software development transitions from manual labor to high-level orchestration. In this new era, the 'vibe' represents the intuitive understanding of a system's architecture, state, and goals. We no longer write loops; we define outcomes. The traditional developer mindset was obsessed with syntax errors and semi-colons; the Vibe Coder is obsessed with context management and prompt engineering.",
            it: "Il Vibe Coding è il cambio di paradigma in cui lo sviluppo software passa dal lavoro manuale all'orchestrazione di alto livello. In questa nuova era, il 'vibe' rappresenta la comprensione intuitiva dell'architettura, dello stato e degli obiettivi di un sistema. Non scriviamo più cicli; definiamo risultati. La mentalità tradizionale dello sviluppatore era ossessionata da errori di sintassi; il Vibe Coder è ossessionato dalla gestione del contesto."
        }
    },
    {
        title: { en: "The Architecture of Agents", it: "L'Architettura degli Agenti" },
        content: {
            en: "Agentic Engineering goes beyond simple code completion. It involves building autonomous entities capable of planning, tool use, and self-correction. An agentic system doesn't just suggest a line of code; it reads your entire repository and proposes multi-file changes. We must now design systems that are 'Agent-Friendly'—highly modular and strictly typed. We are building the infrastructure for silicon minds to navigate.",
            it: "L'Ingegneria Agentica va oltre il semplice completamento del codice. Comporta la costruzione di entità autonome capaci di pianificazione, uso di strumenti e autocorrezione. Un sistema agentico non suggerisce solo una riga di codice; legge l'intero repository e propone modifiche multi-file. Dobbiamo ora progettare sistemi 'Agent-Friendly': altamente modulari e rigorosamente tipizzati. Stiamo costruendo l'infrastruttura per menti al silicio."
        }
    },
    {
        title: { en: "Context: The New Currency", it: "Contesto: La Nuova Valuta" },
        content: {
            en: "In the world of AI-assisted development, context is the most valuable resource. Large Language Models (LLMs) are only as good as the information they are given. Effective Vibe Coding requires the mastery of 'Contextual Injection'—knowing exactly which files and logs to feed into the model. Senior engineers now focus on maintaining clean context boundaries, ensuring the agent has the right semantic slice of the project.",
            it: "Nel mondo dello sviluppo assistito dall'IA, il contesto è la risorsa più preziosa. I Large Language Models (LLMs) sono validi quanto le informazioni che ricevono. Un Vibe Coding efficace richiede la maestria dell' 'Iniezione Contestuale': sapere esattamente quali file e log inserire nel modello. I senior engineer ora si concentrano sul mantenimento di confini di contesto puliti, assicurando che l'agente abbia la corretta fetta semantica."
        }
    },
    {
        title: { en: "The Human-in-the-Loop", it: "L'Umano nel Ciclo" },
        content: {
            en: "Agentic Engineering is not about replacing the developer, but about elevating them to the role of a Technical Director. Verification is the new implementation. Instead of writing code, we spend energy on rigorous testing and architectural validation. We must develop a 'smell' for AI-generated bugs—those subtle logical flaws that look correct but fail in edge cases. Intuition is the ultimate safety filter.",
            it: "L'Ingegneria Agentica non riguarda la sostituzione dello sviluppatore, ma l'elevazione al ruolo di Direttore Tecnico. La verifica è la nuova implementazione. Invece di scrivere codice, spendiamo energia in test rigorosi e validazione architetturale. Dobbiamo sviluppare un 'fiuto' per i bug generati dall'IA: quei sottili difetti logici che sembrano corretti ma falliscono nei casi limite. L'intuizione è il filtro di sicurezza definitivo."
        }
    },
    {
        title: { en: "The Death of Boilerplate", it: "La Morte del Boilerplate" },
        content: {
            en: "Standard CRUD operations and layouting are now solved problems. Vibe Coding eliminates the 'boilerplate tax'. By leveraging agents for repetitive plumbing, engineers can focus on 'Core Logic'—the unique value proposition. The cost of building a feature is dropping, but the value of original architectural thinking is skyrocketing. Creativity and strategic thinking are the only bottlenecks remaining.",
            it: "Le operazioni CRUD standard e il layout sono ormai problemi risolti. Il Vibe Coding elimina la 'tassa sul boilerplate'. Sfruttando gli agenti per il lavoro ripetitivo, gli ingegneri possono concentrarsi sulla 'Logica Core'. Il costo di costruzione di una funzionalità sta crollando, ma il valore del pensiero architettonico originale sta salendo alle stelle. La creatività e la strategia sono gli unici colli di bottiglia rimasti."
        }
    }
];

const uiStrings = {
    prev: { en: "Previous", it: "Precedente" },
    next: { en: "Next", it: "Successivo" }
};

let currentLang = 'en';
let currentPage = 0;

function setLang(lang) {
    currentLang = lang;
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-it').classList.toggle('active', lang === 'it');
    
    document.getElementById('btn-prev').textContent = uiStrings.prev[lang];
    document.getElementById('btn-next').textContent = uiStrings.next[lang];
    
    renderBook();
}

function renderBook() {
    const book = document.getElementById('book');
    book.innerHTML = '';
    
    data.forEach((item, index) => {
        const page = document.createElement('div');
        page.className = 'page';
        if (index < currentPage) page.classList.add('flipped');
        page.style.zIndex = data.length - index;
        
        let html = `<div class="paper-texture"></div><div class="page-content">`;
        
        if (item.type === "cover") {
            html += `<h1>${item.title[currentLang]}</h1><p style="text-align:center; font-weight:bold; margin-top:50px; opacity:0.8">${item.content[currentLang]}</p>`;
        } else {
            html += `<h2>${item.title[currentLang]}</h2><p>${item.content[currentLang]}</p>`;
        }
        
        html += `</div><div class="page-num">${index}</div>`;
        page.innerHTML = html;
        
        page.addEventListener('click', () => {
            if (index === currentPage) nextPage();
            else if (index === currentPage - 1) prevPage();
        });

        book.appendChild(page);
    });
}

function nextPage() {
    const pages = document.querySelectorAll('.page');
    if (currentPage < pages.length) {
        pages[currentPage].classList.add('flipped');
        currentPage++;
    }
}

function prevPage() {
    const pages = document.querySelectorAll('.page');
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove('flipped');
    }
}

renderBook();