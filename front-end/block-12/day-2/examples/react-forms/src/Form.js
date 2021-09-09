import React, { Component }  from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
  
  this.state = {
    estadoFavorito:'',
    nome:'',
    email:'',
    idade:0,
    vaiComparecer:false,
    palavraChaveFavorita:''
  }
}
 handleTextAreaChange(event) {
  console.log(event.target);
}

  render(){
    return (
      <div>
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismo</h1>
        <form className='form'>
          <label>
            Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem sabe!
            <textarea name='estadoFavorito' value={} onChange={this.handleTextAreaChange} />
          </label>
          <label>
            Email
            <input name='email' type="email"  />
          </label>

          <label>
            Nome
            <input name='nome' type="text"  />
          </label>

          <label>
            Idade
            <input name='idade' type="number"  />
          </label>

          <label>
            Vai começar à conferência?
            <input name='vaiComparecer' type="checkbox"  />
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select name="palavraChaveFavorita">
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;