# [gh-integration](https://alanschlindvein.github.io/gh-integration/)

Web app desenvolvido em [React](https://facebook.github.io/react/), integrando-se com a
[API do Github](https://developer.github.com/v3/),
para consultar repositórios de usuário e realizar anotações sobre o mesmo.

[Cliquei aqui para acessa-lo](https://alanschlindvein.github.io/gh-integration/)

## Requisitos do usuário
* Como usuário eu quero pesquisar por um username do github ver o resultado na
mesma página;
* Como usuário eu quero conseguir fazer paginação do resultado da pesquisa;
* Como usuário eu quero realizar anotações sobre um usuário;

## Arquitetura

O projeto foi desenvolvido utilizando a biblioteca [React](https://facebook.github.io/react/),
 por ser uma biblioteca que é consolidada no mercado e possuir bastante contribuidores.

 Foi utilizando o
[create-react-app](https://github.com/facebook/create-react-app) para criar a sua estrutura inicial.

Este generator já traz algumas outras bibliotecas configuradas no projeto como o [Webpack](https://webpack.js.org/)
para gerenciar os módulos utilizados no app, o [Babel](https://babeljs.io/)
para pode compilar os códigos em [ES6](http://es6-features.org).

Foi utilizado a biblioteca [react-redux](https://github.com/reactjs/react-redux)
para facilitar a comunicação do [React](https://facebook.github.io/react/)
com o [Redux](http://redux.js.org/), que é responsável por gerenciar os estados da aplicação,
como por exemplo, as ações executadas nos componentes do React. Para a criação de actions
foi utilizada a lib [redux-actions](https://github.com/redux-utilities/redux-actions). Ela facilita 
muito a definição de actions e handlers para os reducers, contribuindo assim para tornar o código mais 
organizado e legível.

Outra biblioteca utilizada para o controle dos dados na aplicação,
foi o [redux-saga](https://github.com/redux-saga/redux-saga), ela facilitou
as chamadas necessárias para recuperar os dados
([Middleware](http://redux.js.org/docs/advanced/Middleware.html))
da API do Github e também do
[localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage)
(onde os livros favoritos foram salvos) nos estados gerenciados pelo react-redux.

Como HTTP Client foi utilizado [axios](https://github.com/axios/axios) pela simplicidade de
sua API e a possibilidade de trabalhar com interceptors.

Outras dependências menores foram utilizadas como:
[classnames](https://github.com/JedWatson/classnames) para aplicar classes.

O [Material-UI](material-ui.com) é uma biblioteca de componentes visuais
desenvolvida em React e implementando as diretrizes do
[Google Material Design](https://material.io/guidelines/).

As customizaões visuais do app, foram escritos utilizando uma estratégia CSS-in-JS com o
[react-jss](https://github.com/cssinjs/react-jss) que realiza a integração com o 
[jss](https://github.com/cssinjs/jss), tornando os arquivos de estilos mais padronizados,
 fáceis de manter e desacoplados.

 O deploy automático se dá pelo uso de [gh-pages](https://github.com/tschaub/gh-pages).

Nos testes unitários, foi utilizado a biblioteca do [jest](https://github.com/facebook/jest) já
configurada pelo gerador.

Clonar ou baixar o projeto do Github.
```
    git clone https://github.com/alanschlindvein/gh-integration.git
```
Após clonar ou baixar, acessar a pasta do projeto.

Instalar as dependências do projeto.
```
    yarn [npm install]
```

Executar o comando para subir um servidor em [localhost:3000](http://localhost:3000/).
```
    yarn start [npm run start]
```

Executar a tarefa para rodar os testes.
```
    yarn test [npm run test]
```

Executar a tarefa para gerar o build do projeto (gerado dentro da pasta **build**).
```
    yarn build [npm run build]
```
