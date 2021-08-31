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
