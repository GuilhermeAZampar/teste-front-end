# Teste Técnico Front-End — Econverse

Projeto desenvolvido como parte do processo seletivo para a vaga de **Desenvolvedor Front-End** da Econverse.

O objetivo foi desenvolver uma página de e-commerce com base no layout disponibilizado no Figma, utilizando React, TypeScript e SCSS, além de consumir uma API de produtos.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- SCSS
- React Icons
- Lucide React
- Fetch API
- Git e GitHub

## Funcionalidades

- Header com navegação e campo de pesquisa.
- Banner promocional de Black Friday.
- Seção de categorias de produtos.
- Vitrines com quatro produtos por seção.
- Consumo de API para exibição dos produtos.
- Modal para visualização das informações dos produtos.
- Seções de parceiros e marcas.
- Newsletter com validação dos campos e aceite dos termos.
- Footer com informações institucionais e redes sociais.
- Layout com adaptações para diferentes tamanhos de tela.

**Observação:** o formulário da newsletter realiza validação no front-end, sem integração com um serviço de cadastro.

## Como executar o projeto

### Pré-requisitos

É necessário ter o Node.js e o npm instalados.

### 1. Clonar o repositório

```bash
git clone https://github.com/GuilhermeAZampar/teste-front-end.git
```

### 2. Acessar a pasta

```bash
cd teste-front-end
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar em ambiente de desenvolvimento

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite no terminal.

## Compilação para produção

Execute:

```bash
npm run build
```

O comando realiza a compilação do TypeScript e gera os arquivos otimizados na pasta `dist`.

## Como testar

Para visualizar a versão compilada localmente, execute:

```bash
npm run preview
```

Os testes funcionais podem ser realizados manualmente, verificando:

- Carregamento dos produtos da API.
- Exibição de quatro produtos por vitrine.
- Abertura e fechamento do modal.
- Validação do formulário da newsletter.
- Navegação e apresentação dos componentes.
- Comportamento do layout em diferentes resoluções.

A compilação de produção foi executada com sucesso por meio do comando `npm run build`.

## API utilizada

Os produtos são obtidos a partir do endpoint fornecido para o teste técnico:

https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

Durante o desenvolvimento, foi configurado um proxy no Vite para contornar restrições de CORS no ambiente local.

## Transparência sobre o uso de inteligência artificial

Durante o desenvolvimento deste projeto, enfrentei dificuldades significativas na **estilização com SCSS**, pois CSS e desenvolvimento visual não são atualmente meus pontos mais fortes.

Por esse motivo, utilizei **inteligência artificial como ferramenta de apoio em aproximadamente 90% do trabalho de estilização**, especialmente na criação e nos ajustes das regras SCSS, organização visual dos componentes, espaçamentos e responsividade.

A utilização de IA foi importante para conseguir reproduzir o layout proposto no Figma e compreender melhor a aplicação dos estilos.

Também utilizei o desenvolvimento do projeto como oportunidade para praticar React, TypeScript, componentes, estados, eventos e integração com API.

Considero importante apresentar essa informação de maneira transparente, reconhecendo tanto o auxílio das ferramentas utilizadas quanto os conhecimentos que ainda preciso desenvolver.

Meu principal foco de estudos e desenvolvimento é o **Back-End com Python**, mas tenho interesse em ampliar meus conhecimentos e minha experiência com tecnologias Front-End.

## Repositório

https://github.com/GuilhermeAZampar/teste-front-end

## Autor

**Guilherme Alves Zampar**

Desenvolvedor com foco em Back-End Python e conhecimentos em desenvolvimento Full Stack.