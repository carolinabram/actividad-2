import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';

class App extends Component {
  state = {
    counting: 0,
    validation: '',
    chars: [],
    textbox:''
  } 

  deleteCharHandler = (event,charIndex) => {
    let chars = [...this.state.chars];
    chars.splice(charIndex,1);
    const text = chars.join('');
    this.setState({ chars: chars, textbox: text });
  }

  textChangedHandler = (event) => {
    let arreglo = [];
    let validate = '';
    const name = event.target.value;
    //Longitud
    if (name.length > 5) {
      validate = "Texto muy largo" ;
    } else {
      validate = "Texto muy corto";
    }
    //Haciendo arreglo
    for (let i=0;i<=name.length;i++) {
      arreglo[i] = name.slice(i,i+1);
    }
    arreglo = arreglo.filter(Boolean);
    this.setState({ textbox: name,
                    chars: arreglo,
                    counting: name.length,
                    validation: validate });
  }

  render() {
    let characters = null;
    const style = {
      display:'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    }

    if (this.state.counting > 0) {
      characters = (
          <div>
            {this.state.chars.map((character, index) => { //dos parrafos
            return <CharComponent key={index} char={character} estilo={style} click={(event) => this.deleteCharHandler(event,index)}/>
            })}
          </div>
      );
    }

    return (
      <div className="App">
        <input type="text" onChange={this.textChangedHandler} value={this.state.textbox}/><label>{this.state.counting}</label>
        <ValidationComponent message={this.state.validation}/>
        {characters}
      </div>
    );
  }
}

export default App;
