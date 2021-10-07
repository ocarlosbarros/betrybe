# PropTypes

Outro importante fundamento do React é a **checagem de tipos**. A checagem de tipos ajuda
previnir cenários onde se precise definir props de determinados tipos para utilização sem
de componentes sem quebra da aplicação caso o tipo esteja incorreto.

A checagem de tipos verifica os tipos das props passadas para um componente durante o desenvolvimento
e levanta um warning se algo não estiver como planejado. Essa verificação previne inúmeros erros,
economizando tempo de desenvolvimento.

Exemplo de uso de PropTypes

```javascript
 Greeting.propTypes = {
  name: PropTypes.string,
  lastName:PropTypes.string,
}
```
Passo a passo para utilização de PropTypes

1. Importa-lo para utilização no componente.

```javascript
import PropTypes from 'prop-types';
```
2. Antes do export adicionar a estrutura:

```javascript
  Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};
```
É nessa estrutura que ocorre a checagem das props. Para isso basta pegar o nome da prop
que queremos tipar,e usar a sintaxe de indentificação apropriada.

Caso no momento de desenvolvimento alguma prop esteja com tipo inválido, o console disparará
um aviso, facilitando o processo de debugging.

Existem casos no qual as props são essenciais para o bom funcionamento do componente,é importante
acrescentar o **.isRequired** do inglês "é obrigatório" após a definição do tipo.

```javascript
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
```
Assim, sempre que o componente for renderizado sem uma das props ou com alguma do tipo errado, um aviso será disparado.

## Diferentes validadores PropTypes

[Validadores Proptypes](https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html#proptypes)

