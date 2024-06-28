# Tech Heim

Este é um projeto de uma loja online de tecnologia, desenvolvido utilizando tecnologias modernas para oferecer uma experiência de compra eficiente e segura. Abaixo estão detalhadas as tecnologias utilizadas no frontend, backend e no processo de deploy deste projeto.

## 🛠️ Tecnologias Utilizadas:

### Frontend:
- **Next.js**: Framework React para renderização do lado do servidor.
- **TypeScript**: Superset JavaScript que adiciona tipagem estática ao código.
- **Shadcn UI**: Biblioteca de componentes para React com foco em acessibilidade.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e escalável.
- **React Hook Form**: Biblioteca para gerenciar formulários no React.
- **Zod**: Biblioteca para validação de dados em TypeScript.
- **Clerk**: Para autenticação e gestão de sessões de usuário.

### Backend:
- **Next.js**: Utilizado também no backend para aproveitar SSR e API Routes.
- **Prisma ORM**: Interface de banco de dados para TypeScript e JavaScript.
- **PostgreSQL**: Banco de dados relacional, hospedado no Supabase para gerenciamento fácil e escalabilidade.

### Deploy:
- **Vercel**: Plataforma de deploy automático focada em aplicações Jamstack e Next.js.

## Funcionalidades Principais:
- **Autenticação segura**: Utilização do Clerk para login e gestão de sessões de usuário.
- **Gestão de Produtos**: CRUD de produtos utilizando Prisma para interação com PostgreSQL.
- **Carrinho de Compras**: Implementação de funcionalidade de carrinho utilizando React Hook Form para formulários e Tailwind CSS para estilos.
- **Checkout**: Integração de checkout com métodos de pagamento através de APIs externas (não detalhado nas tecnologias, mas integrado no projeto).

## Como Executar Localmente:
1. **Clone o repositório**:
   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências**:
   ```
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   - Renomeie `.env.example` para `.env.local` e preencha com suas variáveis de ambiente necessárias, como chaves de API, URLs, etc.

4. **Inicie o servidor de desenvolvimento**:
   ```
   npm run dev
   ```

5. **Acesse a aplicação**:
   Abra seu navegador e acesse `http://localhost:3000`.

## Estrutura do Projeto

```plaintext
template_next_tailwind/
├── .github/
├── └── dependabot.yml
│   └── workflows/
│       ├── ci.yml     
├── .husky/
│   └── pre-commit
├── .storybook/
│   ├── main.js
│   ├── preview.js
├── public/
├── src/
│   ├── actions/
│   ├── app/
│   ├── components/
│   ├── icons/
│   ├── lib/
│   ├── stories/
│   ├── styles/
│   ├── utils/
├── .dockerignore
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── docker-compose.yml
├── Dockerfile
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── vitest.config.mjs
```

## Configuração e Uso

### Pré-requisitos

- Node.js 20.x
- Docker

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/EvandroCalado/template_next_tailwind.git
   cd template_next_tailwind
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

### Linting

Para rodar o ESLint:

```bash
npm run lint
```

### Testes

Para rodar os testes:

```bash
npm run test
```

### Storybook

Para iniciar o Storybook:

```bash
npm run storybook
```

### Docker

Para construir e rodar a aplicação em um contêiner Docker:

```bash
docker-compose up --build -d
```

Isto rodará a aplicação na porta 3000 do localhost.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
