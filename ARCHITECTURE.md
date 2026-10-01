# Arquitetura do Projeto - Escala ESI

## Visão Geral da Arquitetura

O projeto **Escala ESI** adota uma arquitetura frontend modular, limpa e previsível baseada em **React 19 + TypeScript + Vite + Tailwind CSS v4**. 

A estrutura foi projetada para eliminar o acoplamento excessivo que costuma acompanhar exportações automáticas de ferramentas como o Figma Make, sem introduzir camadas artificiais de complexidade ou overengineering.

---

## Estrutura de Diretórios

```text
src/
├── assets/                  # Arquivos estáticos (imagens, ícones SVG, fontes)
│   ├── icons/
│   └── images/
│
├── components/              # Componentes React reutilizáveis
│   ├── layout/              # Componentes estruturais de navegação e layout
│   │   ├── TabBar.tsx       # Barra de navegação inferior (tabs)
│   │   ├── DemoNav.tsx      # Gaveta flutuante de navegação rápida para prototipação
│   │   └── index.ts
│   │
│   └── ui/                  # Componentes visuais atômicos e genéricos de interface
│       ├── AppBar.tsx       # Barra de topo com botão voltar e título
│       ├── Avatar.tsx       # Avatar com patente e iniciais
│       ├── Badge.tsx        # Chips de código de serviço e badges de status
│       ├── Button.tsx       # Botões primário, secundário e destrutivo
│       ├── Card.tsx         # Contêiner em card com suporte a clique
│       ├── Icon.tsx         # Renderizador de ícones SVG vetoriais
│       ├── Input.tsx        # Campos de texto (Field) e área de texto (Textarea)
│       ├── Segmented.tsx    # Seletor segmentado estilo iOS
│       ├── Skeleton.tsx     # Elemento de carregamento animado (shimmer)
│       ├── SwitchToggle.tsx # Alternador tipo switch
│       ├── TimelineStep.tsx # Item de linha do tempo de aprovações
│       └── index.ts
│
├── constants/               # Constantes e tokens visuais
│   └── theme.ts             # Paleta de cores (C), cores por tipo de serviço e helpers
│
├── data/                    # Dados mockados isolados da interface
│   ├── globalSchedule.ts    # Escala geral da companhia
│   ├── notifications.ts     # Lista de notificações e avisos
│   ├── requests.ts          # Solicitações de troca, pernoite e atestados
│   ├── services.ts          # Serviços escalados do militar
│   ├── user.ts              # Dados cadastrais do usuário logado
│   └── index.ts
│
├── pages/                   # Telas e fluxos da aplicação agrupados por domínio
│   ├── FeedbackStates/      # Telas de estados do sistema (Loading, Error, Empty, NoPermission)
│   ├── Home/                # Dashboard inicial e resumo do dia
│   ├── Login/               # Tela de autenticação e recuperação
│   ├── Medical/             # Fluxo de atestado médico (5 etapas) e telas de resultado
│   ├── Notifications/       # Lista de avisos, detalhes e convocação como reserva
│   ├── Overnight/           # Solicitação e confirmação de pernoite
│   ├── Profile/             # Perfil, histórico de serviços e configurações
│   ├── Requests/            # Central de solicitações e histórico detalhado
│   ├── Schedule/            # Escala pessoal (PersonalSched) e global (GlobalSched)
│   ├── ServiceDetail/       # Modal inferior de detalhes do serviço
│   ├── Swap/                # Fluxo de troca de serviço entre militares
│   └── index.ts             # Export centralizado de todas as telas
│
├── types/                   # Tipagens TypeScript compartilhadas
│   └── index.ts             # Definições de telas, rotas, usuário, serviços e solicitações
│
├── utils/                   # Funções utilitárias puras (datas, formatação, validação)
│
├── App.tsx                  # Orquestrador principal da navegação e estado de sessão
├── index.css                # Configurações globais de CSS, fontes e Tailwind CSS v4
├── main.tsx                 # Ponto de entrada do React (ReactDOM.createRoot)
└── vite-env.d.ts            # Declarações de tipos do ambiente Vite
```

---

## Responsabilidade de Cada Pasta

| Pasta | Responsabilidade |
| :--- | :--- |
| `src/assets` | Imagens, logotipos, fontes e ícones estáticos consumidos pela aplicação. |
| `src/components/ui` | Elementos de UI puros, genéricos e sem acoplamento a regras de negócio ou dados mockados específicos (ex: `Button`, `Card`, `Icon`, `Input`). |
| `src/components/layout` | Componentes de casca da aplicação que organizam a navegação (ex: `TabBar`, `DemoNav`). |
| `src/constants` | Valores constantes imutáveis, tokens de design, mapas de cores e códigos militares. |
| `src/data` | Mocks de dados que alimentam a aplicação enquanto o backend não está conectado. |
| `src/pages` | Telas e fluxos da aplicação. Componentes exclusivos de uma tela ficam no diretório da própria página. |
| `src/types` | Interfaces e tipos TypeScript compartilhados entre múltiplos componentes e dados. |
| `src/utils` | Funções utilitárias puras, formatadores de data, helpers matemáticos e validadores. |

---

## Guia Prático para Desenvolvedores

### 1. Onde criar novas páginas?
Crie uma nova subpasta em `src/pages/NomeDaPagina/` com um arquivo `index.tsx`. Se a página contiver sub-componentes exclusivos (que não são compartilhados com o resto do app), crie uma subpasta `components/` dentro dela (como feito em `src/pages/Schedule/components/`). Em seguida, adicione a rota correspondente ao tipo `Screen` em `src/types/index.ts` e exporte-a em `src/pages/index.ts`.

### 2. Onde criar novos componentes?
* **Componente genérico de interface** (ex: Modal, Dropdown, Checkbox): crie em `src/components/ui/` e exporte em `src/components/ui/index.ts`.
* **Componente exclusivo de uma página**: mantenha dentro da pasta da própria página (ex: `src/pages/Schedule/components/PersonalSched.tsx`).
* **Componente de layout global**: crie em `src/components/layout/`.

### 3. Onde colocar dados mockados?
Crie ou edite arquivos dentro de `src/data/` (ex: `src/data/escalas.ts`). Importe os tipos adequados de `@/types` para garantir consistência.

### 4. Onde colocar tipos TypeScript?
Definições compartilhadas de entidades (como `User`, `ServiceItem`, `RequestItem`) devem ficar em `src/types/index.ts`. Tipos locais que pertencem apenas a um componente podem ficar no próprio arquivo do componente.

### 5. Onde colocar assets?
Coloque imagens em `src/assets/images/` e ícones adicionais em `src/assets/icons/`.

---

## Como a Aplicação está Organizada Atualmente

* **Navegação**: O gerenciamento de rotas e telas ativas é centralizado no `App.tsx` através de uma pilha de navegação simples baseada em estado (`stack`) e abas inferiores (`activeTab`).
* **Isolamento de Estilos**: As cores e temas seguem a paleta centralizada em `src/constants/theme.ts`, complementada pelos utilitários do Tailwind CSS v4.
* **Componentização**: Todas as telas exportadas originalmente em um único arquivo foram decompostas em componentes autônomos com propriedades (`props`) tipadas.

---

## Preparação para Futuro Backend

A transição dos dados mockados para um backend real poderá ser feita de forma direta e sem refatoração do layout:

1. **Camada de Serviços / API Client**:
   Futuramente, crie a pasta `src/services/` (ou `src/api/`) contendo os métodos de requisição HTTP (ex: `servicesApi.ts`, `requestsApi.ts`, `authApi.ts`).
2. **Substituição dos Mocks**:
   Em vez de importar constantes de `src/data/`, os componentes ou hooks farão chamadas assíncronas aos serviços de API, utilizando as mesmas tipagens já estabelecidas em `src/types/`.
3. **Estado Global / Server State**:
   Caso necessário, bibliotecas como TanStack Query (React Query) ou Zustand poderão ser plugadas diretamente nos componentes existentes sem necessidade de reescrever a hierarquia de componentes.
