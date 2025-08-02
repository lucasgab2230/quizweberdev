const flashcard = document.getElementById("flashcard");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
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
    }
]