# Componentes React

Componentes são a base de toda aplicação React. Eles permitem segmentar uma página web em
blocos de código independentes e reutilizáveis, além de tornar o ambiente de desenvolvimento
local mais organizado.

Componentes React são funções ou classes Javascript que podem aceitar parâmetros, chamados
de props (properties), e retornam elementos React responsáveis por determinarem o que
será renderizado na tela.

Existem duas maneiras de se definir um componente:

1. Como função Javascript

```javascript
function Greeting(props){
    return (<h1>Hello,{porps.name}</h1>);
}

export default Greeting;
```
2. Como classe

```javascript
import React from 'react';
class Greeting extends React.Component {
    render(){
      return (<h1>Hello, {this.props.name}</h1>);
    }
}
export default Greeting;
```
Ambos os métodos são equivalentes, tanto função quanto a classe possuem recursos adicionais.

Analisando o código acima, temos:

1. A declaração de um componente chamado Greeting.
2. O componente Greeting herda da classe Component da biblioteca react.
3. O componente Greeting descreve o que vai ser mostrado para quem usar a aplicação,
declarado no método **obrigatório** render. Nesse caso Greeting retorna 
```javascript
<h1>Hello, {this.props.name}</h1>
```
4. O componente Greeting possui como propriedade um **objeto** chamado **props**, contendo
todos os dados passados como parâmetro na hora de chamar o componente. Ao chamar
```javascript
<Greeting name="Diana Prince"> faz com que o componente tenha uma prop { name: 'Diana Prince'}.
```
5. Exportamos o componente Greeting para ser usado em outras partes da aplicação.

## Props

As props são umas das partes mais importantes de um componente. São por elas que você passa os valores
para o componente, e é como o torna reutilizável em diferentes contextos. São como parâmetros da função.



