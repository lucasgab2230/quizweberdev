const flashcard = document.getElementById("flashcard");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const questionParagraph = document.querySelector(".question__paragraph");
const answerParagraph = document.querySelector(".answer__paragraph");
const flipBtn = document.getElementById("flip");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const cards = [
    {
        question: "O que é o DOM?",
        answer: "DOM (Document Object Model) é uma interface que representa documentos HTML como objetos manipuláveis via JavaScript."
    },
    {
        question: "Qual a diferença entre == e === em JavaScript?",
        answer: "`==` compara valores com conversão de tipo. `===` compara valores e tipos, sem conversão."
    },
    {
        question: "Para que serve o Flexbox no CSS?",
        answer: "Flexbox é um modelo de layout unidimensional que facilita o alinhamento e distribuição de elementos em containers."
    },
    {
        question: "O que é Hoisting em JavaScript?",
        answer: "Hoisting é o comportamento de mover declarações para o topo do escopo antes da execução do código."
    },
    {
        question: "O que é o event bubbling no JavaScript?",
        answer: "Event bubbling é o processo em que um evento começa no elemento mais interno e se propaga para os elementos pais."
    },
    {
        question: "Qual a diferença entre var, let e const?",
        answer: "`var` tem escopo de função, `let` e `const` têm escopo de bloco. `const` não pode ser reatribuído."
    },
    {
        question: "O que é responsividade?",
        answer: "Responsividade é a capacidade de um site se adaptar a diferentes tamanhos de tela e dispositivos."
    },
    {
        question: "Como funciona o modelo de caixa (box model) no CSS?",
        answer: "O box model inclui: content, padding, border e margin. Define como os elementos são renderizados e espaçados."
    },
    {
        question: "O que são pseudo-classes no CSS?",
        answer: "Pseudo-classes são palavras-chave que especificam um estado especial de um elemento, como `:hover` e `:focus`.",
    },
    {
        question: "O que é o 'this' em JavaScript?",
        answer: "`this` refere-se ao contexto de execução atual. Pode variar dependendo de como a função é chamada."
    },
    {
        question: "Qual a diferença entre null e undefined?",
        answer: "`undefined` é quando uma variável foi declarada, mas não atribuida. `null` é um valor atribuído que representa ausência intencional."
    },
    {
        question: "O que é uma função de callback?",
        answer: "Uma função de callback é passada como argumento para outra função e executada após a conclusão de uma operação."
    },
    {
        question: "O que é o CSS Grid?",
        answer: "CSS Grid é um sistema de layout bidimensional que permite organizar elementos em linhas e colunas."
    },
    {
        question: "Como evitar problemas de CORS?",
        answer: "CORS pode ser evitado configurando corretamente os headers no servidor ou usando proxies durante o desenvolvimento."
    },
    {
        question: "O que é uma SPA (Single-Page Application)?",
        answer: "SPA é uma aplicação web que carrega uma única página e atualiza o conteúdo dinamicamente sem carregar."
    },
    {
        question: "Qual a diferença entre GET e POST?",
        answer: "`GET` envia dados via URL, usado para leitura. `POST` envia dados no corpo da requisição, usado para criação ou envio seguro."
    },
    {
        question: "O que é debounce e throttle?",
        answer: "`Debounce` limita a execução de uma função até que um tempo tenha passado sem chamadas. `Throttle` limita a execução a uma vez sem intervalo de tempo."
    },
    {
        question: "O que é o atributo `defer` em uma tag `<script>`?",
        answer: "`defer` faz com que o script seja carregado em paralelo e executado após o carregamento do HTML."
    },
    {
        question: "Como funciona o localStorage?",
        answer: "`localStorage` permite armazenar dados no navegador de forma persistente, mesmo após o fechamento da aba."
    },
    {
        question: "O que é acessibilidade (ally) na Web?",
        answer: "Acessibilidade é o conjunto de práticas que tornam a Web utilizável por pessoas com deficiências, como uso de ARIA, contraste e navegação por teclado."
    },
];

let currentIndex = 0;

function updateCard() {
    const currentCard = cards[currentIndex];
    questionParagraph.textContent = `${currentCard.question}`;
    answerParagraph.textContent = `${currentCard.answer}`;
    flashcard.classList.remove("flipped");
    
    // Garante que o conteúdo seja exibido completamente após a atualização
    setTimeout(() => {
        // Verifica se o conteúdo excede a altura do cartão
        const frontContent = document.querySelector(".front .card-content");
        const backContent = document.querySelector(".back .card-content");
        
        // Ajusta a altura do conteúdo se necessário
        if (frontContent.scrollHeight > frontContent.clientHeight) {
            frontContent.style.overflowY = "auto";
        }
        
        if (backContent.scrollHeight > backContent.clientHeight) {
            backContent.style.overflowY = "auto";
        }
    }, 100);
}

flipBtn.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCard();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCard();
});

updateCard();