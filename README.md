# WeberDevCard - Auxiliar de Entrevistas de Código

WeberDevCard é uma ferramenta abrangente para ajudar desenvolvedores a se prepararem para entrevistas de programação. Possui flashcards para conceitos essenciais e prática do LeetCode com revisão de código por IA.

## Recursos

- **Flashcards**: 50 pares essenciais de P&R para preparação de entrevistas
- **Prática do LeetCode**: 20 problemas selecionados com revisão de código por IA
- **Suporte a Múltiplos Idiomas**: Inglês, Português, Espanhol, Chinês e Japonês
- **Design Responsivo**: Funciona em todos os tamanhos de dispositivos
- **Navegação por Teclado**: Navegação fácil com teclas de seta e barra de espaço

## Stack Tecnológica

- **Frontend**: Next.js 14 (App Router) com TypeScript
- **Estilização**: Tailwind CSS com componentes shadcn/ui
- **Gerenciamento de Estado**: React Context API
- **Animações**: Framer Motion
- **Integração com IA**: Google Gemini API
- **Deploy**: GitHub Pages com GitHub Actions

## Primeiros Passos

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/seu-usuario/weberdevcard.git
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   pnpm install
   \`\`\`

3. Crie um arquivo `.env.local` com sua chave da API do Gemini:
   \`\`\`
   GEMINI_API_KEY=sua_chave_api_aqui
   \`\`\`

4. Execute o servidor de desenvolvimento:
   \`\`\`bash
   pnpm dev
   \`\`\`

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## Deploy

Este projeto está configurado para fazer deploy no GitHub Pages usando GitHub Actions. Simplesmente faça push para a branch principal para acionar o workflow de deploy.

## Saiba Mais

Para aprender mais sobre as tecnologias usadas neste projeto:

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do shadcn/ui](https://ui.shadcn.com/docs)
- [Documentação da API do Google Gemini](https://ai.google.dev/docs)

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT.
