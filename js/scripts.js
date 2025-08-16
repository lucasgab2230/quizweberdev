const flashcard = document.getElementById("flashcard");
const questionParagraph = document.querySelector(".question__paragraph");
const answerParagraph = document.querySelector(".answer__paragraph");
const flipBtn = document.getElementById("flip");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const cards = [
  { question: "O que é o DOM?", answer: "DOM (Document Object Model) é uma interface que representa documentos HTML como objetos manipuláveis via JavaScript." },
  { question: "Qual a diferença entre == e === em JavaScript?", answer: "`==` compara valores com conversão de tipo. `===` compara valores e tipos, sem conversão." },
  { question: "Para que serve o Flexbox no CSS?", answer: "Flexbox é um modelo de layout unidimensional que facilita o alinhamento e distribuição de elementos em containers." },
  { question: "O que é Hoisting em JavaScript?", answer: "Hoisting é o comportamento de mover declarações para o topo do escopo antes da execução do código." },
  { question: "O que é o event bubbling no JavaScript?", answer: "Event bubbling é o processo em que um evento começa no elemento mais interno e se propaga para os elementos pais." },
  { question: "Qual a diferença entre var, let e const?", answer: "`var` tem escopo de função, `let` e `const` têm escopo de bloco. `const` não pode ser reatribuído." },
  { question: "O que é responsividade?", answer: "Responsividade é a capacidade de um site se adaptar a diferentes tamanhos de tela e dispositivos." },
  { question: "Como funciona o modelo de caixa (box model) no CSS?", answer: "O box model inclui: content, padding, border e margin. Define como os elementos são renderizados e espaçados." },
  { question: "O que são pseudo-classes no CSS?", answer: "Pseudo-classes são palavras-chave que especificam um estado especial de um elemento, como `:hover` e `:focus`." },
  { question: "O que é o 'this' em JavaScript?", answer: "`this` refere-se ao contexto de execução atual. Pode variar dependendo de como a função é chamada." }
];

let currentIndex = 0;

function updateCard() {
  const currentCard = cards[currentIndex];
  questionParagraph.textContent = currentCard.question;
  answerParagraph.textContent = currentCard.answer;
  flashcard.classList.remove("flipped");
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
