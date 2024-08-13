# Projeto de Pagamento com Stripe e Vue.js

Este projeto é uma implementação simples de um gateway de pagamento usando Stripe e Vue.js. Ele permite que os usuários realizem uma assinatura, com uma interface amigável e feedback visual enquanto a transação é processada.

## Tecnologias Utilizadas

- **Vue.js**: Framework JavaScript progressivo para construção de interfaces de usuário.
- **@vue-stripe/vue-stripe**: Biblioteca para integração do Stripe com Vue.js.
- **Pico CSS**: Utilizado para estilização da interface.
- **Stripe**: Plataforma para processamento de pagamentos.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- Node.js (>= 12.x)
- NPM (>= 6.x) ou Yarn (>= 1.x)
- Conta no Stripe para obter suas chaves de API.

## Instalação

1. Clone este repositório para o seu ambiente local:

   ```
   git clone https://github.com/flavia-vic/Pagamento-Vue-Stripe.git
    ```
2. Navegue até o diretório do projeto:

    ```
   cd nome-do-repositorio
    ```


3. Instale as dependências:

   ```
   npm install
    ```
    ou
   ```
   yarn install
    ```



## Executando o projeto

para iniciar o servidor de desenvolvimento, execute;

    
    npm run serve

ou

    yarn serve




A aplicação estará disponível em http://localhost:8080.

## Estrutura do Projeto

- src/components/home.vue: Componente principal que lida com o pagamento usando Stripe.
- public/assets: Diretório onde estão armazenados os GIFs e outras mídias usadas no projeto.
- styles: O estilo é aplicado diretamente nos componentes com style scoped.

## Personalização
- Estilos: O projeto utiliza Pico CSS para uma estilização minimalista e moderna. Você pode alterar as cores e estilos no arquivo .vue para adequá-lo ao seu branding.
- GIFs: Substitua os GIFs em src/assets por suas próprias mídias, se desejar.