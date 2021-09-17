# Componentes com estado e eventos

Um estado representa um momento de um componente dinâmico. Estado é um momento de algo
que pode mudar ao longo do tempo (dinâmico). É uma informação que você quer preservar
enquanto o componente está interagindo com quem usa.

## Introdução ao Estado

### O que é estado ?

É um lugar especial que todo componente tem para armazenar informaçãoes que devem persistir
enquanto a tela não for fechada ou atulizada.
 
## Introdução aos eventos

Eventos são como os eventListeners estudados em Javascript. 

Ver exemplo **fancy-buttons**.

## Vinculando funções à classe com **this** e **bind** no **constructor** 

**this**
    Objeto Javascript que representa determinada classe (componente) e tudo que ele tem. Ao 
especificar o this o React procura o método dentro da classe.

**constructor**
    É uma função que toda classe Javascript possuí. Para redeclarar (sobrescrever) o constructor e acrescentar lógicas extendidas utilizamos dentro do constructor o método super **super**.

Exemplo:
```javascript
    constructor(){
    super();//Traz características do elemento pai (Herança) extends - React - Component
    //Lógica extendida (sobreescrita)
    console.log('Sobrescrevendo o constructor');
}
```
**Problema do this**
    Como limitação técnica do Javascript por não ter sido construído para utilizar classes (novidade do ES6 - 2015), devemos utilizar o **bind()** para que a lógica de uma classe funcione no Javascript.

**bind**

Para que o this seja implementado de forma correta utilizamos a função bind para que dentro das funções
seja possível acessar o **this.props** e/ou **this.state**.

```javascript
    this.handleClick = this.handleClick.bind(this);//no constructor,pois o constructor conhece a classe e assim o this.
```
Exemplo completo:

```javascript
    constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
}
```
## Estado

Exemplo de aplicação utilizando estado Ver exemplo **fancy-buttons-state**

**NUNCA** se deve atribuir valores ao estado diretamente com **this.state**. O
estado é atualizado de forma assíncrona pelo React, garantindo performance. Deve-se
atualizar o estado através da função **this.setState(novoObjetoQueRepresentaOEstado).**

### Como eu atualizo meu estado com base no estado anterior? 

Utilizando uma callback dentro da função setState. Exemplo:

```javascript
    this.setState((estadoAnterior, _props) => ({
     numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    })
```
### Passando no elemento, um evento passando um parâmetro

Utilize a sintaxe:

```javascript
<button onClick={() => this.minhaFuncao('meu parametro')}></button>
```
Basicamente, substituir a função do evento por uma chamada a função utilizando também callback.

## State vs Props

* props são uma forma de passar dados de pai para filho.
* state é reservado para dados que o componente controla.

O estado do componente, deve servir para guardar valores do Componente que mudam com o uso do mesmo. 

As props são valores fixos que um componente recebe e não altera.

Pelos princípios do React você nunca deve tentar alterar o que um componente recebe como props como no exemplo abaixo
 
```javascript
this.props.name = 'novo nome';
```