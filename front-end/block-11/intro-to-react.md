# Introdução à React

## Introdução - Front-end

O **React** é um biblioteca **Javascript** de
criação de interfaces, foi criada e mantida pelo próprio Facebook.

Até o momento utilizamos tecnologias como **HTML**, **CSS** e **Javascript**.

* HTML - permite estruturar páginas web.
* CSS - permite acrescentar estilo as páginas
* Javascript - permite acrescentar lógica e a capacidade do usuário de interager com a página.

## Vantagem de utilizar React

* Escrever menos código para criar páginas mais
complexas. (produtividade).

## Tecnologias do ecossistema React

* React
* JSX
* ES6
* Webpack
* Flux/Redux
* axios/fetch
* Jest/Mocha

Essas são algumas tecnologias do ecossistema React que permitem  criar aplicações Web de
alta qualidade.

Desenvolver uma aplicação Web sem biblioteca/framework algum é um problema que afeta a produtividade de um time de desenvolvimento.

## Gerenciador de pacotes

O que é o NPM ?

A sigla NPM refere-se a node package manager (Gerenciador de pacotes do Node). Pacotes do 
node são uma série de códigos prontos (pacotes) desenvolvidos por outras pessoas desenvolvedoras com a finalidade de resolver
algum problema através de Javascript.

Exemplo de pacote do NPM:
UUID - Pacote para gerar ids de forma única.

# Criar um projeto do zero utilizando NPM

### Para criar um projeto do zero com NPM execute o comando:
```javascript
npm init
```
Após o comando é necessário informar algumas 
informações como: nome do projeto, descrição,
número da versão etc...

### Para criar um projeto do zero com NPM através das respostas padronizadas:

Execute o comando:
```javascript
npm init -y
```
Dessa forma as perguntas que são feitas ao utilizar o comando **npm init** já são criadas
com uma resposta padrão.

### Package.json

Ao executar um dos dois comandos acima é gerado
um arquivo chamado **package.json**.

Esse arquivo possui as informações perguntadas
após npm init e outras configurações como "scripts", "dependências", "devDependencies" e etc...

### Instalar um pacote com npm

Para instalar um pacote com npm basta executar:
```javascript
npm install nome_do_pacote ou npm -i nome_do_pacote
```
### node_modules

Pasta que contem todos os pacotes do projeto e suas dependências. É criada após o comando **npm install**.

OBS: Essa pasta não deve ser commitada, e enviada ao repositório remote, então deve ser
adicionada ao arquivo **.gitignore**.

### NPM VS NPX

O NPM instala o pacote no projeto como dito anteriormente.

O NPX não instala o pacote, apenas executa o
comando de um pacote sem instalá-lo. Exemplo **create-react-app.

### Criando um aplicativo pré-definido react com npx

```javascript
npx create-react-app nome_projeto
```
O create-react-app é um pacote que cria todos os arquivos necessários para uma aplicação React, ele é executado apenas uma vez no projeto.

### Criando um projeto React

Execute os comandos abaixo:

```javascript
npx create-react-app my-app

cd my-app

npm start
```
Após o npm start terminar de carregar, abrirá uma aba no navegador com a aplicação default React sendo executada.

### Conceitos iniciais

O React surgiu de uma necessidade do Facebool, onde o código era grande e de difícil manutenção. O react veio como uma solução escalável e eficiente desenvolvido pelas pessoas engenheiras do Facebook. Com o tempo o React tornou-se open-source e cresceu na comunidade e grandes empresas passaram a utilizá-la.

### História do React

[A História do React](https://medium.com/@ppternunes/a-hist%C3%B3ria-do-react-ba346c416fe1) escrito por [Patrick Morais](https://medium.com/@ppternunes).

Hoje o React é uma das principais bibliotecas Javascript para construção de interfaces de usuário. O time de desenvolvimento do Facebook o criou com objetivo de organizar, componentizar tornando
muito mais eficiente partes da aplicação que a utilizam.

O React tem como ideia principal dividir a aplicação em pequenos blocos, reutilizáveis ou não, que podem fazer a gestão das suas próprias
informações através do seu estado (reagir a eventos, interaçõesm dados e etc). Assim toda vez que houver uma mudança de estado, o React renderiza novamente esse componente sem precisar atualizar outros blocos (componentes).

A componentização permite utlizar funções específicas, estilizaçõesm teste e outras tecnologias no exato loccal em que ela será utilizada, permitindo refatorações simples, específicas e fácil de encontrar.

### Ecossistema React

**JSX**

JSX é a sigla para Javascript Syntax Extension, é uma extensão de sintaxe para Javascript. Sua utilização é recomendada pela documentação
React, pois demonstra como a interface deverá se comportar, de forma lógica e descritiva.


Exemplo:
```javascript
const element = <h1>Hello, Tryber</h1>;
```
A construção de um elemento JSX é bem parecido com um elemento HTML, com
pequenas diferenças para não haver conflito entre o HTML e JS. Um exemplo disso é a utilização de **className** ao invés de class que é uma palavra reservada Javascript.

Mesmo resultado sem JSX

```javascript
//createElement recebe como paramêtro um componente, um objeto com as props, e conteúdo a ser encapsulado
const element = React.createElement("h1", null, "Hello, world");
```
Uma aplicação toda desenvolvida dessa forma daria muito trabalho por
isso o JSX. Em uma aplicação React o JSX não é obrigatório mas diminui
a complexidade da criação de uma aplicação.

### Incorporando expressões no JSX

Por ser código Javascript, o JSX permite injeções de algoritmos dentro da estrutura HTML. É possível que se aplique diretamente na estrutura códigos que renderizarão outras diversas expressões, exemplo:

```javascript
const name = 'Bruce';
const element = <h1>Hello, {name}</h1>;

//Incorporando uma função
function fullName (name, lastName) {
  return `${name} ${lastName}`;
}
const element = <h1>Hello, {fullName(name, "Wayne")}</h1>;

```

### ReactDOM.render

O ReactDOM.render é o responsável por renderizar e atualizar seu código
dentro do HTML, exibindo seus elementos React.

Todas as vezes que alguma alteração de código é feita, seja através de uma função ou interação de quem usa, o React DOM compara o elemento novo
e seus elementos filhos com os anteriores e aplica mudanças somente onde
é necessário.

Diferente de elementos DOM nativos do navegador, elementos React são objetos simples e utilizam menos recursos. Pela atualização precisa do
DOM, e pela sua composição, o React apresenta grandes avanços na velocidade de processamento.

### CSS e Import

O CSS no React é assim como se fazia no HTML você deve criar um arquivo
.css para manter todo o seu código CSS então deverá importá-lo onde você
deseja utiliza-lo incluindo suas classes e ids.

### Criação de Componentes funcionais e de classe

Como já dito o React permite criar uma tela como uma junção de diferentes pequenas peças reutilizáveis e com lógica isolada, os
componentes.

Esses componentes podem ser criados de duas formas:mediante funções ou
com a criação de classes.

As classes surgiram como um 'açucar sintático' no ES2015 (ES6) sobre funções, dando a possibilidade de criar novos objetos.

### Métodos

Uma classe pode possuir métodos, que são ações que toda entidade criada a partir de uma classe pode realizar.

Podemos atribuir vários métodos - os quais podem, inclusive, alterar o próprio estado do objeto. 

Em React, classe é uma das formas de renderizar os componentes na página. Então quando um componente precisa ser alterado, utilizamos componentes de classe, para que possamos utilizar seus estados para
realizar essas alterações.

### Ideia Central de Classes

* Organizar código - Agrupar funções que fazem sentido juntas.
* No React, uma classe será um elemento da tela ou seja um componente.

### Classes e React

A principal diferença entre o uso de componentes por classe e o uso de componentes por função é o fato de componentes gerados por classe tem acesso a métodos e ao estado próprios de qualquer componente React.

Exemplo: Método **render()** que permite renderizar todo o conteúdo criado na tela, os quais são acessíveis somente por componentes criados
por classe na maior parte das versões do React.

OBS: Componentes de função não podem alterar seus estados.

Componentes de classe podem alterar seus estados por meio de métodos específicos do React.